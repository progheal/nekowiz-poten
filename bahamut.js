/* 神龍降臨特殊計算程式 */

bahamut_data = [
	/*  0 */ {maxPot: 1, cost: [0,0,0,1], evo: []},
	/*  1 */ {maxPot: 1, cost: [0,0,0,2], evo: [[0,0]]},
	/*  2 */ {maxPot: 2, cost: [0,0,0,3], evo: [[1,0]]},
	/*  3 */ {maxPot: 1, cost: [0,0,1],   evo: []},
	/*  4 */ {maxPot: 1, cost: [0,0,2],   evo: [[3,3]]},
	/*  5 */ {maxPot: 2, cost: [0,0,3],   evo: [[4,3]]},
	/*  6 */ {maxPot: 1, cost: [0,1],     evo: []},
	/*  7 */ {maxPot: 1, cost: [0,2],     evo: [[6,6]]},
	/*  8 */ {maxPot: 2, cost: [0,3],     evo: [[7,6]]},
	/*  9 */ {maxPot: 2, cost: [0,0,3,3], evo: [[2,5],[5,2]]},
	/* 10 */ {maxPot: 2,                  evo: [[9,8]]},
	/* 11 */ {maxPot: 3,                  evo: [[10,-1]]},
	/* 12 */ {maxPot: 4,                  evo: [[11,-1]]},
	/* 13 */ {maxPot: 5,                  evo: [[12,-1]]},
	/* 14 */ {maxPot: 2,                  evo: [[8,9]]},
	/* 15 */ {maxPot: 3,                  evo: [[14,-1]]},
	/* 16 */ {maxPot: 4,                  evo: [[15,-1]]},
	/* 17 */ {maxPot: 5,                  evo: [[16,-1]]},
];

/*
 * 入口
 */
function bahamut(lowid, curr, special, target, pot)
{
	var currAll = [];
	if(lowid == 1231) // 龍王
	{
		currAll.push(curr[0]);
		currAll.push(curr[1]);
		currAll.push(curr[2]);
		currAll.push(curr[3]);
		currAll.push(curr[4]);
		currAll.push(curr[5]);
		currAll.push([special[0],0]);
		currAll.push([special[1],0]);
		currAll.push([special[2],0,0]);
		currAll.push(curr[6]);
		currAll.push(curr[7]);
		currAll.push(curr[8]);
		currAll.push(curr[9]);
		currAll.push(curr[10]);
		currAll.push([0,0]);
		currAll.push([0,0,0]);
		currAll.push([0,0,0,0]);
		currAll.push([0,0,0,0,0]);
		realTarget = [0,1,2,3,4,5,9,10,11,12,13][target];
	}
	else // 龍妃
	{
		currAll.push([special[0],0]);
		currAll.push([special[1],0]);
		currAll.push([special[2],0,0]);
		currAll.push([special[3],0]);
		currAll.push([special[4],0]);
		currAll.push([special[5],0,0]);
		currAll.push(curr[0]);
		currAll.push(curr[1]);
		currAll.push(curr[2]);
		currAll.push([special[6],0]);
		currAll.push([0,0]);
		currAll.push([0,0,0]);
		currAll.push([0,0,0,0]);
		currAll.push([0,0,0,0,0]);
		currAll.push(curr[3]);
		currAll.push(curr[4]);
		currAll.push(curr[5]);
		currAll.push(curr[6]);
		realTarget = [6,7,8,14,15,16,17][target];
	}
	
	return bahamut_core(currAll, realTarget, pot);
}

/*
 * 核心遞迴函式，神龍降臨版
 *
 * 參數:
 * curr: 目前所持, 為長 18 陣列, 各元素又為一陣列表示各潛各有幾張
 * target: 目標代號 0~17
 * pot: 潛能格數
 *
 * 回傳值:
 * target: 本卡代號
 * pot: 本卡潛能值
 * cost: 本卡花費, 為 [素材進化次數, 雷龍A張數, 冰龍A張數, 火龍A張數]
 * source: 來源, 同原版
 * evo: 實際進化素材數, 為 {0:火龍A, 2:火龍S, 3:冰龍A, 5:冰龍S, 6:雷龍A, 8:雷龍S, 9:邪龍}
 * left: 剩餘卡片
 */
function bahamut_core(curr, target, pot)
{
	//進化素材計數
	function evoCountAdd(evo1, evo2)
	{
		return [0,2,3,5,6,8,9].reduce(function(arr,idx){
			if(typeof(evo1[idx]) == "undefined")
			{
				if(typeof(evo2[idx]) == "undefined")
					;
				else
					arr[idx] = evo2[idx];
			}
			else
			{
				if(typeof(evo2[idx]) == "undefined")
					arr[idx] = evo1[idx];
				else
					arr[idx] = evo1[idx] + evo2[idx];
			}
			return arr;
		},{});
	}
	//二維複製
	function TwoDClone(arr){return arr.map(function(v){return v.slice(0);})}
	//更新最佳解
	function updateBest(best, newcost, currleft, sub, evo)
	{
		if(costCompare(newcost, best.cost) < 0)
		{
			best.cost = newcost;
			best.left = TwoDClone(currleft);
			best.source = sub;
			best.evo = evoCountAdd(evo, {});
		}
	}
	//遞迴本體
	function search(target, pot, curr)
	{
		if(curr[target][pot] > 0)
		{
			curr[target][pot]--;
			return {target: target, pot: pot, cost: [], source: [], left: curr, evo: {}};
		}
		if(pot == 0)
		{
			if(target == 0 || target == 3 || target == 6)
				return {target: target, pot: 0, cost: bahamut_data[target].cost, source: [], left: curr, evo: {}};
		}
		
		//開始搜尋
		var best = {target: target, pot: pot, cost: [10000], source: [], left: [], evo: {}};
		//若可以進化而來
		bahamut_data[target].evo.forEach(function(evo){
			if(bahamut_data[evo[0]].maxPot >= pot)
			{
				var prev = search(evo[0], pot, TwoDClone(curr));
				var cost;
				var evocount = prev.evo;
				if(evo[1] == -1)
				{
					cost = costAdd(prev.cost, [1]);
				}
				else
				{
					cost = costAdd(prev.cost, bahamut_data[evo[1]].cost);
					var newEC = {};
					newEC[evo[1]] = 1;
					evocount = evoCountAdd(prev.evo, newEC);
				}
				updateBest(best, cost, prev.left, [prev], evocount);
			}
		});
		//搜尋強化合成組合
		var halfPot = Math.floor(pot/2);
		for(var big = halfPot; big <= pot - 1; big++)
		{
			//先搜小再搜大
			var smallbest = search(target, pot - big - 1, TwoDClone(curr));
			var bigbest = search(target, big, TwoDClone(smallbest.left));
			var cost = costAdd(bigbest.cost, smallbest.cost);
			var evoCost = evoCountAdd(bigbest.evo, smallbest.evo);
			updateBest(best, cost, bigbest.left, [bigbest, smallbest], evoCost);
			//先搜大再搜小
			bigbest = search(target, big, TwoDClone(curr));
			smallbest = search(target, pot - big - 1, TwoDClone(bigbest.left));
			cost = costAdd(bigbest.cost, smallbest.cost);
			evoCost = evoCountAdd(bigbest.evo, smallbest.evo);
			updateBest(best, cost, smallbest.left, [bigbest, smallbest], evoCost);
		}
		return best;
	}
	
	var result = search(target, pot, curr);
	var left = result.left;
	flattenEnhance(result);
	
	// 扣除進化用素材
	function removeCost(idx)
	{
		// 輸入方式理論上不會有 [0] 以外的地方有卡
		if(left[idx][0] > 0)
		{
			left[idx][0]--;
			result.cost = costAdd(result.cost,
				bahamut_data[idx].cost.map(function(v){return -v;}))
			return;
		}
		if(bahamut_data[idx].evo.length > 0)
		{
			bahamut_data[idx].evo[0].forEach(removeCost);
		}
	}
	
	for(var id in result.evo)
	{
		var v = result.evo[id];
		while(v--) removeCost(id);
	}
	return result;
}

function bahamut_toGrid(result)
{
	if(result.source.length == 0)
	{
		return [[{target: result.target, pot: result.pot}]];
	}
	else if(result.source.length == 1)
	{
		var child = bahamut_toGrid(result.source[0]);
		var width = child[0].length;
		var evoNum;
		if(result.target == 9)
			evoNum = 7 - result.source[0].target;
		else
			evoNum = bahamut_data[result.target].evo[0][1];
		var tmp = ["Evol"+evoNum];
		tmp.length = width;
		child.unshift(tmp);
		tmp = [{target: result.target, pot: result.pot}];
		tmp.length = width;
		child.unshift(tmp);
		return child;
	}
	else
	{
		var childgrid = [];
		var height = 0;
		var childlen = result.source.length;
		for(var i = 0; i < childlen; i++)
		{
			childgrid[i] = bahamut_toGrid(result.source[i]);
			if(height < childgrid[i].length) height = childgrid[i].length;
		}
		var grid = [];
		for(var i = 0; i < height; i++)
		{
			grid[i] = childgrid.reduce(function(line,g)
			{
				line.push((i == 0) ? "+" : "");
				if(i < g.length)
					line = line.concat(g[i]);
				else
				{
					var l = g[0].length;
					while(l--) line.push("");
				}
				return line;
			}, []);
			grid[i].shift();
		}
		var width = grid[0].length;
		var tmp = ["EnhTo"];
		tmp.length = width;
		grid.unshift(tmp);
		tmp = [{target: result.target, pot: result.pot}];
		tmp.length = width;
		grid.unshift(tmp);
		return grid;
	}
}

function bahamut_toHTML(info, result)
{
	var targetToLevel = [0,1,2,3,4,5,0,1,2,6,7,8,9,10,3,4,5,6];
	var grid = bahamut_toGrid(result);
	var htmlgrid = [];
	var height = grid.length;
	var width = grid[0].length;
	for(var i = 0; i < height; i++)
	{
		var str = "";
		var line = [];
		for(var j = 0; j < width; j++)
		{
			if(typeof(grid[i][j]) == "object")
			{
				var s = iconAndPotImg(info, targetToLevel[grid[i][j].target], grid[i][j].pot);
				line.push([s, 1, 0]);
			}
			else if(typeof(grid[i][j]) == "string")
			{
				if(grid[i][j] == "EnhTo")
					line.push([img('Enh',60), 1, 1]);
				else if(grid[i][j].substr(0,4) == "Evol")
				{
					var evolN = parseInt(grid[i][j].substr(4));
					if(evolN != -1)
						line.push([img('Empty',60) + img('Evol',60) + iconImg(1231+evolN, true), 1, 0]);
					else
						line.push([img('Evol',60), 1, 0]);
				}
				else if(grid[i][j] == "+")
					line.push([img('EnhPlus',20), 1, 0]);
				else
					line.push([grid[i][j], 1, 0]);
			}
			else if(typeof(grid[i][j]) == "undefined")
			{
				line[line.length-1][1]++;
			}
		}
		for(var k = 0; k < line.length; k++)
		{
			str += '<td';
			if(line[k][1] > 1) str += ' colspan="' + line[k][1] + '"';
			if(line[k][2] == 1) str += ' style="background-image:url(icon/EnhBg.png)"';
			str += '>' + line[k][0] + '</td>';
		}
		htmlgrid.push(str);
	}
	var lastline = '<td colspan="' + width + '"><hr>';
	var needlist = [];
	for(var k = 3; k >= 1; k--)
	{
		if(typeof(result.cost[k]) == "undefined") continue;
		if(result.cost[k] <= 0) continue;
		needlist.push(iconImg([0,1237,1234,1231][k]) + "x" + result.cost[k]);
	}
	if(needlist.length > 0)
		lastline += '總計還需要：' + needlist.join('、');
	else
		lastline += '現有卡已足夠！';
	lastline += '</td>';
	htmlgrid.push(lastline);
	return '<table border="0" style="text-align:center; margin:auto"><tr>' + htmlgrid.join("</tr><tr>") + '</tr></table>';
}
