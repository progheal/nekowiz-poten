function pad4(id)
{
	return ("0000" + id).substr(-4);
}

function img(name, size, alt)
{
	if(typeof(alt) == "undefined") alt = "";
	return '<img src="icon/' + name + '.png" width="' + size + '" align="middle" title="' + alt + '">';
}

function iconImg(id, name)
{
	if(id < 0)
		return img(id, 60, name);
	else
		return img(pad4(id), 60, name);
}

function potImg(potName) {return img(potData[potName].icon, 30, potData[potName].name);}

function iconAndPotImg(info, level, maxPot)
{
	var html = iconImg(info.id[level]);
	for(var k = 0; k < maxPot; k++) html += potImg(info.pots[k]);
	return html;
}

function toGrid(result)
{
	if(result.source.length == 0)
	{
		// 底
		return [[{level: result.level, pot: result.pot}]];
	}
	else if(result.source.length == 1)
	{
		// 進化
		var child = toGrid(result.source[0]);
		var width = child[0].length;
		var tmp = ["Evol"+(result.level-1)];
		tmp.length = width;
		child.unshift(tmp);
		tmp = [{level: result.level, pot: result.pot}];
		tmp.length = width;
		child.unshift(tmp);
		return child;
	}
	else
	{
		// 強化
		var childgrid = [];
		var height = 0;
		var childlen = result.source.length;
		for(var i = 0; i < childlen; i++)
		{
			childgrid[i] = toGrid(result.source[i]);
			if(height < childgrid[i].length) height = childgrid[i].length;
		}
		var grid = [];
		for(var i = 0; i < height; i++)
		{
			var line = [];
			for(var j = 0; j < childlen; j++)
			{
				if(i == 0)
				{
					if(j != 0) line.push("+");
				}
				else
				{
					if(j != 0) line.push("");
				}
				if(i < childgrid[j].length)
					line = line.concat(childgrid[j][i]);
				else
				{
					var l = childgrid[j][0].length;
					while(l--)
					{
						line.push("");
					}
				}
			}
			grid[i] = line;
		}
		var width = grid[0].length;
		var tmp = ["EnhTo"];
		tmp.length = width;
		grid.unshift(tmp);
		tmp = [{level: result.level, pot: result.pot}];
		tmp.length = width;
		grid.unshift(tmp);
		return grid;
	}
}

function toHTML(info, result)
{
	var grid = toGrid(result);
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
				var s = iconAndPotImg(info, grid[i][j].level, grid[i][j].pot);
				line.push([s, 1, 0]);
			}
			else if(typeof(grid[i][j]) == "string")
			{
				if(grid[i][j] == "EnhTo")
					line.push([img('Enh',60), 1, 1]);
				else if(grid[i][j].substr(0,4) == "Evol")
				{
					var evolN = parseInt(grid[i][j].substr(4));
					var material = info.material[evolN];
					if(Array.isArray(material))
					{
						var padlist = [];
						var imglist = [];
						for(var k in material)
						{
							padlist.push(img('Empty',60));
							imglist.push(iconImg(material[k]));
						}
						line.push([padlist.concat([img('Evol',60)]).concat(imglist).join(""),1,0]);
					}
					else if(material != 0)
						line.push([img('Empty',60) + img('Evol',60) + iconImg(material), 1, 0]);
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
	if(result.cost.length < 2)
	{
		lastline += '現有卡已足夠！'
	}
	else
	{
		lastline += '總計還需要：';
		lastline += iconImg(info.id[0]) + "x" + result.cost[1];
		for(var k = 2; k < result.cost.length; k++)
		{
			lastline += '、' + iconImg(info.special[k-2]) + "x" + result.cost[k];
		}
	}
	lastline += '</td>';
	htmlgrid.push(lastline);
	return '<table border="0" style="text-align:center; margin:auto"><tr>' + htmlgrid.join("</tr><tr>") + '</tr></table>';
}

var g_info = {};
var g_target = {};
var g_availList = [];
var g_cur = {};

function clear()
{
	$('#panel').hide();
	$('#resultTable').empty();
	$('#result').hide();
	g_info = {};
	g_target = {};
	g_availList = [];
	g_cur = {};
}

function characterSelect()
{
	$('#panel').show();
	$('#resultTable').empty();
	$('#result').hide();
	g_target.level = g_info.maxPot.length-1;
	g_target.pot = g_info.maxPot[g_target.level];
	g_cur.level = g_target.level;
	g_cur.pot = 0;
	g_availList = [];
	updateTarget();
	updateAvail();
	$('#characterName').empty().append(g_info.name);
	$('#controlIcon').empty();
	$('#controlPot').empty();
	var linelen = g_info.id.length;
	if(linelen > 6)
		linelen = Math.floor((linelen + 1) / 2);
	for(var i = 0; i < g_info.id.length; i++)
	{
		if(i > 0 && i % linelen == 0)
			$('#controlIcon').append('<br/>');
		$('#controlIcon').append(
			$('<span></span>')
				.addClass("icon clickable")
				.append(iconImg(g_info.id[i]))
				.bind("click", (function(i){
					return function(){
						g_cur.level = i;
						updateCurrent();
					};
				})(i))
		);
	}
	$('#controlPot').append('　').append(
		$('<span></span>')
			.addClass('pot clickable')
			.append(img('Senzai_X',30,'無潛能'))
			.bind("click", function(){
				g_cur.pot = 0;
				updateCurrent();
			})
	);
	for(var i = 0; i < g_info.pots.length; i++)
	{
		$('#controlPot').append(
			$('<span></span>')
				.addClass("pot clickable")
				.append(potImg(g_info.pots[i]))
				.bind("click", (function(i){
					return function(){
						g_cur.pot = i;
						updateCurrent();
					};
				})(i+1))
		);
	}
	updateCurrent();
}

function updateCurrent()
{
	$('#control .iconSel').removeClass('iconSel');
	$('#controlIcon').children().filter('span').eq(g_cur.level).addClass('iconSel');
	var lvMaxPot = g_info.maxPot[g_cur.level];
	if(g_cur.pot > lvMaxPot) g_cur.pot = lvMaxPot;
	$('#controlPot').children().show().slice(lvMaxPot+1).hide();
	$('#controlPot').children().slice(0,g_cur.pot+1).addClass('iconSel');
}

function updateTarget()
{
	$('#target0')
		.empty()
		.append($(iconAndPotImg(g_info, g_target.level, g_target.pot)));
}

function updateAvail()
{
	$('#avail').empty();
	for(var k in g_availList)
	{
		(function(k){
			$('#avail').append(
				$('<input type="button" value="刪除">').bind('click',function(){
					deleteAvail(k);
				})
			).append(
				$(iconAndPotImg(g_info, g_availList[k].level, g_availList[k].pot))
			).append($('<br>'))
		})(k);
	}
}

function deleteAvail(k)
{
	g_availList.splice(k, 1);
	updateAvail();
}

function go()
{
	var curr = [];
	for(var i = 0; i < g_info.id.length; i++) curr[i] = [];
	for(var k in g_availList)
	{
		curr[g_availList[k].level].push(g_availList[k].pot);
	}
	var result = core(g_info.maxPot, g_info.evol, curr, g_target.level, g_target.pot);
	var html = toHTML(g_info, result);
	$('#resultTable').empty();
	$('#resultTable').append($(html));
	$('#result').show();
}

$(function(){
	$.each(menu, function(key, value){
		$('#characterList').append(
			$('<span></span>')
				.addClass("icon clickable")
				.append($(iconImg(value, data[value].name)))
				.bind("click", function(){
					$('#characterList .iconSel').removeClass("iconSel");
					$(this).addClass("iconSel");
					g_info = data[value];
					characterSelect();
				})
		);
	});
	$('#panelSet').bind('click', function(){
		g_target = {level: g_cur.level, pot: g_cur.pot};
		updateTarget();
	});
	$('#panelAdd').bind('click', function(){
		g_availList.push({level: g_cur.level, pot: g_cur.pot});
		updateAvail();
	});
	$('#go').bind('click', function(){go();});
	$('#clearButton').bind('click', function(){clear();});
	$('#updateToggler').bind('click', function(event){
		var ur = $('#updateRecord');
		if(ur.is(':visible'))
		{
			ur.hide();
			$(this).text("更新紀錄點此展開")
		}
		else
		{
			ur.show();
			$(this).text("更新紀錄點此收合")
		}
	});
	clear();
});
