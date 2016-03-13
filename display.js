function pad4(id)
{
	return id < 1000 ? ("0000" + id).substr(-4) : (''+id);
}

function img(name, size, alt, cl)
{
	if(typeof(alt) == "undefined") alt = "";
	if(typeof(cl) == "undefined") cl = "";
	return '<img src="icon/' + name + '.png" width="' + size + '" align="absmiddle" title="' + alt + '" class="' + cl + '">';
}

function iconImg(id, tag)
{
	var gray = (grayiconlist.indexOf(id) != -1);
	var gsuf = ((gray && !Modernizr.cssfilters) ? 'g' : '');
	var gcl = ((gray && Modernizr.cssfilters) ? ' grayscale' : '');
	if(id < 0)
		return img(id + gsuf, 60, cardname[id], '' + gcl);
	else
	{
		if(typeof(tag) == "string")
			return img(pad4(id) + gsuf, 60, '', tag + gcl);
		else if(typeof(tag) == "boolean" && tag)
			return img(pad4(id) + gsuf, 60, '', ('evoltt'+id) + gcl);
		else
			return img(pad4(id) + gsuf, 60, cardname[id], '' + gcl);
	}
}

function potImg(potName) {return img(potData[potName].icon, 30, potData[potName].name);}

function getPotList(info, level, potNum)
{
	if(typeof(info.pots2) == "undefined")
	{
		return info.pots.slice(0, potNum);
	}
	else
	{
		if(info.maxPot[level] <= info.pots2.length)
			return info.pots2.slice(0, potNum);
		else
			return info.pots.slice(0, potNum);
	}
}

function iconAndPotImg(info, level, maxPot)
{
	return getPotList(info, level, maxPot).reduce(function(html,pot){
		return html + potImg(pot);
	},iconImg(info.id[level]));
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
		var tmp;
		if(typeof(result.evolist) == "undefined")
			tmp = ["Evol"+(result.level-1)];
		else
			tmp = ["Evol"+(result.level-1)+"#"+
				result.evolist.reduce(function(s,v){return s+v;},"")];
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
						var leftlist = [];
						var rightlist = [];
						if(material.length >= 4)
						{
							var leftThreshold = material.length / 2;
							for(var k = 0; k < material.length; k++)
							{
								if(k < leftThreshold)
									leftlist.push(iconImg(material[k], true));
								else
									rightlist.push(iconImg(material[k], true));
							}
						}
						else
						{
							for(var k in material)
							{
								leftlist.push(img('Empty',60));
								rightlist.push(iconImg(material[k], true));
							}
						}
						line.push([leftlist.concat([img('Evol',60)]).concat(rightlist).join(""),1,0]);
					}
					else if(material != 0)
					{
						var hash = grid[i][j].indexOf("#");
						if(hash != -1)
						{
							var add = grid[i][j].substr(hash+1);
							line.push([img('Empty',60) + img('Evol',60) + iconImg(material, "evx evx"+add) + "＊", 1, 0]);
						}
						else
							line.push([img('Empty',60) + img('Evol',60) + iconImg(material, true), 1, 0]);
					}
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
			str += ' style="white-space:nowrap';
			if(line[k][2] == 1) str += '; background-image:url(icon/EnhBg.png)';
			str += '">' + line[k][0] + '</td>';
		}
		htmlgrid.push(str);
	}
	var lastline = '<td colspan="' + width + '"><hr>';
	var needlist = [];
	if(result.cost.length > 1 && result.cost[1] > 0) needlist.push(iconImg(info.id[0]) + "x" + result.cost[1]);
	for(var k = 2; k < result.cost.length; k++)
	{
		var item = info.special[k-2];
		var count = result.cost[k];
		if(count <= 0) continue;
		if(typeof(item) == "object")
		{
			var complex = [];
			for(var u = 1; u < item.length; u+=2)
			{
				complex.push(iconImg(item[u]) + 'x' + (item[u+1] * count));
			}
			needlist.push(
				iconImg(item[0]) + "x" + count + '（＝' + complex.join('、') + '）'
			);
		}
		else
		{
			needlist.push(iconImg(item) + "x" + count);
		}
	}
	if(needlist.length > 0)
		lastline += '總計還需要：' + needlist.join('、');
	else
		lastline += '現有卡已足夠！';
	lastline += '</td>';
	htmlgrid.push(lastline);
	return '<table border="0" style="text-align:center; margin:auto"><tr>' + htmlgrid.join("</tr><tr>") + '</tr></table>';
}

var g_info = {};
var g_target = {};
var g_availList = [];
var g_materialList = [];
var g_cur = {};

function clear()
{
	$('#panel').hide();
	$('#resultTable').empty();
	$('#result').hide();
	g_info = {};
	g_target = {};
	g_availList = [];
	g_materialList = [];
	g_cur = {};
}

function characterSelect()
{
	$('#panel').show();
	$('#resultTable').empty();
	$('#result').hide();
	g_target.level = g_info.maxPot.length-1;
	g_target.pot = g_info.maxPot[g_target.level];
	if(typeof(g_info.maxPossible) != "undefined")
		g_target.pot = g_info.maxPossible;
	g_cur.level = g_target.level;
	g_cur.pot = 0;
	g_availList = [];
	g_materialList = [];
	updateTarget();
	updateAvail();
	$('#controlIcon').empty();
	$('#controlPot').empty();
	var linelen = g_info.id.length;
	$('#characterName').empty().append(cardname[g_info.id[linelen-1]]);
	if(linelen > 6)
		linelen = Math.floor((linelen + 1) / 2);
	if(g_info.id[0] == 1237)
		linelen = 3;
	for(var i = 0; i < g_info.id.length; i++)
	{
		if(i == linelen)
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
					if(typeof(g_info.maxPossible) != "undefined" && i > g_info.maxPossible)
						return function(){
							alert("由於進化素材不足，\n不使用潛能藥無法達到 "+i+" 格潛能。\n"+
								"改選為最大可能格數 ("+g_info.maxPossible+" 格)。");
							g_cur.pot = g_info.maxPossible;
							updateCurrent();
						};
					else
						return function(){
							g_cur.pot = i;
							updateCurrent();
						};
				})(i+1))
		);
	}
	if(typeof(g_info['special']) != 'undefined')
	{
		$('#material').show();
		$('#specialIcon').empty();
		for(var i = 0; i < g_info.special.length; i++)
		{
			$('#specialIcon').append(
				$('<span></span>')
					.addClass("icon clickable")
					.append(iconImg(g_info.special[i]))
					.bind("click", (function(i){
						return function(){
							if(typeof(g_info.maxSpecial) != "undefined")
							{
								var curCount = g_materialList.reduce(function(n,v){return n+(v==i?1:0);},0);
								if(curCount >= g_info.maxSpecial[i])
								{
									alert("此素材不會獲得多於 "+g_info.maxSpecial[i]+" 個。");
									return;
								}
							}
							g_materialList.push(i);
							updateAvail();
						};
					})(i))
			);
		}
	}
	else
	{
		$('#material').hide();
	}
	updateCurrent();
}

function updateCurrent()
{
	$('#control .iconSel').removeClass('iconSel');
	$('#controlIcon').children().filter('span').eq(g_cur.level).addClass('iconSel');
	var lvMaxPot = g_info.maxPot[g_cur.level];
	if(g_cur.pot > lvMaxPot) g_cur.pot = lvMaxPot;
	if(typeof(g_info.pots2) != "undefined")
	{
		if(lvMaxPot <= g_info.pots2.length)
		{
			$('#controlPot').children().slice(0,lvMaxPot+1).not(":first-child").each(
				function(index)
				{
					$(this).children().replaceWith(potImg(g_info.pots2[index]));
				}
			);
		}
		else
		{
			$('#controlPot').children().slice(0,lvMaxPot+1).not(":first-child").each(
				function(index)
				{
					$(this).children().replaceWith(potImg(g_info.pots[index]));
				}
			);
		}
	}
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
	for(var k in g_materialList)
	{
		(function(k){
			$('#avail').append(
				$('<input type="button" value="刪除">').bind('click',function(){
					deleteMaterial(k);
				})
			).append(
				$(iconImg(g_info.special[g_materialList[k]]))
			).append($('<br>'))
		})(k);
	}
}

function deleteAvail(k)
{
	g_availList.splice(k, 1);
	updateAvail();
}

function deleteMaterial(k)
{
	g_materialList.splice(k, 1);
	updateAvail();
}

function bindTooltipOn(object, ttSelector, html, topOffset, leftOffset)
{
	object.bind('mouseenter', html, function(e){
		var thispos = $(this).offset();
		$(ttSelector).empty().show().append($(e.data)).offset(
			{top: thispos.top + topOffset, left: thispos.left + leftOffset}
		);
	}).bind('mouseleave', function(){
		$(ttSelector).empty().hide();
	});
}

function bindEvx(info)
{
	$(".evx").each(function(){
		var $this = $(this);
		$this.attr('class').split(' ').forEach(function(cname){
			if(cname.substr(0,3) == "evx" && cname.length > 3)
			{
				var tally = cname.substr(3).split('').reduce(function(a,v){
					var i = parseInt(v);
					a[i] = (+a[i] || 0) + 1;
					return a;
				},{});
				var htmllist = '<span>使用已有卡片：'+Object.keys(tally).map(function(k){
					return img(pad4(info.id[k]),30) + "x" + tally[k];
				}).join('、')+'</span>';
				bindTooltipOn($this, '#evolTooltip', htmllist, 70, 0);
			}
		});
	});
}

function bindEvolTooltip()
{
	for(var k in evolTooltip)
	{
		var elem = $('.evoltt' + k);
		if(elem.length == 0) continue;
		var tt = [];
		for(var u in evolTooltip[k])
		{
			if(u > 0)
				tt.push(img(pad4(u),30) + 'x' + evolTooltip[k][u]);
			else
				tt.push(img(u,30) + 'x' + evolTooltip[k][u]);
		}
		bindTooltipOn(elem, '#evolTooltip', '<span>'+tt.join('、')+'</span>', 70, 0);
	}
}

function asyncgo()
{
	var curr = [];
	var special = [];
	var overflow = parseInt($('#overflow').val(),10);
	for(var i = 0; i < g_info.id.length; i++)
	{
		curr[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].slice(0,g_info.maxPot[i]+1);
	}
	if(typeof(g_info['special']) != "undefined")
		for(var i = 0; i < g_info.special.length; i++) special[i] = 0;
	for(var k in g_availList)
	{
		curr[g_availList[k].level][g_availList[k].pot]++;
	}
	for(var k in g_materialList)
	{
		special[g_materialList[k]]++;
	}
	var result, html;
	if(g_info.id[0] == 1231 || g_info.id[0] == 1237)
	{
		result = bahamut(g_info.id[0], curr, special, g_target.level, g_target.pot, overflow);
		html = bahamut_toHTML(g_info, result);
	}
	else
	{
		var materialLevel = g_info.material.map(function(v){return g_info.id.indexOf(v);});
		result = core(g_info.maxPot, g_info.evol, materialLevel, curr, special, g_target.level, g_target.pot, overflow);
		html = toHTML(g_info, result);
	}
	$('#resultTable').empty();
	$('#resultTable').append($(html));
	bindEvolTooltip();
	bindEvx(g_info);
	$('#result').show();
	$('#go').attr('value', '開始計算').prop('disabled', false);
}

$(function(){
	$.each(menu, function(key, value){
		if(value == 0)
		{
			$('#characterList').append($('<br><hr>'));
		}
		else
		{
			$('#characterList').append(
				$('<span></span>')
					.addClass("icon clickable")
					.data('searchid', value)
					.append($(iconImg(value)))
					.bind("click", function(){
						$('#characterList .iconSel').removeClass("iconSel");
						$(this).addClass("iconSel");
						g_info = data[value];
						characterSelect();
					})
			);
		}
	});
	var overflowhelptext = "調整溢出計算參數，數字表示考慮溢出多少格數。\n一般狀況使用 0 即可，非零值可能會大幅增加計算時間。";
	$('#overflowhelp').attr('title',overflowhelptext).bind('click', function(){alert(overflowhelptext);});
	$('#panelSet').bind('click', function(){
		g_target = {level: g_cur.level, pot: g_cur.pot};
		updateTarget();
	});
	$('#panelAdd').bind('click', function(){
		g_availList.push({level: g_cur.level, pot: g_cur.pot});
		updateAvail();
	});
	$('#go').bind('click', function(){
		$(this).attr('value', '計算中…').prop('disabled', true);
		$('#result').hide();
		setTimeout('asyncgo()', 10);
	});
	$('#clearButton').bind('click', function(){clear();});
	var PUstatus = 0;
	$('#updateToggler').bind('click', function(event){
		var ut = $(this);
		var ur = $('#updateRecord');
		if(PUstatus == 0)
		{
			PUstatus = 1;
			ut.text('');
			ur.show();
			ur.load("./pastupdate.html", function(){
				PUstatus = 2;
				ut.text("▼更新紀錄點此收合▼");
			});
		}
		else if(PUstatus == 2)
		{
			if(ur.is(':visible'))
			{
				ur.hide();
				ut.text("▲點此展開更早的更新紀錄▲")
			}
			else
			{
				ur.show();
				ut.text("▼更新紀錄點此收合▼")
			}
		}
	});
	clear();
});
