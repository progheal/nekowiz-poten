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
		if(i >= len1) return -1;
		else if(i >= len2) return 1;
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
 curr: 目前所持，各等級以一陣列表示各張之潛能值
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
function core(maxPot, evol, curr, targetLv, targetPot)
{
	//DEBUG; var debug = 0;
	//核心遞迴函式; 使用 maxPot 及 evol 故包在裡面做 closure
	function search(targetLv, targetPot, curr)
	{
		//DEBUG; debug++;
		//DEBUG; var localdebug = "[" + debug + "]";
		//DEBUG; console.log(localdebug + "(" + targetLv + ", " + targetPot + ", [" + curr.map(function(v,i){return "["+v.join(",")+"]"}).join(",") + "]");
		//已有的卡直接用
		var p = curr[targetLv].indexOf(targetPot);
		if(p != -1)
		{
			//DEBUG; console.log(localdebug+" Already available!");
			curr[targetLv].splice(p, 1);
			return {level:targetLv, pot:targetPot, cost:[], source:[]};
		}
		//最低階
		if(targetLv == 0 && targetPot == 0)
		{
			//DEBUG; console.log(localdebug+" Lowest level!");
			return {level:0, pot:0, cost:[0,1], source:[]};
		}
		
		//開始搜尋
		var oldcurr = [];
		var costnow = [10000];
		var currleft = [];
		var sub = [];
		for(var k in curr) oldcurr[k] = curr[k].slice(0);
		//若可以進化而來
		if(targetLv >= 1 && maxPot[targetLv-1] >= targetPot)
		{
			//DEBUG; console.log(localdebug+" Try evolution!");
			var hasLowestEvo = (costCompare(evol[targetLv-1], [1]) == 0) && (curr[0].length > 0);
			if(hasLowestEvo)
			{
				//DEBUG; console.log(localdebug+" Lowest self evolution material available!");
				var m = Math.min.apply(null, curr[0]);
				var p = curr[0].indexOf(m);
				curr[0].splice(p, 1);
			}
			var prev = search(targetLv-1, targetPot, curr);
			if(costCompare(evol[targetLv-1], []) == 0)
				costnow = costAdd(prev.cost, [1]);
			else if(hasLowestEvo)
				costnow = prev.cost;
			else
				costnow = costAdd(prev.cost, [0].concat(evol[targetLv-1]));
			sub = [prev];
			for(var k in curr) currleft[k] = curr[k].slice(0);
			for(var k in oldcurr) curr[k] = oldcurr[k].slice(0);
		}
		//搜尋強化合成組合
		var halfPot = Math.floor(targetPot/2);
		for(var big = halfPot; big <= targetPot - 1; big++)
		{
			//DEBUG; console.log(localdebug+" Try split " + targetPot + " into " + big + " + " + (targetPot-big-1) + "!");
			var smallsrc = search(targetLv, targetPot - big - 1, curr);
			//DEBUG; console.log(localdebug+" smallsrc = ");
			//DEBUG; console.log(smallsrc);
			var bigsrc = search(targetLv, big, curr);
			//DEBUG; console.log(localdebug+" bigsrc = ");
			//DEBUG; console.log(bigsrc);
			var cost = costAdd(bigsrc.cost, smallsrc.cost);
			if(costCompare(cost, costnow) < 0)
			{
				//DEBUG; console.log(localdebug+" Smaller!");
				costnow = cost;
				currleft = [];
				for(var k in curr) currleft[k] = curr[k].slice(0);
				sub = [bigsrc, smallsrc];
			}
			for(var k in oldcurr) curr[k] = oldcurr[k].slice(0);
		}
		for(var k in currleft) curr[k] = currleft[k].slice(0);
		return {level:targetLv, pot:targetPot, cost:costnow, source:sub};
	}

	var result = search(targetLv, targetPot, curr);
	flattenEnhance(result);
	return result;
}

// 將結果陣列中連續強化的攤平
function flattenEnhance(result)
{
	for(var p = 0; p < result.source.length; p++)
	{
		flattenEnhance(result.source[p]);
	}
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
