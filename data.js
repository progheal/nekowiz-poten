potData = {
	F1:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅰ"},
	F2:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅱ"},
	F3:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅲ"},
	N1:  {icon: "Senzai_Chain_boost",name: "提升連鎖Ⅰ"},
	C2:  {icon: "Senzai_CostDown",   name: "減少COSTⅡ"},
	C4:  {icon: "Senzai_CostDown",   name: "減少COSTⅣ"},
	C6:  {icon: "Senzai_CostDown",   name: "減少COSTⅥ"},
	C8:  {icon: "Senzai_CostDown",   name: "減少COSTⅧ"},
	C10: {icon: "Senzai_CostDown",   name: "減少COSTⅩ"},
	R1:  {icon: "Senzai_Konki",      name: "九死一生Ⅰ"},
	R2:  {icon: "Senzai_Konki",      name: "九死一生Ⅱ"},
	R3:  {icon: "Senzai_Konki",      name: "九死一生Ⅲ"},
	RΞ:  {icon: "Senzai_Konki",      name: "九死一生Ξ"},
	H1:  {icon: "Senzai_HP",         name: "HP上升Ⅰ"},
	H2:  {icon: "Senzai_HP",         name: "HP上升Ⅱ"},
	H3:  {icon: "Senzai_HP",         name: "HP上升Ⅲ"},
	H4:  {icon: "Senzai_HP",         name: "HP上升Ⅳ"},
	A1:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅰ"},
	A2:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅱ"},
	A3:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅲ"},
	A4:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅳ"},
	PF:  {icon: "Senzai_Appear_F",   name: "問題類型屬性提昇·火"},
	PW:  {icon: "Senzai_Appear_W",   name: "問題類型屬性提昇·水"},
	PT:  {icon: "Senzai_Appear_T",   name: "問題類型屬性提昇·雷"},
	PF2: {icon: "Senzai_Appear_F",   name: "問題類型屬性提昇Ⅱ·火"},
	PW2: {icon: "Senzai_Appear_W",   name: "問題類型屬性提昇Ⅱ·水"},
	PT2: {icon: "Senzai_Appear_T",   name: "問題類型屬性提昇Ⅱ·雷"},
	E1:  {icon: "Senzai_EXP",        name: "獲得EXP量上升Ⅰ"},
	E2:  {icon: "Senzai_EXP",        name: "獲得EXP量上升Ⅱ"},
	E3:  {icon: "Senzai_EXP",        name: "獲得EXP量上升Ⅲ"},
	G1:  {icon: "Senzai_Gold",       name: "獲得金幣量上升Ⅰ"},
	G2:  {icon: "Senzai_Gold",       name: "獲得金幣量上升Ⅱ"},
	G3:  {icon: "Senzai_Gold",       name: "獲得金幣量上升Ⅲ"},
	B1:  {icon: "Senzai_BattleEnd",  name: "戰鬥結束後回復全體隊友的HP"},
	CG1: {icon: "Senzai_Chain_guard",name: "於一次任務中，僅限一次保護連鎖數"},
	INV: {icon: "Senzai_Invalidate", name: "使敵方技能的特殊技能封印失效"},
	INVP:{icon: "Senzai_Invalidate", name: "使敵方技能的毒攻擊失效"},
	SHIN:{icon: "Senzai_Shingan",    name: "心眼：看穿肉眼無從得見的真實"},
}

{
	var TypeName = {F:'火', W:'水', T:'雷'}
	var SubTypeName = {L:'光', D:'闇'}
	var Race = {WA:'戰士', SO:'術士', FA:'妖精', AN:'天使', DE:'魔族', DH:'亞人', DR:'龍族', GO:'神族', MA:'物質', MC:'魔法生物', AB:'AbCd '}
	var DualRace = {GODR:'神族、龍族', ANDE:'天使、魔族'}
	var Roman = {'1':'Ⅰ', '2':'Ⅱ', '3':'Ⅲ', '4':'Ⅳ', '5':'Ⅴ'}
	var Attribute = {
		A:function(x){return x+'攻擊力上升';},
		H:function(x){return x+'HP上升';},
		D:function(x){return '減輕'+x+'傷害';},
	}
	var AttrIcon = {A:'ATK', H:'HP', D:'Shield'}

	for(var attr in Attribute)
	{
		for(var t in TypeName)
		{
			for(var num in Roman)
			{
				potData[attr+t+num] = {
					icon: "Senzai_"+AttrIcon[attr]+"_"+t,
					name: Attribute[attr](TypeName[t]+'屬性')+Roman[num]
				};
			}
		}
	}

	for(var attr in Attribute)
	{
		for(var num in Roman)
		{
			potData[attr+'A'+num] = {
				icon: "Senzai_"+AttrIcon[attr]+"_A",
				name: Attribute[attr]('全屬性')+Roman[num]
			};
		}
	}

	for(var attr in Attribute)
	{
		for(var dt of ['FW', 'FT', 'WT'])
		{
			for(var num in Roman)
			{
				potData[attr+dt+num] = {
					icon: "Senzai_"+AttrIcon[attr]+"_"+dt,
					name: Attribute[attr](TypeName[dt[0]]+'、'+TypeName[dt[1]]+'屬性')+Roman[num]
				};
			}
		}
	}

	var r = $.extend({},Race,DualRace);
	for(var attr in Attribute)
	{
		for(var token in r)
		{
			for(var num in Roman)
			{
				potData[attr+token+num] = {icon: "Senzai_"+AttrIcon[attr]+"_Breed", name: Attribute[attr](r[token])+Roman[num]};
			}
		}
	}
	
	for(var attr of ['D'])
	{
		for(var type2 in SubTypeName)
		{
			for(var num2 of [1,2])
			{
				potData[attr+type2+num2] = {
					icon: "Senzai_"+AttrIcon[attr]+"_DL",
					name: Attribute[attr](SubTypeName[type2]+'屬性')+Roman[num2]
				};
			}
		}
	}

	for(var attr of ['A','H'])
	{
		for(var type1 in TypeName)
		{
			for(var num1 of [1,2])
			{
				for(var type2 in SubTypeName)
				{
					for(var num2 of [1,2])
					{
						potData[attr+type1+num1+type2+num2] = {
							icon: "Senzai_"+AttrIcon[attr]+"_"+type1+type2,
							name: Attribute[attr]('複屬性')+'＜'+TypeName[type1]+Roman[num1]+'・'+SubTypeName[type2]+Roman[num2]+'＞'
						};
					}
				}
			}
		}
	}
}

function GenerateIdList(last, size)
{
	return $.map(Array(size), function(v,i){return last-size+1+i;})
}

function SimpleEvol(idlist, maxPot, pots, evolone, evolmat, alias)
{
	return {
		alias: alias,
		id: idlist,
		maxPot: maxPot,
		pots: pots,
		evol: $.map(Array(idlist.length-1), function(){return [evolone];}),
		material: $.map(Array(idlist.length-1), function(){return evolmat;})
	};
}

// For cards that simply eats the lowest itself to evolve
function SimpleSelfWithId(idlist, maxPot, pots, alias)
{
	return SimpleEvol(idlist, maxPot, pots, [1], idlist[0], alias);
}

function SimpleSelf(lastid, maxPot, pots, alias)
{
	return SimpleSelfWithId(GenerateIdList(lastid, maxPot.length), maxPot, pots, alias);
}

// For cards that uses material to evolve
function SimpleMaterialWithId(idlist, maxPot, pots, alias)
{
	return SimpleEvol(idlist, maxPot, pots, [], 0, alias);
}

function SimpleMaterial(lastid, maxPot, pots, alias)
{
	return SimpleEvol(GenerateIdList(lastid, maxPot.length), maxPot, pots, [], 0, alias);
}

// For cards that only last evolution uses special material(s)
function LastSpecialWithId(idlist, special, maxPot, pots, alias)
{
	var len = idlist.length;
	var evolarray = $.map(Array(len-2), function(){return [[1]];});
	var matarray = $.map(Array(len-2), function(){return idlist[0];});
	if(Array.isArray(special))
	{
		var specialUnique = [];
		var specialTally = {};
		special.forEach(function(n){
			if(specialTally[n])
				specialTally[n]++;
			else
			{
				specialUnique.push(n);
				specialTally[n] = 1;
			}
		});
		var specialCount = specialUnique.map(function(n){return specialTally[n];});
		specialCount.unshift(0);
		evolarray.push(specialCount);
		matarray.push(special);
		return {
			alias: alias,
			id: idlist,
			maxPot: maxPot,
			pots: pots,
			evol: evolarray,
			material: matarray,
			special: specialUnique
		};
	}
	else
	{
		evolarray.push([0,1]);
		matarray.push(special);
		return {
			alias: alias,
			id: idlist,
			maxPot: maxPot,
			pots: pots,
			evol: evolarray,
			material: matarray,
			special: [special]
		};
	}
}

function LastSpecial(lastid, special, maxPot, pots, alias)
{
	return LastSpecialWithId(GenerateIdList(lastid, maxPot.length), special, maxPot, pots, alias);
}

function LastSpecial2(lastid, special, maxPot, pots, alias)
{
	var idlist = GenerateIdList(lastid-1, maxPot.length);
	idlist[maxPot.length - 1]++;
	return LastSpecialWithId(idlist, special, maxPot, pots, alias);
}

// for hard dungeon cards that requires same level itself to evolve
function HardDungeonWithId(idlist, maxPot, pots, alias)
{
	return {
		alias: alias,
		id: idlist,
		maxPot: maxPot,
		pots: pots,
		evol: $.map(Array(idlist.length-1), function(v,i){return [[1<<i]];}),
		material: idlist.slice(0, idlist.length-1)
	};
}

function HardDungeon(lastid, maxPot, pots, alias)
{
	return HardDungeonWithId(GenerateIdList(lastid, maxPot.length), maxPot, pots, alias);
}

data = {
	// 御三家
	3626: SimpleMaterialWithId([1,2,3,4,1507,3626],    [1,2,4,6,6,9], ["H2","A2","H2","A2","HF1","AF1","PF","F2","AWA2"]),
	3627: SimpleMaterialWithId([5,6,7,8,1509,3627],    [2,3,5,6,6,9], ["H2","A2","A2","H2","HW1","AW1","HSO2","F2","ASO2"]),
	3628: SimpleMaterialWithId([9,10,11,12,1508,3628], [2,4,5,6,6,9], ["A2","H2","A2","H2","HT1","AT1","ADR2","HDR2","F2"]),
	// 惡作劇女神與兔子的故事
	7566: SimpleSelfWithId([1753,1754,1755,1756,7566], [1,1,2,3,10],
		[4, ["A2","H2","F2","AW1","HW1","PW2","ADE2","HDE2","INVP","R1"], ["A1","A1","F1"]]),
	7567: SimpleSelfWithId([1757,1758,1759,1760,7567], [1,2,3,5,10],
		[4, ["F1","PF","H2","R1","A2","PF2","F2","AF1","HF1","AGO3"], ["F1","PF","H1","R1","A2"]]),
	7568: SimpleSelfWithId([1761,1762,1763,1764,7568], [2,3,4,6,10],
		[4, ["A1","F1","C2","A2","PW2","AW2","HW2","DWT1","INV","AGO3"], ["A1","F1","C2","A2","PW","A2"]]),
	7569: SimpleSelfWithId([1765,1766,1767,1768,7569], [1,2,3,5,10],
		[4, ["A2","C2","PT2","AGO2","F1","H2","R1","HT2","AT2","F2"], ["A1","C2","PT","A2","F1"]]),
	// 庫洛姆‧麥格納Ⅰ魔導學園
	2277: {
			id: [595,596,597,598,2277],
			maxPot: [1,2,3,4,7],
			pots: ["A2","A2","H2","H2","C2","AW1","PW"],
			evol: [[],[],[],[0,2]],
			material: [0,0,0,[-33,-33]],
			special: [-33],
	},
	614: SimpleSelf(614, [1,2,3,4], ["C2","C2","C2","A1"], ['校長']),
	// 庫洛姆‧麥格納Ⅱ學園祭
	815: SimpleSelf(815, [1,2,3,4], ["H2","A2","H2","A2"]),
	819: SimpleSelf(819, [1,2,3,4], ["A2","A2","C2","HF1"]),
	// 庫洛姆‧麥格納Ⅲ臨海學校
	2319: SimpleSelf(2319, [1,2,3,6], ["DF1","C2","A1","PW","DF1","H1"]),
	2323: SimpleSelf(2323, [1,2,3,8], ["F1","C2","PF","A2","C2","R1","PF","A2"]),
	2327: SimpleSelf(2327, [1,2,3,9], ["DW1","F1","PT","C2","DF1","A2","DT1","PT","AT1"]),
	2331: SimpleSelf(2331, [1,2,3,8], ["A2","C2","F1","PW","C2","A2","F1","AW1"], ['臨海校長']),
	// 黃昏的四神書
	1595: SimpleSelf(1595,          [1,2,4],   ["C2","A1","F1","PF"]),
	1599: SimpleSelf(1599,          [1,2,3,4], ["C2","A1","PW","F1"]),
	1591: LastSpecial(1591,  [-35], [1,2,3,5], ["A1","H1","HT1","F1","PT"], ['黃天依玲']),
	1592: LastSpecial2(1592, [-36], [1,2,3,5], ["A1","H1","HT1","F1","PT"], ['邪龍依玲']),
	1586: LastSpecial(1586,  [-37], [1,3,4,6], ["H1","F1","F1","A1","AF1","AF1"], ['黃天狂']),
	1587: LastSpecial2(1587, [-38], [1,3,4,6], ["H1","F1","F1","A1","HF1","HF1"], ['邪龍狂']),
	// 妖精花園
	1399: SimpleSelf(1399, [1,2,3,4], ["H1","F1","A1","H1"]),
	1403: SimpleSelf(1403, [1,2,3,5], ["DF1","H1","A2","C2","A2"]),
	1517: {
		id: [1392,1393,1394,1395,1514,1515,1516,1517],
		maxPot: [0,1,2,3,3,3,4,5],
		pots: ["F1","C2","H1","F1","A2"],
		evol: [[1],[1],[1],[0,4,4],[],[],[]],
		material: [1392,1392,1392,[1399,1403],0,0,0],
		special: [1396,1400]
	},
	1407: SimpleSelf(1407, [1,2,3,5], ["C2","A2","H1","C2","C2"]),
	// Dragon's Blader
	4016: {
		id: [419,420,421,422,4016],
		maxPot: [2,3,4,6,10],
		pots: ["A2","H2","C2","F1","C2","C2","ADR2","HDR2","ADR2","HDR2"],
		evol: [[1],[1],[1],[0]],
		material: [419,419,419,[]]
	},
	// 巧克力森林
	1424: SimpleSelf(1424, [1,2,3],   ["H1","F1","F1"]),
	1428: SimpleSelf(1428, [1,2,3,5], ["A1","H2","C2","DT1","R1"]),
	2493: {
		alias: ['黑帕查'],
		id: [1429,1430,1431,1432,2493],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A2","F1","C2","PT","R1","F1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1429,1429,-15,1433],
		special: [-15,-16]
	},
	2494: {
		alias: ['白帕查'],
		id: [1429,1430,1431,1433,2494],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A2","F1","DF1","R1","PT","A2"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1429,1429,-16,1432],
		special: [-16,-15]
	},
	2495: {
		alias: ['紅慕瑪','紅木馬'],
		id: [1434,1435,1436,1437,2495],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A1","C2","C2","A2","F1","AF1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1434,1434,-17,1438],
		special: [-17,-18]
	},
	2496: {
		alias: ['青慕瑪','青木馬'],
		id: [1434,1435,1436,1438,2496],
		maxPot: [1,2,3,5,8],
		pots: ["H2","A1","C2","F1","DF1","DW1","PF","HF1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1434,1434,-18,1437],
		special: [-18,-17]
	},
	// 古代森林的千年櫻花
	7110: SimpleSelfWithId([1654,1655,1656,1657,7110], [1,2,3,5,10],
		[4, ["C2","A1","PT","A1","H2","F1","PT2","F2","AT1","HT1"], ["C2","A1","PT","A1","H1"]]),
	7111: SimpleSelfWithId([1658,1659,1660,1661,7111], [1,2,3,5,10], ["C2","F1","HW1","F2","A2","PW","R1","PW2","AW1","HW1"]),
	7112: SimpleSelfWithId([1662,1663,1664,1665,7112], [1,2,3,4,10], 
		[4, ["F1","A2","F2","C2","PF","R1","PF2","H2","HF2","AF2"], ["F1","A2","F1","C2"]]),
	7113: {
		id: [1666,1667,1668,1669,7113],
		maxPot: [1,2,3,5,10],
		pots: ["F1","C2","DT1","PW","AW1","PW2","F2","AW2","HW2","B1"],
		evol: [[1],[1],[0,1],[]],
		material: [1666,1666,-49,[]],
		special: [-49]
	},
	7114: {
		id: [1666,1667,1668,1670,7114],
		maxPot: [1,2,3,5,10],
		pots: ["F1","C2","DT1","PW","AW1","PW2","F2","AW2","HW2","B1"],
		evol: [[1],[1],[0,1],[]],
		material: [1666,1666,-48,[]],
		special: [-48]
	},
	1670: LastSpecial2(1670, [-48], [1,2,3,5], ["F1","C2","DT1","PW","AW1","PW2","F2","AW2","HW2","B1"]),
	// 來者何貘：黑與白的激戰
	800003: SimpleSelf(800003, [2,3,4],   ["A1","H2","F1","AF2"], ['火來貘']),
	800006: SimpleSelf(800006, [3,4,5],   ["F1","H2","A2","C2","PW"], ['水來貘']),
	800010: SimpleSelf(800010, [3,5,7,9], ["R1","A2","H2","H1","C2","F1","A1","DF1","AT2"], ['雷來貘']),
	800013: SimpleSelf(800013, [2,3,5],   ["F1","A2","H2","C2","PT"]),
	// 神龍降臨Ⅰ；這裡資料僅供選擇時使用
	1244: {
		id: [1231,1232,1233,1234,1235,1236,1240,1241,1242,1243,1244],
		maxPot: [1,1,2,1,1,2,2,2,3,4,5],
		pots: ["H1","C2","C2","C2","F1"],
		special: [1237,1238,1239]
	},
	1248: {
		id: [1237,1238,1239,1245,1246,1247,1248],
		maxPot: [1,1,2,2,3,4,5],
		pots: ["A2","A2","C2","C2","F1"],
		special: [1231,1232,1233,1234,1235,1236,1240]
	},
	// 神龍降臨Ⅱ
	2144: SimpleSelf(2144, [2,4,6],   ["A1","H1","PW","DW1","PW","A2"]),
	2147: SimpleSelf(2147, [2,4,5],   ["A1","H1","DT1","DW1","A1"]),
	2151: SimpleSelf(2151, [1,2,4,6], ["A1","C2","H1","F1","PF","H2"]),
	2155: SimpleSelf(2155, [1,3,4,7], ["A1","F1","C2","PT","C2","F1","A2"]),
	// 異界神的祝福試煉
	800678: {
		id: [80002,80003,80004,800016,800678],
		maxPot: [1,2,3,5,10],
		pots: [4, ["C2","F1","PW","HW2","R1","DA1","AW2","H2","PW2","AW2L2"], ["H2","C2","PW","F1","E1"]],
		evol: [[1],[1],[3],[]],
		material: [80002,80002,80004,0]
	},
	800676: {
		id: [80005,80006,80007,800017,800676],
		maxPot: [1,2,3,6,10],
		pots: [4, ["E1","AGO1","F3","A2","PF2","AFT2","HGO3","AGO3","E2","C8"], ["H1","F1","AF2","PF","C2","B1"]],
		evol: [[1],[1],[3],[]],
		material: [80005,80005,80007,0]
	},
	800677: {
		id: [80008,80009,80010,80011,800018,800677],
		maxPot: [1,2,3,5,8,10],
		pots: [5, ["G1","HGO1","F3","A2","PT2","AFT2","HGO3","AGO3","G3","C8"], ["G1","A2","H2","F2","PT","C2","R1","DF1"]],
		evol: [[1],[1],[1],[4],[]],
		material: [80008,80008,80008,80011,0]
	},
	// Halloween Night
	908:  SimpleSelf(908,  [2,3,4,5],   ["H2","PT","A2","H2","PT"]),
	2789: SimpleSelf(2789, [1,2,3,5],   ["PF","F1","PF","F1","HF1"]),
	4858: {
		id: [909,910,911,912,2785,4858],
		maxPot: [2,3,4,6,8,10],
		pots: ["C2","PW","C2","A2","F1","AW1","R1","ADH1","F2","HW1"],
		evol: [[1],[1],[1],[1],[]],
		material: [909,909,909,909,[]]
	},
	4859: {
		id: [2790,2791,2792,2793,2794,4859],
		maxPot: [2,3,4,6,8,10],
		pots: ["F1","PF","DF1","R1","H2","A2","F1","HF1","ADE2","HDE2"],
		evol: [[1],[1],[1],[1],[]],
		material: [2790,2790,2790,2790,[]]
	},
	// 桃娘傳
	7839: {
		id: [979,980,981,982,3425,7839],
		maxPot: [2,3,4,6,10,10],
		pots: [5, ["A4","HDE2","H4","F2","C4","HF3","AF2","PF","F2","ADE2"], ["A2","A2","H2","H2","C2","C2","A2","PF","F2","ADE2"]],
		evol: [[1],[1],[1],[0,1],[0,0,1]],
		material: [979,979,979,3426,-427],
		special: [3426,-427],
		maxPossible: 6
	},
	7840: {
		id: [983,984,985,986,3427,7840],
		maxPot: [2,4,6,7,10,10],
		pots: [5, ["DF2","PT2","H4","HT1D1","C4","HDE2","AT1D1","INV","F2","ADE2"], ["DF1","DF1","H2","H2","C2","C2","A2","PT","F2","ADE2"]],
		evol: [[1],[1],[1],[0,1],[0,0,1]],
		material: [983,983,983,3428,-428],
		special: [3428,-428],
		maxPossible: 7
	},
	// Halloween魔導盃
	2798: $.extend(SimpleSelf(2798, [2,3,4,6], ["F1","H1","PF","A1","HF1","R1"]), {maxPossible: 3}),
	2802: SimpleMaterial(2802, [2,4,6,8], ["AF1","C2","A1","H1","PF","F1","C2","PF"]),
	2806: SimpleMaterial(2806, [2,4,6,8], ["C2","R1","PF","A1","F1","H1","F1","HF1"]),
	2810: SimpleMaterial(2810, [2,4,6,8], ["C2","PF","H1","F1","R1","A1","F1","AF1"]),
	// 異空間棒球 黑貓維茲PRIDE
	1876: SimpleSelf(1876, [2,3,4],   ["H1","A1","H1","A2"]),
	1880: SimpleSelf(1880, [1,2,3,4], ["DW1","F1","H1","A1"]),
	1884: SimpleSelf(1884, [1,2,3,5], ["PW","A1","C2","A2","F1"]),
	1888: SimpleSelf(1888, [1,3,4,5], ["DT1","PT","F1","A2","F1"]),
	1892: SimpleSelf(1892, [1,3,4,6], ["A1","C2","F1","C2","A2","A2"]),
	// 珍妮佛的冒險
	/*477: { // 舊版佩特拉
		id: [474,475,476,477],
		maxPot: [2,2,3,5],
		pots: ["A2","H2","F1","H1","C2"],
		evol: [[1],[2],[3]],
		material: [474,[474,474],[474,474,474]]
	},*/
	// 新生珍妮佛的冒險
	2695: { // 新版佩特拉
		id: [474,475,476,477,2695],
		maxPot: [2,2,3,5,8],
		pots: ["A2","H2","F1","H1","C2","B1","DW1","PT"],
		evol: [[1],[1],[1],[0,1,1,1,1]],
		material: [474,474,474,[2682,2686,2690,2694]],
		special: [2682,2686,2690,2694]
	},
	2682: SimpleSelf(2682, [1,2,3,6], ["F1","PF","A1","F1","H1","F1"]),
	2686: SimpleSelf(2686, [1,2,3,5], ["PT","F1","G1","H1","HT1"]),
	2690: SimpleSelf(2690, [2,3,4,7], ["A1","F1","A1","PW","C2","F1","E1"]),
	2694: SimpleSelf(2694, [2,4,6,9], ["H1","F1","G1","A2","PF","H1","F1","H2","AF1"]),
	// 天上岬～永恆的公主～
	3022: SimpleSelf(3022, [2,3,4,6], ["A1","C2","H2","A1","C2","AW1"]),
	3026: SimpleSelf(3026, [1,3,5,7], ["F1","C2","H1","F1","A2","F1","PF"]),
	3030: SimpleSelf(3030, [2,4,6,8], ["C2","F1","A1","C2","H2","F1","PT","HT1"]),
	3034: SimpleSelf(3034, [2,4,6,9], ["C2","F1","A1","C2","PW","F1","A1","H2","AFA2"]),
	// 黑白貓 Gate Defender 跨越異界的友情羈絆
	3097: SimpleSelf(3097, [2,4,6],   ["H1","PF","F1","A1","F1","R1"]),
	3100: SimpleSelf(3100, [2,5,8],   ["A1","F1","PF","A2","H2","F1","A2","ADR2"]),
	3104: SimpleSelf(3104, [2,4,6,9], ["F1","A1","H2","PF","F1","A2","F1","A2","AWA2"], ['白貓三人']),
	// 聖誕老人的禮物
	1176: SimpleSelf(1176, [2,3,4,6], ["H2","PW","A2","C2","C2","F1"]),
	1180: SimpleSelf(1180, [1,2,3,6], ["A2","F1","H2","A1","H1","C2"]),
	// 霸眼戰線
	6036: SimpleSelfWithId([3275,3276,3277,3278,6036], [2,3,4,7,10],  [4,["PW","H1","F1","H2","A2","HW1","PW2","F1","AW1","F2"],    ["PW","H1","F1","H2","A2","HW1","PW"]]),
	6037: SimpleSelfWithId([3279,3280,3281,3282,6037], [2,3,4,7,10],  [4,["F1","A1","F1","H2","F2","A2","PF","PF2","ADH5","HDH5"],  ["F1","A1","F1","H2","F1","A2","PF"]]),
	6038: SimpleSelfWithId([3283,3284,3285,3286,6038], [2,4,6,8,10],  [4,["A2","PT2","H2","F1","A2","H2","H2","AT1","F2","AT1"],    ["A2","PT","H2","F1","A2","F1","H2","AT1"]]),
	6039: SimpleSelfWithId([3287,3288,3289,3290,6039], [2,4,6,9,10],  [4,["A2","PW2","A2","F1","A2","DW1","A2","DF1","AW1","F2"],   ["A1","PW","A1","F1","A2","DW1","A2","DF1","AW1"]]),
	6040: SimpleSelfWithId([3291,3292,3293,3294,6040], [2,4,7,10,10], [4,["A2","F1","A4","H4","HWT1","PT","PT2","F2","AWT1","AWA2"],["A2","F1","A2","H2","A2","H2","PT","F2","AT1","AWA2"]]),
	// 煉獄來訪者
	1353: SimpleSelf(1353, [2,4,6,8],  ["A2","A2","H2","H2","A2","A2","H2","H2"]),
	1357: SimpleSelf(1357, [2,3,5,8],  ["H2","A2","A2","A2","H2","A2","H2","H2"]),
	// 庫洛姆‧麥格納Ⅳ單戀☆狂想曲
	3396: SimpleSelf(3396, [1,2,4,7],  ["F1","A2","F1","H2","DW1","H2","AT1"]),
	3400: SimpleSelf(3400, [1,3,5,8],  ["C2","H1","A2","F1","PT","H2","F1","HT1"]),
	3404: SimpleSelf(3404, [2,4,6,9],  ["C2","A1","F1","A2","F1","H2","PF","A2","AF2"]),
	3408: SimpleSelf(3408, [2,4,7,10], ["A2","R1","A2","F1","PW","H2","HW1","AW1","F2","ASO2"], ['校長']),
	3412: SimpleSelf(3412, [2,4,6,9],  ["H1","A1","H2","F1","A2","F1","AF1","PF","HF1"]),
	// 歌頌永恆的克羅諾斯 (含復刻SS)
	3814: SimpleSelfWithId([732,733,734,735,3814], [1,2,3,5,8],  ["A2","H2","C2","F1","PW","PW","ADH2","HDH2"]),
	3815: SimpleSelfWithId([762,763,764,765,3815], [1,2,4,6,10], ["F1","A1","H1","C2","F1","F1","PT","F1","ASO2","G1"]),
	3816: {
		alias: ['未來','未來妙舞'],
		id: [1297,1298,1299,1300,3816],
		maxPot: [1,2,4,5,9],
		pots: ["A2","C2","C2","A2","F1","F2","R1","B1","HSO2"],
		evol: [[1],[1],[0,1],[0,0,1]],
		material: [1297,1297,-28,-128],
		special: [-28,-128]
	},
	3817: {
		alias: ['過去','過去妙舞','白妙舞'],
		id: [1297,1298,1299,1301,3817],
		maxPot: [1,2,4,5,9],
		pots: [3, ["H2","A2","C2","C2","AF1","PF","F2","AF1","ASO2"], ["A2","C2","C2","A2"]],
		evol: [[1],[1],[0,1],[0,0,1]],
		material: [1297,1297,-29,-127],
		special: [-29,-127]
	},
	// 歌頌永恆的克羅諾斯Ⅱ
	3832: SimpleSelf(3832, [2,3,4,7],  ["H1","A1","F1","C2","F1","A2","AMA2"]),
	3836: SimpleSelf(3836, [2,4,6,8],  ["A1","F1","C2","F1","A1","H2","DW1","AFA2"]),
	3840: SimpleSelf(3840, [2,4,6,9],  ["A1","F1","PF","A2","F1","H2","DT1","HF1","ADE2"]),
	3844: SimpleSelf(3844, [2,4,7,10], ["A2","PT","F1","H2","AT1","A2","F1","PT","AMA2","HMA2"]),
	// 天界的雙子 訣別的年代記
	3215: SimpleSelf(3215, [1,3,5,7],  ["A1","C2","H1","A1","F1","H2","AW1"]),
	3219: SimpleSelf(3219, [1,3,5,7],  ["F1","C2","F1","H1","F1","A2","PT"]),
	3223: SimpleSelf(3223, [1,3,5,8],  ["A1","F1","H2","PW","A2","R1","F1","AW1"]),
	3227: SimpleSelf(3227, [2,4,6,9],  ["A2","F1","H2","C2","DF1","F1","DF1","A2","AF1"]),
	3231: SimpleSelf(3231, [2,4,7,10], ["A2","F1","H2","A2","F1","H2","AT1","F1","PT","ADE2"]),
	// 幻魔特區 朱雀
	3681: SimpleSelf(3681, [1,2,4,7],  ["H1","A1","C2","A2","PW","F1","HW1"]),
	3685: SimpleSelf(3685, [1,3,5,8],  ["A2","F1","PF","A2","F1","PF","AF1","HMA2"]),
	3689: SimpleSelf(3689, [2,4,6,9],  ["H2","F1","A2","F1","H2","R1","PW","AW1","ADE2"]),
	3693: SimpleSelf(3693, [2,4,7,10], ["A2","PT","H2","F1","A2","DT1","PT","F2","ADE1","HDE2"]),
	// Orlha Report 懷著怨念的亡君
	5752: HardDungeonWithId([2887,2888,2889,2890,2891,5752], [1,2,3,5,10,10], ["A2","C2","H2","F1","C2","PF","F2","C2","A2","AF2"]),
	// Orlha Report 無罪的罪人
	5753: HardDungeonWithId([3086,3087,3088,3089,3090,5753], [2,3,4,6,10,10], ["A1","H1","PW","F1","A1","H1","PW","A2","AW1","F1"]),
	// 菇菇方程式
	800065: {
		id: [800062,800063,800064,800065],
		maxPot: [3,4,5,9],
		pots: ["A2","A2","H1","F1","F1","H2","PF","HF1","AFA2"],
		evol: [[0,1,1,1],[0,1,1,1],[0,2,2,2]],
		material: [[-139,-140,-141],[-139,-140,-141],[[-139,2],[-140,2],[-141,2]]],
		special: [-139,-140,-141]
	},
	800069: {
		id: [800066,800067,800068,800069],
		maxPot: [2,4,6,10],
		pots: ["F1","A1","H1","C2","F1","F1","PT","F1","G1","E1"],
		evol: [[0,1,1,1],[0,1,1,1],[0,2,2,2]],
		material: [[-139,-140,-141],[-139,-140,-141],[[-139,2],[-140,2],[-141,2]]],
		special: [-139,-140,-141]
	},
	800082: {
		id: [800076,800082],
		maxPot: [3,9],
		pots: [1, ["PF","A2","F1","AF1","PF","HF1","R1","DW1","F2"], ["PT","A2","F1"]],
		evol: [[0,3,3,3,1,1,1]],
		material: [[-139,-140,-141,800064,800080,800081]],
		special: [-139,-140,-141,800062,800080,800081]
	},
	// Orlha Report 茸毛頑偶熊
	5754: HardDungeonWithId([3651,3652,3653,3654,3655,5754], [2,3,4,6,10,10], ["A1","PT","H2","A2","F1","PT","H2","A2","F2","ADE2"]),
	// AbyssCode01 黑殼之王
	5048: HardDungeonWithId([2525,2526,2527,2528,2529,5048], [1,2,3,5,10,10],
		[5, ["C4","F1","R2","F1","PF2","HF1","C2","AF2","F2","AF2"], ["C2","F1","C2","F1","PF","HF1","C2","A2","F1","A2"]],
		['AbCd-X']),
	// AbyssCode02 盲目的調和
	5049: HardDungeonWithId([2860,2861,2862,2863,2864,5049], [1,2,3,5,10,10],
		[5, ["C6","DA1","AT2","DA1","R1","DA1","HT2","DA1","R1","DA1"], ["C2","DA1","C2","DA1","R1","DA1","C2","DA1","R1","DA1"]],
		['AbCd-y']),
	// AbyssCode03 生而墮於虛無
	5050: HardDungeonWithId([3064,3065,3066,3067,3068,5050], [1,2,3,5,10,10],
		[5, ["C4","A2","F1","H2","R1","F2","DA1","PW2","AW2","HW2"], ["C2","A2","F1","H2","C2","F2","DA1","PW","AW1","HW1"]],
		['AbCd-A']),
	// AbyssCode04 燃燒殆盡的陽光
	5051: HardDungeonWithId([3358,3359,3360,3361,3362,5051], [2,3,5,7,10,10],
		[5, ["C4","F1","DW1","PF","PF2","R1","AF1","F2","HF2","AF2"], ["C2","F1","DW1","PF","C2","R1","AF1","F1","HAB2","AAB2"]],
		['AbCd-O']),
	// AbyssCode05 冥世的天蓋
	5052: HardDungeonWithId([3746,3747,3748,3749,3750,5052], [1,2,3,5,10,10],
		[5, ["F1","A1","PT2","H2","HT1","F2","PT2","AT1","AT2","RΞ"], ["F1","A1","PT","H2","HT1","F2","PT","AT1","AAB2","R3"]]),
	// AbyssCode06 劫末之獸
	6277: HardDungeon(6277, [1,2,3,7,10], ["PW","F1","A2","PW2","HW2","F2","R2","INV","AW2","HW2"]),
	// 八百萬諸神祕聞
	4091: SimpleSelf(4091, [2,3,4,6], ["H1","A1","PT","F1","A2","AGO2"]),
	4095: SimpleSelf(4095, [3,5,6,8], ["PF","F1","H2","A2","AF1","C2","AGO2","AGO2"]),
	4099: SimpleSelf(4099, [3,5,6,9], ["F1","H1","A1","H2","PT","HT1","F2","AT1","AGO2"]),
	4103: SimpleSelf(4103, [3,6,7,9], ["F1","HW1","PW","F1","AW1","H2","HW1","PW","AGO2"]),
	// Dragon's Blader ZERO
	4021: HardDungeon(4021, [1,2,3,5,10], ["PF","HF1","F1","HDR2","PF","ADR1","AF1","F2","HDR2","ADR2"]),
	// 幻魔特區朱雀Ⅱ
	4259: SimpleSelf(4259, [3,4,5,7], ["C2","H1","F1","PT","F1","A2","HMA2"]),
	4263: SimpleSelf(4263, [3,4,5,8], ["A2","C2","F1","H2","A2","DT1","R1","AMA2"]),
	4267: SimpleSelf(4267, [3,6,7,9], ["F1","A1","PW","H2","F1","H2","AW1","PW","AWA2"]),
	4271: SimpleSelf(4271, [3,6,8,10], ["A2","H2","PT","AT1","DW1","F2","PT","HDE2","ADE2","R1"]),
	// 星耀學園‧遺願的繼承者
	800203: {
		id: [800202,800203],
		maxPot: [8,10],
		pots: ["E1","F1","HGO2","H2","F1","PF2","A2","HF1","HGO1","F1"],
		evol: [[3]],
		material: [[[800202,3]]]
	},
	800205: {
		id: [800204,800205],
		maxPot: [8,10],
		pots: ["PT","C2","F1","C2","AT1","HT1","PT","A2","AGO2","HGO2"],
		evol: [[3]],
		material: [[[800204,3]]]
	},
	800207: {
		id: [800206,800207],
		maxPot: [8,10],
		pots: ["PW","AW1","E1","R1","HGO2","PW","A2","HW1","AW1","B1"],
		evol: [[3]],
		material: [[[800206,3]]]
	},
	800209: {
		id: [800208,800209],
		maxPot: [8,10],
		pots: ["PF","F2","A2","PF2","H2","HF1","AF1","F2","HGO2","AGO2"],
		evol: [[3]],
		material: [[[800208,3]]]
	},
	800211: {
		id: [800210,800211],
		maxPot: [6,10],
		pots: ["PW","F1","AW1","A2","H2","F2","PW","R1","HFW2","AFW3"],
		evol: [[0,1,1]],
		material: [[800213,800214]],
		special: [800213,800214]
	},
	// Demon's Blader
	6459: HardDungeonWithId([1729,1730,1731,1732,1733,4648,6459], [1,2,3,5,10,10,10],
		  [6,["A2","C4","H2","HF2","PF2","AF2","PF2","F2","ADE2","HDE2"],
		   5,["A2","C4","H2","HF1","PF","A1","A1","F2","ADE2","HDE2"],["A1","C2","H1","HF1","C2","PF","H1","AF1","A1","AF1"]]),
	// Divine Blader
	6460: HardDungeonWithId([2133,2134,2135,2136,2137,4649,6460], [1,2,3,5,10,10,10],
		  [6,["H4","F2","H2","PT2","AT2","H2","A4","HT2","AAN2","HAN2"],
		   5,["C4","A2","H2","PT2","AT1","H2","A2","HT1","AAN2","HAN2"],["C2","A1","H1","C2","PT","AT1","H1","PT","A1","HT1"]]),
	// Heretic Blader
	6461: HardDungeonWithId([2298,2299,2300,2301,2302,4650,6461], [1,2,3,5,10,10,10],
		  [6,["C2","F2","H2","HW2","C4","A2","PW2","AW2","AGO2","HGO2"],
		   5,["C2","F2","H2","HW1","C4","A2","PW","AW1","AGO2","HGO2"],["C2","F1","H1","HW1","C2","C2","A2","PW","AW1","F1"]]),
	// Tempest Blader
	6462: HardDungeonWithId([3715,3716,3717,3718,3719,4651,6462], [2,3,5,7,10,10,10],
		  [6,["H2","F1","R1","PF2","HF2","AF2","HGODR2","F2","AGODR2","R1"],
		   5,["H2","F1","R1","PF2","HF1","AF1","HGODR2","F2","AGODR2","R1"],["H2","F1","R1","PF","HF1","PF","AF1","HGODR2","F2","AGODR2"]]),
	// 八百萬諸神祕聞2
	5086: SimpleSelf(5086, [4,5,6,10], ["F1","H1","A1","H1","F1","HW1","PW","HW1","PW","AW1"]),
	5090: SimpleSelf(5090, [4,5,6,10], ["PF","F1","A1","H1","PF","HF1","AF1","F1","AF1","F1"]),
	5094: SimpleSelf(5094, [4,6,8,10], ["PT","H2","F1","PT","HT1","R1","AT1","F1","HT1","AT1"]),
	// 空戰的德爾基馬斯
	4824: SimpleSelf(4824, [3,5,7,9],  ["PT","F1","HT1","F1","A2","HWA1","PT","AWA1","AT1"]),
	4828: SimpleSelf(4828, [3,5,7,10], ["A2","F1","H2","PF","C2","AF1","A2","R1","PF","AF1"]),
	4832: SimpleSelf(4832, [3,6,8,9],  ["PW","F1","E1","H1","AW1","HW1","H1","PW","A2"]),
	4836: SimpleSelf(4836, [3,6,8,10], ["PW","A2","F1","R1","AW1","PW","F1","HW1","F1","ADE2"], ["伊庫諾比利烏姆"]),
	4839: SimpleSelf(4839, [4,7,10],   ["PW","H2","F1","AWT1","F1","HMA2","PW","HWT1","A2","AMA2"]),
	// 雙翼的失落伊甸
	5147: SimpleSelf(5147, [4,5,6,10], ["F1","A1","PT","AT1","F1","HT1","H1","HT1","PT2","AT1"]),
	5151: SimpleSelf(5151, [4,5,6,10], ["F1","A2","PW","AW1","F1","HW1","A1","HW1","PW","R1"]),
	5155: SimpleSelf(5155, [4,5,6,10], ["F1","HF1","PF2","AF1","F1","HF2","F2","A2","ADE2","HDE2"]),
	5159: SimpleSelf(5159, [4,7,8,10], ["PT","F1","R1","H2","AT1","PT2","HT1","A2","ADE2","F2"]),
	5162: SimpleSelf(5162, [4,7,10],   ["F1","PW","HW1","H2","AW1","PW2","R1","A2","F2","HANDE2"]),
	// 超魔導列傳
	4707: SimpleSelf(4707, [2,4,8,10], ["C2","A2","PF","HF1","AF1","PF","H2","F2","ASO2","HSO2"]),
	4711: SimpleSelf(4711, [2,4,7,10], ["F1","PW2","AW1","F2","H2","HW1","AW1","A2","HSO2","ASO2"]),
	4715: SimpleSelf(4715, [2,5,8,10], ["PF","F2","A2","PF2","H2","HF1","AF1","F2","HSO2","ASO2"]),
	// 天上岬的調香師
	5507: SimpleSelf(5507, [4,5,6,10], ["F1","H1","A1","H1","F1","HW1","PW","AW1","PW","ADH2"]),
	5511: SimpleSelf(5511, [4,5,6,10], ["F1","HT1","PT","AT1","H2","AT1","F1","A2","HFA3","AFA3"]),
	5515: SimpleSelf(5515, [4,6,8,10], ["PF","HF1","H2","AF1","F1","PF2","HF1","R1","AF1","A2"]),
	// 蕊颯
	5672: {
		id: [5670,5671,5672],
		maxPot: [4,7,10],
		pots: ["F1","HF1","H2","A2","AF1","E1","PF","AF1","F2","PF2"],
		evol: [[3],[4]],
		material: [[[5670,3]],[5671]]
	},
	// 黃昏無夢者
	5850: SimpleSelf(5850, [2,5,8,10], ["H2","DT1","PT2","F1","R1","F1","PT2","B1","AT2","HT2"]),
	5854: SimpleSelf(5854, [3,6,8,10], ["A2","PF2","HF1","AF1","F1","PF2","R1","HF2","F2","AF2"]),
	5858: SimpleSelf(5858, [4,6,8,10], ["A2","PW","F1","HW1","AW1","PW2","HW2","R1","F1","AW2"]),
	// 霸眼戰線2
	6068: SimpleSelf(6068, [4,6,8,10], ["PT","H1","F1","H2","A2","HT1","PT2","AWA1","AT1","F2"]),
	6072: SimpleSelf(6072, [4,6,8,10], ["A2","PF","F1","PF2","AF1","DF1","F2","ADE2","HDE2","R1"]),
	6076: SimpleSelf(6076, [4,6,8,10], ["A2","F1","A2","H4","HW1","PW","PW2","F2","A2","AW2"]),
	6080: SimpleSelf(6080, [4,6,8,10], ["A2","H2","PT","HFT2","F1","PT2","F2","R1","AWA1","AFT2"]),
	// 幻魔特區 朱雀Ⅲ
	6361: SimpleSelf(6361, [1,3,6,10], ["PF","A1","F1","H2","A2","AF1","PF2","F2","AMA3","HMA3"]),
	6365: SimpleSelf(6365, [1,3,6,10], ["PW","F1","A2","H2","PW2","AW1","HW1","F2","ADE3","HDE3"]),
	6369: SimpleSelf(6369, [1,3,6,10], ["A2","F1","A2","H2","AFT1","PT","PT2","F2","ADE3","HDE3"]),
	6373: SimpleSelf(6373, [1,3,6,10], ["F1","HW1","PW2","A2","AW1","H2","R1","F2","AW2","HW2"]),
	// 聖惡魔女子學院
	6214: SimpleSelf(6214, [3,5,7,10], ["A2","PT","A2","F1","PT2","AT1","HT1","F2","ADE2","HDE2"]),
	6218: SimpleSelf(6218, [3,5,7,10], ["A2","F1","A2","H2","PF","PF2","F2","AF2","HAN3","AAN3"]),
	6222: SimpleSelf(6222, [3,5,7,10], ["A2","H2","PW","A2","F1","PW2","AW1","F2","AW1","HW2"]),
	// 初夏的魔法使慶典
	800730: {
		id: [800729,800730],
		maxPot: [8,10],
		pots: ["A1","H2","A2","C2","F2","PT","R1","AT2","DA1","AT2"],
		evol: [[4,1,1,1,1]],
		material: [[[800729,4],800750,800760,800756,800766]],
		special: [800750,800760,800756,800766]
	},
	800742: {
		id: [800741,800742],
		maxPot: [8,10],
		pots: ["A1","DMA1","H2","C2","F2","DWT2","C4","PT2","AMC3","HMC3"],
		evol: [[1,1,1,1,1,1,1]],
		material: [[800741,800752,800754,800758,800760,800764,800766]],
		special: [800752,800754,800758,800760,800764,800766]
	},
	// 續・超魔導列傳
	6566: SimpleSelf(6566, [3,5,8,10], ["R1","PW","F1","HW1","A3","AW1","PW2","HSO2","F2","ASO2"]),
	6570: SimpleSelf(6570, [4,6,8,10], ["PT","A2","F1","H2","AT1","F2","A2","HT2","AT2","PT2"]),
	6574: SimpleSelf(6574, [4,6,8,10], ["H2","A2","PF2","F1","R1","F1","PF2","HF2","AF2","B1"]),
	// YAOYORO Z
	6857: SimpleSelf(6857, [4,6,8,10], ["PT","H2","A2","F1","AT1","PT2","HT1","F2","AT1","R1"]),
	6861: SimpleSelf(6861, [4,6,8,10], ["F2","PW","AW1","HW1","PW","H2","AW1","A2","PW2","HW1"]),
	6865: SimpleSelf(6865, [4,6,8,10], ["F1","A2","H2","PF2","F2","A2","PF2","HFT2","AFT2","CG1"]),
	// 德蕾姬亞
	6159: HardDungeon(6159, [2,3,6,10], ["E1","F1","HW1","PW","R1","F1","H2","A2","HW2","PW2"]),
	// 雙翼的失落伊甸Ⅱ WWMF
	7170: SimpleSelf(7170, [3,5,7,10], ["F1","PF","AF1","HF1","R1","HF1","PF2","AF1","F2","N1"]),
	7174: SimpleSelf(7174, [3,5,7,10], ["A2","R1","H2","PT","HMA2","PT2","F2","HT2","AT2","AMA2"]),
	7178: SimpleSelf(7178, [3,5,7,10], ["F1","A2","PW","HW1","H2","F2","PW2","AW1","R1","AW2D1"]),
	// 庫洛姆‧麥格納 零
	6947: SimpleSelf(6947, [3,5,8,10], ["PW","H2","A2","F1","AW1","PW2","HW1","F2","AW1","R1"]),
	6951: SimpleSelf(6951, [3,5,8,10], ["F1","PT","AT1","HT1","PT","H2","AT1","A2","PT2","R1"]),
	6955: SimpleSelf(6955, [3,5,8,10], ["A2","R1","HW1","H2","PW","PW2","F2","AW1","HW1D1","AW1D1"]),
	6959: SimpleSelf(6959, [4,6,8,10], ["R1","A2","H2","PF","F2","AF1","PF2","HF1","HDE2","ADE2"]),
	// 白貓×黑貓×glico 快樂甜點嘉年華
	5613: SimpleSelf(5613, [4,5,6,10], ["HF1","PF2","H2","AF1","HF1","PF2","F2","HFA3","AFA3","INV"]),
	5617: SimpleSelf(5617, [4,5,6,10], ["F2","HT1","PT2","A2","HT1","PT2","AT1","HFA3","AFA3","R3"]),
	5621: SimpleSelf(5621, [4,5,6,10], ["E1","HW1","PW2","H2","AW1","A2","F2","HFA3","AFA3","SHIN"]),
	5623: SimpleSelf(5623, [4,10],     ["PF2","HF1","PF2","AF1","H2","AF1","F2","A2","HFA3","AFA3"]),
	5627: SimpleSelf(5627, [4,6,8,10], ["PF","F1","R1","H2","AF1","PF2","HF1","A2","AF1","F2"]),
	// 空戰的德爾基馬斯Ⅱ 昏暗英雄
	7053: SimpleSelf(7053, [2,4,6,10], ["PT","A1","H1","PT2","AT1","HT1","F1","HT1","F2","AT1"]),
	7057: SimpleSelf(7057, [3,6,8,10], ["F1","PF","A2","H2","AF2","A2","PF2","HF1","ADR2","R1"]),
	7061: SimpleSelf(7061, [3,5,7,10], ["F1","A1","PW","H2","PW2","A2","F2","AW1","AWA2","SHIN"]),
	7065: SimpleSelf(7065, [3,6,8,10], ["F1","A2","PT","HT1","H2","F2","PT2","AT1","R1","AT2D1"]),
	// 追憶的閃耀光輝
	7243: SimpleSelf(7243, [3,5,7,10], ["C10","PF","H2","A2","F1","AF1","R1","HSO2","F2","HF1"]),
	7247: SimpleSelf(7247, [3,5,7,10], ["F1","H2","C10","PT","DA1","F2","HT1","PT","AT1","PT2"]),
	7251: SimpleSelf(7251, [3,5,7,10], ["F1","PW2","AWT1","R1","HWT1","DT1","PW2","F2","HMA3","AMA3"]),
	// 心龍天翔 Rising Dragon
	7406: SimpleSelf(7406, [2,4,7,10], ["PT","A1","H1","PT2","AT1","HT1","F1","HT1","AT1","F2"]),
	7410: SimpleSelf(7410, [2,4,7,10], ["F1","PF","A2","H2","AFT2","R1","HFT2","F2","PF2","ADR2"]),
	7414: SimpleSelf(7414, [2,4,7,10], ["F1","A2","PW","HW2","H2","F2","R1","PW2","AW2","ADR2"]),
	// 武鬥之巔‧寒冰嶺上的召集
	800963: {
		id: [800962,800963],
		maxPot: [8,10],
		pots: ["A2","AW2","PW","F2","HW2","DF1","PW2","F1","AW2","CG1"],
		evol: [[3]],
		material: [[[800962,3]]]
	},
	// 黃昏無夢者Ⅱ 殘響dearless
	7343: SimpleSelf(7343, [3,5,7,10], ["PF","A1","H1","PF2","AF1","HF1","F1","HF1","F1","AF1"]),
	7347: SimpleSelf(7347, [3,5,7,10], ["F1","PW","A2","H2","AW2","A2","F1","PW2","HW1","R1"]),
	7351: SimpleSelf(7351, [3,5,7,10], ["F1","A1","PT","H1","PT2","A2","F2","H2","AT1","HT1"]),
	7355: SimpleSelf(7355, [3,5,7,10], ["F1","A2","PF","HF1","H2","F2","PF2","AF1","R1","DT1"]),
	// 《幻世之約》—沉月與洛恩斯的交匯
	801002: {
		id: [801001,801002],
		maxPot: [6,10],
		pots: ["A2","H2","PW","F1","AW1","HW1","F1","DFW1","AMA2","R1"],
		evol: [[0,14,1,1]],
		material: [[[-381,2],[-382,4],-383,-384]],
		special: [-381,-383,-384]
	},
	// 魔法GLICOⅠ
	2826: SimpleSelf(2826, [1,2,3,5], ["C2","H1","A1","PW","DF1"]),
	2830: SimpleSelf(2830, [2,3,4,6], ["A1","F1","A1","F1","C2","F1"]),
	2834: SimpleSelf(2834, [2,3,4,6], ["F1","C2","A1","PF","F1","AF1"]),
	5570: SimpleSelfWithId([2835,2836,2837,2838,4332,5570], [2,4,6,9,10,10],
		[5,["DF1","PW","F1","C4","DW1","PW2","H2","F1","HW1","HFA3"],
		   ["DF1","PW","F1","C2","DW1","C2","H2","F1","HW1","HFA2"]]),
	5571: SimpleSelfWithId([2839,2840,2841,2842,4333,5571], [2,3,5,8,10,10],
		[5,["A1","F1","C4","H1","PT","HFT1","F1","HFA3","PT","AFA3"],
		   ["A1","F1","C2","H1","PT","C2","F1","HFA2","PT","AFA2"]]),
	// 魔法GLICOⅡ
	4313: SimpleSelf(4313, [3,4,5,7],  ["C2","F1","A1","C2","H2","PF","HF1"]),
	4317: SimpleSelf(4317, [3,4,5,8],  ["A1","H1","F1","A1","C2","H2","AT1","HFA2"]),
	4321: SimpleSelf(4321, [3,6,7,9],  ["F1","A2","DF1","A2","DW1","PW","AW1","HFA2","AFA2"]),
	4325: SimpleSelf(4325, [3,6,8,10], ["A2","H2","PF","A2","PF","H2","AF1","C2","HFA2","AFA2"]),
	// 魔轟三鐵傑 對 地獄三十六歌仙
	7760: SimpleSelf(7760, [4,6,8,10], ["PT","A1","H1","PT2","AT1","HT1","F1","HT1","AT1","F2"]),
	7764: SimpleSelf(7764, [3,5,7,10], ["F1","A2","PF","H2","ASO2","F2","R1","PF2","AF2","HF2"]),
	7768: SimpleSelf(7768, [3,5,7,10], ["F1","A2","PW","HW2","H2","F2","R1","PW2","ASO2","AW2D1"]),
	7772: SimpleSelf(7772, [3,5,7,10], ["A2","PT","C2","HT2","F1","H2","PT2","R1","AT2","F2"]),
	// 淡薄的藍色光芒 第二章 虛幻聖域
	7648: SimpleSelf(7648, [2,5,7,10], ["A2","H2","F1","AW1","HW1","PW","AWA2","HWA2","PW2","F2"]),
	// 神聖天空之星
	7523: SimpleSelf(7523, [3,6,8,10], ["PW","A1","H1","PW2","AW1","HW1","F1","HW1","F2","AW1"]),
	7527: SimpleSelf(7527, [3,6,8,10], ["F1","PT","A2","H2","AT1","DT1","R1","HT1","PT2","F2"]),
	7531: SimpleSelf(7531, [3,6,8,10], ["F1","A1","PW","H1","PW2","A2","F2","H2","AGO2","HGO1"]),
	7535: SimpleSelf(7535, [3,6,8,10], ["A2","DD1","PF","F1","R1","PF2","F2","HGO2","AGO2","AF1L1"]),
	// 新說 桃娘傳 妖爺合戰誓助劍
	7867: SimpleSelf(7867, [3,5,7,10], ["F2","A1","H1","ASO2","PF","F2","PF2","A2","HSO2","AF2"]),
	7871: SimpleSelf(7871, [3,5,7,10], ["F1","H2","PF","HF2","R1","F2","A2","PF2","AF2","R1"]),
	7875: SimpleSelf(7875, [3,5,7,10], ["A1","PT","F2","HT2","C2","F2","H2","PT2","A2","AT2"]),
};

series = {
	'御三家': [3626,3627,3628],
	'蕊颯': [5672],
	'德蕾姬亞': [6159],
	'惡作劇女神與兔子的故事': [7566,7567,7568,7569],
	'黃昏的四神書': [1595,1599,1591,1592,1586,1587],
	'妖精花園': [1399,1403,1517,1407],
	'巧克力森林': [1424,1428,2493,2494,2495,2496],
	'古代森林的千年櫻花': [7110,7111,7112,7113,7114],
	'來者何貘：黑與白的激戰': [800003,800006,800010,800013],
	'神龍降臨Ⅰ': [1244,1248],
	'神龍降臨Ⅱ': [2144,2147,2151,2155],
	'異界神的祝福試煉': [800678,800676,800677],
	'Halloween Night': [2789,908,4858,4859],
	'桃娘傳': [7839,7840],
	'Halloween魔導盃': [2798,2802,2806,2810],
	'異空間棒球 黑貓維茲PRIDE': [1876,1880,1884,1888,1892],
	'新生珍妮佛的冒險': [/*477,*/2682,2686,2690,2694,2695],
	'天上岬～永恆的公主～': [3022,3026,3030,3034],
	'黑白貓 Gate Defender 跨越異界的友情羈絆': [3097,3100,3104],
	'聖誕老人的禮物': [1180,1176],
	"Dragon's Blader": [4016],
	'霸眼戰線': [6036,6037,6038,6039,6040],
	'煉獄來訪者': [1353,1357],
	'庫洛姆‧麥格納Ⅰ魔導學園': [2277,614],
	'庫洛姆‧麥格納Ⅱ學園祭': [815,819],
	'庫洛姆‧麥格納Ⅲ臨海學校': [2319,2323,2327,2331],
	'庫洛姆‧麥格納Ⅳ單戀☆狂想曲': [3396,3400,3404,3408,3412],
	'歌頌永恆的克羅諾斯': [3814,3815,3816,3817],
	'歌頌永恆的克羅諾斯Ⅱ': [3832,3836,3840,3844],
	'天界的雙子 訣別的年代記': [3215,3219,3223,3227,3231],
	'幻魔特區 朱雀': [3681,3685,3689,3693],
	'Orlha Report 懷著怨念的亡君': [5752],
	'Orlha Report 無罪的罪人': [5753],
	'菇菇方程式': [800065,800069,800082],
	'Orlha Report 茸毛頑偶熊': [5754],
	'AbyssCode01 黑殼之王': [5048],
	'AbyssCode02 盲目的調和': [5049],
	'AbyssCode03 生而墮於虛無': [5050],
	'AbyssCode04 燃燒殆盡的陽光': [5051],
	'八百萬諸神祕聞': [4091,4095,4099,4103],
	"Dragon's Blader ZERO": [4021],
	'AbyssCode05 冥世的天蓋': [5052],
	'幻魔特區 朱雀Ⅱ': [4259,4263,4267,4271],
	'星耀學園‧遺願的繼承者': [800203,800205,800207,800209,800211],
	"Demon's Blader": [6459],
	'Divine Blader': [6460],
	'Heretic Blader': [6461],
	'Tempest Blader': [6462],
	'八百萬諸神祕聞2': [5086,5090,5094],
	'空戰的德爾基馬斯': [4824,4828,4832,4836,4839],
	'雙翼的失落伊甸': [5147,5151,5155,5159,5162],
	'超魔導列傳': [4707,4711,4715],
	'天上岬的調香師': [5507,5511,5515],
	'黃昏無夢者': [5850,5854,5858],
	'霸眼戰線2': [6068,6072,6076,6080],
	'幻魔特區 朱雀Ⅲ': [6361,6365,6369,6373],
	'AbyssCode06 劫末之獸': [6277],
	'聖惡魔女子學院': [6214,6218,6222],
	'初夏的魔法使慶典': [800730,800742],
	'續・超魔導列傳': [6566,6570,6574],
	'YAOYORO Z': [6857,6861,6865],
	'雙翼的失落伊甸Ⅱ WWMF': [7170,7174,7178],
	'庫洛姆‧麥格納 零':[6947,6951,6955,6959],
	'白貓×黑貓×glico 快樂甜點嘉年華': [5613,5617,5621,5623,5627],
	'空戰的德爾基馬斯Ⅱ 昏暗英雄': [7053,7057,7061,7065],
	'追憶的閃耀光輝': [7243,7247,7251],
	'心龍天翔 Rising Dragon': [7406,7410,7414],
	'武鬥之巔‧寒冰嶺上的召集': [800963],
	'黃昏無夢者Ⅱ 殘響dearless': [7343,7347,7351,7355],
	'《幻世之約》—沉月與洛恩斯的交匯': [801002],
	'魔轟三鐵傑 對 地獄三十六歌仙': [7760,7764,7768,7772],
	'魔法GLICOⅠ': [2826,2830,2834,5570,5571],
	'魔法GLICOⅡ': [4313,4317,4321,4325],
	'淡薄的藍色光芒 第二章 虛幻聖域': [7648],
	'神聖天空之星': [7523,7527,7531,7535],
	'新說 桃娘傳 妖爺合戰誓助劍': [7867,7871,7875],
};

for(var s in series) series[s].forEach(function(id){data[id].series = s;});

seriesAlias = {
	'庫洛姆‧麥格納Ⅰ魔導學園':['學園Ⅰ'],
	'庫洛姆‧麥格納Ⅱ學園祭':['學園Ⅱ'],
	'庫洛姆‧麥格納Ⅲ臨海學校':['學園Ⅲ'],
	'庫洛姆‧麥格納Ⅳ單戀☆狂想曲':['學園Ⅳ'],
	'神龍降臨Ⅰ':['神龍Ⅰ'],
	'神龍降臨Ⅱ':['神龍Ⅱ'],
	'歌頌永恆的克羅諾斯':['克羅諾斯Ⅰ'],
	'AbyssCode01 黑殼之王':['AbyssCode1','AbCd1','AbCd01'],
	'AbyssCode02 盲目的調和':['AbyssCode2','AbCd2','AbCd02'],
	'AbyssCode03 生而墮於虛無':['AbyssCode3','AbCd3','AbCd03'],
	'AbyssCode04 燃燒殆盡的陽光':['AbyssCode4','AbCd4','AbCd04'],
	'AbyssCode05 冥世的天蓋':['AbyssCode5','AbCd5','AbCd05'],
	'AbyssCode06 劫末之獸':['AbyssCode6','AbCd6','AbCd06'],
	'幻魔特區 朱雀': ['幻魔Ⅰ','朱雀Ⅰ'],
	'幻魔特區 朱雀Ⅱ': ['幻魔Ⅱ'],
	'幻魔特區 朱雀Ⅲ': ['幻魔Ⅲ'],
	'八百萬諸神祕聞': ['八百萬諸神祕聞Ⅰ','八百萬Ⅰ','800w'],
	'八百萬諸神祕聞2': ['八百萬諸神祕聞Ⅱ','八百萬Ⅱ','800w2','8002','1600w'],
	'超魔導列傳': ['超魔道列傳'],
	'Halloween Night': ['新生Halloween Night','新生 Halloween Night'],
	'天上岬的調香師': ['天上岬Ⅱ'],
	'異界神的祝福試煉': ['異界神的二度試煉'],
	'YAOYORO Z': ['八百萬諸神祕聞Ｚ','八百萬Ｚ','八百萬諸神祕聞Z','八百萬Z','800wz','800z'],
	'雙翼的失落伊甸Ⅱ WWMF': ['雙翼Ⅱ'],
	'庫洛姆‧麥格納 零':['學園零','學園0'],
	'白貓×黑貓×glico 快樂甜點嘉年華':['固力果Ⅲ'],
	'空戰的德爾基馬斯': ['空戰Ⅰ','空戰的德爾基馬斯Ⅰ'],
	'空戰的德爾基馬斯Ⅱ 昏暗英雄': ['空戰Ⅱ'],
	'黃昏無夢者': ['黃昏Ⅰ'],
	'黃昏無夢者Ⅱ 殘響dearless': ['黃昏Ⅱ'],
	'魔法GLICOⅠ': ['固力果Ⅰ'],
	'魔法GLICOⅡ': ['固力果Ⅱ'],
	'桃娘傳': ['桃娘傳Ⅰ'],
	'新說 桃娘傳 妖爺合戰誓助劍': ['新說桃娘傳','桃娘傳Ⅱ'],
};

evolTooltip = {
	// 妖精花園
	1399: {1396:4},
	1403: {1400:4},
	// 巧克力森林
	1432: {1429:3,'-15':1},
	1433: {1429:3,'-16':1},
	1437: {1434:3,'-17':1},
	1438: {1434:3,'-18':1},
	// 神龍降臨Ⅰ
	1233: {1231:3},
	1236: {1234:3},
	1239: {1237:3},
	1240: {1231:3,1234:3},
	// 異界神的祝福試煉
	80004: {80002:3},
	80007: {80005:3},
	80011: {80008:4},
	// 新生珍妮佛的冒險
	2682: {2679:4},
	2686: {2683:4},
	2690: {2687:4},
	2694: {2691:4},
	// 菇菇方程式
	800064: {800062:1,'-139':2,'-140':2,'-141':2},
	// 蕊颯
	5671: {5670:4},
};

hardDungeonTooltip = [
	data[series["Demon's Blader"][0]].id,
	data[series['Divine Blader'][0]].id,
	data[series['Heretic Blader'][0]].id,
	data[series['Orlha Report 懷著怨念的亡君'][0]].id,
	data[series['Orlha Report 無罪的罪人'][0]].id,
	data[series['Orlha Report 茸毛頑偶熊'][0]].id,
	data[series['AbyssCode01 黑殼之王'][0]].id,
	data[series['AbyssCode02 盲目的調和'][0]].id,
	data[series['AbyssCode03 生而墮於虛無'][0]].id,
	data[series['AbyssCode04 燃燒殆盡的陽光'][0]].id,
	data[series['AbyssCode05 冥世的天蓋'][0]].id,
	data[series['AbyssCode06 劫末之獸'][0]].id,
	data[series["Dragon's Blader ZERO"][0]].id,
	data[series['Tempest Blader'][0]].id,
	data[series['AbyssCode05 冥世的天蓋'][0]].id,
	data[series['德蕾姬亞'][0]].id,
]

hardDungeonTooltip.forEach(function(idlist){
	var len = idlist.length;
	for(var i = 1; i < len - 1; i++)
	{
		var list = {};
		list[idlist[0]] = 1<<i;
		evolTooltip[idlist[i]] = list;
	}
})

grayiconlist = [
	//新版珍妮佛的冒險
	//2682,2686,2690,2694,2695
];

menuOrder = [
	'御三家',
	'新說 桃娘傳 妖爺合戰誓助劍',
	'神聖天空之星',
	'===近期結束副本',
	'淡薄的藍色光芒 第二章 虛幻聖域',
	'魔法GLICOⅠ',
	'魔法GLICOⅡ',
	'===魔導士之家',
	"Demon's Blader",
	'Divine Blader',
	'Heretic Blader',
	'Tempest Blader',
	'AbyssCode01 黑殼之王',
	'AbyssCode02 盲目的調和',
	'AbyssCode03 生而墮於虛無',
	'AbyssCode04 燃燒殆盡的陽光',
	'AbyssCode05 冥世的天蓋',
	'AbyssCode06 劫末之獸',
	'桃娘傳',	// 結束日期未知
	'===過去副本',
	'魔轟三鐵傑 對 地獄三十六歌仙',
	'惡作劇女神與兔子的故事',
	'空戰的德爾基馬斯',
	'《幻世之約》—沉月與洛恩斯的交匯',
	'黃昏無夢者Ⅱ 殘響dearless',
	'武鬥之巔‧寒冰嶺上的召集',
	'心龍天翔 Rising Dragon',
	'黃昏無夢者',
	'神龍降臨Ⅰ',
	'神龍降臨Ⅱ',
	'追憶的閃耀光輝',
	'空戰的德爾基馬斯Ⅱ 昏暗英雄',
	'白貓×黑貓×glico 快樂甜點嘉年華',
	'古代森林的千年櫻花',
	'庫洛姆‧麥格納Ⅰ魔導學園',
	'庫洛姆‧麥格納Ⅱ學園祭',
	'庫洛姆‧麥格納Ⅲ臨海學校',
	'庫洛姆‧麥格納Ⅳ單戀☆狂想曲',
	'庫洛姆‧麥格納 零',
	'雙翼的失落伊甸Ⅱ WWMF',
	'八百萬諸神祕聞',
	'八百萬諸神祕聞2',
	'YAOYORO Z',
	'德蕾姬亞',
	'續・超魔導列傳',
	'超魔導列傳',
	'初夏的魔法使慶典',
	'聖惡魔女子學院',
	'歌頌永恆的克羅諾斯',
	'歌頌永恆的克羅諾斯Ⅱ',
	'幻魔特區 朱雀Ⅲ',
	'霸眼戰線',
	'幻魔特區 朱雀',
	'幻魔特區 朱雀Ⅱ',
	'Orlha Report 懷著怨念的亡君',
	'Orlha Report 無罪的罪人',
	'Orlha Report 茸毛頑偶熊',
	'蕊颯',
	'霸眼戰線2',
	'巧克力森林',
	'異界神的祝福試煉',
	'聖誕老人的禮物',
	'菇菇方程式',
	'天上岬的調香師',
	'天上岬～永恆的公主～',
	'Halloween Night',
	'雙翼的失落伊甸',
	'天界的雙子 訣別的年代記',
	'煉獄來訪者',
	'星耀學園‧遺願的繼承者',
	'新生珍妮佛的冒險',
	"Dragon's Blader ZERO",
	"Dragon's Blader",
	'妖精花園',
	'黃昏的四神書',
	'黑白貓 Gate Defender 跨越異界的友情羈絆',
	'異空間棒球 黑貓維茲PRIDE',
	'Halloween魔導盃',
	'來者何貘：黑與白的激戰',
];

menu = [];
menuOrder.forEach(function(s){
	if(s == '---')
		menu.push(0);
	else if(s.substr(0,3) == '===')
		menu.push(s.slice(3));
	else
		Array.prototype.push.apply(menu, series[s]);
	}
);
