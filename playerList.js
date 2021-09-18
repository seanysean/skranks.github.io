const newPlayer = '&nbsp;<img class="newPlayer" src="Images/new-icon-28.png">';

let player = [
    ['007.png',
     '007',
     301,
     9576,
     61,
     7345,
     '1.30',
     18,
     '7/31/2021'],
    ['2Fast2Furious.jpg',
     '2Fast2Furious',
     94,
     1754,
     77,
     1617,
     '1.08',
     '',
     ''],
    ['7TAQBAQ.png',
     '7TAQBAQ',
     224,
     5101,
     85,
     4565,
     '1.12',
     15,
     '6/16/2021'],
    ['Aabel03.png',
     'Aabel03',
     154,
     2379,
     77,
     1598,
     '1.49',
     11,
     '5/25/2021'],
    ['AaritSkYoutubeBESK.png', //AaritMehta
	 'AaritSkYoutubeBESK',
	 636,
	 12274,
	 1608,
	 9694,
	 '1.27',
	 35,
	 '9/9/2021'],
    ['AbrahamJ.png',
	 'AbrahamJ',
	 45,
	 1005,
	 30,
	 921,
	 '1.09',
	 10,
	 '7/31/2021'],
    ['Abuwardeh.png', 
     'Abuwardeh',
     251,
     3991,
     1359,
     3084,
     '1.29',
     12,
     '5/24/2021'],
    ['aConadatuamae.png', // mfsf#4066
	 'aConadatuamae',
	 1956,
	 28031,
	 297,
	 10854,
	 '2.58',
	 '',
	 '7/31/2021'],
    ['Adam.png', // plexer
	 'Adam',
	 22,
	 441,
	 66,
	 430,
	 '1.03',
	 10,
	 '8/19/2021'],
    ['AimbotLeLe.jpg',
     'Aimbot.LeLe',
     924,
     14670,
     108,
     8420,
     '1.74',
     13,
     '6/23/2021'],
    ['Airi.png',
     'Airi',
     328,
     4161,
     391,
     2383,
     '1.75',
     10,
     '5/19/2021'],
    ['AKANSHA.png',
	 'AKANSHA',
	 128,
	 7994,
	 83,
	 6961,
	 '1.15',
	 20,
	 '9/9/2021'],
    ['Alexander.png',
     'Alexander',
     633,
     9163,
     286,
     3156,
     '2.90',
     '',
     ''],
    ['Alexplayz.png',
     'Alexplayz',
     50,
     950,
     247,
     907,
     '1.05',
     '',
     '6/01/2021'],
    ['Alfonso.png',
     'Alfonso',
     1414,
     18557,
     1443,
     6753,
     '2.75',
     '',
     ''],
    ['allstarcat.png',
     'allstarcat',
     209,
     7519,
     815,
     5442,
     '1.38',
     '',
     '5/24/2021'],
    ['AlphaZero.png',
     'AlphaZero',
     4633,
     73186,
     1937 + 0 + 0 + 0, // impressive no bot kills streak
     30869,
     '2.37',
     50, // smh instant level 50
     '9/17/2021'],
    ['Amrik.png',
     'Amrik',
     239,
     3816,
     93 + 1,
     2244,
     '1.70',
     12,
     '7/31/2021'],
     ['ANCIENT.png',
     'ANCIENT',
     1522,
     22129,
     908,
     11547,
     '1.92',
     40,
     '7/31/2021'],
    ['Anjel lunar_057.png',
     'Anjel lunar_057',
     45,
     833,
     207,
     754,
     '1.10',
     8,
     '5/20/2021'],
    ['Armario.jpg',
     'Armario',
     38,
     1550,
     63,
     1009,
     '1.54',
     8,
     '5/27/2021'],
    ['Avikatron.png',
     'Avikatron',
     48,
     1054,
     11,
     66,
     '1.58',
     '',
     ''],
    ['Ayan.png',
     'Ayan',
     126,
     2074,
     109,
     1827,
     '1.14',
     11,
     '5/18/2021'],
    ['AytruxThs.jpg',
     'AytruxThs',
     11,
     195,
     2,
     158,
     '1.23',
     6,
     '5/22/2021'],
    ['BAMerica.png',
     'BAM\'erica',
     381,
     12502,
     612,
     7270,
     '1.72',
     15,
     '8/27/2021'],
    ['BazzaBingo.png',
	 'BazzaBingo',
	 776,
	 11041,
	 686,
	 6979,
	 '1.58',
	 26,
	 '8/4/2021'],
    ['Billy.png',
     'Billy',
     25,
     380,
     1,
     210,
     '1.81',
     7,
     '5/25/2021'],
    ['BlackShadow.png',
     'BlackShadow',
     148,
     3195,
     245,
     2168,
     '1.47',
     7,
     '6/09/2021'],
    ['Bleh The Breh.png',
	 'Bleh The Breh',
	 65,
	 995,
	 47,
	 776,
	 '1.28',
	 13,
	 '9/9/2021'],
    ['blesses45.png',
     'blesses45',
     1322,
     15374,
     988,
     5957,
     '2.58',
     36,
     '8/4/2021'],
    ['BoBoiBoy.png',
	 'BoBoiBoy',
	 503,
	 9828,
	 791,
	 7351,
	 '1.34',
	 '',
	 '9/9/2021'],
    ['Bonkaroo.png',
	 'Bonkaroo',
	 56,
	 835,
	 56,
	 517,
	 '1.62',
	 6,
	 '8/19/2021'],
    ['boomya.png',
     'boomya',
     3129,
     37957,
     841,
     14350,
     '2.65',
     13,
     '6/09/2021'],
    ['BossAngeles.png',
	 'BossAngeles',
	 833,
	 14668,
	 179,
	 9114,
	 '1.61',
	 37,
	 '9/17/2021'],
    ['BottyMcBotFace.png',
     'BottyMcBotFace',
     325,
     5646,
     1754,
     5195,
     '1.09',
     5,
     '5/19/2021'],
    ['Bowser.png',
     'Bowser',
     3692,
     55169,
     9228,
     25365,
     '2.18',
     49,
     '9/17/2021'],
    ['caterizer.png',
     'caterizer',
     300,
     5403,
     201,
     4096,
     '1.32',
     20,
     '9/17/2021'],
    ['Bro Man.jpg',
     'Bro Man',
     702,
     11904,
     623,
     7642,
     '1.56',
     30,
     '8/4/2021'],
    ['ShadowKatSK.png', // RocketLeague aka ! Wodahs Maet KsTakWodahs !
     'ShadowKatSK',
     3037,
     45937,
     2224,
     21376,
     '2.15',
     47,
     '9/17/2021'],
    ['cbc.png',
     'cbc',
     208,
     3028,
     195,
     1735,
     '1.75',
     4,
     '5/22/2021'],
    ['Cepo.png',
     'Cepo',
     53,
     1206,
     33,
     989,
     '1.22',
     '',
     '5/19/2021'],
    ['ChefAldo.png',
     'ChefAldo',
     160,
     3008,
     243,
     2381,
     '1.26',
     '',
     '6/09/2021'],
    ['ChickenTenderz.png',
     'ChickenTenderz',
     259,
     3708,
     107,
     1734,
     '2.14',
     '',
     ''],
    ['ChickGod.png',
	 'ChickGod',
	 23,
	 371,
	 15,
	 237,
	 '1.57',
	 8,
	 '7/31/2021'],
    ['Choow.png', // Luis Rodriguez
     'Choow',
     1355,
     18951,
     490,
     11071,
     '1.71',
     49,
     '9/9/2021'],
    ['cobra kai.png',
     'cobra kai',
     127,
     4037,
     301,
     4845,
     '0.83',
     '',
     '5/18/2021'],
    ['Coisec.png',
     'Coisec',
     99,
     1709,
     73,
     933,
     '1.83',
     8,
     '5/18/2021'],
    ['CoolOmarLuvsAnimals.png',
	 'CoolOmarLuvsAnimals',
	 15,
	 1125,
	 1888,
	 1301,
	 '0.86',
	 6,
	 '7/31/2021'],
    ['Corpse.png',
     'Corpse',
     162,
     2715,
     134,
     2337,
     '1.16',
     12,
     '5/22/2021'],
    ['coucoutoul.png',
     'coucoutoul',
     191,
     3670,
     1013,
     2214,
     '1.66',
     7,
     '6/16/2021'],
    ['Cruise.png',
     'Cruise',
     639,
     9148,
     378,
     6341,
     '1.44',
     16,
     '6/03/2021'],
    ['Crygen.png',
     'Crygen',
     222,
     3095,
     481,
     2071,
     '1.49',
     15,
     '8/11/2021'],
    ['CuteBaby.png',
	 'CuteBaby' + newPlayer,
	 2492,
	 32455,
	 2422,
	 15166,
	 '2.14',
	 43,
	 '9/17/2021'],
    ['DARK DEMON.png',
     'DARK DEMON',
     64,
     1152,
     23,
     767,
     '1.50',
     '',
     '6/30/2021'],
    ['DarkSheriff.png',
	 'DarkSheriff',
	 443,
	 7116,
	 181,
	 4715,
	 '1.51',
	 16,
	 '7/31/2021'],
    ['DarkWarrior123.png', //DarkWarrior1234
	 'DarkWarrior123',
	 181,
	 4393,
	 4146,
	 3868,
	 '1.14',
	 7,
	 '9/9/2021'],
    ['David.png', // drdeecaf#1861
     'David',
     1296,
     18192,
     438,
     8494,
     '2.14',
     26,
     '9/17/2021'],
    ['Demetris88.png',
	 'Demetris88',
	 19,
	 820,
	 36,
	 953,
	 '0.86',
	 11,
	 '9/17/2021'],
    ['DevilBunny.png',
     'DevilBunny',
     1695,
     23329,
     1750,
     10697,
     '2.18',
     12,
     '6/16/2021'],
    ['DevilStickman.png',
     'DevilStickman',
     1809,
     24951,
     1787,
     11439,
     '2.18',
     13,
     '6/23/2021'],
    ['DIOSITOXDYT.png',
     'DIOSITOXDYT',
     43,
     2256,
     35,
     3469,
     '0.65',
     7,
     '5/31/2021'],
    ['djsourav.png',
	 'djsourav',
	 88,
	 2951,
	 183,
	 3207,
	 '0.92',
	 18,
	 '9/9/2021'],
    ['dragonblackshade.jpg',
     'dragonblackshade',
     1,
     54,
     14,
     112,
     '0.48',
     6,
     '5/31/2021'],
    ['DragonBlaster.png',
	 'DragonBlaster',
	 40,
	 867,
	 74,
	 689,
	 '1.26',
	 11,
	 '8/11/2021'],
    ['Phantom\'sSis.png', // Drew
     'Phantom\'sSis',
     1405,
     30307,
     512,
     20359,
     '1.49',
     41,
     '9/17/2021'],
    ['DW.png',
	 'DW',
	 258,
	 4896,
	 2157,
	 3269,
	 '1.50',
	 17,
	 '7/31/2021'],
    ['AttackFromHeaven.png', // Dynamic
	 'AttackFromHeaven',
	 133,
	 2624,
	 305,
	 2278,
	 '1.15',
	 20,
	 '9/19/2021'],
    ['EE.png',
	 'EE',
	 470,
	 5937,
	 34,
	 2930,
	 '2.03',
	 15,
	 '7/31/2021'],
    ['Eli.png',
     'Eli',
     83,
     1029,
     7,
     332,
     '3.10',
     '',
     ''],
    ['ElitePROgamer.png',
	 'ElitePROgamer',
	 1942,
	 27100,
	 1069,
	 13208,
	 '2.05',
	 37,
	 '9/17/2021'],
    ['ElJulen.png',
     'ElJulen',
     22,
     353,
     3,
     204,
     '1.73',
     '',
     '5/28/2021'],
    ['ElsaPRO.png',
     'ElsaPRO',
     31,
     485,
     151,
     333,
     '1.46',
     5,
     '6/16/2021'],
    ['CatIsLeBest.png', //Enny
     'CatIsLeBest',
     352,
     5179,
     369,
     3201,
     '1.62',
     22,
     '8/11/2021'],
    ['CATwithHAT.jpg',
	 'CATwithHAT',
	 754,
	 10148,
	 531,
	 6464,
	 '1.57',
	 32,
	 '8/11/2021'],
    ['EREDOTEI.png',
     'EREDOTEI',
     2,
     84,
     2,
     172,
     '0.49',
     7,
     '6/16/2021'],
    ['Expurgation.png',
	 'Expurgation',
	 403,
	 6428,
	 236,
	 4205,
	 '1.53',
	 19,
	 '7/31/2021'],
    ['Fall Teem.png',
     'Fall Teem',
     893,
     10409,
     659,
     4435,
     '2.35',
     30,
     '7/27/2021'],
    ['FancyCarrot.png',
     'FancyCarrot',
     150,
     2812,
     221,
     2396,
     '1.17',
     7,
     '5/21/2021'],
    ['FantaClauss.png',
	 'FantaClauss',
	 1142,
	 16438,
	 396,
	 9832,
	 '1.67',
	 27,
	 '7/31/2021'],
    ['Sir FuriouslyIV.png',
     'Sir FuriouslyIV',
     132,
     2374,
     114,
     2291,
     '1.04',
     20,
     '7/31/2021'],
    ['AlphaOneYTsk.png', // FAVsk
	 'AlphaOneYTsk',
	 1406,
	 19173,
	 880,
	 9875,
	 '1.94',
	 23,
	 '8/4/2021'],
    ['FireStorm.png',
     'FireStorm',
     164,
     3944,
     248,
     2958,
     '1.33',
     '',
     '6/03/2021'],
    ['ForFamily.png', // Tanveer_Singh#9458
	 'ForFamily' + newPlayer,
	 398,
	 6246,
	 168,
	 3429,
	 '1.82',
	 20,
	 '9/17/2021'],
    ['Forward.png',
     'Forward',
     725,
     13620,
     801,
     4942,
     '2.76',
     7,
     ''],
    ['FrankEpic.png',
     'FrankEpic',
     185,
     2555,
     435,
     2093,
     '1.22',
     '',
     '6/23/2021'],
    ['Fru.png',
     'Fru',
     699,
     10015,
     288,
     5594,
     '1.79',
     14,
     '7/31/2021'],
    ['Fubster.png',
     'Fubster',
     1537,
     25936,
     114,
     15034,
     '1.73',
     45,
     '9/17/2021'],
    ['GANPATJAAT.png',
	 'GANPATJAAT',
	 5016,
	 79271,
	 2805,
	 43901,
	 '1.81',
	 29,
	 '8/27/2021'],
    ['GetCoolAlready.png',
     'GetCoolAlready',
     88,
     1774,
     72,
     1621,
     '1.09',
     14,
     '9/9/2021'],
    ['GGE.png',
     'GGE',
     189,
     2333,
     297,
     1374,
     '1.70',
     10,
     '5/21/2021'],
    ['Godzilla.png',
     'Godzilla',
     190,
     2575,
     122,
     1540,
     '1.67',
     12,
     '6/16/2021'],
    ['GoldenBeast.png',
     'GoldenBeast',
     747,
     9822,
     153,
     4504,
     '2.18',
     13,
     '6/23/2021'],
    ['GoldenBlack.png',
     'GoldenBlack',
     18,
     607,
     79,
     722,
     '0.84',
     9,
     '5/17/2021'],
    ['golu.png',
     'golu',
     3214,
     52904,
     2291,
     31475,
     '1.68',
     50,
     '9/9/2021'],
    ['Greendoggo.png',
     'Greendoggo',
     1625,
     22378,
     1649,
     10274,
     '2.18',
     11,
     '6/16/2021'],
    ['grunwalski.png',
     'grunwalski',
     4337,
     56381,
     546,
     25028,
     '2.25',
     '',
     ''],
    ['Gu1ziu.png',
     'Gu1ziu',
     80,
     971,
     0,
     413,
     '2.35',
     9,
     '5/31/2021'],
    ['Guardian.png',
     'Guardian',
     97,
     2028,
     66,
     1377,
     '1.47',
     15,
     '9/9/2021'],
    ['haedcase.png',
     'haedcase',
     7109,
     110731,
     141,
     51196,
     '2.16',
     40,
     '8/19/2021'],
    ['Harmlesscheese.jpg',
     'Harmlesscheese',
     426,
     5685,
     298,
     2844,
     '2.00',
     13,
     '6/09/2021'],
    ['Hello.png',
     'Hello',
     48,
     830,
     96,
     696,
     '1.19',
     9,
     '5/18/2021'],
    ['hotlex.png',
     'hotlex',
     580,
     8306,
     151,
     3525,
     '2.36',
     8,
     '6/03/2021'],
    ['HUNGRY JACKS.png',
     'HUNGRY JACKS',
     188,
     2947,
     152,
     2113,
     '1.39',
     20,
     '7/31/2021'],
    ['icybullet.png',
     'icybullet',
     194,
     5308,
     266,
     4601,
     '1.15',
     '',
     ''],
    ['IlmanOfficial.png',
     'IlmanOfficial',
     25,
     271,
     10,
     285,
     '0.95',
     '',
     '6/23/2021'],
    ['imnotpercy.png', // IAmnotpercy#9023. I secretly wonder if they aren't actually percy
	 'imnotpercy' + newPlayer,
	 220,
	 3231,
	 319,
	 1965,
	 '1.64',
	 20,
	 '9/17/2021'],
    ['IndianREDPro.png',
     'IndianREDPro',
     320,
     4508,
     349,
     3051,
     '1.48',
     11,
     '7/29/2021'],
    ['insane.png',
     'insane',
     275,
     4498,
     239,
     3664,
     '1.23',
     24,
     '7/27/2021'], 
    ['JackCrew22.jpg',
     'JackCrew22',
     17,
     219,
     11,
     143,
     '1.53',
     7,
     '5/23/2021'],
    ['JaesungTallTem.png',
     'JaesungTallTem',
     56,
     1252,
     139,
     2030,
     '0.62',
     13,
     '6/16/2021'],
    ['JashSK.png',
     'JashSK',
     2361,
     33415,
     425,
     15001,
     '2.23',
     36,
     '9/9/2021'],
    ['JeevSandhu.png',
     'JeevSandhu',
     34,
     748,
     530,
     788,
     '0.95',
     7,
     '5/19/2021'],
    ['JisgoodSK.png',
	 'JisgoodSK' + newPlayer,
	 557,
	 7889,
	 432,
	 4300,
	 '1.83',
	 27,
	 '9/17/2021'],
    ['JoeTheProJr..png',
	 'JoeTheProJr.',
	 266,
	 5361,
	 522,
	 4048,
	 '1.32',
	 25,
	 '9/9/2021'],
    ['JustFlameys Sis.png',
     'JustFlamey\'s Sis',
     1,
     22,
     5,
     13,
     '1.69',
     4,
     '5/20/2021'],
    ['JustMechas.png',
     'JustMecha\'s',
     395,
     7127,
     192,
     4314,
     '1.65',
     10,
     ''],
    ['K1ittens.png',
     'K1ittens',
     1677,
     25435,
     1769,
     13517,
     '1.88',
     38,
     '9/17/2021'],
    ['kanishk.png',
     'kanishk',
     624,
     10117,
     591,
     5352,
     '1.89',
     9,
     '5/18/2021'],
    ['Karina.png',
     'Karina',
     2,
     49,
     3,
     36,
     '1.36',
     5,
     '5/18/2021'],
    ['KAVINDU.png',
	 'KAVINDU',
	 337,
	 4380,
	 887,
	 3023,
	 '1.45',
	 23,
	 '8/27/2021'],
    ['KF x-ium1.png',
     'KF x-ium1',
     109,
     1490,
     188,
     1034,
     '1.44',
     10,
     '6/09/2021'],
    ['KI123NG.png',
     'KI123NG',
     483,
     10003,
     203,
     7215,
     '1.39',
     22,
     '7/27/2021'],
    ['KING.png',
     'KING',
     172,
     2571,
     88,
     1539,
     '1.67',
     7,
     '6/30/2021'],
    ['KitKatTopHat.png',
     'KitKatTopHat',
     263,
     4053,
     715,
     2953,
     '1.37',
     '',
     '6/23/2021'],
    ['Kolider.png',
     'Kolider',
     728,
     8020,
     2282,
     4490,
     '1.79',
     '',
     ''],
    ['Konstantinos.png',
     'Konstantinos',
     1510,
     21979,
     1132,
     10184,
     '2.16',
     36,
     '9/17/2021'],
    ['Kotel274.png',
	 'Kotel274',
	 431,
	 5387,
	 257,
	 2585,
	 '2.08',
	 18,
	 '7/31/2021'],
    ['kps.png',
     'kps',
     770,
     11613,
     141,
     6007,
     '1.93',
     '',
     ''],
    ['LamboTomST.png',
	 'LamboTomST',
	 571,
	 9489,
	 564,
	 5705,
	 '1.66',
	 24,
	 '9/17/2021'],
    ['LaSalamandra.png',
	 'LaSalamandra',
	 130,
	 2584,
	 57,
	 2084,
	 '1.24',
	 11,
	 '7/31/2021'],
    ['Levinho.png', //亗 T O K ϟ O#3981
	 'Levinho',
	 162,
	 1916,
	 136,
	 1235,
	 '1.55',
	 12,
	 '9/9/2021'],
    ['LightRod.png',
     'LightRod',
     6267,
     84471,
     548,
     25841,
     '3.27',
     40,
     '7/27/2021'],
    ['LMAO.png',
     'LMAO',
     22,
     403,
     113,
     635,
     '0.63',
     '',
     '5/27/2021'],
    ['Lucca.png',
     'Lucca',
     245,
     2852,
     50,
     1481,
     '1.93',
     8,
     '5/18/2021'],
    ['Luffy.png',
     'Luffy',
     42,
     955,
     108,
     951,
     '1.00',
     6,
     '5/17/2021'],
    ['Luna.jpg', //PoetEmerald
	 'Luna',
	 660,
	 8427,
	 1378,
	 6600,
	 '1.28',
	 23,
	 '8/11/2021'],
    ['MachoAlface.png',
     'MachoAlface',
     386,
     5179,
     192,
     2676,
     '1.94',
     10,
     '5/17/2021'],
    ['Madzen.png',
     'Madzen',
     55,
     10130,
     289,
     6982,
     '1.45',
     '',
     ''],
    ['Magnus Carlsen.png', // Eli Shane aka vihaan23
     'Magnus Carlsen',
     745,
     11855,
     179,
     6903,
     '1.72',
     30,
     '8/19/2021'],
    ['mangoboi.png',
     'mangoboi',
     17,
     268,
     238,
     287,
     '0.93',
     6,
     '5/21/2021'],
    ['Manush.png',
     'Manush',
     45,
     1655,
     6,
     1147,
     '1.44',
     '',
     ''],
    ['Marks.jpg',
     'Marks',
     163,
     3349,
     160 + 1, // smh
     2843,
     '1.18',
     19,
     '8/11/2021'],
    ['Martan.png',
     'Martan',
     400,
     6390,
     138,
     2995,
     '2.13',
     10,
     '5/25/2021'],
    ['MEE7.png',
     'MEE7',
     121,
     2177,
     343,
     1712,
     '1.27',
     8,
     '5/18/2021'],
    ['MelodyVibes.png',
     'MelodyVibes',
     240,
     4195,
     356,
     3479,
     '1.21',
     12,
     '6/09/2021'],
    ['Memes.png',
     'Memes',
     30,
     449,
     24,
     310,
     '1.45',
     8,
     '5/18/2021'],
    ['mercury.png',
     'mercury',
     295,
     5100,
     76,
     3296,
     '1.55',
     22,
     '7/27/2021'],
    ['MermorialPigg.png',
     'MermorialPigg',
     531,
     9610,
     200,
     6701,
     '1.43',
     9,
     '5/21/2021'],
    ['Mfurqaan27.png',
     'Mfurqaan27',
     85,
     1580,
     103,
     1197,
     '1.32',
     7,
     '5/18/2021'],
    ['MichoKing.png',
     'MichoKing',
     42,
     1000,
     17,
     946,
     '1.06',
     '',
     ''],
    ['miguelpro.png',
     'miguelpro',
     0,
     88,
     0,
     66,
     '1.33',
     1,
     '5/22/2021'],
    ['MotionMoose.png',
	 'MotionMoose',
	 1062,
	 13342,
	 1444,
	 6798,
	 '1.96',
	 35,
	 '8/19/2021'],
    ['MrClawthoriene.png',
     'Mr. Clawthoriene',
     134,
     2391,
     153,
     1793,
     '1.33',
     12,
     '5/24/2021'],
    ['Mrcoolkidgaming.jpg',
	 'Mrcoolkidgaming',
	 87,
	 1158,
	 176,
	 824,
	 '1.41',
	 13,
	 '7/31/2021'],  
    ['MrSam.png',
     'MrSam',
     1352,
     22047,
     1092,
     8843,
     '2.49',
     '',
     ''],
    ['Muslim.png',
     'Muslim',
     164,
     3126,
     260,
     2514,
     '1.24',
     '',
     '6/09/2021'],
    ['Muttley.jpg',
     'Muttley',
     3195,
     40104,
     549,
     18705,
     '2.14',
     12,
     '5/25/2021'],
    ['mxmtsk.png',
     'mxmtsk',
     551,
     6362,
     302,
     2591,
     '2.46',
     '',
     ''],
    ['NA.png',
     'NA',
     1462,
     28427,
     399,
     15080,
     '1.89',
     50,
     '9/9/2021'],
    ['NeonSK.png',
	 'NeonSK',
	 1612,
	 28577,
	 480,
	 16114,
	 '1.77',
	 43,
	 '9/17/2021'],
    ['Nexusdepresion.jpg',
	 'Nexusdepresion',
	 77,
	 1366,
	 62,
	 1009,
	 '1.35',
	 11,
	 '7/31/2021'],
    ['AlloyIridium.png', // Strenatos aka NicklCoppr
	 'AlloyIridium',
	 33,
	 502,
	 134,
	 441,
	 '1.14',
	 10,
	 '9/17/2021'],
    ['nicky.png',
     'nicky',
     86,
     4213,
     341,
     4048,
     '1.04',
     '',
     '5/20/2021'],
    ['NicoBustos.png',
     'NicoBustos',
     727,
     9563,
     299,
     4895,
     '1.95',
     16,
     '5/18/2021'],
    ['nicronius.png',
	 'nicronius',
	 1290,
	 32391,
	 4956,
	 19618,
	 '1.65',
	 26,
	 '8/27/2021'],
    ['NIGHTMARE.png', // ADI-SPOT#3515
	 'NIGHTMARE' + newPlayer,
	 275,
	 6146,
	 495,
	 4412,
	 '1.39',
	 26,
	 '9/17/2021'],
    ['nikita.png',
     'nikita',
     1753,
     21298,
     1205,
     11259,
     '1.89',
     '',
     ''],
    ['NikoDamassa.png',
     'NikoDamassa',
     134,
     1849,
     50,
     1267,
     '1.46',
     11,
     '6/09/2021'],
    ['NitroRacer.png',
	 'NitroRacer',
	 903,
	 12815,
	 523,
	 8084,
	 '1.59',
	 24,
	 '8/11/2021'],
    ['NONAME.png',
     'NONAME',
     1305,
     19412,
     1784,
     11716,
     '1.65',
     '',
     ''],
    ['Noob21.png',
     'Noob21',
     186,
     2739,
     82,
     1540,
     '1.78',
     8,
     '5/31/2021'],
    ['NotANovice.png',
     'NotANovice',
     48,
     889,
     85,
     691,
     '1.29',
     10,
     '6/03/2021'],
    ['Nought.png',
     'Nought',
     111,
     2040,
     127,
     1504,
     '1.36',
     9,
     '6/03/2021'],
    ['Noura.png',
     'Noura',
     609,
     7224,
     644,
     4183,
     '1.73',
     16,
     '6/23/2021'],
    ['numan.png',
     'numan',
     16,
     608,
     71,
     909,
     '0.67',
     '',
     '6/30/2021'],
    ['OingoBoingo.png',
	 'OingoBoingo',
	 156,
	 2391,
	 110,
	 1464,
	 '1.63',
	 12,
	 '7/31/2021'],
    ['OkayIKnow.png',
     'OkayIKnow',
     1214,
     18761,
     1130,
     12769,
     '1.47',
     40,
     '7/29/2021'],
    ['OliverD.png',
	 'OliverD',
	 198,
	 3159,
	 293,
	 2214,
	 '1.43',
	 19,
	 '9/17/2021'],
    ['Oogway.jpg',
     'Oogway',
     57,
     1622,
     14,
     1552,
     '1.05',
     10,
     '6/16/2021'],
    ['OscarBumper2sk.png',
	 'OscarBumper2sk',
	 137,
	 6211,
	 548,
	 5179,
	 '1.20',
	 26,
	 '9/9/2021'],
    ['OscarTsai.png',
     'OscarTsai',
     659,
     12668,
     611,
     6008,
     '2.11',
     11,
     '6/30/2021'],
    ['Ositos920.png',
     'Ositos920',
     54,
     1114,
     163,
     908,
     '1.23',
     10,
     '5/23/2021'],
    ['Outrun.png',
     'OutRun',
     2860,
     47748,
     2102,
     18245,
     '2.62',
     15,
     '8/27/2021'],
    ['ozito.png',
     'ozito',
     419,
     6013,
     75,
     3367,
     '1.79',
     12,
     '7/29/2021'],
    ['P19PRO.png', //P19__PROPLAYER
	 'P19PRO',
	 1,
	 152,
	 8,
	 249,
	 '0.61',
	 '',
	 '9/9/2021'],
    ['PATEL.png', // I N D I A N L E G E N D S or indianlegends
	 'PATEL',
	 5,
	 104,
	 30,
	 141,
	 '0.74',
	 6,
	 '9/9/2021'],
    ['Phantom.png',
     'Phantom',
     4514,
     68228,
     759,
     26276,
     '2.60',
     19,
     '6/30/2021'],
    ['Pieinthesky.png',
     'Pieinthesky',
     307,
     4635,
     299,
     2956,
     '1.57',
     '',
     ''],
    ['Piggalicious.png',
     'Piggalicious',
     964,
     13928,
     25,
     3299,
     '4.22',
     '',
     '6/09/2021'],
    ['PiggyXD.png',
     'PiggyXD',
     69,
     1499,
     81,
     1238,
     '1.21',
     '',
     ''],
    ['Player3480.png',
     'Player3480',
     823,
     16439,
     531,
     8598,
     '1.91',
     '',
     '5/18/2021'],
    ['Player Cobra Kai.png',
     'Player Cobra Kai',
     1,
     20,
     0,
     13,
     '1.54',
     3,
     '5/18/2021'],
    ['Popsicles.png',
	 'Popsicles',
	 104,
	 1429,
	 14 - 14, // I guess new account, much confusion
	 474,
	 '3.01',
	 12,
	 '9/17/2021'],
    ['Potonomicaphobia.png', //qqq.co#0524
	 'Potonomicaphobia',
	 111,
	 1582,
	 58,
	 1020,
	 '1.55',
	 11,
	 '7/31/2021'],
    ['PrimOverLorde.png',
     'PrimOverLorde',
     8,
     315,
     403,
     293,
     '1.08',
     5,
     '5/21/2021'],
    ['Prince of Darkness.png',
     'Prince of Darkness',
     104,
     2612,
     231,
     1835,
     '1.42',
     '',
     ''],
    ['Pro.png',
     'Pro',
     9,
     303,
     51,
     308,
     '0.98',
     7,
     '5/31/2021'],
    ['ProMaster.png',
     'ProMaster',
     3351,
     52875,
     2306,
     23543,
     '2.25',
     '',
     '6/23/2021'],
    ['punya fanyz.png',
	 'punya fanyz',
	 266,
	 4778,
	 48,
	 3608,
	 '1.32',
	 24,
	 '8/19/2021'],
    ['PWRYUTUBE.png',
	 'PWRYUTUBE',
	 480,
	 9735,
	 257,
	 7616,
	 '1.28',
	 23,
	 '7/31/2021'],
    ['R.png',
     'R',
     213,
     3784,
     430,
     3470,
     '1.09',
     13,
     '6/16/2021'],
    ['Raamen.png',
     'Raamen',
     164,
     2314,
     158,
     1175,
     '1.97',
     '',
     ''],
    ['Rafayute.png',
     'Rafayute',
     1296,
     18050,
     611,
     10642,
     '1.70',
     '',
     ''],
    ['RastaQueen.png',
     'RastaQueen',
     340,
     3978,
     375,
     1866,
     '2.13',
     '',
     '5/28/2021'],
     ['reddy.png', // sarthak#2091
     'reddy',
     2536,
     41967,
     2445,
     25522,
     '1.64',
     44,
     '9/9/2021'],
    ['RedSmasher.png',
     'RedSmasher',
     104,
     2282,
     506,
     1995,
     '1.14',
     '',
     ''],
    ['ReeFrogBeanzzz.png',
     'ReeFrogBeanzzz',
     250,
     4179,
     1062,
     3080,
     '1.36',
     9,
     '7/31/2021'],
    ['Riptide.png',
	 'Riptide',
	 725,
	 10138,
	 450,
	 6533,
	 '1.55',
	 14,
	 '7/31/2021'],
    ['RocketFrog.png', //RocketFrog
     'RocketFrog',
     3000,
     42496,
     378,
     19104,
     '2.22',
     47,
     '9/9/2021'],
    ['romesh.png',
	 'romesh',
	 118,
	 3432,
	 128,
	 2925,
	 '1.17',
	 20,
	 '9/17/2021'],
    ['rorro.png',
	 'rorro',
	 811,
	 11356,
	 170,
	 5762,
	 '1.97',
	 13,
	 '7/31/2021'],
    ['Rottweiler.png',
     'Rottweiler',
     1873,
     25946,
     1813,
     11902,
     '2.18',
     14,
     '6/30/2021'],
    ['RRRRRRRRRRRRRRRRRRRRRRRRRRR.png', // 27R
	 'RRRRRRRRRRRRRRRRRRRRRRRRRRR',
	 310,
	 6366,
	 512,
	 5679,
	 '1.12',
	 15,
	 '7/31/2021'],
    ['RuBiNBRR.png',
     'RuBiNBRR',
     643,
     8457,
     179,
     4484,
     '1.89',
     15,
     '5/18/2021'],
    ['ruthvik.png',
     'ruthvik',
     41,
     656,
     63,
     503,
     '1.30',
     8,
     '5/22/2021'],
    ['ruzgar.png',
     'ruzgar',
     157,
     2049,
     90,
     1034,
     '1.98',
     8,
     '5/14/2021'],
    ['Saharsh.png',
     'Saharsh',
     113,
     2581,
     176,
     2270,
     '1.14',
     17,
     '7/31/2021'],
    ['Saturnytive.png',
     'Saturnytive',
     133,
     2801,
     50,
     1838,
     '1.52',
     7,
     '5/17/2021'],
    ['SB007.png',
     'SB007',
     26,
     309,
     14,
     214,
     '1.44',
     7,
     '5/18/2021'],
    ['seanysean.png',
     'seanysean',
     2617,
     47767,
     489 + 253, // smh disappointing
     27221,
     '1.75',
     50,
     '9/17/2021'],
    ['sedlyf.png', //reyturd
	 'sedlyf',
	 88,
	 2046,
	 47,
	 807,
	 '2.54',
	 '',
	 '9/9/2021'],
    ['SherriffBumper.png', // PiratePuppy
     'SherriffBumper',
     2323,
     33155,
     1952,
     15111,
     '2.19',
     33,
     '7/29/2021'],
    ['SilverShadow.png',
     'SilverShadow',
     799,
     11840,
     857,
     5729,
     '2.07',
     11,
     '6/16/2021'],
    ['SirBotsAlot2.png',
     'SirBotsAlot',
     502,
     5209,
     702,
     2492,
     '2.09',
     12,
     '5/28/2021'],
    ['SirBotsalot.png', //GGHX
     'SirBotsalot',
     1143,
     15881,
     192,
     8181,
     '1.94',
     33,
     '9/9/2021'],
    ['SirFartsALot.png',
     'SirFartsALot',
     426,
     7402,
     302,
     4948,
     '1.50',
     9,
     '5/17/2021'],
    ['SMASH BOI.png',
     'SMASH BOI',
     545,
     7928,
     298,
     5669,
     '1.40',
     15,
     '5/28/2021'],
    ['Smashfarts.png',
     'Smashfarts',
     486,
     6046,
     2076,
     3824,
     '1.58',
     10,
     '6/30/2021'],
    ['SmashKarts.png',
     'SmashKarts',
     37,
     638,
     4,
     536,
     '1.19',
     8,
     '5/17/2021'],
    ['smashking283.png',
     'smashking283',
     2069,
     22531,
     7312,
     9802,
     '2.30',
     17,
     '6/30/2021'],
    ['SmashMan360.png',
     'SmashMan360',
     1354,
     19955,
     5315,
     10599,
     '1.88',
     '',
     '5/19/2021'],
    ['SmashMe.png',
     'SmashMe',
     1960,
     25397,
     744,
     12191,
     '2.08',
     12,
     '6/23/2021'],
    ['Smatisfaction.png',
     'Smatisfaction',
     755,
     10183,
     479,
     5102,
     '2.00',
     '',
     '7/27/2021'],
    ['SnowPanda.png',
     'SnowPanda',
     144,
     2083,
     26,
     886,
     '2.35',
     '',
     ''],
    ['SombreroCat1.png',
     'SombreroCat1',
     411,
     6906,
     749,
     4909,
     '1.41',
     17,
     '7/29/2021'],
    ['SombreroCat2.png',
     'SombreroCat2',
     216,
     4591,
     729,
     4156,
     '1.10',
     '',
     ''],
    ['SomeBoyPlayz.png',
     'SomeBoyPlayz',
     2594,
     40099,
     1350,
     23882,
     '1.68',
     38,
     '9/9/2021'],
    ['SONICTHEDOGE.png',
     'SONICTHEDOGE',
     5,
     358,
     1,
     291,
     '1.23',
     '',
     '5/27/2021'],
    ['SophieRiane.png',
     'SophieRiane',
     1624,
     22769,
     1762,
     13994,
     '1.63',
     32,
     '9/9/2021'],
    ['SSNGHOST.png',
     'SSNGHOST',
     256,
     3352,
     124,
     1951,
     '1.72',
     9,
     '5/18/2021'],
    ['steve.png',
     'steve',
     135,
     3406,
     97,
     3472,
     '0.98',
     20,
     '8/4/2021'],           
    ['Strange-traveller.png',
	 'Strange-traveller',
	 351,
	 5238,
	 259,
	 3094,
	 '1.69',
	 14,
	 '7/31/2021'],
    ['Sub2PewDiePie.png',
     'Sub2PewDiePie',
     102,
     2511,
     93,
     2067,
     '1.21',
     8,
     ''],
    ['subtoDragonMaster19yt.png', //DragonMaster19
     'subtoDragonMaster19yt',
     539,
     10950,
     1006,
     6722,
     '1.63',
     20,
     '9/17/2021'],
    ['SumiBee.png',
     'SumiBee',
     401,
     5374,
     224 + 1,
     2836,
     '1.89',
     22,
     '9/9/2021'],
    ['summer day.png',
     'summer day',
     684,
     10063,
     768,
     7389,
     '1.36',
     15,
     '6/23/2021'],
    ['SummerBumper.png',
	 'SummerBumper',
	 2089,
	 29451,
	 1884,
	 13453,
	 '2.19',
	 28,
	 '7/31/2021'],
    ['SummerXGems.png',
	 'SummerXGems' + newPlayer,
	 130,
	 1888,
	 48,
	 712,
	 '2.65',
	 15,
	 '9/17/2021'],
    ['SUPERCOMMANDODHRUV.png',
	 'SUPERCOMMANDODHRUV',
	 855,
	 13315,
	 852,
	 7989,
	 '1.67',
	 30,
	 '8/27/2021'],
    ['SuperSMASHER.png',
     'SuperSMASHER',
     1207,
     16149,
     807,
     8298,
     '1.95',
     12,
     '6/30/2021'],
    ['Supremo.png',
     'Supremo',
     451,
     6464,
     784,
     5316,
     '1.22',
     '',
     ''],
    ['Sydecar.png',
     'Sydecar',
     69,
     1448,
     15,
     907,
     '1.60',
     8,
     '6/16/2021'],
    ['szahaa.png',
     'szahaa',
     70,
     1549,
     65,
     1588,
     '0.98',
     17,
     '7/29/2021'],
    ['TBNRdaamcn.png', //AA27 Da GaminGenius
	 'TBNRdaamcn',
	 62,
	 3187,
	 627,
	 2871,
	 '1.11',
	 19,
	 '9/17/2021'],
    ['TCW The Cubing Wolflyn.png',
     'TCW The Cubing Wolflyn',
     144,
     2004,
     172,
     1206,
     '1.66',
     12,
     '6/23/2021'],
    ['Tesla K.png',
	 'Tesla K',
	 928,
	 13911,
	 993,
	 6726,
	 '2.07',
	 20,
	 '8/19/2021'],
    ['TheCook.png',
     'TheCook',
     257,
     3627,
     195,
     2946,
     '1.23',
     '',
     ''],
    ['ThunderNOVA.png',
     'ThunderNOVA',
     550,
     7649,
     409,
     5018,
     '1.52',
     26,
     '7/29/2021'],
    ['TomCruise.png',
     'TomCruise',
     3000,
     50595,
     1029 + 0 + 6, // oof
     23577,
     '2.15',
     50,
     '9/17/2021'],
    ['Toreja.jpg',
     'Toreja',
     53,
     1191,
     12,
     973,
     '1.22',
     10,
     '5/27/2021'],
    ['Invincible.jpg', // TwitchyTopHat
     'Invincible',
     836,
     11104,
     315,
     5751,
     '1.93',
     25,
     '7/31/2021'],
    ['Venom.png',
     'Venom',
     13,
     1095,
     1882,
     1283,
     '0.85',
     '',
     '6/23/2021'],
    ['Ver24436.png',
     'Ver24436',
     176,
     1918,
     0,
     777,
     '2.47',
     1,
     '6/30/2021'],
    ['Victory Valtryek.png',
     'Victory Valtryek',
     89,
     1946,
     257,
     1709,
     '1.14',
     '',
     ''],
    ['Vignesh.png',
	 'Vignesh',
	 57,
	 1603,
	 163,
	 1836,
	 '0.87',
	 '',
	 '8/27/2021'],
    ['VK.png',
	 'VK',
	 2144,
	 29653,
	 353,
	 11238,
	 '2.64',
	 47,
	 '9/17/2021'],
    ['Waris Ja.png',
     'Waris Ja',
     7023,
     90000,
     526,
     20420,
     '4.41',
     19,
     '9/9/2021'],
    ['Wass.png',
     'Wass',
     162,
     3401,
     101,
     2454,
     '1.39',
     16,
     '8/27/2021'],
    ['whatthatlol.png',
	 'whatthatlol',
	 116,
	 2720,
	 167,
	 1976,
	 '1.38',
	 19,
	 '9/9/2021'],
    ['WhyNotkeepSmashing.png',
     'WhyNotkeepSmashing',
     159,
     2162,
     133,
     1442,
     '1.50',
     '',
     '5/17/2021'],
    ['WIMPUS.jpg',
	 'WIMPUS',
	 8,
	 375,
	 133,
	 356,
	 '1.05',
	 '',
	 '7/31/2021'],
    ['wizards_wand.png',
	 'wizards_wand',
	 111,
	 3938,
	 194,
	 3479,
	 '1.13',
	 20,
	 '9/9/2021'],
    ['WorstDriver.png',
     'WorstDriver',
     198,
     3109,
     62,
     1744,
     '1.78',
     '',
     '5/28/2021'],
    ['Wrath.png',
	 'Wrath',
	 476,
	 9449,
	 191,
	 7707,
	 '1.23',
	 17,
	 '7/31/2021'],
    ['x3m3x.png',
     'x3m3x',
     485,
     7352,
     325,
     3997,
     '1.84',
     10,
     '5/27/2021'],
    ['xSuperStarx.png', // HFIJDS#2204
	 'xSuperStarx' + newPlayer,
	 1325,
	 19069,
	 464,
	 8488,
	 '2.25',
	 37,
	 '9/17/2021'],
    ['xzjkdjn.png',
     'xzjkdjn',
     1261,
     15826,
     552,
     7155,
     '2.21',
     12,
     '6/23/2021'],
    ['Yoshi.png',
     'Yoshi',
     1285,
     15741,
     546,
     6715,
     '2.34',
     13,
     '6/16/2021'],
    ['yourdog.png',
	 'yourdog',
	 119,
	 2734,
	 132,
	 2018,
	 '1.35',
	 18,
	 '8/11/2021'],
     ['YOURSELF.png',
     'YOURSELF',
     231,
     5656,
     272,
     6259,
     '0.90',
     13,
     '5/20/2021'],
    ['Zacthack.png',
     'Zacthack',
     1214,
     16326,
     271,
     8147,
     '2.00',
     11,
     '5/31/2021'],
    ['ZedZoff.png',
     'ZedZoff',
     30,
     971,
     238,
     1155,
     '0.84',
     10,
     '5/24/2021'],
    ['Zekkersito.png',
     'Zekkersito&trade;',
     11,
     326,
     5,
     376,
     '0.87',
     8,
     '5/22/2021'],
    ['Zeoyxl.png',
     'Zeoyxl',
     40,
     1242,
     456,
     1454,
     '0.85',
     11,
     '6/03/2021'],
    ['Zoli.png',
     'Zoli',
     33,
     634,
     104,
     440,
     '1.44',
     '',
     '5/19/2021']
];

function sortByNameUp() {
    sortedPlayer = player.sort((a, b) => a[1].localeCompare(b[1]));
    /*sortedPlayer = player.sort();*/

    fillGrid();
}

function sortByNameDown() {
    sortedPlayer = player.sort((a, b) => b[1].localeCompare(a[1]));
    /*sortedPlayer = player.sort();*/

    fillGrid();
}

function sortByWinsUp() {
    sortedPlayer = player.sort((a, b)=>b[2]-a[2]);

    fillGrid();
}

function sortByWinsDown() {
    sortedPlayer = player.sort((a, b)=>a[2]-b[2]);

    fillGrid();
}

function sortByKillsUp() {
    sortedPlayer = player.sort((a, b)=>b[3]-a[3]);

    fillGrid();
}

function sortByKillsDown() {
    sortedPlayer = player.sort((a, b)=>a[3]-b[3]);

    fillGrid();
}

function sortByBotKillsUp() {
    sortedPlayer = player.sort((a, b)=>b[4]-a[4]);

    fillGrid();
}

function sortByBotKillsDown() {
    sortedPlayer = player.sort((a, b)=>a[4]-b[4]);

    fillGrid();
}

function sortByDeathsUp() {
    sortedPlayer = player.sort((a, b)=>b[5]-a[5]);

    fillGrid();
}

function sortByDeathsDown() {
    sortedPlayer = player.sort((a, b)=>a[5]-b[5]);

    fillGrid();
}

function sortByKdrUp() {
    sortedPlayer = player.sort((a, b)=>b[6]-a[6]);

    fillGrid();
}

function sortByKdrDown() {
    sortedPlayer = player.sort((a, b)=>a[6]-b[6]);

    fillGrid();
}

function sortByLevelUp() {
    sortedPlayer = player.sort((a, b)=>b[7]-a[7]);

    fillGrid();
}

function sortByLevelDown() {
    sortedPlayer = player.sort((a, b)=>a[7]-b[7]);

    fillGrid();
}

function sortByDateUp() {
    sortedPlayer = player.sort((a, b) => getTimestamp(b[8]) - getTimestamp(a[8]));

    fillGrid();
}

function sortByDateDown() {
    sortedPlayer = player.sort((a, b) => getTimestamp(a[8]) - getTimestamp(b[8]));

    fillGrid();
}

function getTimestamp(string) {
    if (!string) {
        return 0;
    }
    const dateInformation = string.split('/');
    const date = new Date();
    date.setMonth(dateInformation[0] - 1);
    date.setDate(dateInformation[1]);
    date.setFullYear(dateInformation[2]);
    return date.getTime();
}
