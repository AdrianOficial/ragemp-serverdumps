{
var curSchoolExam = false;
var schoolExamCost = 0;

let aCatCityCheckPoint, aCatCityBlip;
let aCatCityPoint = 0;
let aCatCity = {
	"0":{"pos":"418.0962,-355.3279,47.0795"},
	"1":{"pos":"418.6526,-375.2207,46.8435"},
	"2":{"pos":"336.5587,-365.2656,44.8734"},
	"3":{"pos":"350.0774,-294.1497,53.7562"},
	"4":{"pos":"409.3302,-296.1528,51.2825"},
	"5":{"pos":"577.1494,-360.5828,43.4781"},
	"6":{"pos":"623.071,-332.0735,43.3755"},
	"7":{"pos":"765.1241,-37.2882,60.1306"},
	"8":{"pos":"990.4149,265.0804,81.2385"},
	"9":{"pos":"1118.8842,404.3046,83.4368"},
	"10":{"pos":"1495.765,818.843,76.8519"},
	"11":{"pos":"1650.2607,1176.1881,84.3309"},
	"12":{"pos":"1711.9348,1388.6365,85.7017"},
	"13":{"pos":"1986.9237,1560.9518,75.9594"},
	"14":{"pos":"2167.2415,1287.298,75.5792"},
	"15":{"pos":"2473.6829,854.3311,92.1965"},
	"16":{"pos":"2512.5864,142.8954,101.5335"},
	"17":{"pos":"2367.9612,-291.9378,84.7374"},
	"18":{"pos":"1981.0599,-691.0284,91.4343"},
	"19":{"pos":"1629.2034,-940.0189,63.2564"},
	"20":{"pos":"1328.4064,-1095.1392,51.6444"},
	"21":{"pos":"1148.0658,-1136.6438,43.6275"},
	"22":{"pos":"1016.8686,-860.8478,31.1537"},
	"23":{"pos":"818.5465,-638.6913,40.9857"},
	"24":{"pos":"718.7256,-576.8779,35.7174"},
	"25":{"pos":"580.9652,-403.8479,43.4682"},
	"26":{"pos":"552.7095,-342.9414,43.4647"},
	"27":{"pos":"493.3147,-321.9083,45.3634"},
	"28":{"pos":"441.2251,-345.9039,47.3256"},
	"29":{"pos":"390.2448,-356.1325,47.8863"}
};

let bCatCityCheckPoint, bCatCityBlip;
let bCatCityPoint = 0;
let bCatCity = {
	"0":{"pos":"-3136.9573,1066.424,20.102"},
	"1":{"pos":"-3158.1985,977.5721,15.2135"},
	"2":{"pos":"-3171.9084,913.6917,14.0442"},
	"3":{"pos":"-3220.1963,939.0989,13.3245"},
	"4":{"pos":"-3222.71,1060.3762,10.8022"},
	"5":{"pos":"-3191.644,1140.2482,9.3738"},
	"6":{"pos":"-3174.8579,1237.5701,10.1761"},
	"7":{"pos":"-3125.5117,1317.4977,19.1109"},
	"8":{"pos":"-3101.8838,1292.6295,19.8313"},
	"9":{"pos":"-3103.7363,1215.4012,19.8911"},
	"10":{"pos":"-3081.2507,1184.6144,20.4312"},
	"11":{"pos":"-2988.7803,1312.1177,35.3955"},
	"12":{"pos":"-2907.7156,1309.7843,49.4942"},
	"13":{"pos":"-2807.1775,1300.4824,70.5087"},
	"14":{"pos":"-2720.1514,1463.8457,98.741"},
	"15":{"pos":"-2663.4358,1500.3475,116.0153"},
	"16":{"pos":"-2652.5381,1506.0577,117.5846"},
	"17":{"pos":"-2671.9329,1509.6736,113.8631"},
	"18":{"pos":"-2737.3867,1430.8408,92.5719"},
	"19":{"pos":"-2822.7979,1294.141,67.3683"},
	"20":{"pos":"-2983.4148,1322.1211,36.6856"},
	"21":{"pos":"-3087.4326,1189.7271,20.1503"},
	"22":{"pos":"-3114.2004,1166.1467,19.984"},
	"23":{"pos":"-3126.6682,1112.6399,20.1014"},
	"24":{"pos":"-3145.5291,1109.4967,20.3107"}
};

let cCatCityCheckPoint, cCatCityBlip;
let cCatCityPoint = 0;
let cCatCity = {
	"0":{"pos":"2761.9067,3398.9248,56.6896"},
	"1":{"pos":"2703.3591,3245.5872,55.4101"},
	"2":{"pos":"2496.8191,3002.8801,42.1299"},
	"3":{"pos":"2150.5469,2725.0439,48.7205"},
	"4":{"pos":"1967.9985,2565.894,55.1677"},
	"5":{"pos":"1824.4612,2353.8838,56.3521"},
	"6":{"pos":"1712.0209,1600.6608,84.3471"},
	"7":{"pos":"1624.2124,1148.7734,84.2024"},
	"8":{"pos":"1524.4745,884.4042,77.8474"},
	"9":{"pos":"1296.9705,601.749,80.7954"},
	"10":{"pos":"1144.4471,479.6207,90.1649"},
	"11":{"pos":"1080.2957,442.5158,92.2715"},
	"12":{"pos":"1043.9446,503.813,96.3315"},
	"13":{"pos":"1143.1389,568.9628,98.6599"},
	"14":{"pos":"1307.3756,972.6069,106.527"},
	"15":{"pos":"1289.3857,1383.7777,103.1649"},
	"16":{"pos":"1175.8632,1800.8295,75.7418"},
	"17":{"pos":"996.9455,2138.5112,49.5028"},
	"18":{"pos":"658.3921,2307.3435,51.6053"},
	"19":{"pos":"278.9469,2669.0234,45.1317"},
	"20":{"pos":"271.6993,3385.77,38.7561"},
	"21":{"pos":"798.624,3530.1631,34.8073"},
	"22":{"pos":"1346.6691,3520.0803,36.0833"},
	"23":{"pos":"1782.4073,3555.3394,36.4161"},
	"24":{"pos":"2482.6282,4066.7463,38.3852"},
	"25":{"pos":"2762.7717,4397.9849,49.572"},
	"26":{"pos":"2799.2363,4433.5122,49.1785"},
	"27":{"pos":"2620.5815,5111.9863,45.4156"},
	"28":{"pos":"2619.8223,5076.9014,45.4206"},
	"29":{"pos":"2802.1792,4335.3003,50.5747"},
	"30":{"pos":"2885.2705,3709.0083,53.2392"},
	"31":{"pos":"2752.7798,3420.1196,56.8716"},
	"32":{"pos":"2636.0403,3468.6731,55.9359"},
	"33":{"pos":"2668.123,3524.1301,53.1541"}
};

let dCatCityCheckPoint, dCatCityBlip;
let dCatCityPoint = 0;
let dCatCity = {
	"0":{"pos":"-1668.9827,-836.6454,9.6597"},
	"1":{"pos":"-1626.0908,-882.2012,9.4445"},
	"2":{"pos":"-1564.954,-857.5332,10.3638"},
	"3":{"pos":"-1483.2809,-882.6285,10.7087"},
	"4":{"pos":"-1390.7936,-898.2111,12.2233"},
	"5":{"pos":"-1322.4546,-863.2781,16.2125"},
	"6":{"pos":"-1244.4135,-897.128,12.1618"},
	"7":{"pos":"-1097.3416,-782.415,19.5131"},
	"8":{"pos":"-889.7446,-660.6256,28.1171"},
	"9":{"pos":"-872.0212,-598.3694,29.5675"},
	"10":{"pos":"-923.6589,-498.4408,36.6795"},
	"11":{"pos":"-1046.1049,-276.2017,38.0958"},
	"12":{"pos":"-1099.7236,-277.8509,37.9831"},
	"13":{"pos":"-1165.9125,-270.6047,38.0395"},
	"14":{"pos":"-1268.0825,-318.3301,37.1745"},
	"15":{"pos":"-1433.6908,-411.8639,36.2509"},
	"16":{"pos":"-1488.8796,-407.1748,38.1517"},
	"17":{"pos":"-1594.3748,-308.4429,50.0586"},
	"18":{"pos":"-1651.9264,-324.1119,50.4871"},
	"19":{"pos":"-1832.9279,-257.0429,41.0442"},
	"20":{"pos":"-2110.719,-203.9322,20.0872"},
	"21":{"pos":"-2164.6023,-314.4706,13.2409"},
	"22":{"pos":"-2069.3726,-402.8667,11.6353"},
	"23":{"pos":"-1846.1108,-591.2232,11.6718"},
	"24":{"pos":"-1659.5448,-760.2281,10.3386"},
	"25":{"pos":"-1585.4259,-866.6952,10.3587"},
	"26":{"pos":"-1635.75,-850.2483,10.0092"}
};

var airCatCityCheckPoint = false;
let airCatCityBlip, airCatCityPoint = 0;
let airCatCity = {
	"0":{"pos":"-1178.1877,-2971.803,13.9465"},
	"1":{"pos":"-1029.7306,-3057.3501,13.945"},
	"2":{"pos":"-1014.7645,-3134.6936,13.9444"},
	"3":{"pos":"-1256.8536,-2994.748,13.9379"},
	"4":{"pos":"-1721.791,-2728.1494,123.9866"},
	"5":{"pos":"-2437.3667,-2314.7061,296.881"},
	"6":{"pos":"-3709.5474,-1552.5521,698.2358"},
	"7":{"pos":"-4183.6323,282.53,710.8958"},
	"8":{"pos":"-3517.5549,1752.6372,566.4882"},
	"9":{"pos":"-2416.458,2376.207,329.9651"},
	"10":{"pos":"-1581.426,2618.9487,89.3515"},
	"11":{"pos":"-1126.007,2792.356,52.2989"},
	"12":{"pos":"-310.5312,3020.978,63.7966"},
	"13":{"pos":"279.3124,3034.4543,118.2542"},
	"14":{"pos":"661.1152,3010.2256,89.6467"},
	"15":{"pos":"1013.7817,3065.4854,59.8016"},
	"16":{"pos":"1376.926,3162.5798,40.4141"},
	"17":{"pos":"1725.5343,3256.2063,41.1903"}
};

var heliCatCityCheckPoint = false;
let heliCatCityBlip, heliCatCityPoint = 0;
let heliCatCity = {
	"0":{"pos":"-1090.8083,-2767.7058,95.7895"},
	"1":{"pos":"-929.7479,-2654.3167,109.0929"},
	"2":{"pos":"-744.1851,-2547.1663,108.2589"},
	"3":{"pos":"-393.5932,-2352.4753,42.4461"},
	"4":{"pos":"-167.3558,-2307.094,50.1786"},
	"5":{"pos":"201.7289,-2319.8599,58.4619"},
	"6":{"pos":"332.4267,-2312.575,53.5046"},
	"7":{"pos":"543.6548,-2264.6328,54.303"},
	"8":{"pos":"648.3276,-2140.864,24.7641"},
	"9":{"pos":"670.3475,-2055.4705,17.1811"},
	"10":{"pos":"671.3296,-1751.9628,16.0887"},
	"11":{"pos":"635.6586,-1446.3119,16.2224"},
	"12":{"pos":"608.3709,-1342.5513,31.4111"},
	"13":{"pos":"591.4208,-1219.9084,23.8008"},
	"14":{"pos":"589.9981,-1056.6633,21.6623"},
	"15":{"pos":"587.1725,-854.9877,55.6753"},
	"16":{"pos":"616.8806,-599.054,24.7338"},
	"17":{"pos":"722.8378,-456.0094,25.35"},
	"18":{"pos":"906.3043,-404.4934,53.2329"},
	"19":{"pos":"1024.1067,-323.9543,71.6452"},
	"20":{"pos":"1079.7131,-235.9483,72.9717"},
	"21":{"pos":"1102.7473,-53.5666,132.624"},
	"22":{"pos":"901.3896,253.6791,173.8346"},
	"23":{"pos":"590.4299,389.7152,220.3376"},
	"24":{"pos":"117.2471,182.7262,226.8477"},
	"25":{"pos":"13.0337,-194.9719,189.9742"},
	"26":{"pos":"104.7243,-456.6921,97.8671"},
	"27":{"pos":"79.2969,-651.3596,59.9875"},
	"28":{"pos":"10.2069,-830.5284,51.1188"},
	"29":{"pos":"-43.8017,-992.67,38.9404"},
	"30":{"pos":"-140.1698,-1137.8502,59.6759"},
	"31":{"pos":"-673.6711,-1544.1368,91.748"},
	"32":{"pos":"-958.8965,-2066.384,95.5646"},
	"33":{"pos":"-1252.5885,-3060.5276,74.6201"},
	"34":{"pos":"-1236.7057,-3291.8672,26.5912"},
	"35":{"pos":"-1276.8705,-3391.1555,17.1507"}
};

let eCatCityCheckPoint, eCatCityBlip;
let eCatCityPoint = 0;
let eCatCity = {
	"0":{"pos":"-48.6511,6318.4775,31.3299"},
	"1":{"pos":"198.7579,6545.5278,31.912"},
	"2":{"pos":"703.4128,6507.2456,27.6442"},
	"3":{"pos":"1497.8735,6432.2412,22.525"},
	"4":{"pos":"1887.2827,6312.4214,41.7335"},
	"5":{"pos":"2101.7163,6034.6816,50.5171"},
	"6":{"pos":"2383.8284,5743.7964,45.7199"},
	"7":{"pos":"2583.9429,5210.3115,44.7406"},
	"8":{"pos":"2624.3269,5108.5195,44.8395"},
	"9":{"pos":"2605.9658,5253.2275,44.685"},
	"10":{"pos":"2414.0227,5769.311,45.7325"},
	"11":{"pos":"2228.1069,6030.125,51.8955"},
	"12":{"pos":"2006.0369,6215.978,46.9773"},
	"13":{"pos":"1780.7017,6370.9668,38.3447"},
	"14":{"pos":"1414.442,6481.0811,20.3274"},
	"15":{"pos":"821.9536,6502.6577,22.9672"},
	"16":{"pos":"376.4824,6579.1514,27.9113"},
	"17":{"pos":"162.275,6539.9072,31.8351"},
	"18":{"pos":"-36.9605,6350.1436,31.3386"},
	"19":{"pos":"-151.9212,6234.1475,31.1971"},
	"20":{"pos":"-184.4677,6202.5698,31.2336"},
	"21":{"pos":"-202.8855,6214.6499,31.4895"},
	"22":{"pos":"-192.6876,6236.3145,31.4959"}
};

var boatCatCityCheckPoint = false;
let boatCatCityBlip, boatCatCityPoint = 0;
let boatCatCity = {
	"0":{"pos":"-842.2664,-1461.9968,0.5624"},
	"1":{"pos":"-853.2023,-1550.0122,0.6804"},
	"2":{"pos":"-983.7225,-1652.6049,0.5599"},
	"3":{"pos":"-1061.5597,-1749.4585,0.4807"},
	"4":{"pos":"-1297.1036,-1969.1958,0.729"},
	"5":{"pos":"-1430.4456,-1838.7499,1.5945"},
	"6":{"pos":"-1505.2059,-1592.2731,0.9096"},
	"7":{"pos":"-1552.0219,-1441.2231,1.2955"},
	"8":{"pos":"-1620.5619,-1342.3939,0.8811"},
	"9":{"pos":"-1724.9269,-1265.0585,8.5101"},
	"10":{"pos":"-1795.1659,-1211.0496,0.4405"},
	"11":{"pos":"-1843.9885,-1168.9027,1.3975"},
	"12":{"pos":"-1859.8262,-1085.0616,0.43"},
	"13":{"pos":"-1838.1903,-1018.8405,0.6438"},
	"14":{"pos":"-1781.6846,-973.7322,0.6935"},
	"15":{"pos":"-1606.7377,-899.7523,0.7131"},
	"16":{"pos":"-1452.6566,-834.2884,0.7653"},
	"17":{"pos":"-1317.5027,-845.135,0.7599"},
	"18":{"pos":"-1231.2435,-933.5016,0.6724"},
	"19":{"pos":"-1164.2655,-1022.9073,0.2732"},
	"20":{"pos":"-1011.6928,-935.181,0.168"},
	"21":{"pos":"-972.8537,-961.8062,0.1173"},
	"22":{"pos":"-920.1003,-1051.8744,0.1547"},
	"23":{"pos":"-906.2109,-1125.0421,0.1258"},
	"24":{"pos":"-1047.6517,-1201.6982,0.1742"},
	"25":{"pos":"-1056.5547,-1239.7408,0.1974"},
	"26":{"pos":"-992.6729,-1349.3011,0.5857"},
	"27":{"pos":"-880.2657,-1329.4364,0.582"}
};

var schoolsInStream = [];

mp.events.add('playerEnterColshape', (shape) => {
	if(typeof(shape) !== 'undefined') {
		if(mp.colshapes.exists(shape)) {
			if(typeof(shape.data) === 'undefined') {
				if(typeof(shape.getVariable('col.type')) !== "undefined") {
					let colType = shape.getVariable('col.type');
					if(colType == 'school') {
						if(!localPlayer.vehicle && hud_browser) {
							if(allowBinds != stockBinds) return false;
							let schoolData = shape.getVariable('col.data');
							let colData = JSON.parse(schoolData[3]);
							if(localPlayer.getVariable('player.id') && localPlayer.getVariable('player.lics')) {
								let myLics = {};
								if(IsJsonString(JSON.stringify(localPlayer.getVariable('player.lics')))) myLics = localPlayer.getVariable('player.lics');
								//chatAPI.sysPush("<span style=\"color:#FF6146\"> * CAT: "+colData["cat"].toString()+"</span>");
								if(colData["cat"] == "aCat") {
									if(myLics["aCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "aCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}else if(colData["cat"] == "bCat") {
									if(myLics["bCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "bCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}else if(colData["cat"] == "cCat") {
									if(myLics["cCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "cCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}else if(colData["cat"] == "eCat") {
									if(myLics["eCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(myLics["cCat"] === undefined) {
											notyAPI.error("Для сдачи на категорию «<b>E</b>» необходима категория «<b>C</b>».", 3000, true);
										}else{
											if(hud_browser) {
												curSchoolExam = "eCat";
												localPlayer.freezePosition(true);
												mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
												hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
												mp.gui.cursor.visible = true;
											}
										}
									}
								}else if(colData["cat"] == "dCat") {
									if(myLics["dCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(myLics["bCat"] === undefined) {
											notyAPI.error("Для сдачи на категорию «<b>D</b>» необходима категория «<b>B</b>».", 3000, true);
										}else{
											if(hud_browser) {
												curSchoolExam = "dCat";
												localPlayer.freezePosition(true);
												mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
												hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
												mp.gui.cursor.visible = true;
											}
										}
									}
								}else if(colData["cat"] == "airCat") {
									notyAPI.error("Данная лицензия сейчас недоступна из-за вылетов (синхра самолётов RAGE).", 3000, true);
									if(1 == 1) return notyAPI.error("Когда запустим вновь, сообщим в группе ВКонтакте и Discord.", 3000, true);
									if(myLics["airCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "airCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}else if(colData["cat"] == "heliCat") {
									if(myLics["heliCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "heliCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}else if(colData["cat"] == "boatCat") {
									if(myLics["boatCat"] !== undefined) {
										notyAPI.error("У Вас уже есть право управления данной категорией транспорта.", 3000, true);
									}else{
										if(hud_browser) {
											curSchoolExam = "boatCat";
											localPlayer.freezePosition(true);
											mp.game.graphics.startScreenEffect("MenuMGHeistTint", 0, true);
											hud_browser.execute("toggleAutoschoolBlank('"+curSchoolExam+"');");
											mp.gui.cursor.visible = true;
										}
									}
								}
								return null;
							}else{
								notyAPI.error("Проблемы с базой данных сервера, попробуйте позже.", 3000, true);
								return null;
							}
						}
					}
					if(colType == 'school_render') {
						let schoolData = shape.getVariable('col.data');
						
						let schoolMarker = mp.markers.new(1, new mp.Vector3(parseFloat(schoolData[0]), parseFloat(schoolData[1]), parseFloat(schoolData[2])), 1.9,
						{
							direction: new mp.Vector3(0, 0, 0),
							rotation: new mp.Vector3(0, 0, 0),
							color: [255, 173, 47, 200],
							visible: true,
							dimension: 0
						});

						let tunArray = {'marker': schoolMarker, 'data': schoolData[3], 'pos': [parseFloat(schoolData[0]), parseFloat(schoolData[1]), parseFloat(schoolData[2])], 'alpha': 0};
						schoolsInStream.push(tunArray);
						schoolMarker = null;
						return null;
					}
				}
			}
		}
	}
});

mp.events.add('playerExitColshape', (shape) => {
	if(typeof(shape) !== 'undefined') {
		if(mp.colshapes.exists(shape)) {
			if(typeof(shape.getVariable('col.type')) !== "undefined") {
				let colType = shape.getVariable('col.type');
				if(colType == 'school') {
					return closeSchoolBlank();
				}
				if(colType == 'school_render') {
					let schoolRenderData = shape.getVariable('col.data');
					for(var i in schoolsInStream) {
						let tempData = schoolsInStream[i];
						let posData = tempData['pos'];
						if (posData[0] == schoolRenderData[0] && posData[1] == schoolRenderData[1] && posData[2] == schoolRenderData[2]) {
							if(tempData['marker']) {
								tempData['marker'].destroy();
								delete tempData['marker'];
							}
							if(schoolsInStream[i] || schoolsInStream[i] !== undefined) delete schoolsInStream[i];
						}
					}
					schoolsInStream = schoolsInStream.filter(function (el) { return el != null; });
				}
			}
		}
	}
});

function closeSchoolBlank(isNext) {
	if(isNext !== undefined) {
		hud_browser.execute("togglePreloader('true');");
		if(curSchoolExam == "aCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('aCatCityExam');
			
			aCatCityPoint = 0;
			if(aCatCityCheckPoint) {
				aCatCityCheckPoint.destroy();
				aCatCityCheckPoint = null;
			}
			
			if(aCatCityBlip) {
				aCatCityBlip.destroy();
				aCatCityBlip = null;
			}
			
			aCatCityExamProcessor();
		}else if(curSchoolExam == "bCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('bCatCityExam');
			
			bCatCityPoint = 0;
			if(bCatCityCheckPoint) {
				bCatCityCheckPoint.destroy();
				bCatCityCheckPoint = null;
			}
			
			if(bCatCityBlip) {
				bCatCityBlip.destroy();
				bCatCityBlip = null;
			}
				
			bCatCityExamProcessor();
		}else if(curSchoolExam == "cCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('cCatCityExam');
			
			cCatCityPoint = 0;
			if(cCatCityCheckPoint) {
				cCatCityCheckPoint.destroy();
				cCatCityCheckPoint = null;
			}
			
			if(cCatCityBlip) {
				cCatCityBlip.destroy();
				cCatCityBlip = null;
			}
			
			cCatCityExamProcessor();
		}else if(curSchoolExam == "eCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('eCatCityExam');
			
			eCatCityPoint = 0;
			if(eCatCityCheckPoint) {
				eCatCityCheckPoint.destroy();
				eCatCityCheckPoint = null;
			}
			
			if(cCatCityBlip) {
				eCatCityBlip.destroy();
				eCatCityBlip = null;
			}
			
			eCatCityExamProcessor();
		}else if(curSchoolExam == "dCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('dCatCityExam');
			
			dCatCityPoint = 0;
			if(dCatCityCheckPoint) {
				dCatCityCheckPoint.destroy();
				dCatCityCheckPoint = null;
			}
			
			if(dCatCityBlip) {
				dCatCityBlip.destroy();
				dCatCityBlip = null;
			}
			
			dCatCityExamProcessor();
		}else if(curSchoolExam == "airCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('airCatCityExam');
			
			airCatCityPoint = 0;
			if(airCatCityCheckPoint) {
				airCatCityCheckPoint.destroy();
				airCatCityCheckPoint = null;
			}
			
			if(airCatCityBlip) {
				airCatCityBlip.destroy();
				airCatCityBlip = null;
			}
			
			airCatCityExamProcessor();
		}else if(curSchoolExam == "heliCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('heliCatCityExam');
			
			heliCatCityPoint = 0;
			if(heliCatCityCheckPoint) {
				heliCatCityCheckPoint.destroy();
				heliCatCityCheckPoint = null;
			}
			
			if(heliCatCityBlip) {
				heliCatCityBlip.destroy();
				heliCatCityBlip = null;
			}
			
			heliCatCityExamProcessor();
		}else if(curSchoolExam == "boatCat") {
			mp.events.call("sleepAntiCheat");
			mp.events.callRemote('boatCatCityExam');
			
			boatCatCityPoint = 0;
			if(boatCatCityCheckPoint) {
				boatCatCityCheckPoint.destroy();
				boatCatCityCheckPoint = null;
			}
			
			if(boatCatCityBlip) {
				boatCatCityBlip.destroy();
				boatCatCityBlip = null;
			}
			
			boatCatCityExamProcessor();
		}
	}else{
		localPlayer.freezePosition(false);
	}
	if(hud_browser) {
		mp.game.graphics.stopScreenEffect("MenuMGHeistTint");
		hud_browser.execute("toggleAutoschoolBlank();");
		mp.gui.cursor.visible = false;
	}
}
mp.events.add("closeSchoolBlank", closeSchoolBlank);

function schoolExamResult(isStatus) {
	if(isStatus !== undefined) {
		if(isStatus) {
			setTimeout(function() {
				mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Это успех, дружище!", "Молодец, тебе выдали новую лицензию!", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
			}, 5000);
			return mp.game.ui.messages.showMidsizedShard("~y~Экзамен ~w~сдан", "~s~Вы успешно сдали все экзамены!", 5, false, true, 6500);
		}else{
			setTimeout(function() {
				mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Ну как же так, экзамен провален..", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
			}, 5000);
			return mp.game.ui.messages.showMidsizedShard("~r~Экзамен ~w~провален", "~s~К сожалению вы не сдали экзамен..", 5, false, true, 6500);
		}
	}
}
mp.events.add("schoolExamResult", schoolExamResult);

mp.events.add("playerEnterCheckpoint", (checkpoint) => {
	if(typeof(checkpoint) !== "undefined" && (typeof(bCatCityCheckPoint) !== "undefined" || typeof(cCatCityCheckPoint) !== "undefined" || typeof(airCatCityCheckPoint) !== "undefined")) {
		if(mp.checkpoints.exists(checkpoint)) {
			if(mp.checkpoints.exists(aCatCityCheckPoint) && checkpoint == aCatCityCheckPoint) {
				if(aCatCityPoint >= Object.keys(aCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'aCat', schoolExamCost.toString());
					
					aCatCityPoint = 0;
					
					if(aCatCityCheckPoint) {
						aCatCityCheckPoint.destroy();
						aCatCityCheckPoint = null;
					}
					
					if(aCatCityBlip) {
						aCatCityBlip.destroy();
						aCatCityBlip = null;
					}
					
					return;
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					aCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(bCatCityCheckPoint) && checkpoint == bCatCityCheckPoint) {
				if(bCatCityPoint >= Object.keys(bCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'bCat', schoolExamCost.toString());
					
					bCatCityPoint = 0;
					
					if(bCatCityCheckPoint) {
						bCatCityCheckPoint.destroy();
						bCatCityCheckPoint = null;
					}
					
					if(bCatCityBlip) {
						bCatCityBlip.destroy();
						bCatCityBlip = null;
					}
					
					return;
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					bCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(cCatCityCheckPoint) && checkpoint == cCatCityCheckPoint) {
				if(cCatCityPoint >= Object.keys(cCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'cCat', schoolExamCost.toString());
					
					cCatCityPoint = 0;
					
					if(cCatCityCheckPoint) {
						cCatCityCheckPoint.destroy();
						cCatCityCheckPoint = null;
					}
					
					if(cCatCityBlip) {
						cCatCityBlip.destroy();
						cCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					cCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(eCatCityCheckPoint) && checkpoint == eCatCityCheckPoint) {
				if(eCatCityPoint >= Object.keys(eCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'eCat', schoolExamCost.toString());
					
					eCatCityPoint = 0;
					
					if(eCatCityCheckPoint) {
						eCatCityCheckPoint.destroy();
						eCatCityCheckPoint = null;
					}
					
					if(eCatCityBlip) {
						eCatCityBlip.destroy();
						eCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					eCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(dCatCityCheckPoint) && checkpoint == dCatCityCheckPoint) {
				if(dCatCityPoint >= Object.keys(dCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'dCat', schoolExamCost.toString());
					
					dCatCityPoint = 0;
					
					if(dCatCityCheckPoint) {
						dCatCityCheckPoint.destroy();
						dCatCityCheckPoint = null;
					}
					
					if(dCatCityBlip) {
						dCatCityBlip.destroy();
						dCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					dCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(airCatCityCheckPoint) && checkpoint == airCatCityCheckPoint) {
				if(airCatCityPoint >= Object.keys(airCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'airCat', schoolExamCost.toString());
					
					airCatCityPoint = 0;
					
					if(airCatCityCheckPoint) {
						airCatCityCheckPoint.destroy();
						airCatCityCheckPoint = false;
					}
					
					if(airCatCityBlip) {
						airCatCityBlip.destroy();
						airCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					airCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(heliCatCityCheckPoint) && checkpoint == heliCatCityCheckPoint) {
				if(heliCatCityPoint >= Object.keys(heliCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'heliCat', schoolExamCost.toString());
					
					heliCatCityPoint = 0;
					
					if(heliCatCityCheckPoint) {
						heliCatCityCheckPoint.destroy();
						heliCatCityCheckPoint = false;
					}
					
					if(heliCatCityBlip) {
						heliCatCityBlip.destroy();
						heliCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					heliCatCityExamProcessor();
				}
			}else if(mp.checkpoints.exists(boatCatCityCheckPoint) && checkpoint == boatCatCityCheckPoint) {
				if(boatCatCityPoint >= Object.keys(boatCatCity).length) {
					curSchoolExam = false;
					mp.events.callRemote('schoolGoodExam', 'boatCat', schoolExamCost.toString());
					
					boatCatCityPoint = 0;
					
					if(boatCatCityCheckPoint) {
						boatCatCityCheckPoint.destroy();
						boatCatCityCheckPoint = false;
					}
					
					if(boatCatCityBlip) {
						boatCatCityBlip.destroy();
						boatCatCityBlip = null;
					}
				}else{
					if(!localPlayer.vehicle) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					if(!localPlayer.vehicle.getVariable("veh.school")) return chatAPI.notifyPush(" * Только на учебном транспорте можно пройти данную метку.");
					boatCatCityExamProcessor();
				}
			}
		}
	}
});

function aCatCityExamProcessor() {
	if(aCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Наставления", "Водитель, двигайтесь по заданному маршруту", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	
	let markerData = aCatCity[aCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(aCatCityCheckPoint) {
		aCatCityCheckPoint.destroy();
		aCatCityCheckPoint = null;
	}
	
	if(aCatCityBlip) {
		aCatCityBlip.destroy();
		aCatCityBlip = null;
	}
	
	let checkPointType = 0;
	let checkPointColor = [214, 13, 16, 150];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	if(aCatCityPoint < Object.keys(aCatCity).length-1) {
		let nextMarkerData = aCatCity[(aCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])-6.7);
		
		aCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])), {
			name: "Точка маршрута",
			scale: 0.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
		aCatCityBlip.setRoute(true);
		aCatCityBlip.setRouteColour(1);
	}else{
		checkPointType = 4;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	}
	
	aCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 9,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	
	aCatCityPoint++;
}

function bCatCityExamProcessor() {
	if(bCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Наставления", "Водитель, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	
	let markerData = bCatCity[bCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(bCatCityCheckPoint) {
		bCatCityCheckPoint.destroy();
		bCatCityCheckPoint = null;
	}
	
	if(bCatCityBlip) {
		bCatCityBlip.destroy();
		bCatCityBlip = null;
	}
	
	let checkPointType = 0;
	let checkPointColor = [214, 13, 16, 150];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	if(bCatCityPoint < Object.keys(bCatCity).length-1) {
		let nextMarkerData = bCatCity[(bCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])-6.7);
		
		bCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])), {
			name: "Точка маршрута",
			scale: 0.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
		bCatCityBlip.setRoute(true);
		bCatCityBlip.setRouteColour(1);
	}else{
		checkPointType = 4;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	}
	
	bCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 9,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	
	bCatCityPoint++;
}

function cCatCityExamProcessor() {
	if(cCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Наставления", "Водитель, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = cCatCity[cCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(cCatCityCheckPoint) {
		cCatCityCheckPoint.destroy();
		cCatCityCheckPoint = null;
	}
	
	if(cCatCityBlip) {
		cCatCityBlip.destroy();
		cCatCityBlip = null;
	}
	
	let checkPointType = 0;
	let checkPointColor = [214, 13, 16, 150];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	if(cCatCityPoint < Object.keys(cCatCity).length-1) {
		let nextMarkerData = cCatCity[(cCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])-6.7);
		
		cCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Точка маршрута",
			scale: 0.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
		cCatCityBlip.setRoute(true);
		cCatCityBlip.setRouteColour(1);
	}else{
		checkPointType = 4;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	}
	
	cCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 9,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	
	cCatCityPoint++;
}

function eCatCityExamProcessor() {
	if(eCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Наставления", "Водитель, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = eCatCity[eCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(eCatCityCheckPoint) {
		eCatCityCheckPoint.destroy();
		eCatCityCheckPoint = null;
	}
	
	if(eCatCityBlip) {
		eCatCityBlip.destroy();
		eCatCityBlip = null;
	}
	
	let checkPointType = 0;
	let checkPointColor = [214, 13, 16, 150];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	if(eCatCityPoint < Object.keys(eCatCity).length-1) {
		let nextMarkerData = eCatCity[(eCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])-6.7);
		
		eCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Точка маршрута",
			scale: 0.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
		eCatCityBlip.setRoute(true);
		eCatCityBlip.setRouteColour(1);
	}else{
		checkPointType = 4;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	}
	
	eCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 9,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	
	eCatCityPoint++;
}

function dCatCityExamProcessor() {
	if(dCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Школьный инструктор", "Наставления", "Водитель, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = dCatCity[dCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(dCatCityCheckPoint) {
		dCatCityCheckPoint.destroy();
		dCatCityCheckPoint = null;
	}
	
	if(dCatCityBlip) {
		dCatCityBlip.destroy();
		dCatCityBlip = null;
	}
	
	let checkPointType = 0;
	let checkPointColor = [214, 13, 16, 150];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	if(dCatCityPoint < Object.keys(dCatCity).length-1) {
		let nextMarkerData = dCatCity[(dCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])-6.7);
		
		dCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Точка маршрута",
			scale: 0.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
		dCatCityBlip.setRoute(true);
		dCatCityBlip.setRouteColour(1);
	}else{
		checkPointType = 4;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	}
	
	dCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 9,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	
	dCatCityPoint++;
}

function airCatCityExamProcessor() {
	if(airCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Пилот инструктор", "Наставления", "Пилот, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = airCatCity[airCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(airCatCityCheckPoint) {
		airCatCityCheckPoint.destroy();
		airCatCityCheckPoint = false;
	}
	
	if(airCatCityBlip) {
		airCatCityBlip.destroy();
		airCatCityBlip = null;
	}
	
	let checkPointType = 14;
	let checkPointColor = [42, 193, 79, 125];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	if(airCatCityPoint < Object.keys(airCatCity).length-1) {
		let nextMarkerData = airCatCity[(airCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])+25.5);
		
		airCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Актуальный курс",
			scale: 1.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
	}else{
		checkPointType = 16;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	}
	
	airCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 55,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	airCatCityCheckPoint.posData = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	
	airCatCityPoint++;
}

function heliCatCityExamProcessor() {
	if(heliCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Пилот инструктор", "Наставления", "Пилот, пожалуйста пристягните ремень безопасности", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = heliCatCity[heliCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(heliCatCityCheckPoint) {
		heliCatCityCheckPoint.destroy();
		heliCatCityCheckPoint = false;
	}
	
	if(heliCatCityBlip) {
		heliCatCityBlip.destroy();
		heliCatCityBlip = null;
	}
	
	let checkPointType = 14;
	let checkPointColor = [42, 193, 79, 125];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	if(heliCatCityPoint < Object.keys(heliCatCity).length-1) {
		let nextMarkerData = heliCatCity[(heliCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])+25.5);
		
		heliCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Актуальный курс",
			scale: 1.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
	}else{
		checkPointType = 16;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	}
	
	heliCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7), 15,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	heliCatCityCheckPoint.posData = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	
	heliCatCityPoint++;
}

function boatCatCityExamProcessor() {
	if(boatCatCityPoint == 0) {
		mp.game.ui.notifications.showWithPicture("Опытный яхтсмен", "Наставления", "Пройдите составленный мной маршрут без ошибок", "CHAR_MP_PROF_BOSS", 1, false, 1, 2);
		if(hud_browser) hud_browser.execute('playSound("schoolExam", "0.1");');
	}
	let markerData = boatCatCity[boatCatCityPoint.toString()];
	let tempPos = explode(",", markerData["pos"]);
	
	if(boatCatCityCheckPoint) {
		boatCatCityCheckPoint.destroy();
		boatCatCityCheckPoint = false;
	}
	
	if(boatCatCityBlip) {
		boatCatCityBlip.destroy();
		boatCatCityBlip = null;
	}
	
	let checkPointType = 14;
	let checkPointColor = [42, 193, 79, 125];
	
	let dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	if(boatCatCityPoint < Object.keys(boatCatCity).length-1) {
		let nextMarkerData = boatCatCity[(boatCatCityPoint+1).toString()];
		let nextTempPos = explode(",", nextMarkerData["pos"]);
		dir = new mp.Vector3(parseFloat(nextTempPos[0]), parseFloat(nextTempPos[1]), parseFloat(nextTempPos[2])+25.5);
		
		boatCatCityBlip = mp.blips.new(1, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])), {
			name: "Актуальная навигация",
			scale: 1.5,
			color: 1,
			shortRange: false,
			dimension: 0
		});
	}else{
		checkPointType = 16;
		checkPointColor = [255, 255, 255, 150];
		dir = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])+25.5);
	}
	
	boatCatCityCheckPoint = mp.checkpoints.new(checkPointType, new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-4.7), 15,
	{
		direction: dir,
		color: checkPointColor,
		visible: true,
		dimension: 0
	});
	boatCatCityCheckPoint.posData = new mp.Vector3(parseFloat(tempPos[0]), parseFloat(tempPos[1]), parseFloat(tempPos[2])-6.7);
	
	boatCatCityPoint++;
}

function schoolPayExam(theCat, theCost) {
	if(theCat !== undefined && theCost !== undefined && hud_browser) {
		schoolExamCost = parseInt(theCost);
		let myMoney = parseInt(localPlayer.getVariable("player.money"));
		if(theCost > myMoney) return hud_browser.execute("schoolExamNeedMoney();");
		
		hud_browser.execute("schoolExamPayed('"+theCat+"', '"+theCost+"');");
	}else{
		closeSchoolBlank();
	}
}
mp.events.add("schoolPayExam", schoolPayExam);

function checkVehOutSchoolExam(vehicle, seat) {
	if(vehicle && curSchoolExam) {
		if(typeof(vehicle.getVariable("veh.school")) !== "undefined") {
			if(mp.players.atRemoteId(parseInt(vehicle.getVariable('veh.school')))) {
				let schoolOwn = mp.players.atRemoteId(parseInt(vehicle.getVariable('veh.school')));
				if(schoolOwn.remoteId.toString() == localPlayer.remoteId.toString()) {
					notyAPI.error("Вы покинули учебный транспорт, экзамен провален.", 3000, true);
					mp.game.ui.messages.showMidsized("~s~Вы покинули ~r~учебный транспорт", "~s~Экзамен провален.");
					
					curSchoolExam = false;
					
					if(aCatCityCheckPoint) {
						aCatCityCheckPoint.destroy();
						aCatCityCheckPoint = null;
					}
					
					if(aCatCityBlip) {
						aCatCityBlip.destroy();
						aCatCityBlip = null;
					}
					
					if(bCatCityCheckPoint) {
						bCatCityCheckPoint.destroy();
						bCatCityCheckPoint = null;
					}
					
					if(bCatCityBlip) {
						bCatCityBlip.destroy();
						bCatCityBlip = null;
					}
					
					if(cCatCityCheckPoint) {
						cCatCityCheckPoint.destroy();
						cCatCityCheckPoint = null;
					}
					
					if(cCatCityBlip) {
						cCatCityBlip.destroy();
						cCatCityBlip = null;
					}
					
					if(dCatCityCheckPoint) {
						dCatCityCheckPoint.destroy();
						dCatCityCheckPoint = null;
					}
					
					if(dCatCityBlip) {
						dCatCityBlip.destroy();
						dCatCityBlip = null;
					}
					
					if(eCatCityCheckPoint) {
						eCatCityCheckPoint.destroy();
						eCatCityCheckPoint = null;
					}
					
					if(eCatCityBlip) {
						eCatCityBlip.destroy();
						eCatCityBlip = null;
					}
					
					if(airCatCityCheckPoint) {
						airCatCityCheckPoint.destroy();
						airCatCityCheckPoint = false;
					}
					
					if(airCatCityBlip) {
						airCatCityBlip.destroy();
						airCatCityBlip = null;
					}
					
					if(heliCatCityCheckPoint) {
						heliCatCityCheckPoint.destroy();
						heliCatCityCheckPoint = false;
					}
					
					if(heliCatCityBlip) {
						heliCatCityBlip.destroy();
						heliCatCityBlip = null;
					}
					
					if(boatCatCityCheckPoint) {
						boatCatCityCheckPoint.destroy();
						boatCatCityCheckPoint = false;
					}
					
					if(boatCatCityBlip) {
						boatCatCityBlip.destroy();
						boatCatCityBlip = null;
					}
					
					mp.events.callRemote('examFailed');
				}
			}
		}
	}
}
mp.events.add("playerLeaveVehicle", checkVehOutSchoolExam);
}