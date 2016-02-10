potData = {
	F1:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅰ"},
	F2:  {icon: "Senzai_FastSkill",  name: "快速技能Ⅱ"},
	C2:  {icon: "Senzai_CostDown",   name: "減少COSTⅡ"},
	R1:  {icon: "Senzai_Konki",      name: "九死一生Ⅰ"},
	H1:  {icon: "Senzai_HP",         name: "HP上升Ⅰ"},
	H2:  {icon: "Senzai_HP",         name: "HP上升Ⅱ"},
	A1:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅰ"},
	A2:  {icon: "Senzai_ATK",        name: "攻擊力上升Ⅱ"},
	HF1: {icon: "Senzai_HP_F",       name: "火屬性HP上升Ⅰ"},
	HF2: {icon: "Senzai_HP_F",       name: "火屬性HP上升Ⅱ"},
	HW1: {icon: "Senzai_HP_W",       name: "水屬性HP上升Ⅰ"},
	HW2: {icon: "Senzai_HP_W",       name: "水屬性HP上升Ⅱ"},
	HT1: {icon: "Senzai_HP_T",       name: "雷屬性HP上升Ⅰ"},
	HT2: {icon: "Senzai_HP_T",       name: "雷屬性HP上升Ⅱ"},
	HA1: {icon: "Senzai_HP_F",       name: "全屬性HP上升Ⅰ"},
	HA2: {icon: "Senzai_HP_F",       name: "全屬性HP上升Ⅱ"},
	AF1: {icon: "Senzai_ATK_F",      name: "火屬性攻擊力上升Ⅰ"},
	AF2: {icon: "Senzai_ATK_F",      name: "火屬性攻擊力上升Ⅱ"},
	AW1: {icon: "Senzai_ATK_W",      name: "水屬性攻擊力上升Ⅰ"},
	AW2: {icon: "Senzai_ATK_W",      name: "水屬性攻擊力上升Ⅱ"},
	AT1: {icon: "Senzai_ATK_T",      name: "雷屬性攻擊力上升Ⅰ"},
	AT2: {icon: "Senzai_ATK_T",      name: "雷屬性攻擊力上升Ⅱ"},
	AA1: {icon: "Senzai_ATK_F",      name: "全屬性攻擊力上升Ⅰ"},
	AA2: {icon: "Senzai_ATK_F",      name: "全屬性攻擊力上升Ⅱ"},
	DF1: {icon: "Senzai_Shield_F",   name: "減輕火屬性傷害Ⅰ"},
	DW1: {icon: "Senzai_Shield_W",   name: "減輕水屬性傷害Ⅰ"},
	DT1: {icon: "Senzai_Shield_T",   name: "減輕雷屬性傷害Ⅰ"},
	DFW1:{icon: "Senzai_Shield_FW",  name: "減輕火、水屬性傷害Ⅰ"},
	DFT1:{icon: "Senzai_Shield_FT",  name: "減輕火、雷屬性傷害Ⅰ"},
	DWT1:{icon: "Senzai_Shield_WT",  name: "減輕水、雷屬性傷害Ⅰ"},
	DA1: {icon: "Senzai_Shield_FWT", name: "減輕全屬性傷害Ⅰ"},
	PF:  {icon: "Senzai_Appear_F",   name: "問題類型屬性提昇·火"},
	PW:  {icon: "Senzai_Appear_W",   name: "問題類型屬性提昇·水"},
	PT:  {icon: "Senzai_Appear_T",   name: "問題類型屬性提昇·雷"},
	E1:  {icon: "Senzai_EXP",        name: "微幅提升獲得的經驗值"},
	G1:  {icon: "Senzai_Gold",       name: "微幅提升獲得的金幣"},
	B1:  {icon: "Senzai_Unknown",    name: "戰鬥結束後回復全體隊友的HP"},
	AWA1:{icon: "Senzai_ATK_Unknown",name: "戰士攻擊力上升Ⅰ"}, // WA = Warrior
	AWA2:{icon: "Senzai_ATK_Unknown",name: "戰士攻擊力上升Ⅱ"},
	HWA1:{icon: "Senzai_HP_Unknown", name: "戰士HP上升Ⅰ"},
	HWA2:{icon: "Senzai_HP_Unknown", name: "戰士HP上升Ⅱ"},
	ASO1:{icon: "Senzai_ATK_Unknown",name: "術士攻擊力上升Ⅰ"}, // SO = Sorcerer
	ASO2:{icon: "Senzai_ATK_Unknown",name: "術士攻擊力上升Ⅱ"},
	HSO1:{icon: "Senzai_HP_Unknown", name: "術士HP上升Ⅰ"},
	HSO2:{icon: "Senzai_HP_Unknown", name: "術士HP上升Ⅱ"},
	AFA1:{icon: "Senzai_ATK_Unknown",name: "妖精攻擊力上升Ⅰ"}, // FA = Fairy
	AFA2:{icon: "Senzai_ATK_Unknown",name: "妖精攻擊力上升Ⅱ"},
	HFA1:{icon: "Senzai_HP_Unknown", name: "妖精HP上升Ⅰ"},
	HFA2:{icon: "Senzai_HP_Unknown", name: "妖精HP上升Ⅱ"},
	AAN1:{icon: "Senzai_ATK_Unknown",name: "天使攻擊力上升Ⅰ"}, // AN = Angel
	AAN2:{icon: "Senzai_ATK_Unknown",name: "天使攻擊力上升Ⅱ"},
	HAN1:{icon: "Senzai_HP_Unknown", name: "天使HP上升Ⅰ"},
	HAN2:{icon: "Senzai_HP_Unknown", name: "天使HP上升Ⅱ"},
	ADE1:{icon: "Senzai_ATK_Unknown",name: "魔族攻擊力上升Ⅰ"}, // DE = Demon
	ADE2:{icon: "Senzai_ATK_Unknown",name: "魔族攻擊力上升Ⅱ"},
	HDE1:{icon: "Senzai_HP_Unknown", name: "魔族HP上升Ⅰ"},
	HDE2:{icon: "Senzai_HP_Unknown", name: "魔族HP上升Ⅱ"},
	ADH1:{icon: "Senzai_ATK_Unknown",name: "亞人攻擊力上升Ⅰ"}, // DH = Demi Human
	ADH2:{icon: "Senzai_ATK_Unknown",name: "亞人攻擊力上升Ⅱ"},
	HDH1:{icon: "Senzai_HP_Unknown", name: "亞人HP上升Ⅰ"},
	HDH2:{icon: "Senzai_HP_Unknown", name: "亞人HP上升Ⅱ"},
	ADR1:{icon: "Senzai_ATK_Unknown",name: "龍族攻擊力上升Ⅰ"}, // DR = Dragon
	ADR2:{icon: "Senzai_ATK_Unknown",name: "龍族攻擊力上升Ⅱ"},
	HDR1:{icon: "Senzai_HP_Unknown", name: "龍族HP上升Ⅰ"},
	HDR2:{icon: "Senzai_HP_Unknown", name: "龍族HP上升Ⅱ"},
	AGO1:{icon: "Senzai_ATK_Unknown",name: "神族攻擊力上升Ⅰ"}, // GO = God
	AGO2:{icon: "Senzai_ATK_Unknown",name: "神族攻擊力上升Ⅱ"},
	HGO1:{icon: "Senzai_HP_Unknown", name: "神族HP上升Ⅰ"},
	HGO2:{icon: "Senzai_HP_Unknown", name: "神族HP上升Ⅱ"},
	AMA1:{icon: "Senzai_ATK_Unknown",name: "物質攻擊力上升Ⅰ"}, // MA = Material
	AMA2:{icon: "Senzai_ATK_Unknown",name: "物質攻擊力上升Ⅱ"},
	HMA1:{icon: "Senzai_HP_Unknown", name: "物質HP上升Ⅰ"},
	HMA2:{icon: "Senzai_HP_Unknown", name: "物質HP上升Ⅱ"},
//	AAB1:{icon: "Senzai_ATK_Unknown",name: "AbCd攻擊力上升Ⅰ"},
//	AAB2:{icon: "Senzai_ATK_Unknown",name: "AbCd攻擊力上升Ⅱ"},
//	HAB1:{icon: "Senzai_HP_Unknown", name: "AbCd HP上升Ⅰ"},
//	HAB2:{icon: "Senzai_HP_Unknown", name: "AbCd HP上升Ⅱ"},
}

function SimpleSelfWithId(idlist, maxPot, pots)
{
	var len = idlist.length;
	var evolarray = [];
	var matarray = [];
	for(var i = 1; i < len; i++) {evolarray.push([1]); matarray.push(idlist[0]);}
	return {
		id: idlist,
		maxPot: maxPot,
		pots: pots,
		evol: evolarray,
		material: matarray
	};
}

// For cards that simply eats the lowest itself to evolve
function SimpleSelf(lastid, maxPot, pots)
{
	var len = maxPot.length;
	var firstid = lastid - len + 1;
	var idarray = [];
	for(var i = firstid; i <= lastid; i++) {idarray.push(i);}
	return SimpleSelfWithId(idarray, maxPot, pots);
}

data = {
	// 御三家
	3626: {
		id: [1,2,3,4,1507,3626],
		maxPot: [1,2,4,6,6,9],
		pots: ["H2","A2","H2","A2","HF1","AF1","PF","F2","AWA2"],
		evol: [[],[],[],[],[]],
		material: [0,0,0,0,0]
	},
	3627: {
		id: [5,6,7,8,1509,3627],
		maxPot: [2,3,5,6,6,9],
		pots: ["H2","A2","A2","H2","HW1","AW1","HSO2","F2","ASO2"],
		evol: [[],[],[],[],[]],
		material: [0,0,0,0,0]
	},
	3628: {
		id: [9,10,11,12,1508,3628],
		maxPot: [2,4,5,6,6,9],
		pots: ["A2","H2","A2","H2","HT1","AT1","ADR2","HDR2","F2"],
		evol: [[],[],[],[],[]],
		material: [0,0,0,0,0]
	},
	// 惡作劇女神與兔子的故事
	1756: SimpleSelf(1756, [1,1,2,3], ["A1","A1","F1"]),
	1760: SimpleSelf(1760, [1,2,3,5], ["F1","PF","H1","R1","A2"]),
	1764: SimpleSelf(1764, [2,3,4,6], ["A1","F1","C2","A2","PW","A2"]),
	1768: SimpleSelf(1768, [1,2,3,5], ["A1","C2","PT","A2","F1"]),
	// 庫洛姆‧麥格納Ⅰ魔導學園
	2277: {
		id: [595,596,597,598,2277],
		maxPot: [1,2,3,4,7],
		pots: ["A2","A2","H2","H2","C2","AW1","PW"],
		evol: [[],[],[],[0,2]],
		material: [0,0,0,[-33,-33]],
		special: [-33],
	},
	614: SimpleSelf(614, [1,2,3,4], ["C2","C2","C2","A1"]),
	// 庫洛姆‧麥格納Ⅱ學園祭
	815: SimpleSelf(815, [1,2,3,4], ["H2","A2","H2","A2"]),
	819: SimpleSelf(819, [1,2,3,4], ["A2","A2","C2","HF1"]),
	// 庫洛姆‧麥格納Ⅲ臨海學校
	2319: SimpleSelf(2319, [1,2,3,6], ["DF1","C2","A1","PW","DF1","H1"]),
	2323: SimpleSelf(2323, [1,2,3,8], ["F1","C2","PF","A2","C2","R1","PF","A2"]),
	2327: SimpleSelf(2327, [1,2,3,9], ["DW1","F1","PT","C2","DF1","A2","DT1","PT","AT1"]),
	2331: SimpleSelf(2331, [1,2,3,8], ["A2","C2","F1","PW","C2","A2","F1","AW1"]),
	// 黃昏的四神書
	1595: SimpleSelf(1595, [1,2,4],   ["C2","A1","F1","PF"]),
	1599: SimpleSelf(1599, [1,2,3,4], ["C2","A1","PW","F1"]),
	1591: {
		id: [1588,1589,1590,1591],
		maxPot: [1,2,3,5],
		pots: ["A1","H1","HT1","F1","PT"],
		evol: [[1],[1],[0,1]],
		material: [1588,1588,-35],
		special: [-35]
	},
	1592: {
		id: [1588,1589,1590,1592],
		maxPot: [1,2,3,5],
		pots: ["A1","H1","HT1","F1","PT"],
		evol: [[1],[1],[0,1]],
		material: [1588,1588,-36],
		special: [-36]
	},
	1586: {
		id: [1583,1584,1585,1586],
		maxPot: [1,3,4,6],
		pots: ["H1","F1","F1","A1","AF1","AF1"],
		evol: [[1],[1],[0,1]],
		material: [1583,1583,-37],
		special: [-37]
	},
	1587: {
		id: [1583,1584,1585,1587],
		maxPot: [1,3,4,6],
		pots: ["H1","F1","F1","A1","HF1","HF1"],
		evol: [[1],[1],[0,1]],
		material: [1583,1583,-38],
		special: [-38]
	},
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
	422: SimpleSelf(422, [2,3,4,6], ["A2","H2","C2","F1","C2","C2"]),
	// 巧克力森林
	1424: SimpleSelf(1424, [1,2,3],   ["H1","F1","F1"]),
	1428: SimpleSelf(1428, [1,2,3,5], ["A1","H2","C2","DT1","R1"]),
	2493: {
		id: [1429,1430,1431,1432,2493],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A2","F1","C2","PT","R1","F1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1429,1429,-15,1433],
		special: [-15,-16]
	},
	2494: {
		id: [1429,1430,1431,1433,2494],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A2","F1","DF1","R1","PT","A2"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1429,1429,-16,1432],
		special: [-16,-15]
	},
	2495: {
		id: [1434,1435,1436,1437,2495],
		maxPot: [1,2,3,4,7],
		pots: ["H2","A1","C2","C2","A2","F1","AF1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1434,1434,-17,1438],
		special: [-17,-18]
	},
	2496: {
		id: [1434,1435,1436,1438,2496],
		maxPot: [1,2,3,5,8],
		pots: ["H2","A1","C2","F1","DF1","DW1","PF","HF1"],
		evol: [[1],[1],[0,1],[3,0,1]],
		material: [1434,1434,-18,1437],
		special: [-18,-17]
	},
	// 古代森林的千年櫻花
	1657: SimpleSelf(1657, [1,2,3,5], ["C2","A1","PT","A1","H1"]),
	1661: SimpleSelf(1661, [1,2,3,5], ["C2","F1","HW1","F1","A2"]),
	1665: SimpleSelf(1665, [1,2,3,4], ["F1","A2","F1","C2"]),
	1669: {
		id: [1666,1667,1668,1669],
		maxPot: [1,2,3,5],
		pots: ["F1","C2","DT1","PW","AW1"],
		evol: [[1],[1],[0,1]],
		material: [1666,1666,-49],
		special: [-49]
	},
	1670: {
		id: [1666,1667,1668,1670],
		maxPot: [1,2,3,5],
		pots: ["F1","C2","DT1","PW","AW1"],
		evol: [[1],[1],[0,1]],
		material: [1666,1666,-48],
		special: [-48]
	},
	// 來者何貘：黑與白的激戰
	800003: SimpleSelf(800003, [2,3,4],   ["A1","H2","F1","AF2"]),
	800006: SimpleSelf(800006, [3,4,5],   ["F1","H2","A2","C2","PW"]),
	800010: SimpleSelf(800010, [3,5,7,9], ["R1","A2","H2","H1","C2","F1","A1","DF1","AT2"]),
	800013: SimpleSelf(800013, [2,3,5],   ["F1","A2","H2","C2","PT"]),
	// Demon's Blader
	1733: {
		id: [1729,1730,1731,1732,1733],
		maxPot: [1,2,3,5,10],
		pots: ["A1","C2","H1","HF1","C2","PF","H1","AF1","A1","AF1"],
		evol: [[1],[2],[4],[8]],
		material: [1729,1730,1731,1732]
	},
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
	// 珍妮佛的冒險
	/*477: { // 舊版佩特拉
		id: [474,475,476,477],
		maxPot: [2,2,3,5],
		pots: ["A2","H2","F1","H1","C2"],
		evol: [[1],[2],[3]],
		material: [474,[474,474],[474,474,474]]
	},*/
	// Halloween Night
	908: SimpleSelf(908, [2,3,4,5],     ["H2","PT","A2","H2","PT"]),
	2789: SimpleSelf(2789, [1,2,3,5],   ["PF","F1","PF","F1","HF1"]),
	2785: SimpleSelfWithId([909,910,911,912,2785], [2,3,4,6,8], ["C2","PW","C2","A2","F1","AW1","R1","ADH1"]),
	2794: SimpleSelf(2794, [2,3,4,6,8], ["F1","PF","DF1","R1","H2","A2","F1","HF1"]),
	// 桃娘傳
	3425: {
		id: [979,980,981,982,3425],
		maxPot: [2,3,4,6,10],
		pots: ["A2","A2","H2","H2","C2","C2","A2","PF","F2","ADE2"],
		evol: [[1],[1],[1],[0,1]],
		material: [979,979,979,3426],
		special: [3426]
	},
	3427: {
		id: [983,984,985,986,3427],
		maxPot: [2,4,6,7,10],
		pots: ["DF1","DF1","H2","H2","C2","C2","A2","PT","F2","ADE2"],
		evol: [[1],[1],[1],[0,1]],
		material: [983,983,983,3428],
		special: [3428]
	},
	// Halloween魔導盃
	2798: {
		id: [2795,2796,2797,2798],
		maxPot: [2,3,4,6],
		maxPossible: 3,
		pots: ["F1","H1","PF","A1","HF1","R1"],
		evol: [[1],[1],[1]],
		material: [2795,2795,2795]
	},
	2802: {
		id: [2799,2800,2801,2802],
		maxPot: [2,4,6,8],
		pots: ["AF1","C2","A1","H1","PF","F1","C2","PF"],
		evol: [[],[],[]],
		material: [0,0,0]
	},
	2806: {
		id: [2803,2804,2805,2806],
		maxPot: [2,4,6,8],
		pots: ["C2","R1","PF","A1","F1","H1","F1","HF1"],
		evol: [[],[],[]],
		material: [0,0,0]
	},
	2810: {
		id: [2807,2808,2809,2810],
		maxPot: [2,4,6,8],
		pots: ["C2","PF","H1","F1","R1","A1","F1","AF1"],
		evol: [[],[],[]],
		material: [0,0,0]
	},
	// 異空間棒球 黑貓維茲PRIDE
	1876: SimpleSelf(1876, [2,3,4],   ["H1","A1","H1","A2"]),
	1880: SimpleSelf(1880, [1,2,3,4], ["DW1","F1","H1","A1"]),
	1884: SimpleSelf(1884, [1,2,3,5], ["PW","A1","C2","A2","F1"]),
	1888: SimpleSelf(1888, [1,3,4,5], ["DT1","PT","F1","A2","F1"]),
	1892: SimpleSelf(1892, [1,3,4,6], ["A1","C2","F1","C2","A2","A2"]),
	// Divine Blader
	2137: {
		id: [2133,2134,2135,2136,2137],
		maxPot: [1,2,3,5,10],
		pots: ["C2","A1","H1","C2","PT","AT1","H1","PT","A1","HT1"],
		evol: [[1],[2],[4],[8]],
		material: [2133,2134,2135,2136]
	},
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
	3104: SimpleSelf(3104, [2,4,6,9], ["F1","A1","H2","PF","F1","A2","F1","A2","AWA2"]),
	// 聖誕老人的禮物
	1176: SimpleSelf(1176, [2,3,4,6], ["H2","PW","A2","C2","C2","F1"]),
	1180: SimpleSelf(1180, [1,2,3,6], ["A2","F1","H2","A1","H1","C2"]),
	// Heretic Blader
	2302: {
		id: [2298,2299,2300,2301,2302],
		maxPot: [1,2,3,5,10],
		pots: ["C2","F1","H1","HW1","C2","C2","A2","PW","AW1","F1"],
		evol: [[1],[2],[4],[8]],
		material: [2298,2299,2300,2301]
	},
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
	3408: SimpleSelf(3408, [2,4,7,10], ["A2","R1","A2","F1","PW","H2","HW1","AW1","F2","ASO2"]),
	3412: SimpleSelf(3412, [2,4,6,9],  ["H1","A1","H2","F1","A2","F1","AF1","PF","HF1"]),
	// 歌頌永恆的克羅諾斯 (含復刻SS)
	3814: SimpleSelfWithId([732,733,734,735,3814], [1,2,3,5,8],  ["A2","H2","C2","F1","PW","PW","ADH2","HDH2"]),
	3815: SimpleSelfWithId([762,763,764,765,3815], [1,2,4,6,10], ["F1","A1","H1","C2","F1","F1","PT","F1","ASO2","G1"]),
	3816: {
		id: [1297,1298,1299,1300,3816],
		maxPot: [1,2,4,5,9],
		pots: ["A2","C2","C2","A2","F1","F2","R1","B1","HSO2"],
		evol: [[1],[1],[0,1],[0,0,1]],
		material: [1297,1297,-28,-128],
		special: [-28,-128]
	},
	3817: {
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
	// Demon's Blader
	1730: {1729:2},
	1731: {1729:4},
	1732: {1729:8},
	// 神龍降臨Ⅰ
	1233: {1231:3},
	1236: {1234:3},
	1239: {1237:3},
	1240: {1231:3,1234:3},
	// 異界神的祝福試煉
	80004: {80002:3},
	80007: {80005:3},
	80011: {80008:4},
	// Divine Blader
	2134: {2133:2},
	2135: {2133:4},
	2136: {2133:8},
	// 新生珍妮佛的冒險
	2682: {2679:4},
	2686: {2683:4},
	2690: {2687:4},
	2694: {2691:4},
	// Heretic Blader
	2299: {2298:2},
	2300: {2298:4},
	2301: {2298:8},
};

grayiconlist = [
	//新版珍妮佛的冒險
	//2682,2686,2690,2694,2695
];

menu = [
	/*御三家*/
	3626,3627,3628,
	/*巧克力森林*/
	1424,1428,2493,2494,2495,2496,
	/*黃昏的四神書*/
	1595,1599,1591,1592,1586,1587,
	/*珍妮佛的冒險
	477,*/
	/*新生珍妮佛的冒險*/
	2682,2686,2690,2694,2695,
	/*Blader's*/
	422,/*Dragon*/
	1733,/*Demon*/
	2137,/*Divine*/
	2302,/*Heretic*/
	/*歌頌永恆的克羅諾斯Ⅱ*/
	3832,3836,3840,3844,
	/*歌頌永恆的克羅諾斯*/
	3814,3815,3816,3817,
	/*桃娘傳*/
	3425,3427,
	/*異界神的祝福試煉*/
	800016,800017,800018,
	/*庫洛姆‧麥格納Ⅳ單戀☆狂想曲*/
	3396,3400,3404,3408,3412,
	/*--------------------*/
	0,
	/*庫洛姆‧麥格納Ⅰ魔導學園*/
	2277,614,
	/*庫洛姆‧麥格納Ⅱ學園祭*/
	815,819,
	/*庫洛姆‧麥格納Ⅲ臨海學校*/
	2319,2323,2327,2331,
	/*--------------------*/
	0,
	/*霸眼戰線*/
	3278,3282,3286,3290,3294,
	/*煉獄來訪者*/
	1353,1357,
	/*神龍降臨Ⅱ*/
	2144,2147,2151,2155,
	/*神龍降臨Ⅰ*/
	1244,1248,
	/*聖誕老人的禮物*/
	1180,1176,
	/*惡作劇女神與兔子的故事*/
	1756,1760,1764,1768,
	/*天上岬～永恆的公主～*/
	3022,3026,3030,3034,
	/*黑白貓 Gate Defender 跨越異界的友情羈絆*/
	3097,3100,3104,
	/*異空間棒球 黑貓維茲PRIDE*/
	1876,1880,1884,1888,1892,
	/*Halloween Night*/
	2789,908,2785,2794,
	/*Halloween魔導盃*/
	2798,2802,2806,2810,
	/*來者何貘：黑與白的激戰*/
	800003,800006,800010,800013,
	/*古代森林的千年櫻花*/
	1657,1661,1665,1669,1670,
	/*妖精花園*/
	1399,1403,1517,1407,
];
