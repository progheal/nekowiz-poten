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

function toHTML(result)
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
				var s = "[Lv" + grid[i][j].level + ",Pot" + grid[i][j].pot + "]";
				line.push([s,1]);
			}
			else if(typeof(grid[i][j]) == "string")
			{
				line.push([grid[i][j],1]);
			}
			else if(typeof(grid[i][j]) == "undefined")
			{
				var last = line.pop();
				last[1]++;
				line.push(last);
			}
		}
		for(var k = 0; k < line.length; k++)
		{
			if(line[k][1] == 1) str += "<td>" + line[k][0] + "</td>";
			else str += '<td colspan="' + line[k][1] + '">' + line[k][0] + "</td>";
		}
		htmlgrid.push(str);
	}
	return '<table border="1" style="text-align:center"><tr>' + htmlgrid.join("</tr><tr>") + '</tr></table>';
}
