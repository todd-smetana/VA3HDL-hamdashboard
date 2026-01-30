// CUT START
// const disableSetup = true;
var topBarCenterText = "BROOKINGS AREA CAMS";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21ff", "config.js"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=44.01&lon=-79.45&width=900&detailLat=44.01&detailLon=-79.45&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1",
    "1",
    "R"
  ]
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var currentDate = new Date();
var aIMG = [
  // 1
 // ["MM133N", "https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/0/latest.jpg"],
  ["MM136N", "https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/4/latest.jpg"],
  
  // 2
 // ["MM133S","https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/1/latest.jpg"],
  ["MM136S","https://sd.cdn.iteris-atis.com/camera_images/CSDBKX/5/latest.jpg"],
  // 3
  ["MM133N","https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/4/latest.jpg"],
  // 4
  ["MM133S","https://sd.cdn.iteris-atis.com/camera_images/CSDBK3/5/latest.jpg"],
   // 5
 // ["MM132N", "https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/0/latest.jpg"], // nix me
  // 8
  ["MM132N","https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/4/latest.jpg"],
  // 6
  ["MM132S","https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/1/latest.jpg"], 
  // 7
//  ["MM132W","https://sd.cdn.iteris-atis.com/camera_images/CSDBK2/2/latest.jpg"],  // brookings
  
   // 9
  //["MM130", "https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/0/latest.jpg"],
  // 10
 // ["MM130","https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/1/latest.jpg"],
  // 11
  ["MM130N","https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/4/latest.jpg"],
  // 12
  ["MM130S","https://sd.cdn.iteris-atis.com/camera_images/CSDBK1/5/latest.jpg"],
  // 11
  ["MM129N","https://sd.cdn.iteris-atis.com/camera_images/CSDBK0/3/latest.jpg"],
  // 12
  ["MM129S","https://sd.cdn.iteris-atis.com/camera_images/CSDBK0/4/latest.jpg"],
    // 11
  ["MM127N","https://sd.cdn.iteris-atis.com/camera_images/CSDEKT/4/latest.jpg"],
  // 12
  ["MM127S","https://sd.cdn.iteris-atis.com/camera_images/CSDEKT/5/latest.jpg"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60100, 60200, 300300, 60400,
  60100, 60200, 300300, 60400,
  60100, 60200, 300300, 60400,
];

var aRSS = [
  ["https://weather.gc.ca/rss/battleboard/onrm28_e.xml", 60],
];

// CUT END
