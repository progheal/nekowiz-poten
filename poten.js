//底層素材總和
function costAdd(cost1, cost2)
{
	var len1 = cost1.length;
	var len2 = cost2.length;
	var cost = [];
	for(var i = 0; i < len1 || i < len2; i++)
	{
		if(i >= len1) cost[i] = cost2[i];
		else if(i >= len2) cost[i] = cost1[i];
		else cost[i] = cost1[i] + cost2[i];
	}
	return cost;
}
//底層素材比較
function costCompare(cost1, cost2)
{
	var len1 = cost1.length;
	var len2 = cost2.length;
	for(var i = 0; i < len1 || i < len2; i++)
	{
		if(i >= len1) {if(cost2[i] > 0) return -1;}
		else if(i >= len2) {if(cost1[i] > 0) return 1;}
		else if(cost1[i] < cost2[i]) return -1;
		else if(cost1[i] > cost2[i]) return 1;
	}
	return 0;
}

/*
 前三參數為陣列，對應元素為對應等級之值
 maxPot: 最大潛能值
 evol: 進化材料，以陣列表示相當於底層素材多少；底層素材的 [0] 必定為最低階同卡
       亦即：
       [] 或 [0]：以一般素材進化
       [1]：以最低階同卡進化
       [0,1]：以第一種特殊素材進化 (含被吃的分歧進化)
       [3,1]：分歧進化後互吃的被吃素材，此素材需三張最低階同卡及一張第一種特殊素材
       最大等級不使用, 故陣列大小可少一
 curr: 目前所持，各等級以一陣列表示各張各潛能值各有幾張
 special: 目前所持特殊進化素材，[0] 對應 evol 在 [1] 的素材，依此類推
 targetLv: 目標等級
 targetPot: 目標潛能值

 前兩參數對相同卡片是固定的，例如:
 帕查 maxPot = [1, 2, 3, 4, 7] 
      evolType = [[1], [1], [0,1], [3,0,1]]

 回傳值：物件，內含：
 level: 本卡等級
 pot: 本卡潛能值
 cost: 本卡花費，不含已有的卡; [0] 為一般素材進化次數，[1] 以後為 evol 內容
 source: 來源，為一陣列
         長度 0 = 已有/最底
         長度 1 = 進化, [0] 為進化源，格式同此
         長度 >=2 = 強化, 各元素表示強化來源卡，格式同此
*/
function core(maxPot, evol, curr, special, targetLv, targetPot)
{
	//二維複製
	function TwoDClone(arr){return arr.map(function(v){return v.slice(0);})}
	//更新最佳解
	function updateBest(best, newcost, currleft, sub)
	{
		if(costCompare(newcost, best.cost) < 0)
		{
			best.cost = newcost;
			best.left = TwoDClone(currleft);
			best.source = sub;
		}
	}
	//核心遞迴函式; 使用 maxPot 及 evol 故包在裡面做 closure
	//遞迴呼叫時手動複製 curr 參數做 CBV
	//回傳值: 大函式回傳值, 但新增 left: 剩餘卡片
	function search(targetLv, targetPot, curr)
	{
		var empty = curr.reduce(function(e,v,i){
			return v.reduce(function(ee,vv,ii){
				return ee && (vv == 0 || (i == 0 && ii == 0));
			},e);
		},true);
		//已有的卡直接用
		if(curr[targetLv][targetPot] > 0)
		{
			curr[targetLv][targetPot]--;
			return {level:targetLv, pot:targetPot, cost:[], source:[], left: curr};
		}
		//最低階
		if(targetLv == 0 && targetPot == 0)
		{
			return {level:0, pot:0, cost:[0,1], source:[], left: curr};
		}
		
		//開始搜尋
		var best = {level: targetLv, pot: targetPot, cost: [10000], source: [], left: []};
		//若可以進化而來
		if(targetLv >= 1 && maxPot[targetLv-1] >= targetPot)
		{
			var prev = search(targetLv-1, targetPot, TwoDClone(curr));
			var cost;
			if(costCompare(evol[targetLv-1], []) == 0)
				cost = costAdd(prev.cost, [1]);
			else
				cost = costAdd(prev.cost, [0].concat(evol[targetLv-1]));
			updateBest(best, cost, prev.left, [prev]);
		}
		//搜尋強化合成組合
		var halfPot = Math.floor(targetPot/2);
		for(var big = halfPot; big <= targetPot - 1; big++)
		{
			//先搜小再搜大
			var smallbest = search(targetLv, targetPot - big - 1, TwoDClone(curr));
			var bigbest = search(targetLv, big, TwoDClone(smallbest.left));
			var cost = costAdd(bigbest.cost, smallbest.cost);
			updateBest(best, cost, bigbest.left, [bigbest, smallbest]);
			//若有除了葉素材之外的卡則額外先搜大再搜小
			/*
			XXX: 假設全部的已有材料全部用在同一邊可能會發生錯誤，
			     但目前已有卡片應該沒有會計算錯誤的狀況，
			     因此做為應急處理先使用這種解法。參見 Issue #1。
			*/
			if(!empty)
			{
				bigbest = search(targetLv, big, TwoDClone(curr));
				smallbest = search(targetLv, targetPot - big - 1, TwoDClone(bigbest.left));
				var cost = costAdd(bigbest.cost, smallbest.cost);
				updateBest(best, cost, smallbest.left, [bigbest, smallbest]);
			}
		}
		return best;
	}

	var result = search(targetLv, targetPot, curr);
	var left = result.left;
	flattenEnhance(result);
	// 扣除剩餘素材
	if(result.cost.length > 1) result.cost[1] -= left[0].reduce(function(a,b){return a+b;});
	for(var k = 0; k < special.length && k+2 < result.cost.length; k++)
	{
		result.cost[k+2] -= special[k];
	}
	return result;
}

// 將結果陣列中連續強化的攤平
function flattenEnhance(result)
{
	result.source.forEach(flattenEnhance);
	if(result.source.length >= 2)
	{
		var newsource = [];
		for(var p = 0; p < result.source.length; p++)
		{
			var sub = result.source[p];
			if(sub.source.length >= 2)
				newsource = newsource.concat(sub.source);
			else
				newsource.push(sub);
		}
		result.source = newsource;
	}
}
