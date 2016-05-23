potData = {
	F1:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅰ"},
	F2:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅱ"},
	C2:  {icon: "Senzai_CostDown",   name: "減少COSTⅡ"},
	R1:  {icon: "Senzai_Konki",      name: "九死一生Ⅰ"},
	H1:  {icon: "Senzai_HP",         name: "HP上升Ⅰ"},
	H2:  {icon: "Senzai_HP",         name: "HP上升Ⅱ"},
	A1:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅰ"},
	A2:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅱ"},
	PF:  {icon: "Senzai_Appear_F",   name: "問題類型屬性提昇·火"},
	PW:  {icon: "Senzai_Appear_W",   name: "問題類型屬性提昇·水"},
	PT:  {icon: "Senzai_Appear_T",   name: "問題類型屬性提昇·雷"},
	E1:  {icon: "Senzai_EXP",        name: "微幅提升獲得的經驗值"},
	G1:  {icon: "Senzai_Gold",       name: "微幅提升獲得的金幣"},
	B1:  {icon: "Senzai_BattleEnd",  name: "戰鬥結束後回復全體隊友的HP"},
}

{
	var Type = {F:'火屬性', W:'水屬性', T:'雷屬性', A:'全屬性'}
	var DualType = {FW:'火、水屬性', FT:'火、雷屬性', WT:'水、雷屬性'}
	var Race = {WA:'戰士', SO:'術士', FA:'妖精', AN:'天使', DE:'魔族', DH:'亞人', DR:'龍族', GO:'神族', MA:'物質', AB:'AbCd '}
	var DualRace = {GODR:'神族、龍族'}
	var Roman = {'1':'Ⅰ', '2':'Ⅱ'}
	var Attribute = {
		A:function(x){return x+'攻擊力上升';},
		H:function(x){return x+'HP上升';},
		D:function(x){return '減輕'+x+'傷害';},
	}
	var AttrIcon = {A:'ATK', H:'HP', D:'Shield'}

	for(var attr in Attribute)
	{
		for(var t in Type)
		{
			for(var num in Roman)
			{
				potData[attr+t+num] = {icon: "Senzai_"+AttrIcon[attr]+"_"+t, name: Attribute[attr](Type[t])+Roman[num]};
			}
		}
	}

	for(var dt in DualType)
	{
		for(var num in Roman)
		{
			potData['D'+dt+num] = {icon: "Senzai_Shield_"+dt, name: Attribute.D(DualType[dt])+Roman[num]};
		}
	}

	var r = $.extend({},Race,DualRace);
	for(var attr in Attribute)
	{
		if(attr == 'D') continue;
		for(var token in r)
		{
			for(var num in Roman)
			{
				potData[attr+token+num] = {icon: "Senzai_"+AttrIcon[attr]+"_Race", name: Attribute[attr](r[token])+Roman[num]};
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
	1756: SimpleSelf(1756, [1,1,2,3], ["A1","A1","F1"]),
	1760: SimpleSelf(1760, [1,2,3,5], ["F1","PF","H1","R1","A2"]),
	1764: SimpleSelf(1764, [2,3,4,6], ["A1","F1","C2","A2","PW","A2"]),
	1768: SimpleSelf(1768, [1,2,3,5], ["A1","C2","PT","A2","F1"]),
	// 庫洛姆‧麥格納Ⅰ魔導學園
	2277: LastSpecialWithId([595,596,597,598,2277], [-33,-33], [1,2,3,4,7], ["A2","A2","H2","H2","C2","AW1","PW"]),
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
	1657: SimpleSelf(1657,          [1,2,3,5], ["C2","A1","PT","A1","H1"]),
	1661: SimpleSelf(1661,          [1,2,3,5], ["C2","F1","HW1","F1","A2"]),
	1665: SimpleSelf(1665,          [1,2,3,4], ["F1","A2","F1","C2"]),
	1669: LastSpecial(1669,  [-49], [1,2,3,5], ["F1","C2","DT1","PW","AW1"]),
	1670: LastSpecial2(1670, [-48], [1,2,3,5], ["F1","C2","DT1","PW","AW1"]),
	// 來者何貘：黑與白的激戰
	800003: SimpleSelf(800003, [2,3,4],   ["A1","H2","F1","AF2"], ['火來貘']),
	800006: SimpleSelf(800006, [3,4,5],   ["F1","H2","A2","C2","PW"], ['水來貘']),
	800010: SimpleSelf(800010, [3,5,7,9], ["R1","A2","H2","H1","C2","F1","A1","DF1","AT2"], ['雷來貘']),
	800013: SimpleSelf(800013, [2,3,5],   ["F1","A2","H2","C2","PT"]),
	// Demon's Blader
	1733: HardDungeon(1733, [1,2,3,5,10], ["A1","C2","H1","HF1","C2","PF","H1","AF1","A1","AF1"]),
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
	800016: {
		id: [80002,80003,80004,800016],
		maxPot: [1,2,3,5],
		pots: ["H2","C2","PW","F1","E1"],
		evol: [[1],[1],[3]],
		material: [80002,80002,80004]
	},
	800017: {
		id: [80005,80006,80007,800017],
		maxPot: [1,2,3,6],
		pots: ["H1","F1","AF2","PF","C2","B1"],
		evol: [[1],[1],[3]],
		material: [80005,80005,80007]
	},
	800018: {
		id: [80008,80009,80010,80011,800018],
		maxPot: [1,2,3,5,8],
		pots: ["G1","A2","H2","F2","PT","C2","R1","DF1"],
		pots2: ["C2","A2","H2","F2","PT"],
		evol: [[1],[1],[1],[4]],
		material: [80008,80008,80008,80011]
	},
	// Halloween Night
	908:  SimpleSelf(908,  [2,3,4,5],   ["H2","PT","A2","H2","PT"]),
	2789: SimpleSelf(2789, [1,2,3,5],   ["PF","F1","PF","F1","HF1"]),
	2785: SimpleSelfWithId([909,910,911,912,2785], [2,3,4,6,8], ["C2","PW","C2","A2","F1","AW1","R1","ADH1"]),
	2794: SimpleSelf(2794, [2,3,4,6,8], ["F1","PF","DF1","R1","H2","A2","F1","HF1"]),
	// 桃娘傳
	3425: LastSpecialWithId([979,980,981,982,3425], [3426], [2,3,4,6,10], ["A2","A2","H2","H2","C2","C2","A2","PF","F2","ADE2"]),
	3427: LastSpecialWithId([983,984,985,986,3427], [3428], [2,4,6,7,10], ["DF1","DF1","H2","H2","C2","C2","A2","PT","F2","ADE2"]),
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
	// Divine Blader
	2137: HardDungeon(2137, [1,2,3,5,10], ["C2","A1","H1","C2","PT","AT1","H1","PT","A1","HT1"]),
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
		evol: [[1],[2],[3],[0,1,1,1,1]],
		material: [474,[474,474],[474,474,474],[2682,2686,2690,2694]],
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
	// Heretic Blader
	2302: HardDungeon(2302, [1,2,3,5,10], ["C2","F1","H1","HW1","C2","C2","A2","PW","AW1","F1"]),
	// 霸眼戰線
	3278: SimpleSelf(3278, [2,3,4,7],  ["PW","H1","F1","H2","A2","HW1","PW"]),
	3282: SimpleSelf(3282, [2,3,4,7],  ["F1","A1","F1","H2","F1","A2","PF"]),
	3286: SimpleSelf(3286, [2,4,6,8],  ["A2","PT","H2","F1","A2","F1","H2","AT1"]),
	3290: SimpleSelf(3290, [2,4,6,9],  ["A1","PW","A1","F1","A2","DW1","A2","DF1","AW1"]),
	3294: SimpleSelf(3294, [2,4,7,10], ["A2","F1","A2","H2","A2","H2","PT","F2","AT1","AWA2"]),
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
		pots: ["H2","A2","C2","C2","AF1","PF","F2","AF1","ASO2"],
		pots2: ["A2","C2","C2","A2"],
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
	2891: HardDungeon(2891, [1,2,3,5,10], ["A2","C2","H2","F1","C2","PF","F2","C2","A2","AF2"]),
	// Orlha Report 無罪的罪人
	3090: HardDungeon(3090, [2,3,4,6,10], ["A1","H1","PW","F1","A1","H1","PW","A2","AW1","F1"]),
	// 菇菇方程式
	800065: {
		id: [800062,800063,800064,800065],
		maxPot: [3,4,5,9],
		pots: ["A2","A2","H1","F1","F1","H2","PF","HF1","AFA2"],
		evol: [[0,1,1,1],[0,1,1,1],[0,2,2,2]],
		material: [[-139,-140,-141],[-139,-140,-141],[-139,-140,-141,-139,-140,-141]],
		special: [-139,-140,-141]
	},
	800069: {
		id: [800066,800067,800068,800069],
		maxPot: [2,4,6,10],
		pots: ["F1","A1","H1","C2","F1","F1","PT","F1","G1","E1"],
		evol: [[0,1,1,1],[0,1,1,1],[0,2,2,2]],
		material: [[-139,-140,-141],[-139,-140,-141],[-139,-140,-141,-139,-140,-141]],
		special: [-139,-140,-141]
	},
	800082: {
		id: [800076,800082],
		maxPot: [3,9],
		pots: ["PF","A2","F1","AF1","PF","HF1","R1","DW1","F2"],
		pots2: ["PT","A2","F1"],
		evol: [[0,3,3,3,1,1,1]],
		material: [[-139,-140,-141,800064,800080,800081]],
		special: [-139,-140,-141,800062,800080,800081]
	},
	// Orlha Report 茸毛頑偶熊
	3655: HardDungeon(3655, [2,3,4,6,10], ["A1","PT","H2","A2","F1","PT","H2","A2","F2","ADE2"]),
	// AbyssCode01 黑殼之王
	2529: HardDungeon(2529, [1,2,3,5,10], ["C2","F1","C2","F1","PF","HF1","C2","A2","F1","A2"], ['AbCd-X']),
	// AbyssCode02 盲目的調和
	2864: HardDungeon(2864, [1,2,3,5,10], ["C2","DA1","C2","DA1","R1","DA1","C2","DA1","R1","DA1"], ['AbCd-y']),
	// AbyssCode03 生而墮於虛無
	3068: HardDungeon(3068, [1,2,3,5,10], ["C2","A2","F1","H2","C2","F2","DA1","PW","AW1","HW1"], ['AbCd-A']),
	// AbyssCode04 燃燒殆盡的陽光
	3362: HardDungeon(3362, [2,3,5,7,10], ["C2","F1","DW1","PF","C2","R1","AF1","F1","HAB2","AAB2"], ['AbCd-O']),
	// 八百萬諸神祕聞
	4091: SimpleSelf(4091, [2,3,4,6], ["H1","A1","PT","F1","A2","AGO2"]),
	4095: SimpleSelf(4095, [3,5,6,8], ["PF","F1","H2","A2","AF1","C2","AGO2","AGO2"]),
	4099: SimpleSelf(4099, [3,5,6,9], ["F1","H1","A1","H2","PT","HT1","F2","AT1","AGO2"]),
	4103: SimpleSelf(4103, [3,6,7,9], ["F1","HW1","PW","F1","AW1","H2","HW1","PW","AGO2"]),
	// Dragon's Blader ZERO
	4021: HardDungeon(4021, [1,2,3,5,10], ["PF","HF1","F1","HDR2","PF","ADR1","AF1","F2","HDR2","ADR2"]),
	// Tempest Blader
	3719: HardDungeon(3719, [2,3,5,7,10], ["H2","F1","R1","PF","HF1","PF","AF1","HGODR2","F2","AGODR2"]),
};

series = {
	'御三家': [3626,3627,3628],
	'惡作劇女神與兔子的故事': [1756,1760,1764,1768],
	'黃昏的四神書': [1595,1599,1591,1592,1586,1587],
	'妖精花園': [1399,1403,1517,1407],
	'巧克力森林': [1424,1428,2493,2494,2495,2496],
	'古代森林的千年櫻花': [1657,1661,1665,1669,1670],
	'來者何貘：黑與白的激戰': [800003,800006,800010,800013],
	'神龍降臨Ⅰ': [1244,1248],
	'神龍降臨Ⅱ': [2144,2147,2151,2155],
	'異界神的祝福試煉': [800016,800017,800018],
	'Halloween Night': [2789,908,2785,2794],
	'桃娘傳': [3425,3427],
	'Halloween魔導盃': [2798,2802,2806,2810],
	'異空間棒球 黑貓維茲PRIDE': [1876,1880,1884,1888,1892],
	'新生珍妮佛的冒險': [/*477,*/2682,2686,2690,2694,2695],
	'天上岬～永恆的公主～': [3022,3026,3030,3034],
	'黑白貓 Gate Defender 跨越異界的友情羈絆': [3097,3100,3104],
	'聖誕老人的禮物': [1180,1176],
	"Dragon's Blader": [4016],
	"Demon's Blader": [1733],
	'Divine Blader': [2137],
	'Heretic Blader': [2302],
	'霸眼戰線': [3278,3282,3286,3290,3294],
	'煉獄來訪者': [1353,1357],
	'庫洛姆‧麥格納Ⅰ魔導學園': [2277,614],
	'庫洛姆‧麥格納Ⅱ學園祭': [815,819],
	'庫洛姆‧麥格納Ⅲ臨海學校': [2319,2323,2327,2331],
	'庫洛姆‧麥格納Ⅳ單戀☆狂想曲': [3396,3400,3404,3408,3412],
	'歌頌永恆的克羅諾斯': [3814,3815,3816,3817],
	'歌頌永恆的克羅諾斯Ⅱ': [3832,3836,3840,3844],
	'天界的雙子 訣別的年代記': [3215,3219,3223,3227,3231],
	'幻魔特區 朱雀': [3681,3685,3689,3693],
	'Orlha Report 懷著怨念的亡君': [2891],
	'Orlha Report 無罪的罪人': [3090],
	'菇菇方程式': [800065,800069,800082],
	'Orlha Report 茸毛頑偶熊': [3655],
	'AbyssCode01 黑殼之王': [2529],
	'AbyssCode02 盲目的調和': [2864],
	'AbyssCode03 生而墮於虛無': [3068],
	'AbyssCode04 燃燒殆盡的陽光': [3362],
	'八百萬諸神祕聞': [4091,4095,4099,4103],
	"Dragon's Blader ZERO": [4021],
	'Tempest Blader': [3719],
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
	data[series["Dragon's Blader ZERO"][0]].id,
	data[series['Tempest Blader'][0]].id,
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
	'Tempest Blader',
	'八百萬諸神祕聞',
	'---',
	"Dragon's Blader ZERO",
	'---',
	"Dragon's Blader",
	"Demon's Blader",
	'Divine Blader',
	'Heretic Blader',
	'AbyssCode01 黑殼之王',
	'AbyssCode02 盲目的調和',
	'AbyssCode03 生而墮於虛無',
	'AbyssCode04 燃燒殆盡的陽光',
	'霸眼戰線',
	'天界的雙子 訣別的年代記',
	'天上岬～永恆的公主～',
	'菇菇方程式',
	'古代森林的千年櫻花',
	'Orlha Report 茸毛頑偶熊',
	'Orlha Report 無罪的罪人',
	'幻魔特區 朱雀',
	'Orlha Report 懷著怨念的亡君',
	'妖精花園',
	'巧克力森林',
	'黃昏的四神書',
	'新生珍妮佛的冒險',
	'歌頌永恆的克羅諾斯Ⅱ',
	'歌頌永恆的克羅諾斯',
	'桃娘傳',
	'異界神的祝福試煉',
	'庫洛姆‧麥格納Ⅳ單戀☆狂想曲',
	'庫洛姆‧麥格納Ⅰ魔導學園',
	'庫洛姆‧麥格納Ⅱ學園祭',
	'庫洛姆‧麥格納Ⅲ臨海學校',
	'煉獄來訪者',
	'神龍降臨Ⅱ',
	'神龍降臨Ⅰ',
	'聖誕老人的禮物',
	'惡作劇女神與兔子的故事',
	'黑白貓 Gate Defender 跨越異界的友情羈絆',
	'異空間棒球 黑貓維茲PRIDE',
	'Halloween Night',
	'Halloween魔導盃',
	'來者何貘：黑與白的激戰',
];

menu = [];
menuOrder.forEach(function(s){
	if(s == '---')
		menu.push(0);
	else
		Array.prototype.push.apply(menu, series[s]);
	}
);
