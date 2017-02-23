$(function(){
	var last;
	function variations(s)
	{
		var ts = s.replace(/[\s‧]/g,'');
		var ret = [ts];
		var k = {'Ⅰ':['1','１','I','Ｉ'], 'Ⅱ':['2','２','II','ＩＩ'],
			     'Ⅲ':['3','３','III','ＩＩＩ'], 'Ⅳ':['4','４','IV','ＩＶ'], 'Ⅴ':['5','５','V','Ｖ']};
		for(var t in k) if(ts.match(t)) k[t].forEach(function(r){ret.push(ts.replace(t,r))});
		return ret;
	}
	$('#searchField').on('input change keyup keypress cut paste mouseup focus blur',function(){
		var text = $(this).val().replace(/\u3000/g,''); //delete all full-width spaces to accomodate IME input
		if(last == text) return;
		last = text;
		var token = text.split(/[\s‧]/).filter(function(s){return s.length > 0;}).map(function(s){return s.toUpperCase();});
		
		if(text.length == 0)
			$('#characterList').children().show();
		else /* search through all icons */
			$('#characterList').children().each(function(){
				var $this = $(this);
				if((function(){
					var tagname = $this.prop('tagName');
					if(tagname == "BR" || tagname == "HR") return false;
					var id = $this.data('searchid');
					if(!id) return false;
					var info = data[id];
					if(!info) return false;
					
					var keywords = [];
					keywords.push(info.series);
					if(seriesAlias[info.series]) Array.prototype.push.apply(keywords, seriesAlias[info.series]);
					Array.prototype.push.apply(keywords,
						info.id.map(function(id){return cardname[id].replace(/<.*>/,'');})
						       .filter(function(s){return !hasKana(s);}) //Filter out Kanas since we don't want Japanese name match
					);
					if(info.alias) Array.prototype.push.apply(keywords, info.alias);
					keywords = Array.prototype.concat.apply([],keywords.map(variations)).map(function(s){return s.toUpperCase();});
					
					return token.every(function(tk){return keywords.some(function(kw){return kw.indexOf(tk) != -1;});});
				})())
					$this.show();
				else
					$this.hide();
			});
	});
});
