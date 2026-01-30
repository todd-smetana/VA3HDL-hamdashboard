const topBarCenterText = `KF0AIT - EN14oh`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!

const disableSetup = true;

const aURL = [
//  ["add10d", "BACK", "#", "1"],
//  ["add10d", "BACK", "#", "1", "R"],
//  ["ff9100", "Refresh", "#", "1"],
//  ["0dd1a7", "Help", "#", "1"],


//"2196F3", "Meshcom Map", "https://26269.de/meshcom-map/", "1"
   ["f3de21ff", "satellite.js"],

//[
//  "FF000F",
//  "LCL Alerts",
//  "https://alerts.weather.gov/search?zone=SDC011", 
//  "1"

//  ],
  
["FF000F", "NAT Alerts", "https://warn.pbs.org/", "1"],


["FF000F", "NWS DSHBRD", "https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225", "1"],

  [
    "2196F3",
    "RADAR",
    "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=4&overlay=radar&product=radar&level=surface&lat=38.845&lon=-95.508",
    "1",
    "L"
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "L",
  ],


  
  
  
  ["2196F3", "SD511", "https://www.sd511.org/#&zoom=6.643670548755828&lon=-99.55851272999115&lat=44.234424028697276&threat-forecast&cams&rwis&radar", "1"],
  ["2196F3", "MESONET", "https://climate.sdstate.edu/", "1.0"],
  ["2196F3", "SF CAMS", "https://experience.arcgis.com/experience/43e97c2a89d6450bb50bf6b3789b7f34", "1.0"],
  [
    "2196F3",
    "POWER",
    "poweroutage.html",
    "1",
    "L",
  ],

  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-100.53,38.01,1478",
    "1",
    "L",
  ],

  [
    "2196F3",
    "COCORAHS",
    "https://cocorahs.org/",
    "1",
    "L",
  ],


  



  [
    "2196F3",
    "APRS",
   // "https://aprs.to/",
  "https://aprs-map.info/?center=44.30001,-96.772&zoom=7",
 // "https://aprs.fi/#!z=11&lat=44.3000&lng=-96.772&timerange=3600&tail=3600",
    "1",
    "R",
  ],
  [
    "2196F3",
    "ADSB",
    "https://globe.adsb.fi/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "PSK RPTR",
    "https://pskreporter.info/pskmap?preset&callsign=KF0AIT&txrx=tx&timerange=1800&hideunrec=1&blankifnone=1",
    "1",
    "R",
  ],

  [
    "2196F3",
    "CONTEST",
    //"https://www.contestcalendar.com/fivewkcal.html",
    "https://www.contestcalendar.com/weeklycont.php",
    "1",
    "R"
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1","R"],
 //[]
 // "2196F3",
 // "DXSUMMIT",
 // "http://dxsummit.fi/#/",
 // "1",
 // "R",
//],
  ["2196F3", "DX Heat", "https://dxheat.com/dxc/", "1","R"],
  [
    "2196F3",
    "SOTA",
    "https://sotawatch.sota.org.uk/en/",
    "1",
    "R",
  ],
//[
//  "2196F3",
//  "POTA",
//  "https://pota.app",
//  "1",
//  "R",
//],
  [
    "2196F3",
    "RADIO REF",
    "https://www.radioreference.com/db/browse/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "BROADCSTFY",
    "https://www.broadcastify.com/listen/",
    "1",
    "R",
  ],

  



  
  [
    "2196F3",
    "SondeHub",
    "https://www.sondehub.org/index.html?embed=1&hidelist=1&hidegraph=1&expandgraph=0#!mt=Mapnik&mz=5&qm=3d&mc=44.30001,-96.772",
    "1",
    "R",
  ],


  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  
  [
    "2196F3",
    "Band Plan",
    "https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png",
    "1",
    "R",
  ],
  


  



  
 


  


 
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
// Dashboard items - Structure is Title, Image Source URL
    // [Title, Image Source URL]

    // radio dashboard
    /*"ISS POSITION", "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
"", "https://www.hamqsl.com/solarpich.php"
"Solar WX", "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"
"IONOSPHERE", "https://www.sws.bom.gov.au/Images/HF%20Systems/Global%20HF/T%20Index%20Map/East/tindex.png"
"NOAA D-`xRAP", "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
"", "https://www.hamqsl.com/solar101vhf.php"
"", "https://www.hamqsl.com/marston.php"
"MUF", "https://prop.kc2g.com/renders/current/mufd-normal-now.svg"
"CRITICAL FREQUENCY", "https://prop.kc2g.com/renders/current/fof2-normal-now.svg"
"CURRENT SUN", "https://umbra.nascom.nasa.gov/images/latest_aia_304.gif", "https://umbra.nascom.nasa.gov/images/latest_aia_1700.gif" 
*/
    const aIMG = [


      

      


      ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
        "https://www.spc.noaa.gov/products/activity_loop.gif",
        "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.conus.png"



      ],
      [
        "LOCAL RADAR",
        "https://radar.weather.gov/ridge/standard/KABR_loop.gif",
        "https://radar.weather.gov/ridge/standard/KFSD_loop.gif"
        
      ],
      [
        "APRS",
        "iframe|https://aprs-map.info/?center=44.2933,-96.7885&zoom=8"
        //"iframe|https://meshmap.net/"
       

      ],
      [
["BROOKINGS WEST","BROOKINGS EAST","MM132W","MM136N","MM136S","MM133N","MM133S","MM132N","MM132S","MM130N","MM130S","MM129N","MM129S","MM127N","MM127S"],

	"https://climate.sdstate.edu/pictures/BKMS2/mostrecent1.jpg", // west
	"https://climate.sdstate.edu/pictures/BKMS2/mostrecent2.jpg", // east
	"https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/2/latest.jpg",  // brookings
	"https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/5/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/5/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/1/latest.jpg", 
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/5/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK0/3/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDBK0/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDEKT/4/latest.jpg",
  "https://sd.cdn.iteris-atis.com/camera_images/CSDEKT/5/latest.jpg",
		//"https://campanilecam.sdstate.edu/jpg/1/image.jpg",
      ],
      [
        "SATELLITE",
        "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif"
        
      ],
      [
        "LOCAL SAT",
        "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/umv/GEOCOLOR/GOES16-UMV-GEOCOLOR-600x600.gif"
      ],
      ["ADSB", "iframe|https://globe.adsbexchange.com/?airport=BKX"
      ],
      [
        ["MM121N","ARLINGTON","MM136","FALLS PARK","RAPID", "WATERTOWN","EXIRA I80/HW71","SPRINGFIELD HW14"],
		
		"https://sd.cdn.iteris-atis.com/camera_images/CSDWRD/0/latest.jpg", // 121 ward
		//"https://sd.cdn.iteris-atis.com/camera_images/CSDWRD/1/latest.jpg", // 121 ward
		//"https://sd.cdn.iteris-atis.com/camera_images/SDBNT/0/latest.jpg",  // 157 brandt
		//"https://sd.cdn.iteris-atis.com/camera_images/SDBNT/1/latest.jpg", // 157 brandt
		"https://sd.cdn.iteris-atis.com/camera_images/SDARL/0/latest.jpg", // arlington
		//"https://sd.cdn.iteris-atis.com/camera_images/SDARL/1/latest.jpg", // arlington
    "https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/1/latest.jpg", //136
		//"https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/4/latest.jpg", //136
		"https://ipcamlive.com/player/snapshot.php?alias=5582e965970a8",  // falls park
    // "https://imgproxy.windy.com/_/full/plain/current/1627589235/original.jpg"  // falls bakup from meteoblue.com
    //"https://s32.ipcamlive.com/streams/20wstu8ngyk0eqron/snapshot.jpg", // rapid city
    "https://imgproxy.windy.com/_/normal/plain/current/1689344301/original.jpg",  // rapid city new
   // "https://s52.ipcamlive.com/streams/34rhz0prcpu34ixqy/snapshot.jpg", // watertown old
    //"https://s52.ipcamlive.com/streams/341i52yd0olrvx6mb/snapshot.jpg", // watertown new
    "https://imgproxy.windy.com/_/full/plain/current/1676469552/original.jpg", // watertown new new

    
    "https://iowadotsnapshot.us-east-1.skyvdn.com/wwdtv063lb.jpg", // exira
    "https://public.carsprogram.org/cameras/MN/C30343-v2", //springfield

		
		
       




	 ],
      [
        "LIGHTNING",
        "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
        
      ],
      ["LOCAL LIGHTNING", "https://www.blitzortung.org/en/Images/image_b_mn.png"],
    //    "https://ds.iris.edu/seismon/views/eveday_big//imgs/topMap.eveday_big.gif"],
    //  [
    //    "LIGHTNING LOCAL",
    //    "https://www.blitzortung.org/en/Images/image_b_mn.png",
    //  ],
    ["", 
      


       "https://stats.allstarlink.org/getstatus.cgi?59505",
       // "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png", // old drap 
        "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png", // new drap 
        "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
		"https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
	//	 "https://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=52.67|-21.96|-15.53|-9.42|-17.76|-17.53|46.34|50.73|42.81|39.75|50.89|29.60|6.23|39.40|-15.53|43.51|46.34|-21.96|34.38|44.15|39.36|46.34|39.91|39.91|46.34|27.46|24.88|27.46|36.28|39.36|42.04|36.28|36.21|12.69|18.22|24.17|42.04|29.60|-15.73|-7.90|36.21|12.69|36.21|29.15|30.65|-21.96|33.50|-38.83|36.28|36.21|27.46&lon=9.75|27.60|28.00|160.05|168.36|146.05|-67.83|4.39|23.19|116.81|-113.85|55.79|-10.70|32.86|28.00|-79.63|-67.83|27.64|108.61|86.90|75.72|-67.83|-76.58|-76.58|-67.83|-80.93|102.50|-80.93|-86.10|75.72|12.32|-86.10|-86.89|-8.02|-63.02|54.25|12.32|55.79|46.45|-14.38|-86.89|-8.02|-86.89|47.77|-87.09|27.64|-86.47|176.42|-86.10|-86.89|-80.93&freq=3975|4930|4965|5020|5040|5055|5130|5780|5900|5985|6030|6040|6050|6050|6065|6070|6160|6195|7285|7295|7415|7490|9265|9265|9330|9395|9440|9455|9475|9600|9705|9930|9980|11640|11775|11810|11870|11880|11965|12095|12160|13630|13845|15540|15555|15580|15610|15720|15810|15825|17790&az=ND|20|ND|ND|ND|ND|245|ND|126|257|ND|313|ND|310|315|ND|245|350|317|270|308|245|242|242|245|355|283|285|50|308|206|180|90|111|320|90|210|211|295|27|85|111|90|310|5|350|85|35|40|46|160",
  "https://www.timeanddate.com/scripts/sunmap.php?iso=now",
 // "https://ds.iris.edu/seismon/views/eveday_big//imgs/topMap.eveday_big.gif"
      
    
    ],
    // ["SDSM&T", "iframe|https://www.youtube.com/embed/0so_l_Vhtb4?autoplay=1&mute=1"],
     ["", 
     // "iframe|https://www.youtube.com/embed/0so_l_Vhtb4?autoplay=0&mute=1"
         "iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=7448008&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
      "https://www.hamqsl.com/solar101vhf.php",
      "https://www.hamqsl.com/solar100sc.php",
      "https://www.hamqsl.com/solarpich.php",
      ],
     // [
     //   "WEBSITE EXAMPLE",
     //   "iframe|https://globe.adsbexchange.com/?airport=BKX",
     // ],
      
      

      

      
    ];


// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [30000,10000,30000000,10000,30000,30000,30000000,10000,30000,30000,10000,10000];

var aRSS = [



  ["http://www.spc.noaa.gov/products/spcwwrss.xml",15],
  ["https://www.keloland.com/weather/forecast/feed",60],
  ["https://moxie.foxweather.com/google-publisher/weather-news.xml",60],
  
//  ["https://www.amsat.org/feed/"],          // Example RSS feed
//  ["https://daily.hamweekly.com/atom.xml"], // Example Atom feed
  ];




 