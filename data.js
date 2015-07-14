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
	HW1: {icon: "Senzai_HP_W",       name: "水屬性HP上升Ⅰ"},
	HT1: {icon: "Senzai_HP_T",       name: "雷屬性HP上升Ⅰ"},
	HA1: {icon: "Senzai_HP_F",       name: "全屬性HP上升Ⅰ"},
	HA2: {icon: "Senzai_HP_F",       name: "全屬性HP上升Ⅱ"},
	AF1: {icon: "Senzai_ATK_F",      name: "火屬性攻擊力上升Ⅰ"},
	AW1: {icon: "Senzai_ATK_W",      name: "水屬性攻擊力上升Ⅰ"},
	AT1: {icon: "Senzai_ATK_T",      name: "雷屬性攻擊力上升Ⅰ"},
	AA1: {icon: "Senzai_ATK_F",      name: "全屬性攻擊力上升Ⅰ"},
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
}

data = {
	// 御三家
	1507: {
		name: "紅蓮的流星 伊格尼斯·波倫卡農",
		attr: "火",
		id: [1,2,3,4,1507],
		maxPot: [1,2,4,6,6],
		pots: ["H2","A2","H2","A2","HF1","AF1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	1508: {
		name: "暗黑神龍 伊芬納格",
		attr: "雷",
		id: [9,10,11,12,1508],
		maxPot: [2,4,5,6,6],
		pots: ["A2","H2","A2","H2","HT1","AT1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	1509: {
		name: "祝福的聖女 莎夏·史塔萊特",
		attr: "水",
		id: [5,6,7,8,1509],
		maxPot: [2,3,5,6,6],
		pots: ["H2","A2","A2","H2","HW1","AW1"],
		evol: [[],[],[],[]],
		material: [0,0,0,0]
	},
	// 惡作劇女神與兔子的故事
	1756: {
		name: "狂亂魔毒婦 維若妮卡･吉瑪",
		attr: "水",
		id: [1753,1754,1755,1756],
		maxPot: [1,1,2,3],
		pots: ["A1","A1","F1"],
		evol: [[1],[1],[1]],
		material: [1753,1753,1753]
	},
	1760: {
		name: "堅剛天盾 芭芭拉･佛斯",
		attr: "火",
		id: [1757,1758,1759,1760],
		maxPot: [1,2,3,5],
		pots: ["F1","PF","H1","R1","A2"],
		evol: [[1],[1],[1]],
		material: [1757,1757,1757]
	},
	1764: {
		name: "一箭聖心 英格麗特･雷",
		attr: "水",
		id: [1761,1762,1763,1764],
		maxPot: [2,3,4,6],
		pots: ["A1","F1","C2","A2","PW","A2"],
		evol: [[1],[1],[1]],
		material: [1761,1761,1761]
	},
	1768: {
		name: "破軍神劍 萊納･巴爾豪斯",
		attr: "雷",
		id: [1765,1766,1767,1768],
		maxPot: [1,2,3,5],
		pots: ["A1","C2","PT","A2","F1"],
		evol: [[1],[1],[1]],
		material: [1765,1765,1765]
	},
	// 歌頌永恆的克羅諾斯
	727: {
		name: "煉焰魔女僕 愛蜜･卡洛兒",
		attr: "火",
		id: [724,725,726,727],
		maxPot: [2,3,4,6],
		pots: ["F1","H2","H2","C2","C2","H2"],
		evol: [[],[],[]],
		material: [0,0,0]
	},
	735: {
		name: "兔子天才發明家 魯道夫･麥亞",
		attr: "水",
		id: [732,733,734,735],
		maxPot: [1,2,3,5],
		pots: ["A2","H2","C2","F1","PW"],
		evol: [[1],[1],[1]],
		material: [732,732,732]
	},
	765: {
		name: "槍手魔女 薇奧莉塔夫人",
		attr: "雷",
		id: [762,763,764,765],
		maxPot: [1,2,4,6],
		pots: ["F1","A1","H1","C2","F1","F1"],
		evol: [[1],[1],[1]],
		material: [762,762,762]
	},
	1300: {
		name: "時空超越者 妙舞･伏爾杜娜",
		attr: "火",
		id: [1297,1298,1299,1300],
		maxPot: [1,2,4,5],
		pots: ["A2","C2","C2","A2","F1"],
		evol: [[1],[1],[0,1]],
		material: [1297,1297,-28],
		special: [-28]
	},
	1301: {
		name: "征服多相者 妙舞･雷文",
		attr: "火",
		id: [1297,1298,1299,1301],
		maxPot: [1,2,4,5],
		pots: ["A2","C2","C2","A2","AF1"],
		evol: [[1],[1],[0,1]],
		material: [1297,1297,-29],
		special: [-29]
	},
	// 庫洛姆･麥格納Ⅰ魔導學園
	598: {                                  /*2277*/
		name: "流劍副會長 一樹･麥斯格雷夫", /*蒼霸劍副會長 一樹･麥斯格雷夫*/
		attr: "水",
		id: [595,596,597,598],              /*[595,596,597,598,2277]*/
		maxPot: [1,2,3,4],                  /*[1,2,3,4,7]*/
		pots: ["A2","A2","H2","H2"],        /*["A2","A2","H2","H2","C2","AW1","PW"]*/
		evol: [[],[],[]],                   /*[[],[],[],[0,1]]*/
		material: [0,0,0]                   /*[0,0,0,-38]*/
		                                    /*special: [-38]*/
	},
	614: {
		name: "霸帝校長 登凱爾･亞當斯",
		attr: "水",
		id: [611,612,613,614],
		maxPot: [1,2,3,4],
		pots: ["C2","C2","C2","A1"],
		evol: [[1],[1],[1]],
		material: [611,611,611]
	},
	// 庫洛姆･麥格納Ⅱ學園祭
	815: {
		name: "炎之鐵板男子 彰･麥斯格雷夫",
		attr: "火",
		id: [812,813,814,815],
		maxPot: [1,2,3,4],
		pots: ["H2","A2","H2","A2"],
		evol: [[1],[1],[1]],
		material: [812,812,812]
	},
	819: {
		name: "鐵拳制裁老大 喬治･轟",
		attr: "火",
		id: [816,817,818,819],
		maxPot: [1,2,3,4],
		pots: ["A2","A2","C2","HF1"],
		evol: [[1],[1],[1]],
		material: [816,816,816]
	},
	// 黃昏的四聖書
	1595: {
		name: "功夫高手 玲馨･帝",
		attr: "火",
		id: [1593,1594,1595],
		maxPot: [1,2,4],
		pots: ["C2","A1","F1","PF"],
		evol: [[1],[1]],
		material: [1593,1593]
	},
	1599: {
		name: "麒麟神將 秀蘭･帝王",
		attr: "水",
		id: [1596,1597,1598,1599],
		maxPot: [1,2,3,4],
		pots: ["C2","A1","PW","F1"],
		evol: [[1],[1],[1]],
		material: [1596,1596,1596]
	},
	1591: {
		name: "黃天女皇 依玲･帝王",
		attr: "雷",
		id: [1588,1589,1590,1591],
		maxPot: [1,2,3,5],
		pots: ["A1","H1","HT1","F1","PT"],
		evol: [[1],[1],[0,1]],
		material: [1588,1588,-34],
		special: [-34]
	},
	1592: {
		name: "邪龍女皇 依玲･帝王",
		attr: "雷",
		id: [1588,1589,1590,1592],
		maxPot: [1,2,3,5],
		pots: ["A1","H1","HT1","F1","PT"],
		evol: [[1],[1],[0,1]],
		material: [1588,1588,-35],
		special: [-35]
	},
	1586: {
		name: "黃天霸帝 狂･帝王",
		attr: "火",
		id: [1583,1584,1585,1586],
		maxPot: [1,3,4,6],
		pots: ["H1","F1","F1","A1","AF1","AF1"],
		evol: [[1],[1],[0,1]],
		material: [1583,1583,-36],
		special: [-36]
	},
	1587: {
		name: "邪龍帝 狂･帝王",
		attr: "火",
		id: [1583,1584,1585,1587],
		maxPot: [1,3,4,6],
		pots: ["H1","F1","F1","A1","HF1","HF1"],
		evol: [[1],[1],[0,1]],
		material: [1583,1583,-37],
		special: [-37]
	},
};

menu = [
	/*御三家*/
	1507,1508,1509,
	/*庫洛姆･麥格納Ⅰ魔導學園*/
	598,614,
	/*黃昏的四聖書*/
	1595,1599,1591,1592,1586,1587,
	/*庫洛姆･麥格納Ⅱ學園祭*/
	815,819,
	/*惡作劇女神與兔子的故事*/
	1756,1760,1764,1768,
	/*歌頌永恆的克羅諾斯*/
	727,735,765,1300,1301,
];
