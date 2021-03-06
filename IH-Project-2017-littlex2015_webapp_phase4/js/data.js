// data
function getData(){
	var data=[
		{"name":"Arden Heights, NY, NY","code":"624","addr1":"Arden Heights","addr2":"Staten Island","addr3":"Richmond County","lng":-74.17390569999998,"lat":40.5567951,"price":"24.81","safety":1.3639999999999999},
		{"name":"Arrochar, NY, NY","code":"3067","addr1":"Arrochar","addr2":"Staten Island","addr3":"Richmond County","lng":-74.0704232,"lat":40.5967312,"price":"15.03","safety":1.04},
		{"name":"Arverne, NY, NY","code":"2786","addr1":"Arverne","addr2":"Queens","addr3":"Queens County","lng":-73.79779280000002,"lat":40.592658,"price":"18.11","safety":1.317},
		{"name":"Astoria Heights, NY, NY","code":"1249","addr1":"Astoria Boulevard","addr2":"Queens","addr3":"Queens County","lng":-73.88997899999998,"lat":40.7654129,"price":"13.53","safety":0.978},
		{"name":"Auburndale, NY, NY","code":"302","addr1":"Auburndale","addr2":"Queens","addr3":"Queens County","lng":-73.78602760000001,"lat":40.75411500000001,"price":"23.52","safety":1.108},
		{"name":"Battery Park, NY, NY","code":"2668","addr1":"Battery Park","addr2":"Manhattan","addr3":"New York","lng":-74.01702790000002,"lat":40.7032775,"price":"21.87","safety":0.645},
		{"name":"Bay Ridge, NY, NY","code":"109","addr1":"Bay Ridge","addr2":"Brooklyn","addr3":"Kings County","lng":-74.0329499,"lat":40.6261638,"price":"21.34","safety":0.772},
		{"name":"Baychester, NY, NY","code":"2626","addr1":"Baychester","addr2":"Bronx","addr3":"Bronx County","lng":-73.83308439999996,"lat":40.8693862,"price":"16.39","safety":1.454},
		{"name":"Bedford Park, NY, NY","code":"129","addr1":"Bedford Park","addr2":"Jerome Park","addr3":"Bronx","lng":-73.8856912,"lat":40.8700999,"price":"26.42","safety":0.894},
		{"name":"Belle Harbor, NY, NY","code":"3658","addr1":"Belle Harbor","addr2":"Queens","addr3":"Queens County","lng":-73.85072789999998,"lat":40.5754846,"price":"25.82","safety":0.632},
		{"name":"Bellerose, NY, NY","code":"271","addr1":"Bellerose Manor","addr2":"Queens","addr3":"Queens County","lng":-73.71836389999999,"lat":40.7320207,"price":"32.01","safety":0.707},
		{"name":"Belmont, NY, NY","code":"2584","addr1":"Belmont","addr2":"Amity","addr3":"Allegany County","lng":-78.03445060000001,"lat":42.2231241,"price":"20.86","safety":0.569},
		{"name":"Bergen-Lafayette, Jersey City, NJ","code":"434","addr1":"Bergen/Lafayette","addr2":"Jersey City","addr3":"Hudson County","lng":-74.07407289999998,"lat":40.7111464,"price":"24.91","safety":1.447},
		{"name":"Borough Park, NY, NY","code":"2432","addr1":"Borough Park","addr2":"Brooklyn","addr3":"Kings County","lng":-73.98887969999998,"lat":40.6323009,"price":"28.96","safety":0.8029999999999999},
		{"name":"Breezy Point, NY, NY","code":"13092","addr1":"Breezy Point","addr2":"Queens","addr3":"Queens County","lng":-73.9262483,"lat":40.5564945,"price":"31.34","safety":0.516},
		{"name":"Broad Channel, NY, NY","code":"1690","addr1":"Broad Channel","addr2":"Queens","addr3":"Queens County","lng":-73.82132130000002,"lat":40.6158335,"price":"19.24","safety":1.05},
		{"name":"Brookville, NY, NY","code":"12019","addr1":"Brookville","addr2":"Oyster Bay","addr3":"Nassau County","lng":-73.56734819999997,"lat":40.8131553,"price":"25.68","safety":1.419},
		{"name":"Bulls Head, NY, NY","code":"2768","addr1":"Bulls Head","addr2":"Bulls Head","addr3":"Staten Island","lng":-74.16208790000002,"lat":40.6070483,"price":"13.77","safety":0.696},
		{"name":"Bushwick, NY, NY","code":"2429","addr1":"Bushwick","addr2":"Brooklyn","addr3":"Kings County","lng":-73.92128579999996,"lat":40.6944282,"price":"16.82","safety":0.75},
		{"name":"Butler Manor, NY, NY","code":"4829","addr1":"198","addr2":"Clermont Avenue","addr3":"Tottenville","lng":-74.2298318,"lat":40.50496529999999,"price":"25.44","safety":1.423},
		{"name":"Canarsie, NY, NY","code":"47","addr1":"Canarsie","addr2":"Brooklyn","addr3":"Kings County","lng":-73.90605790000001,"lat":40.6402325,"price":"16.98","safety":0.9079999999999999},
		{"name":"Carroll Gardens, NY, NY","code":"2751","addr1":"Carroll Gardens","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9991637,"lat":40.6795331,"price":"29.29","safety":1},
		{"name":"Castle Hill, NY, NY","code":"2575","addr1":"Castle Hill","addr2":"Bronx","addr3":"Bronx County","lng":-73.85072789999998,"lat":40.8176831,"price":"31.36","safety":0.897},
		{"name":"Central Park, NY, NY","code":"4473","addr1":"Central Park","addr2":"Manhattan","addr3":"New York","lng":-73.96535510000001,"lat":40.7828647,"price":"19.81","safety":0.579},
		{"name":"Chelsea-Travis, NY, NY","code":"5526","addr1":"Travis - Chelsea","addr2":"Staten Island","addr3":"Richmond County","lng":-74.19151769999996,"lat":40.5890113,"price":"25.51","safety":1.1840000000000002},
		{"name":"Chinatown, NY, NY","code":"2876","addr1":"Chinatown","addr2":"Manhattan","addr3":"New York","lng":-73.99703069999998,"lat":40.7157509,"price":"16.55","safety":1.3319999999999999},
		{"name":"Clason Point, NY, NY","code":"2945","addr1":"Clason Point","addr2":"Clason Point","addr3":"Bronx","lng":-73.8564048,"lat":40.8159508,"price":"21.37","safety":1.238},
		{"name":"Clearview, NY, NY","code":"12039","addr1":"Clearview","addr2":"Queens","addr3":"Queens County","lng":-73.79779280000002,"lat":40.7804859,"price":"15.41","safety":0.9530000000000001},
		{"name":"College Point, NY, NY","code":"314","addr1":"College Point","addr2":"Queens","addr3":"Queens County","lng":-73.83896570000002,"lat":40.786395,"price":"28.1","safety":0.903},
		{"name":"Columbia Street Waterfront District, NY, NY","code":"4119","addr1":"Columbia Street Waterfront District","addr2":"Brooklyn","addr3":"Kings County","lng":-74.00210190000001,"lat":40.6873691,"price":"23.68","safety":0.987},
		{"name":"Columbus Circle, NY, NY","code":"2572","addr1":"Columbus Circle","addr2":"Manhattan","addr3":"New York","lng":-73.98237219999999,"lat":40.7680441,"price":"25.16","safety":1.177},
		{"name":"Corona, NY, NY","code":"2430","addr1":"Corona","addr2":"Queens","addr3":"Queens County","lng":-73.86426130000001,"lat":40.7449859,"price":"17.14","safety":0.631},
		{"name":"Country Club, NY, NY","code":"979","addr1":"Country Club","addr2":"Bronx","addr3":"Bronx County","lng":-73.82132130000002,"lat":40.8430539,"price":"16.68","safety":0.9490000000000001},
		{"name":"Crown Heights, NY, NY","code":"25","addr1":"Crown Heights","addr2":"Brooklyn","addr3":"Kings County","lng":-73.94479939999997,"lat":40.6681032,"price":"23.04","safety":0.54},
		{"name":"Dongan Hills, NY, NY","code":"3899","addr1":"Dongan Hills","addr2":"Staten Island","addr3":"Richmond County","lng":-74.08845200000002,"lat":40.5906641,"price":"29.28","safety":0.8380000000000001},
		{"name":"Douglaston-Little Neck, NY, NY","code":"344","addr1":"Douglaston","addr2":"Queens","addr3":"North Hempstead","lng":-73.74707649999999,"lat":40.768713,"price":"16.82","safety":1.142},
		{"name":"Downtown, NY, NY","code":"11839","addr1":"Lower Manhattan","addr2":"Manhattan","addr3":"New York","lng":-74.0006328,"lat":40.7230084,"price":"21.45","safety":1.292},
		{"name":"DUMBO, NY, NY","code":"11884","addr1":"Dumbo","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9881451,"lat":40.7033164,"price":"23.87","safety":1.2189999999999999},
		{"name":"Dyker Heights, NY, NY","code":"197","addr1":"Dyker Heights","addr2":"Dyker Heights","addr3":"Brooklyn","lng":-74.00958400000002,"lat":40.6214932,"price":"24.59","safety":1.4449999999999998},
		{"name":"East Elmhurst, NY, NY","code":"79","addr1":"East Elmhurst","addr2":"Queens","addr3":"Queens County","lng":-73.87130990000003,"lat":40.7737505,"price":"31.04","safety":1.363},
		{"name":"East Flatbush, NY, NY","code":"31","addr1":"East Flatbush","addr2":"Brooklyn","addr3":"Kings County","lng":-73.93010370000002,"lat":40.6437474,"price":"24.17","safety":0.7010000000000001},
		{"name":"East Harlem, NY, NY","code":"29","addr1":"East Harlem","addr2":"Manhattan","addr3":"New York","lng":-73.9389213,"lat":40.7957399,"price":"17.47","safety":0.8069999999999999},
		{"name":"East Tremont, NY, NY","code":"2504","addr1":"East Tremont","addr2":"Tremont","addr3":"Bronx","lng":-73.8909693,"lat":40.8453781,"price":"14.37","safety":0.524},
		{"name":"Eltingville, NY, NY","code":"340","addr1":"Eltingville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.15629200000001,"lat":40.5394463,"price":"16.73","safety":1.408},
		{"name":"Emerson Hill, NY, NY","code":"627","addr1":"Emerson Hill","addr2":"Staten Island","addr3":"Richmond County","lng":-74.09609499999999,"lat":40.6073188,"price":"17.73","safety":0.817},
		{"name":"Far Rockaway, NY, NY","code":"75","addr1":"Far Rockaway","addr2":"Queens","addr3":"Hempstead","lng":-73.74484369999999,"lat":40.5998931,"price":"23.52","safety":1.024},
		{"name":"Fieldston, NY, NY","code":"3950","addr1":"Fieldston","addr2":"Bronx","addr3":"Bronx County","lng":-73.90364869999996,"lat":40.8942678,"price":"15.75","safety":0.569},
		{"name":"Flatbush, NY, NY","code":"24","addr1":"Flatbush - Ditmas Park","addr2":"Brooklyn","addr3":"Kings County","lng":-73.96243270000002,"lat":40.6409217,"price":"23.05","safety":1.376},
		{"name":"Flatlands, NY, NY","code":"94","addr1":"Flatlands","addr2":"Brooklyn","addr3":"Kings County","lng":-73.93304289999998,"lat":40.6268432,"price":"25.78","safety":0.779},
		{"name":"Flushing Meadows Corona Park, NY, NY","code":"13214","addr1":"Flushing Meadows Corona Park","addr2":"Queens","addr3":"Queens County","lng":-73.84078499999998,"lat":40.73971359999999,"price":"21.39","safety":0.725},
		{"name":"Fort Hamilton, NY, NY","code":"272","addr1":"Fort Hamilton","addr2":"Brooklyn","addr3":"Kings County","lng":-74.02854339999999,"lat":40.6094454,"price":"25.61","safety":1.443},
		{"name":"Garment District, NY, NY","code":"11962","addr1":"Garment District","addr2":"Manhattan","addr3":"New York","lng":-73.99163420000002,"lat":40.7547072,"price":"25.15","safety":1.0779999999999998},
		{"name":"Gerritsen Beach, NY, NY","code":"1221","addr1":"Gerritsen Beach","addr2":"Brooklyn","addr3":"Kings County","lng":-73.92275540000003,"lat":40.5870033,"price":"18.79","safety":1.3439999999999999},
		{"name":"Glen Oaks, NY, NY","code":"636","addr1":"Glen Oaks","addr2":"Queens","addr3":"Queens County","lng":-73.7118223,"lat":40.7471504,"price":"16.06","safety":1.0739999999999998},
		{"name":"Governors Island, NY, NY","code":"14360","addr1":"Governors Island","addr2":"Manhattan","addr3":"New York","lng":-74.01679200000001,"lat":40.68945009999999,"price":"22.84","safety":1.166},
		{"name":"Gramercy, NY, NY","code":"105","addr1":"Gramercy Park","addr2":"Manhattan","addr3":"New York","lng":-73.98447220000003,"lat":40.7367783,"price":"27.64","safety":0.8220000000000001},
		{"name":"Graniteville, NY, NY","code":"2817","addr1":"Graniteville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.15629200000001,"lat":40.6187679,"price":"21.55","safety":0.508},
		{"name":"Grant City, NY, NY","code":"3222","addr1":"Grant City","addr2":"Midland Beach","addr3":"Staten Island","lng":-74.10486409999999,"lat":40.5820492,"price":"14.06","safety":0.871},
		{"name":"Grasmere - Concord, NY, NY","code":"1057","addr1":"Grasmere","addr2":"Staten Island","addr3":"Richmond County","lng":-74.08376379999999,"lat":40.6041583,"price":"17.45","safety":0.719},
		{"name":"Gravesend, NY, NY","code":"63","addr1":"Gravesend","addr2":"Brooklyn","addr3":"Kings County","lng":-73.977126,"lat":40.5910166,"price":"20.2","safety":1.335},
		{"name":"Greenpoint, NY, NY","code":"11891","addr1":"Greenpoint","addr2":"Brooklyn","addr3":"Kings County","lng":-73.94186030000003,"lat":40.7245448,"price":"17.07","safety":0.966},
		{"name":"Greenridge, NY, NY","code":"883","addr1":"Greenridge","addr2":"Staten Island","addr3":"Richmond County","lng":-74.1698657,"lat":40.561216,"price":"26.06","safety":0.784},
		{"name":"Greenville, Jersey City, NJ","code":"146","addr1":"Greenville","addr2":"Brooklyn","addr3":"Jersey City","lng":-74.0916944,"lat":40.6987935,"price":"15.9","safety":0.6930000000000001},
		{"name":"Greenwich Village, NY, NY","code":"159","addr1":"Greenwich Village","addr2":"Manhattan","addr3":"New York","lng":-74.00274179999997,"lat":40.7335719,"price":"11.95","safety":0.996},
		{"name":"Greenwood, NY, NY","code":"2507","addr1":"Greenwood","addr2":"Greenwood","addr3":"Steuben County","lng":-77.64832360000003,"lat":42.13507,"price":"24.33","safety":1.3820000000000001},
		{"name":"Grymes Hill, NY, NY","code":"908","addr1":"Grymes Hill","addr2":"Grymes Hill","addr3":"Staten Island","lng":-74.09347509999998,"lat":40.6187151,"price":"29.86","safety":1.456},
		{"name":"Hackensack Riverfront, Jersey City, NJ","code":"3682","addr1":"Hackensack River Waterfront","addr2":"Jersey City","addr3":"Hudson County","lng":-74.09756779999998,"lat":40.7144585,"price":"20.84","safety":1.017},
		{"name":"Hamilton Heights, NY, NY","code":"2464","addr1":"Hamilton Heights","addr2":"Manhattan","addr3":"New York","lng":-73.94960789999999,"lat":40.8259597,"price":"13.47","safety":1.095},
		{"name":"Harlem, NY, NY","code":"27","addr1":"Harlem","addr2":"Manhattan","addr3":"New York","lng":-73.9464769,"lat":40.8115504,"price":"23.61","safety":1.175},
		{"name":"Heartland Village, NY, NY","code":"452","addr1":"Heartland Village","addr2":"Staten Island","addr3":"Richmond County","lng":-74.16803470000002,"lat":40.5807663,"price":"24.7","safety":1.084},
		{"name":"High Bridge, NY, NY","code":"2486","addr1":"The High Bridge","addr2":"Harlem River Drive","addr3":"Manhattan","lng":-73.9304396,"lat":40.842336,"price":"15.46","safety":1.303},
		{"name":"Hollis, NY, NY","code":"217","addr1":"Hollis","addr2":"Queens","addr3":"Queens County","lng":-73.762495,"lat":40.7112203,"price":"24.03","safety":1.4769999999999999},
		{"name":"Holliswood, NY, NY","code":"3596","addr1":"Hollis","addr2":"Queens","addr3":"Queens County","lng":-73.762495,"lat":40.7112203,"price":"17.33","safety":0.8029999999999999},
		{"name":"Homecrest, NY, NY","code":"267","addr1":"1233","addr2":"Avenue U","addr3":"Sheepshead Bay","lng":-73.95889009999996,"lat":40.5986975,"price":"25.24","safety":0.9410000000000001},
		{"name":"Howard Beach, NY, NY","code":"313","addr1":"Howard Beach","addr2":"Queens","addr3":"Queens County","lng":-73.8429989,"lat":40.6571222,"price":"23.73","safety":0.613},
		{"name":"Huguenot, NY, NY","code":"811","addr1":"Huguenot","addr2":"Deerpark","addr3":"Orange County","lng":-74.63099490000002,"lat":41.4178712,"price":"22.27","safety":0.652},
		{"name":"Hunters Point, NY, NY","code":"2840","addr1":"Hunters Point","addr2":"Queens","addr3":"Queens County","lng":-73.95067740000002,"lat":40.74803379999999,"price":"22.65","safety":0.619},
		{"name":"Jamaica Hills, NY, NY","code":"699","addr1":"Jamaica Hills","addr2":"Queens","addr3":"Queens County","lng":-73.79926339999997,"lat":40.71280290000001,"price":"27.54","safety":1.27},
		{"name":"Jamaica, NY, NY","code":"2427","addr1":"Jamaica","addr2":"Queens","addr3":"Queens County","lng":-73.78896889999999,"lat":40.702677,"price":"23.21","safety":0.616},
		{"name":"Journal Square, Jersey City, NJ","code":"305","addr1":"Journal Square","addr2":"Jersey City","addr3":"Hudson County","lng":-74.06315440000003,"lat":40.7345715,"price":"16.2","safety":1.034},
		{"name":"Kensington, NY, NY","code":"114","addr1":"Kensington","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9741874,"lat":40.6376415,"price":"15.12","safety":0.923},
		{"name":"Kew Gardens, NY, NY","code":"2562","addr1":"Kew Gardens","addr2":"Queens","addr3":"Queens County","lng":-73.82720289999997,"lat":40.705695,"price":"22.89","safety":0.843},
		{"name":"La Tourette Park, NY, NY","code":"15605","addr1":"Latourette Park","addr2":"Staten Island","addr3":"Richmond County","lng":-74.13928269999997,"lat":40.5839581,"price":"19.53","safety":0.873},
		{"name":"Liberty Park, Jersey City, NJ","code":"1803","addr1":"Liberty State Park","addr2":"200","addr3":"Morris Pesin Drive","lng":-74.05442729999999,"lat":40.703332,"price":"16.93","safety":0.9390000000000001},
		{"name":"Little Italy, NY, NY","code":"2986","addr1":"Little Italy","addr2":"Manhattan","addr3":"New York","lng":-73.9973273,"lat":40.7191413,"price":"28.17","safety":1.3439999999999999},
		{"name":"Malba, NY, NY","code":"1697","addr1":"Malba","addr2":"Queens","addr3":"Queens County","lng":-73.82573250000002,"lat":40.7906659,"price":"21.93","safety":1.024},
		{"name":"Manhattan Beach, NY, NY","code":"3348","addr1":"Manhattan Beach","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9389213,"lat":40.57815799999999,"price":"31.85","safety":1.458},
		{"name":"Manhattanville, NY, NY","code":"13060","addr1":"Manhattanville","addr2":"Manhattan","addr3":"New York","lng":-73.9558333,"lat":40.8169443,"price":"37.92","safety":1.321},
		{"name":"Mariner's Harbor, NY, NY","code":"638","addr1":"Mariners Harbor","addr2":"Staten Island","addr3":"Richmond County","lng":-74.15875470000003,"lat":40.63677010000001,"price":"21.57","safety":0.59},
		{"name":"Maspeth, NY, NY","code":"133","addr1":"Maspeth","addr2":"Queens","addr3":"Queens County","lng":-73.90658830000001,"lat":40.7294018,"price":"14.48","safety":1.274},
		{"name":"McGinley Square, Jersey City, NJ","code":"470","addr1":"McGinley Square","addr2":"Jersey City","addr3":"Hudson County","lng":-74.06966729999999,"lat":40.7241223,"price":"24.61","safety":1.454},
		{"name":"Meiers Corners, NY, NY","code":"2824","addr1":"Castleton Corners","addr2":"Staten Island","addr3":"Richmond County","lng":-74.1216,"lat":40.6133706,"price":"14.89","safety":0.677},
		{"name":"Melrose, NY, NY","code":"2489","addr1":"Melrose","addr2":"Manhattan","addr3":"Bronx County","lng":-73.91687660000002,"lat":40.8209719,"price":"19","safety":0.505},
		{"name":"Middle Village, NY, NY","code":"249","addr1":"Middle Village","addr2":"Queens","addr3":"Queens County","lng":-73.87425000000002,"lat":40.717372,"price":"13.82","safety":0.6839999999999999},
		{"name":"Midland Beach, NY, NY","code":"847","addr1":"Midland Beach","addr2":"Staten Island","addr3":"Richmond County","lng":-74.0931627,"lat":40.57149,"price":"24.41","safety":1.119},
		{"name":"Midtown, NY, NY","code":"488","addr1":"Midtown","addr2":"Manhattan","addr3":"New York","lng":-73.98401949999999,"lat":40.7549309,"price":"16.46","safety":0.775},
		{"name":"Mill Basin, NY, NY","code":"1086","addr1":"Mill Basin","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9109977,"lat":40.6100892,"price":"29.28","safety":1.1099999999999999},
		{"name":"Morningside Heights, NY, NY","code":"2474","addr1":"Morningside Heights","addr2":"Manhattan","addr3":"New York","lng":-73.96243270000002,"lat":40.8089564,"price":"29.89","safety":1.384},
		{"name":"Morris Heights, NY, NY","code":"2477","addr1":"Morris Heights","addr2":"Bronx","addr3":"Bronx County","lng":-73.9154069,"lat":40.8515872,"price":"23.19","safety":1.1480000000000001},
		{"name":"Neponsit, NY, NY","code":"12785","addr1":"Neponsit","addr2":"Queens","addr3":"Queens County","lng":-73.86101910000002,"lat":40.5707646,"price":"21.21","safety":1.149},
		{"name":"New Brighton, NY, NY","code":"3421","addr1":"New Brighton","addr2":"Staten Island","addr3":"Richmond County","lng":-74.09022600000003,"lat":40.6404369,"price":"33.08","safety":0.9139999999999999},
		{"name":"New Dorp Beach, NY, NY","code":"1538","addr1":"New Dorp Beach","addr2":"Staten Island","addr3":"Richmond County","lng":-74.10490930000003,"lat":40.5657068,"price":"15.08","safety":0.786},
		{"name":"New Dorp, NY, NY","code":"3462","addr1":"New Dorp","addr2":"Staten Island","addr3":"Richmond County","lng":-74.11518699999999,"lat":40.5733493,"price":"16.07","safety":0.887},
		{"name":"New Springville, NY, NY","code":"2708","addr1":"New Springville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.15629200000001,"lat":40.5890349,"price":"20.21","safety":0.915},
		{"name":"New Utrecht, NY, NY","code":"2608","addr1":"1601","addr2":"80th Street","addr3":"Bensonhurst","lng":-74.00294059999999,"lat":40.6134264,"price":"18.86","safety":0.685},
		{"name":"NoHo, NY, NY","code":"1163","addr1":"NoHo","addr2":"Manhattan","addr3":"New York","lng":-73.99255260000001,"lat":40.7286587,"price":"31.12","safety":1.313},
		{"name":"Ocean Hill, NY, NY","code":"2476","addr1":"Ocean Parkway","addr2":"Brooklyn","addr3":"Kings County","lng":-73.96864549999998,"lat":40.6130974,"price":"16.96","safety":0.509},
		{"name":"Ozone Park, NY, NY","code":"97","addr1":"Ozone Park","addr2":"Queens","addr3":"Queens County","lng":-73.85072789999998,"lat":40.6794072,"price":"19.71","safety":0.712},
		{"name":"Park Hill, NY, NY","code":"758","addr1":"Park Hill","addr2":"Staten Island","addr3":"Richmond County","lng":-74.08141539999997,"lat":40.6119566,"price":"18.58","safety":1.224},
		{"name":"Park Slope, NY, NY","code":"99","addr1":"Park Slope","addr2":"Brooklyn","addr3":"Kings County","lng":-73.98058170000002,"lat":40.6681038,"price":"13.79","safety":1.21},
		{"name":"Parkchester, NY, NY","code":"180","addr1":"Parkchester","addr2":"Bronx","addr3":"Bronx County","lng":-73.85660869999998,"lat":40.8382522,"price":"30.2","safety":0.747},
		{"name":"Pelham Bay Park, NY, NY","code":"13224","addr1":"Pelham Bay Park","addr2":"Watt Avenue","addr3":"Bronx","lng":-73.82101820000003,"lat":40.8505689,"price":"6.49","safety":0.8109999999999999},
		{"name":"Pleasant Plains, NY, NY","code":"4441","addr1":"Pleasant Plains","addr2":"Prince's Bay","addr3":"Staten Island","lng":-74.2156999,"lat":40.5239944,"price":"21.21","safety":1.303},
		{"name":"Pomonok, NY, NY","code":"2928","addr1":"Pomonok","addr2":"Queens","addr3":"Queens County","lng":-73.8124037,"lat":40.7336439,"price":"20.15","safety":0.849},
		{"name":"Port Ivory, NY, NY","code":"4157","addr1":"Port Ivory","addr2":"Staten Island","addr3":"Richmond County","lng":-74.18014419999997,"lat":40.6409366,"price":"20.61","safety":1.408},
		{"name":"Port Morris, NY, NY","code":"13117","addr1":"Port Morris","addr2":"Bronx","addr3":"Bronx County","lng":-73.9109977,"lat":40.80286419999999,"price":"13.41","safety":0.584},
		{"name":"Prince's Bay, NY, NY","code":"846","addr1":"Princes Bay","addr2":"Prince's Bay","addr3":"Staten Island","lng":-74.19764399999997,"lat":40.52899439999999,"price":"15.37","safety":1.459},
		{"name":"Prospect Heights, NY, NY","code":"11818","addr1":"Prospect Heights","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9668408,"lat":40.6774196,"price":"23.04","safety":0.627},
		{"name":"Prospect Park South, NY, NY","code":"4640","addr1":"Prospect Park South","addr2":"Brooklyn","addr3":"Kings County","lng":-73.96610609999999,"lat":40.6457741,"price":"30.02","safety":1.054},
		{"name":"Randall Manor, NY, NY","code":"3786","addr1":"Randall Manor","addr2":"Staten Island","addr3":"Richmond County","lng":-74.10344099999998,"lat":40.6410598,"price":"17.48","safety":0.841},
		{"name":"Red Hook, NY, NY","code":"11883","addr1":"Red Hook","addr2":"Dutchess County","addr3":"New York","lng":-73.8753898,"lat":41.9951225,"price":"23.65","safety":1.1989999999999998},
		{"name":"Richmond Town, NY, NY","code":"828","addr1":"Richmond","addr2":"Staten Island","addr3":"Richmond County","lng":-74.13427260000003,"lat":40.5673546,"price":"18.77","safety":0.954},
		{"name":"Richmond Valley, NY, NY","code":"3937","addr1":"Richmond Valley","addr2":"Charleston","addr3":"Staten Island","lng":-74.2293113,"lat":40.5201055,"price":"18.04","safety":0.597},
		{"name":"Riverdale, NY, NY","code":"645","addr1":"Riverdale","addr2":"Bronx","addr3":"Bronx County","lng":-73.9109977,"lat":40.8940853,"price":"25.5","safety":1.178},
		{"name":"Rockaway Beach, NY, NY","code":"3046","addr1":"Rockaway Beach","addr2":"Queens","addr3":"Queens County","lng":-73.81149929999998,"lat":40.5867247,"price":"16.86","safety":1.2690000000000001},
		{"name":"Roosevelt Island, NY, NY","code":"11999","addr1":"Roosevelt Island","addr2":"Manhattan","addr3":"New York","lng":-73.95099340000002,"lat":40.76050310000001,"price":"14.82","safety":0.725},
		{"name":"Rosedale, NY, NY","code":"2539","addr1":"Rosedale","addr2":"Queens","addr3":"Hempstead","lng":-73.73895959999999,"lat":40.6584068,"price":"16.91","safety":0.526},
		{"name":"Rossville, NY, NY","code":"797","addr1":"Rossville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.20325809999997,"lat":40.5509808,"price":"16.98","safety":0.8140000000000001},
		{"name":"Roxbury, NY, NY","code":"13543","addr1":"Roxbury","addr2":"Delaware County","addr3":"New York","lng":-74.56976170000002,"lat":42.3001868,"price":"15.35","safety":1.085},
		{"name":"Shore Acres, NY, NY","code":"6720","addr1":"Shore Acres","addr2":"Staten Island","addr3":"Richmond County","lng":-74.0667302,"lat":40.60988589999999,"price":"21.94","safety":1.2530000000000001},
		{"name":"Soundview, NY, NY","code":"2437","addr1":"Soundview","addr2":"Bronx","addr3":"Bronx County","lng":-73.86836970000002,"lat":40.8251411,"price":"29.14","safety":1.2109999999999999},
		{"name":"South Bronx, NY, NY","code":"2439","addr1":"South Bronx","addr2":"Bronx","addr3":"Bronx County","lng":-73.91842609999998,"lat":40.81767000000001,"price":"17.14","safety":1.2810000000000001},
		{"name":"South Ozone Park, NY, NY","code":"55","addr1":"South Ozone Park","addr2":"Queens","addr3":"Queens County","lng":-73.81249839999998,"lat":40.6764003,"price":"16.4","safety":0.705},
		{"name":"Springfield Gardens, NY, NY","code":"952","addr1":"Springfield Gardens","addr2":"Queens","addr3":"Queens County","lng":-73.76837840000002,"lat":40.6626441,"price":"17.67","safety":0.669},
		{"name":"Spuyten Duyvil, NY, NY","code":"550","addr1":"Spuyten Duyvil","addr2":"Bronx","addr3":"Bronx County","lng":-73.9154069,"lat":40.88116369999999,"price":"16.05","safety":1.1280000000000001},
		{"name":"St. George, NY, NY","code":"2810","addr1":"St. George","addr2":"Staten Island","addr3":"Richmond County","lng":-74.07994689999998,"lat":40.6427017,"price":"16.55","safety":0.9199999999999999},
		{"name":"Stapleton, NY, NY","code":"2811","addr1":"Stapleton","addr2":"Staten Island","addr3":"Richmond County","lng":-74.07847850000002,"lat":40.6288778,"price":"14.12","safety":1.2269999999999999},
		{"name":"Sunnyside, NY, NY","code":"2470","addr1":"Sunnyside","addr2":"Queens","addr3":"Queens County","lng":-73.91963240000001,"lat":40.7432759,"price":"14.2","safety":1.494},
		{"name":"Sunset Park, NY, NY","code":"36","addr1":"Sunset Park","addr2":"Brooklyn","addr3":"Kings County","lng":-74.01238510000002,"lat":40.645532,"price":"20.07","safety":1.346},
		{"name":"Sutton Place, NY, NY","code":"415","addr1":"Sutton Place","addr2":"Manhattan","addr3":"New York","lng":-73.96169800000001,"lat":40.7576281,"price":"20.13","safety":1.499},
		{"name":"The Heights, Jersey City, NJ","code":"113","addr1":"The Heights","addr2":"Manhattan","addr3":"Jersey City","lng":-74.05057520000003,"lat":40.7473758,"price":"23.27","safety":0.999},
		{"name":"The Waterfront, Jersey City, NJ","code":"782","addr1":"The Waterfront","addr2":"Jersey City","addr3":"Hudson County","lng":-74.03735640000002,"lat":40.7220293,"price":"16.66","safety":0.79},
		{"name":"Throggs Neck, NY, NY","code":"216","addr1":"Throgs Neck","addr2":"Bronx","addr3":"Bronx County","lng":-73.82132130000002,"lat":40.818399,"price":"20.85","safety":1.33},
		{"name":"Tompkinsville, NY, NY","code":"3405","addr1":"Tompkinsville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.08728919999999,"lat":40.63259559999999,"price":"28.09","safety":1.236},
		{"name":"Tottenville, NY, NY","code":"809","addr1":"Tottenville","addr2":"Staten Island","addr3":"Richmond County","lng":-74.23554039999999,"lat":40.5083408,"price":"13.14","safety":1.286},
		{"name":"Tremont, NY, NY","code":"2456","addr1":"Tremont","addr2":"Bronx","addr3":"Bronx County","lng":-73.8933596,"lat":40.8447416,"price":"18.74","safety":1.495},
		{"name":"Tudor City, NY, NY","code":"571","addr1":"Tudor City","addr2":"Manhattan","addr3":"New York","lng":-73.9716161,"lat":40.74884910000001,"price":"28.78","safety":0.861},
		{"name":"Turtle Bay, NY, NY","code":"485","addr1":"Midtown East","addr2":"Manhattan","addr3":"New York","lng":-73.9668408,"lat":40.7540369,"price":"21.17","safety":1.249},
		{"name":"Unionport, NY, NY","code":"2582","addr1":"Unionport","addr2":"Bronx","addr3":"Bronx County","lng":-73.85072789999998,"lat":40.82754740000001,"price":"23.02","safety":1.205},
		{"name":"Upper West Side, NY, NY","code":"4","addr1":"Upper West Side","addr2":"Manhattan","addr3":"New York","lng":-73.97536760000003,"lat":40.7870106,"price":"24.38","safety":0.8049999999999999},
		{"name":"Van Nest, NY, NY","code":"2667","addr1":"Van Nest","addr2":"Bronx","addr3":"Bronx County","lng":-73.87069489999999,"lat":40.8415796,"price":"24.65","safety":1.153},
		{"name":"West Brighton, NY, NY","code":"432","addr1":"West Brighton","addr2":"Staten Island","addr3":"Richmond County","lng":-74.1093141,"lat":40.6270298,"price":"17.86","safety":1.25},
		{"name":"West Farms, NY, NY","code":"2611","addr1":"West Farms","addr2":"Bronx","addr3":"Bronx County","lng":-73.88160010000001,"lat":40.8430609,"price":"17.34","safety":1.266},
		{"name":"West Village, NY, NY","code":"369","addr1":"West Village","addr2":"Manhattan","addr3":"New York","lng":-74.0035709,"lat":40.735781,"price":"11.94","safety":1.313},
		{"name":"Westchester Heights, NY, NY","code":"2688","addr1":"Westchester Avenue","addr2":"Bronx","addr3":"Bronx County","lng":-73.86815530000001,"lat":40.831368,"price":"25.54","safety":0.894},
		{"name":"Whitestone, NY, NY","code":"227","addr1":"Whitestone","addr2":"Queens","addr3":"Queens County","lng":-73.80955740000002,"lat":40.7920449,"price":"18.11","safety":1.1480000000000001},
		{"name":"Williamsbridge, NY, NY","code":"2428","addr1":"Williamsbridge","addr2":"Bronx","addr3":"Bronx County","lng":-73.85660869999998,"lat":40.8776859,"price":"26.95","safety":1.158},
		{"name":"Willowbrook, NY, NY","code":"9042","addr1":"Willowbrook","addr2":"Manor Heights","addr3":"Staten Island","lng":-74.13847620000001,"lat":40.6031598,"price":"24.74","safety":1.2810000000000001},
		{"name":"Windsor Terrace, NY, NY","code":"3041","addr1":"Windsor Terrace","addr2":"Brooklyn","addr3":"Kings County","lng":-73.9756567,"lat":40.6539346,"price":"18.2","safety":1.075},
		{"name":"Wingate, NY, NY","code":"2586","addr1":"235","addr2":"West 35th Street","addr3":"Manhattan","lng":-73.991199,"lat":40.752379,"price":"26.51","safety":0.802},
		{"name":"Woodhaven, NY, NY","code":"187","addr1":"Woodhaven","addr2":"Queens","addr3":"Queens County","lng":-73.85660869999998,"lat":40.6901366,"price":"18.61","safety":1.275},
		{"name":"Woodlawn, NY, NY","code":"3216","addr1":"Woodlawn Heights","addr2":"Bronx","addr3":"Bronx County","lng":-73.86689960000001,"lat":40.8976347,"price":"19.18","safety":0.879},
		{"name":"Woodrow, NY, NY","code":"1220","addr1":"Woodrow","addr2":"Staten Island","addr3":"Richmond County","lng":-74.19764409999999,"lat":40.5434385,"price":"20.7","safety":0.622},
		{"name":"Woodside, NY, NY","code":"2466","addr1":"Woodside","addr2":"Queens","addr3":"Queens County","lng":-73.90364869999996,"lat":40.7512123,"price":"19.17","safety":1.028}
	];
	return data;
}