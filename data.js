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

data = {
	// 御三家
	1507: {
		id: [1,2,3,4,1507],
		maxPot: [1,2,4,6,6],
		pots: ["H2","A2","H2","A2","HF1","AF1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	1508: {
		id: [9,10,11,12,1508],
		maxPot: [2,4,5,6,6],
		pots: ["A2","H2","A2","H2","HT1","AT1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	1509: {
		id: [5,6,7,8,1509],
		maxPot: [2,3,5,6,6],
		pots: ["H2","A2","A2","H2","HW1","AW1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	// 惡作劇女神與兔子的故事
	1756: {
		id: [1753,1754,1755,1756],
		maxPot: [1,1,2,3],
		pots: ["A1","A1","F1"],
		evol: [[1],[1],[1]],
		material: [1753,1753,1753]
	},
	1760: {
		id: [1757,1758,1759,1760],
		maxPot: [1,2,3,5],
		pots: ["F1","PF","H1","R1","A2"],
		evol: [[1],[1],[1]],
		material: [1757,1757,1757]
	},
	1764: {
		id: [1761,1762,1763,1764],
		maxPot: [2,3,4,6],
		pots: ["A1","F1","C2","A2","PW","A2"],
		evol: [[1],[1],[1]],
		material: [1761,1761,1761]
	},
	1768: {
		id: [1765,1766,1767,1768],
		maxPot: [1,2,3,5],
		pots: ["A1","C2","PT","A2","F1"],
		evol: [[1],[1],[1]],
		material: [1765,1765,1765]
	},
	// 歌頌永恆的克羅諾斯
	727: {
		id: [724,725,726,727],
		maxPot: [2,3,4,6],
		pots: ["F1","H2","H2","C2","C2","H2"],
		evol: [[],[],[]],
		material: [0,0,0]
	},
	735: {
		id: [732,733,734,735],
		maxPot: [1,2,3,5],
		pots: ["A2","H2","C2","F1","PW"],
		evol: [[1],[1],[1]],
		material: [732,732,732]
	},
	765: {
		id: [762,763,764,765],
		maxPot: [1,2,4,6],
		pots: ["F1","A1","H1","C2","F1","F1"],
		evol: [[1],[1],[1]],
		material: [762,762,762]
	},
	1300: {
		id: [1297,1298,1299,1300],
		maxPot: [1,2,4,5],
		pots: ["A2","C2","C2","A2","F1"],
		evol: [[1],[1],[0,1]],
		material: [1297,1297,-28],
		special: [-28]
	},
	1301: {
		id: [1297,1298,1299,1301],
		maxPot: [1,2,4,5],
		pots: ["A2","C2","C2","A2","AF1"],
		evol: [[1],[1],[0,1]],
		material: [1297,1297,-29],
		special: [-29]
	},
	// 庫洛姆‧麥格納Ⅰ魔導學園
	2277: {
		id: [595,596,597,598,2277],
		maxPot: [1,2,3,4,7],
		maxPossible: 4,
		pots: ["A2","A2","H2","H2","C2","AW1","PW"],
		evol: [[],[],[],[0,2]],
		material: [0,0,0,[-33,-33]],
		special: [-33],
		maxSpecial: [2]
	},
	614: {
		id: [611,612,613,614],
		maxPot: [1,2,3,4],
		pots: ["C2","C2","C2","A1"],
		evol: [[1],[1],[1]],
		material: [611,611,611]
	},
	// 庫洛姆‧麥格納Ⅱ學園祭
	815: {
		id: [812,813,814,815],
		maxPot: [1,2,3,4],
		pots: ["H2","A2","H2","A2"],
		evol: [[1],[1],[1]],
		material: [812,812,812]
	},
	819: {
		id: [816,817,818,819],
		maxPot: [1,2,3,4],
		pots: ["A2","A2","C2","HF1"],
		evol: [[1],[1],[1]],
		material: [816,816,816]
	},
	// 庫洛姆‧麥格納Ⅲ臨海學校
	2319: {
		id: [2316,2317,2318,2319],
		maxPot: [1,2,3,6],
		pots: ["DF1","C2","A1","PW","DF1","H1"],
		evol: [[1],[1],[1]],
		material: [2316,2316,2316]
	},
	2323: {
		id: [2320,2321,2322,2323],
		maxPot: [1,2,3,8],
		pots: ["F1","C2","PF","A2","C2","R1","PF","A2"],
		evol: [[1],[1],[1]],
		material: [2320,2320,2320]
	},
	2327: {
		id: [2324,2325,2326,2327],
		maxPot: [1,2,3,9],
		pots: ["DW1","F1","PT","C2","DF1","A2","DT1","PT","AT1"],
		evol: [[1],[1],[1]],
		material: [2324,2324,2324]
	},
	2331: {
		id: [2328,2329,2330,2331],
		maxPot: [1,2,3,8],
		pots: ["A2","C2","F1","PW","C2","A2","F1","AW1"],
		evol: [[1],[1],[1]],
		material: [2328,2328,2328]
	},
	// 黃昏的四神書
	1595: {
		id: [1593,1594,1595],
		maxPot: [1,2,4],
		pots: ["C2","A1","F1","PF"],
		evol: [[1],[1]],
		material: [1593,1593]
	},
	1599: {
		id: [1596,1597,1598,1599],
		maxPot: [1,2,3,4],
		pots: ["C2","A1","PW","F1"],
		evol: [[1],[1],[1]],
		material: [1596,1596,1596]
	},
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
	1399: {
		id: [1396,1397,1398,1399],
		maxPot: [1,2,3,4],
		pots: ["H1","F1","A1","H1"],
		evol: [[1],[1],[1]],
		material: [1396,1396,1396]
	},
	1403: {
		id: [1400,1401,1402,1403],
		maxPot: [1,2,3,5],
		pots: ["DF1","H1","A2","C2","A2"],
		evol: [[1],[1],[1]],
		material: [1400,1400,1400]
	},
	1517: {
		id: [1392,1393,1394,1395,1514,1515,1516,1517],
		maxPot: [0,1,2,3,3,3,4,5],
		pots: ["F1","C2","H1","F1","A2"],
		evol: [[1],[1],[1],[0,4,4],[],[],[]],
		material: [1392,1392,1392,[1399,1403],0,0,0],
		special: [1396,1400]
	},
	1407: {
		id: [1404,1405,1406,1407],
		maxPot: [1,2,3,5],
		pots: ["C2","A2","H1","C2","C2"],
		evol: [[1],[1],[1]],
		material: [1404,1404,1404]
	},
	// Dragon's Blader
	422: {
		id: [419,420,421,422],
		maxPot: [2,3,4,6],
		pots: ["A2","H2","C2","F1","C2","C2"],
		evol: [[1],[1],[1]],
		material: [419,419,419]
	},
	// 巧克力森林
	1424: {
		id: [1422,1423,1424],
		maxPot: [1,2,3],
		pots: ["H1","F1","F1"],
		evol: [[1],[1]],
		material: [1422,1422]
	},
	1428: {
		id: [1425,1426,1427,1428],
		maxPot: [1,2,3,5],
		pots: ["A1","H2","C2","DT1","R1"],
		evol: [[1],[1],[1]],
		material: [1425,1425,1425]
	},
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
	1657: {
		id: [1654,1655,1656,1657],
		maxPot: [1,2,3,5],
		pots: ["C2","A1","PT","A1","H1"],
		evol: [[1],[1],[1]],
		material: [1654,1654,1654]
	},
	1661: {
		id: [1658,1659,1660,1661],
		maxPot: [1,2,3,5],
		pots: ["C2","F1","HW1","F1","A2"],
		evol: [[1],[1],[1]],
		material: [1658,1658,1658],
	},
	1665: {
		id: [1662,1663,1664,1665],
		maxPot: [1,2,3,4],
		pots: ["F1","A2","F1","C2"],
		evol: [[1],[1],[1]],
		material: [1662,1662,1662],
	},
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
	800003: {
		id: [800001,800002,800003],
		maxPot: [2,3,4],
		pots: ["A1","H2","F1","AF2"],
		evol: [[1],[1]],
		material: [800001,800001]
	},
	800006: {
		id: [800004,800005,800006],
		maxPot: [3,4,5],
		pots: ["F1","H2","A2","C2","PW"],
		evol: [[1],[1]],
		material: [800004,800004]
	},
	800010: {
		id: [800007,800008,800009,800010],
		maxPot: [3,5,7,9],
		pots: ["R1","A2","H2","H1","C2","F1","A1","DF1","AT2"],
		evol: [[1],[1],[1]],
		material: [800007,800007,800007]
	},
	800013: {
		id: [800011,800012,800013],
		maxPot: [2,3,5],
		pots: ["F1","A2","H2","C2","PT"],
		evol: [[1],[1]],
		material: [800011,800011]
	},
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
	2144: {
		id: [2142,2143,2144],
		maxPot: [2,4,6],
		pots: ["A1","H1","PW","DW1","PW","A2"],
		evol: [[1],[1]],
		material: [2142,2142]
	},
	2147: {
		id: [2145,2146,2147],
		maxPot: [2,4,5],
		pots: ["A1","H1","DT1","DW1","A1"],
		evol: [[1],[1]],
		material: [2145,2145]
	},
	2151: {
		id: [2148,2149,2150,2151],
		maxPot: [1,2,4,6],
		pots: ["A1","C2","H1","F1","PF","H2"],
		evol: [[1],[1],[1]],
		material: [2148,2148,2148]
	},
	2155: {
		id: [2152,2153,2154,2155],
		maxPot: [1,3,4,7],
		pots: ["A1","F1","C2","PT","C2","F1","A2"],
		evol: [[1],[1],[1]],
		material: [2152,2152,2152]
	},
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
	477: { // 舊版佩特拉
		id: [474,475,476,477],
		maxPot: [2,2,3,5],
		pots: ["A2","H2","F1","H1","C2"],
		evol: [[1],[2],[3]],
		material: [474,[474,474],[474,474,474]]
	},
	2695: { // 新版佩特拉
		id: [474,475,476,477,2695],
		maxPot: [2,2,3,5,8],
		pots: ["A2","H2","F1","H1","C2","B1","DW1","PT"],
		evol: [[1],[1],[1],[0,1,1,1,1]],
		material: [474,474,474,[2694,2690,2686,2682]],
		special: [2694,2690,2686,2682]
	},
	// Halloween Night
	908: {
		id: [905,906,907,908],
		maxPot: [2,3,4,5],
		pots: ["H2","PT","A2","H2","PT"],
		evol: [[1],[1],[1]],
		material: [905,905,905]
	},
	2789: {
		id: [2786,2787,2788,2789],
		maxPot: [1,2,3,5],
		pots: ["PF","F1","PF","F1","HF1"],
		evol: [[1],[1],[1]],
		material: [2786,2786,2786]
	},
	2785: {
		id: [909,910,911,912,2785],
		maxPot: [2,3,4,6,8],
		pots: ["C2","PW","C2","A2","F1","AW1","R1","ADH1"],
		evol: [[1],[1],[1],[1]],
		material: [909,909,909,909]
	},
	2794: {
		id: [2790,2791,2792,2793,2794],
		maxPot: [2,3,4,6,8],
		pots: ["F1","PF","DF1","R1","H2","A2","F1","HF1"],
		evol: [[1],[1],[1],[1]],
		material: [2790,2790,2790,2790]
	},
	// 桃娘傳
	3425: {
		id: [979,980,981,982,3425],
		maxPot: [2,3,4,6,10],
		maxPossible: 6,
		pots: ["A2","A2","H2","H2","C2","C2","A2","PF","F2","ADE2"],
		evol: [[1],[1],[1],[0,1]],
		material: [979,979,979,3426],
		special: [3426],
		maxSpecial: [1]
	},
	3427: {
		id: [983,984,985,986,3427],
		maxPot: [2,4,6,7,10],
		maxPossible: 7,
		pots: ["DF1","DF1","H2","H2","C2","C2","A2","PT","F2","ADE2"],
		evol: [[1],[1],[1],[0,1]],
		material: [983,983,983,3428],
		special: [3428],
		maxSpecial: [1]
	},
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
};

grayiconlist = [
	//新版珍妮佛的冒險
	2682,2686,2690,2694,2695
];

menu = [
	/*御三家*/
	1507,1508,1509,
	/*Halloween Night*/
	2789,908,2785,2794,
	/*桃娘傳*/
	3425,3427,
	/*歌頌永恆的克羅諾斯*/
	727,735,765,1300,1301,
	/*惡作劇女神與兔子的故事*/
	1756,1760,1764,1768,
	/*庫洛姆‧麥格納Ⅰ魔導學園*/
	2277,614,
	/*黃昏的四神書*/
	1595,1599,1591,1592,1586,1587,
	/*庫洛姆‧麥格納Ⅱ學園祭*/
	815,819,
	/*庫洛姆‧麥格納Ⅲ臨海學校*/
	2319,2323,2327,2331,
	/*妖精花園*/
	1399,1403,1517,1407,
	/*巧克力森林*/
	1424,1428,2493,2494,2495,2496,
	/*Dragon's Blader*/
	422,
	/*古代森林的千年櫻花*/
	1657,1661,1665,1669,1670,
	/*來者何貘：黑與白的激戰*/
	800003,800006,800010,800013,
	/*神龍降臨Ⅰ*/
	1244,1248,
	/*神龍降臨Ⅱ*/
	2144,2147,2151,2155,
	/*異界神的祝福試煉*/
	800016,800017,800018,
	/*Demon's Blader*/
	1733,
	/*珍妮佛的冒險*/
	477,
];
