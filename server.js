var express = require('express'), bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

const countries= require('countrycitystatejson')

var students=[{
    "id": 1,
    "first_name": "Stevana",
    "last_name": "Huyhton",
    "gender": "Female",
    "code": "40-2308299",
    "country": "China",
    "city": "Baiyin",
    "university": "Nanjing University of Aeronautics and Astronautics"
  }, {
    "id": 2,
    "first_name": "Forbes",
    "last_name": "Lathe",
    "gender": "Male",
    "code": "26-6590434",
    "country": "Vietnam",
    "city": "Cần Giờ",
    "university": "Vietnam National University Ho Chi Minh City"
  }, {
    "id": 3,
    "first_name": "Taber",
    "last_name": "Sille",
    "gender": "Male",
    "code": "98-0634970",
    "country": "Thailand",
    "city": "Wachira Barami",
    "university": "Mahamakut Buddhist University"
  }, {
    "id": 4,
    "first_name": "Winn",
    "last_name": "Karolczyk",
    "gender": "Male",
    "code": "30-0590063",
    "country": "China",
    "city": "Luzhou",
    "university": "Nanjing University"
  }, {
    "id": 5,
    "first_name": "Patrice",
    "last_name": "Drayn",
    "gender": "Male",
    "code": "34-9432951",
    "country": "China",
    "city": "Huangzhai",
    "university": "Fujian Medical University"
  }, {
    "id": 6,
    "first_name": "Lina",
    "last_name": "Gierardi",
    "gender": "Female",
    "code": "48-5734953",
    "country": "Sweden",
    "city": "Norrköping",
    "university": "Chalmers University of Technology"
  }, {
    "id": 7,
    "first_name": "Marleah",
    "last_name": "Pietron",
    "gender": "Female",
    "code": "93-8691707",
    "country": "China",
    "city": "Xiongchi",
    "university": "Sichuan Normal University"
  }, {
    "id": 8,
    "first_name": "Dorthea",
    "last_name": "Grimsey",
    "gender": "Female",
    "code": "73-0204770",
    "country": "Brazil",
    "city": "Resende",
    "university": "Universidade Federal de Alagoas"
  }, {
    "id": 9,
    "first_name": "Marius",
    "last_name": "Skinner",
    "gender": "Male",
    "code": "71-2012926",
    "country": "China",
    "city": "Leiwang",
    "university": "Tianjin University of Finance & Economics"
  }, {
    "id": 10,
    "first_name": "Valry",
    "last_name": "Babbage",
    "gender": "Female",
    "code": "78-2462902",
    "country": "United States",
    "city": "Bronx",
    "university": "Augustana College"
  }, {
    "id": 11,
    "first_name": "Bond",
    "last_name": "Evershed",
    "gender": "Male",
    "code": "98-6087186",
    "country": "China",
    "city": "Lizhai",
    "university": "China Three Gorges University"
  }, {
    "id": 12,
    "first_name": "Jennica",
    "last_name": "Treker",
    "gender": "Female",
    "code": "09-9538598",
    "country": "Indonesia",
    "city": "Mbomba",
    "university": "Universitas Merdeka Malang"
  }, {
    "id": 13,
    "first_name": "Phaidra",
    "last_name": "Dunthorne",
    "gender": "Female",
    "code": "63-5273618",
    "country": "China",
    "city": "Tongchuan",
    "university": "Nanjing University of Economics"
  }, {
    "id": 14,
    "first_name": "Hedvige",
    "last_name": "Oen",
    "gender": "Female",
    "code": "22-2443925",
    "country": "Russia",
    "city": "Mozhga",
    "university": "Pomorsk State University"
  }, {
    "id": 15,
    "first_name": "Ynez",
    "last_name": "Warrack",
    "gender": "Female",
    "code": "55-5328662",
    "country": "Indonesia",
    "city": "Krajan Dua Patempuran",
    "university": "Universitas Negeri Padang"
  }, {
    "id": 16,
    "first_name": "Ianthe",
    "last_name": "Dunphie",
    "gender": "Female",
    "code": "49-7120230",
    "country": "Myanmar",
    "city": "Wakema",
    "university": "Technological University (Pathein)"
  }, {
    "id": 17,
    "first_name": "Jarid",
    "last_name": "Pagitt",
    "gender": "Male",
    "code": "02-9732412",
    "country": "Dominican Republic",
    "city": "Quisqueya",
    "university": "Universidad Autónoma de Santo Domingo"
  }, {
    "id": 18,
    "first_name": "Alysa",
    "last_name": "Jakubczyk",
    "gender": "Female",
    "code": "12-5686261",
    "country": "Poland",
    "city": "Koło",
    "university": "Music Academy \"Stanislaw Moniuszko\" in Gdansk"
  }, {
    "id": 19,
    "first_name": "Mariya",
    "last_name": "Sarjant",
    "gender": "Female",
    "code": "71-6771917",
    "country": "Philippines",
    "city": "Santa Monica",
    "university": "Philippine Normal University"
  }, {
    "id": 20,
    "first_name": "Damaris",
    "last_name": "Keitch",
    "gender": "Female",
    "code": "90-0957778",
    "country": "Greece",
    "city": "Magoúla",
    "university": "International Hellenic University"
  }, {
    "id": 21,
    "first_name": "Gaelan",
    "last_name": "Luetkemeyer",
    "gender": "Male",
    "code": "49-3837873",
    "country": "Belarus",
    "city": "Zhyrovichy",
    "university": "Academy of the Ministry of Internal Affairs of the Republic of Belarus"
  }, {
    "id": 22,
    "first_name": "Sylvan",
    "last_name": "Leyzell",
    "gender": "Male",
    "code": "92-6090760",
    "country": "Japan",
    "city": "Ōdate",
    "university": "Aichi University"
  }, {
    "id": 23,
    "first_name": "Nikolaos",
    "last_name": "McCrackan",
    "gender": "Male",
    "code": "34-5587603",
    "country": "Russia",
    "city": "Krasnoyarka",
    "university": "Immanuel Kant State University of Russia"
  }, {
    "id": 24,
    "first_name": "Diann",
    "last_name": "Creek",
    "gender": "Female",
    "code": "74-7585839",
    "country": "Sweden",
    "city": "Kalix",
    "university": "Jönköping University College"
  }, {
    "id": 25,
    "first_name": "Mallory",
    "last_name": "Boxell",
    "gender": "Male",
    "code": "23-5835564",
    "country": "Indonesia",
    "city": "Gondang",
    "university": "Universitas Pattimura"
  }, {
    "id": 26,
    "first_name": "Emmit",
    "last_name": "Sawrey",
    "gender": "Male",
    "code": "52-2549770",
    "country": "China",
    "city": "Daxin",
    "university": "Chengdu University of Technology"
  }, {
    "id": 27,
    "first_name": "Cello",
    "last_name": "Hothersall",
    "gender": "Male",
    "code": "01-0636518",
    "country": "Philippines",
    "city": "Limon",
    "university": "University of Perpetual Help"
  }, {
    "id": 28,
    "first_name": "Ranice",
    "last_name": "Poker",
    "gender": "Female",
    "code": "89-5199081",
    "country": "Costa Rica",
    "city": "San José",
    "university": "Universidad Braulio Carrillo"
  }, {
    "id": 29,
    "first_name": "Aubrey",
    "last_name": "Mart",
    "gender": "Female",
    "code": "56-7160839",
    "country": "Russia",
    "city": "Severodvinsk",
    "university": "I.M. Sechenov Moscow Medical Academy"
  }, {
    "id": 30,
    "first_name": "Alfred",
    "last_name": "Howsego",
    "gender": "Male",
    "code": "90-8436568",
    "country": "Morocco",
    "city": "Tamanar",
    "university": "Ecole National d'Agriculture de Meknes"
  }, {
    "id": 31,
    "first_name": "Dalt",
    "last_name": "Lanegran",
    "gender": "Male",
    "code": "25-4930302",
    "country": "Finland",
    "city": "Parikkala",
    "university": "Abo Akademi University"
  }, {
    "id": 32,
    "first_name": "Rudy",
    "last_name": "Edwardson",
    "gender": "Male",
    "code": "77-4275006",
    "country": "China",
    "city": "Ganpu",
    "university": "North China University of Technology"
  }, {
    "id": 33,
    "first_name": "Adams",
    "last_name": "Bizley",
    "gender": "Male",
    "code": "26-3672586",
    "country": "China",
    "city": "Dongfeng",
    "university": "Beijing University of Chinese Medicine and Pharmacology"
  }, {
    "id": 34,
    "first_name": "Joaquin",
    "last_name": "Dartnall",
    "gender": "Male",
    "code": "51-9811017",
    "country": "France",
    "city": "Dijon",
    "university": "Ecole Centrale de Lyon"
  }, {
    "id": 35,
    "first_name": "Giffie",
    "last_name": "Lintall",
    "gender": "Male",
    "code": "52-7137723",
    "country": "Indonesia",
    "city": "Pojok",
    "university": "Universitas Sam Ratulangi"
  }, {
    "id": 36,
    "first_name": "Tammie",
    "last_name": "Ronnay",
    "gender": "Male",
    "code": "48-4934023",
    "country": "Thailand",
    "city": "Krasae Sin",
    "university": "National Institute of Development Administration"
  }, {
    "id": 37,
    "first_name": "Orland",
    "last_name": "Marquet",
    "gender": "Male",
    "code": "91-2991318",
    "country": "Uganda",
    "city": "Ntoroko",
    "university": "Makerere University"
  }, {
    "id": 38,
    "first_name": "Bram",
    "last_name": "Stocky",
    "gender": "Male",
    "code": "93-1042866",
    "country": "Vietnam",
    "city": "Lấp Vò",
    "university": "Hanoi Medical University"
  }, {
    "id": 39,
    "first_name": "Idaline",
    "last_name": "O Sullivan",
    "gender": "Female",
    "code": "81-0868523",
    "country": "France",
    "city": "Cergy-Pontoise",
    "university": "Ecole Supérieure de Physique et de Chimie Industrielles"
  }, {
    "id": 40,
    "first_name": "Lenard",
    "last_name": "Hargey",
    "gender": "Male",
    "code": "21-4862314",
    "country": "China",
    "city": "Lixin",
    "university": "Shenyang Pharmaceutical University"
  }, {
    "id": 41,
    "first_name": "Ali",
    "last_name": "Pendlebery",
    "gender": "Male",
    "code": "12-9109666",
    "country": "China",
    "city": "Sujiatun",
    "university": "Dongbei University of Finance And Economics"
  }, {
    "id": 42,
    "first_name": "Lukas",
    "last_name": "Fader",
    "gender": "Male",
    "code": "01-9862973",
    "country": "Japan",
    "city": "Moriyama",
    "university": "Kanda University of International Studies"
  }, {
    "id": 43,
    "first_name": "Gay",
    "last_name": "Sellstrom",
    "gender": "Male",
    "code": "76-8202228",
    "country": "Indonesia",
    "city": "Lederaba",
    "university": "Universitas Pelita Harapan"
  }, {
    "id": 44,
    "first_name": "Waldemar",
    "last_name": "Fairhead",
    "gender": "Male",
    "code": "22-1317712",
    "country": "Portugal",
    "city": "Rio de Moinhos",
    "university": "Instituto Politécnico de Beja"
  }, {
    "id": 45,
    "first_name": "Moshe",
    "last_name": "Farry",
    "gender": "Male",
    "code": "70-0780646",
    "country": "Belarus",
    "city": "Pyetrykaw",
    "university": "Belarussian State University"
  }, {
    "id": 46,
    "first_name": "Hendrik",
    "last_name": "Woliter",
    "gender": "Male",
    "code": "62-4536302",
    "country": "Mexico",
    "city": "La Escondida",
    "university": "Escuela Nacional de Estudios Superiores Unidad León"
  }, {
    "id": 47,
    "first_name": "Batsheva",
    "last_name": "Dignan",
    "gender": "Female",
    "code": "53-4010377",
    "country": "Brazil",
    "city": "Nova Cruz",
    "university": "Universidade da Amazônia"
  }, {
    "id": 48,
    "first_name": "Antonius",
    "last_name": "Davenport",
    "gender": "Male",
    "code": "21-3724730",
    "country": "Estonia",
    "city": "Võhma",
    "university": "Estonian Academy of Music and Theatre"
  }, {
    "id": 49,
    "first_name": "Andrus",
    "last_name": "Berriman",
    "gender": "Male",
    "code": "51-0846671",
    "country": "Sweden",
    "city": "Moholm",
    "university": "Umea University"
  }, {
    "id": 50,
    "first_name": "Leeann",
    "last_name": "Villa",
    "gender": "Female",
    "code": "65-5732752",
    "country": "Oman",
    "city": "Nizwá",
    "university": "Sultan Qaboos University"
  }, {
    "id": 51,
    "first_name": "Adaline",
    "last_name": "Hefforde",
    "gender": "Female",
    "code": "69-5692207",
    "country": "Indonesia",
    "city": "Gambiran",
    "university": "Universitas Wijaya Kusuma Purwokerto"
  }, {
    "id": 52,
    "first_name": "Bibi",
    "last_name": "Cutler",
    "gender": "Female",
    "code": "19-2838866",
    "country": "Philippines",
    "city": "San Francisco",
    "university": "Philippine Normal University"
  }, {
    "id": 53,
    "first_name": "Nerty",
    "last_name": "Duxbarry",
    "gender": "Female",
    "code": "67-8480935",
    "country": "Saudi Arabia",
    "city": "Tārūt",
    "university": "Ibn Sina National College for Medical Studies "
  }, {
    "id": 54,
    "first_name": "Gasparo",
    "last_name": "Bruhke",
    "gender": "Male",
    "code": "71-4201893",
    "country": "Indonesia",
    "city": "Banjar Desa",
    "university": "Universitas Advent Indonesia"
  }, {
    "id": 55,
    "first_name": "Farica",
    "last_name": "Corringham",
    "gender": "Female",
    "code": "38-8171363",
    "country": "Portugal",
    "city": "Valença do Douro",
    "university": "Instituto Superior de Psicologia Aplicada"
  }, {
    "id": 56,
    "first_name": "Sib",
    "last_name": "Thornebarrow",
    "gender": "Female",
    "code": "63-9036609",
    "country": "China",
    "city": "Quxia",
    "university": "Luzhou Medical College"
  }, {
    "id": 57,
    "first_name": "Holmes",
    "last_name": "Dunks",
    "gender": "Male",
    "code": "39-2654126",
    "country": "Sweden",
    "city": "Järfälla",
    "university": "Örebro University"
  }, {
    "id": 58,
    "first_name": "Alexander",
    "last_name": "Chishull",
    "gender": "Male",
    "code": "51-8521970",
    "country": "South Africa",
    "city": "Diepsloot",
    "university": "University of Pretoria"
  }, {
    "id": 59,
    "first_name": "Skelly",
    "last_name": "Addis",
    "gender": "Male",
    "code": "24-1347899",
    "country": "France",
    "city": "Croissy-sur-Seine",
    "university": "Université Lumiére (Lyon II)"
  }, {
    "id": 60,
    "first_name": "Sonny",
    "last_name": "Treasure",
    "gender": "Male",
    "code": "96-3453756",
    "country": "China",
    "city": "Fuli",
    "university": "Beijing New Asia University"
  }, {
    "id": 61,
    "first_name": "Cleavland",
    "last_name": "Inderwick",
    "gender": "Male",
    "code": "21-4273805",
    "country": "Iran",
    "city": "Razan",
    "university": "Mazandaran University of Science & Technology"
  }, {
    "id": 62,
    "first_name": "Reinald",
    "last_name": "Firks",
    "gender": "Male",
    "code": "95-7839325",
    "country": "Philippines",
    "city": "Santa Catalina",
    "university": "Ateneo de Manila University"
  }, {
    "id": 63,
    "first_name": "Hagan",
    "last_name": "Dominico",
    "gender": "Male",
    "code": "31-5138576",
    "country": "France",
    "city": "Tournan-en-Brie",
    "university": "Ecole Nationale d'Administration"
  }, {
    "id": 64,
    "first_name": "Delora",
    "last_name": "Floris",
    "gender": "Female",
    "code": "07-2064339",
    "country": "Poland",
    "city": "Rogów",
    "university": "Cardinal Stefan Wyszynski University in Warsaw"
  }, {
    "id": 65,
    "first_name": "Gui",
    "last_name": "Neno",
    "gender": "Female",
    "code": "28-4639252",
    "country": "Philippines",
    "city": "Tagbilaran City",
    "university": "University of the City of Manila"
  }, {
    "id": 66,
    "first_name": "Kylie",
    "last_name": "McGaffey",
    "gender": "Male",
    "code": "80-8589622",
    "country": "Japan",
    "city": "Ogōri-shimogō",
    "university": "Ohka Gakuen University"
  }, {
    "id": 67,
    "first_name": "Kilian",
    "last_name": "Pennigar",
    "gender": "Male",
    "code": "15-8995273",
    "country": "China",
    "city": "Dasha",
    "university": "Chongqing Normal University Foreign Trade and Business College"
  }, {
    "id": 68,
    "first_name": "Annice",
    "last_name": "Bangham",
    "gender": "Female",
    "code": "82-4533378",
    "country": "Indonesia",
    "city": "Nusajaya",
    "university": "Universitas Persada Indonesia Y.A.I"
  }, {
    "id": 69,
    "first_name": "Rocky",
    "last_name": "Navaro",
    "gender": "Male",
    "code": "59-6272318",
    "country": "China",
    "city": "Xiangshui",
    "university": "Xi'an Jiaotong-Liverpool University"
  }, {
    "id": 70,
    "first_name": "Zoe",
    "last_name": "Ruston",
    "gender": "Female",
    "code": "41-6430460",
    "country": "China",
    "city": "Xinglong",
    "university": "Civil Aviation University of China"
  }, {
    "id": 71,
    "first_name": "Gussi",
    "last_name": "Ivens",
    "gender": "Female",
    "code": "05-1074007",
    "country": "Greece",
    "city": "Mégara",
    "university": "Agricultural University of Athens"
  }, {
    "id": 72,
    "first_name": "Stillman",
    "last_name": "Righy",
    "gender": "Male",
    "code": "53-4394351",
    "country": "Philippines",
    "city": "Kawit",
    "university": "Irish University Business School, Cebu"
  }, {
    "id": 73,
    "first_name": "Jaymie",
    "last_name": "Treend",
    "gender": "Male",
    "code": "49-6389117",
    "country": "Sweden",
    "city": "Söderköping",
    "university": "Stockholm School of Economics"
  }, {
    "id": 74,
    "first_name": "Mabel",
    "last_name": "McIlheran",
    "gender": "Female",
    "code": "89-1969695",
    "country": "Guam",
    "city": "Guam Government House",
    "university": "University of Guam"
  }, {
    "id": 75,
    "first_name": "Richard",
    "last_name": "Decayette",
    "gender": "Male",
    "code": "73-4048944",
    "country": "Egypt",
    "city": "Minūf",
    "university": "El Shorouk Academy"
  }, {
    "id": 76,
    "first_name": "Kathie",
    "last_name": "Jermey",
    "gender": "Female",
    "code": "70-2201046",
    "country": "China",
    "city": "Sanhe",
    "university": "Yanbian University"
  }, {
    "id": 77,
    "first_name": "Gottfried",
    "last_name": "Nouch",
    "gender": "Male",
    "code": "40-5397634",
    "country": "Russia",
    "city": "Sukhinichi",
    "university": "Moscow State University of Technology (Stankin)"
  }, {
    "id": 78,
    "first_name": "Karita",
    "last_name": "Di Iorio",
    "gender": "Female",
    "code": "17-2157765",
    "country": "China",
    "city": "Dongxiang",
    "university": "Shenyang Pharmaceutical University"
  }, {
    "id": 79,
    "first_name": "Gaile",
    "last_name": "Schruur",
    "gender": "Male",
    "code": "73-8291992",
    "country": "Poland",
    "city": "Dzikowiec",
    "university": "Polonia University in Czêstochowa"
  }, {
    "id": 80,
    "first_name": "Rafe",
    "last_name": "Voff",
    "gender": "Male",
    "code": "58-7120114",
    "country": "China",
    "city": "Jiucheng",
    "university": "Fujian Normal University"
  }, {
    "id": 81,
    "first_name": "Marji",
    "last_name": "Goldhawk",
    "gender": "Female",
    "code": "89-1400527",
    "country": "Argentina",
    "city": "Sampacho",
    "university": "Universidad de Buenos Aires"
  }, {
    "id": 82,
    "first_name": "Whitney",
    "last_name": "Hyndes",
    "gender": "Male",
    "code": "37-5184346",
    "country": "Russia",
    "city": "Naurskaya",
    "university": "Marij State Technical University"
  }, {
    "id": 83,
    "first_name": "Osbourne",
    "last_name": "Hamblin",
    "gender": "Male",
    "code": "35-2685499",
    "country": "Poland",
    "city": "Kłomnice",
    "university": "Higher School o Business/National Louis University(WSB/NLU) in Nowy Sacz"
  }, {
    "id": 84,
    "first_name": "Tore",
    "last_name": "Baskeyfield",
    "gender": "Male",
    "code": "87-7753409",
    "country": "Indonesia",
    "city": "Cempaka",
    "university": "Universitas Ibn Khaldun Bogor"
  }, {
    "id": 85,
    "first_name": "Malvin",
    "last_name": "Volant",
    "gender": "Male",
    "code": "02-6638569",
    "country": "China",
    "city": "Bozhou",
    "university": "Urumqi Vocational University"
  }, {
    "id": 86,
    "first_name": "Zitella",
    "last_name": "MacNeice",
    "gender": "Female",
    "code": "37-2388223",
    "country": "Finland",
    "city": "Lappeenranta",
    "university": "University of Oulu"
  }, {
    "id": 87,
    "first_name": "Turner",
    "last_name": "Knapper",
    "gender": "Male",
    "code": "92-8395672",
    "country": "Portugal",
    "city": "Cotovia",
    "university": "Universidade da Madeira"
  }, {
    "id": 88,
    "first_name": "Cal",
    "last_name": "Doblin",
    "gender": "Male",
    "code": "88-6277972",
    "country": "France",
    "city": "Toulouse",
    "university": "Institut des Sciences de l'Ingénieur de Montpellier"
  }, {
    "id": 89,
    "first_name": "Michelina",
    "last_name": "Pagram",
    "gender": "Female",
    "code": "99-4331259",
    "country": "Jordan",
    "city": "Qīr Moāv",
    "university": "Irbid National University"
  }, {
    "id": 90,
    "first_name": "Sanford",
    "last_name": "Cleve",
    "gender": "Male",
    "code": "59-5008259",
    "country": "Nepal",
    "city": "Bāglung",
    "university": "Agriculture and Forestry University"
  }, {
    "id": 91,
    "first_name": "Wallace",
    "last_name": "Bachs",
    "gender": "Male",
    "code": "79-7435242",
    "country": "China",
    "city": "Hanban",
    "university": "Hunan Normal University"
  }, {
    "id": 92,
    "first_name": "Padriac",
    "last_name": "Dryburgh",
    "gender": "Male",
    "code": "14-0992407",
    "country": "China",
    "city": "Huilongshan",
    "university": "Shanghai Business School"
  }, {
    "id": 93,
    "first_name": "Geordie",
    "last_name": "Brimelow",
    "gender": "Male",
    "code": "07-2582497",
    "country": "China",
    "city": "Lidun",
    "university": "Nanjing Normal University"
  }, {
    "id": 94,
    "first_name": "Meryl",
    "last_name": "Boxill",
    "gender": "Male",
    "code": "77-7227474",
    "country": "Brazil",
    "city": "Rio Piracicaba",
    "university": "Universidade de Tocantins"
  }, {
    "id": 95,
    "first_name": "Edmund",
    "last_name": "Tarbett",
    "gender": "Male",
    "code": "34-4239085",
    "country": "Slovenia",
    "city": "Trnovlje pri Celju",
    "university": "University of Nova Gorica"
  }, {
    "id": 96,
    "first_name": "Ronica",
    "last_name": "Rodie",
    "gender": "Female",
    "code": "18-7768710",
    "country": "Poland",
    "city": "Wierzchowo",
    "university": "School of Banking and Management in Cracow"
  }, {
    "id": 97,
    "first_name": "Tanhya",
    "last_name": "Beckwith",
    "gender": "Female",
    "code": "30-0948295",
    "country": "Russia",
    "city": "Karmaskaly",
    "university": "Chuvash State University"
  }, {
    "id": 98,
    "first_name": "Sherlocke",
    "last_name": "Tissier",
    "gender": "Male",
    "code": "89-1399225",
    "country": "Poland",
    "city": "Siekierczyn",
    "university": "Polish-Japanese Institute of Information Technology in Warsaw"
  }, {
    "id": 99,
    "first_name": "Yoshi",
    "last_name": "Skill",
    "gender": "Female",
    "code": "03-1026458",
    "country": "Tanzania",
    "city": "Karema",
    "university": "Mzumbe University (Chuo Kikuu Mzumbe)"
  }, {
    "id": 100,
    "first_name": "Oralee",
    "last_name": "Vlach",
    "gender": "Female",
    "code": "67-6393339",
    "country": "Sweden",
    "city": "Skogås",
    "university": "Jönköping University College"
  }];
 

app.get('/api/v1/countries', function (req, res) {
    var resp=countries.getCountries();
    res.json(resp);
});
app.get('/api/v1/countries/:country', function (req, res) {
   var country=req.params.country;
   var resp=countries.getCountryInfoByShort(country);
   if(resp)
   {
    res.json(resp);
   }
   else{
    res.status(404);
    res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });
    
   }
   
});
app.get('/api/v1/countries/:country/states', function (req, res) {
    var country=req.params.country;
    var resp=countries.getStatesByShort(country)
    if(resp)
    {
        res.json(resp);
    }
    else{
        res.status(404);
        res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });
    }
});
app.get('/api/v1/countries/:country/cities', function (req, res) {
    var country=req.params.country;
    var state=req.query.state;
    
    var resp=countries.getCities(country,state)
    if(resp&&resp.length>0)
    {
        res.json(resp);
    }
    else{
        res.status(404);
        res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });
    
    }
});

app.get('/api/v1/students', function (req, res) {    
    res.json(students);
});
app.get('/api/v1/students/:id', function (req, res) { 
    var id=req.params.id;   
    var resp=students[id-1];
    if(resp)
    {
        res.json(resp);
    }
    else{
        res.status(404);
        res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });    
    }
});
app.delete('/api/v1/students/:id', function (req, res) { 
    var id=req.params.id;   
    var resp=students[id-1];
    if(resp)
    {
        res.json({status:"success",message:"Student removed"});
    }
    else{
        res.status(404);
        res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });    
    }
});
app.post('/api/v1/students', function (req, res) { 
    var student=req.body;
    if(student&&student.first_name&&student.last_name
        &&student.gender&&student.code&&student.country
        &&student.city&&student.university)
    {
        res.json({status:"success",message:"Student added"});
    }else if(student){
        res.status(400);
        res.json({status:"error",message:"Student incomplete"});
    }
    else{
        res.status(404);
        res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });    
    }
});
app.use('*', function(req,res){
    res.status(404)    
    res.json({ url: req.protocol + '://' + req.get('host') + req.originalUrl });
    
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8081';
app.set('port', port);

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})