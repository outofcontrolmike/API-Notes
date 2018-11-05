// somehow using Ajax

var obj =               // object that tells weather
{
    latitude: 37.7577,
    longitude: -122.4376,
    currently : 
    {                       // Object within an Object
        summary: "clear",
        humditiy: 0.93
    }
}

console.log(obj.latitude);  // references lataitude;
console.log(obj.currently.humditiy);    // refrencing a property inside a property

var jsonString = JSON.stringify(obj);     //refrencing a library by string
console.log(jsonString);                   // turning our object into a JSON
var backToObject = JSON.parse(jsonString);         // converts back ot object
console.log(backToObject);

var newLocation = '{"latitude":37.8145722,"longitude":-122.3031263,"timezone":"America/Los_Angeles","currently":{"time":1541429325,"summary":"Clear","icon":"clear-day","nearestStormDistance":442,"nearestStormBearing":358,"precipIntensity":0,"precipProbability":0,"temperature":56.73,"apparentTemperature":56.73,"dewPoint":43.3,"humidity":0.61,"pressure":1015.04,"windSpeed":2.9,"windGust":4.75,"windBearing":312,"cloudCover":0.03,"uvIndex":0,"visibility":10,"ozone":241.81},"minutely":{"summary":"Clear for the hour.","icon":"clear-day","data":[{"time":1541429280,"precipIntensity":0,"precipProbability":0},{"time":1541429340,"precipIntensity":0,"precipProbability":0},{"time":1541429400,"precipIntensity":0,"precipProbability":0},{"time":1541429460,"precipIntensity":0,"precipProbability":0},{"time":1541429520,"precipIntensity":0,"precipProbability":0},{"time":1541429580,"precipIntensity":0,"precipProbability":0},{"time":1541429640,"precipIntensity":0,"precipProbability":0},{"time":1541429700,"precipIntensity":0,"precipProbability":0},{"time":1541429760,"precipIntensity":0,"precipProbability":0},{"time":1541429820,"precipIntensity":0,"precipProbability":0},{"time":1541429880,"precipIntensity":0,"precipProbability":0},{"time":1541429940,"precipIntensity":0,"precipProbability":0},{"time":1541430000,"precipIntensity":0,"precipProbability":0},{"time":1541430060,"precipIntensity":0,"precipProbability":0},{"time":1541430120,"precipIntensity":0,"precipProbability":0},{"time":1541430180,"precipIntensity":0,"precipProbability":0},{"time":1541430240,"precipIntensity":0,"precipProbability":0},{"time":1541430300,"precipIntensity":0,"precipProbability":0},{"time":1541430360,"precipIntensity":0,"precipProbability":0},{"time":1541430420,"precipIntensity":0,"precipProbability":0},{"time":1541430480,"precipIntensity":0,"precipProbability":0},{"time":1541430540,"precipIntensity":0,"precipProbability":0},{"time":1541430600,"precipIntensity":0,"precipProbability":0},{"time":1541430660,"precipIntensity":0,"precipProbability":0},{"time":1541430720,"precipIntensity":0,"precipProbability":0},{"time":1541430780,"precipIntensity":0,"precipProbability":0},{"time":1541430840,"precipIntensity":0,"precipProbability":0},{"time":1541430900,"precipIntensity":0,"precipProbability":0},{"time":1541430960,"precipIntensity":0,"precipProbability":0},{"time":1541431020,"precipIntensity":0,"precipProbability":0},{"time":1541431080,"precipIntensity":0,"precipProbability":0},{"time":1541431140,"precipIntensity":0,"precipProbability":0},{"time":1541431200,"precipIntensity":0,"precipProbability":0},{"time":1541431260,"precipIntensity":0,"precipProbability":0},{"time":1541431320,"precipIntensity":0,"precipProbability":0},{"time":1541431380,"precipIntensity":0,"precipProbability":0},{"time":1541431440,"precipIntensity":0,"precipProbability":0},{"time":1541431500,"precipIntensity":0,"precipProbability":0},{"time":1541431560,"precipIntensity":0,"precipProbability":0},{"time":1541431620,"precipIntensity":0,"precipProbability":0},{"time":1541431680,"precipIntensity":0,"precipProbability":0},{"time":1541431740,"precipIntensity":0,"precipProbability":0},{"time":1541431800,"precipIntensity":0,"precipProbability":0},{"time":1541431860,"precipIntensity":0,"precipProbability":0},{"time":1541431920,"precipIntensity":0,"precipProbability":0},{"time":1541431980,"precipIntensity":0,"precipProbability":0},{"time":1541432040,"precipIntensity":0,"precipProbability":0},{"time":1541432100,"precipIntensity":0,"precipProbability":0},{"time":1541432160,"precipIntensity":0,"precipProbability":0},{"time":1541432220,"precipIntensity":0,"precipProbability":0},{"time":1541432280,"precipIntensity":0,"precipProbability":0},{"time":1541432340,"precipIntensity":0,"precipProbability":0},{"time":1541432400,"precipIntensity":0,"precipProbability":0},{"time":1541432460,"precipIntensity":0,"precipProbability":0},{"time":1541432520,"precipIntensity":0,"precipProbability":0},{"time":1541432580,"precipIntensity":0,"precipProbability":0},{"time":1541432640,"precipIntensity":0,"precipProbability":0},{"time":1541432700,"precipIntensity":0,"precipProbability":0},{"time":1541432760,"precipIntensity":0,"precipProbability":0},{"time":1541432820,"precipIntensity":0,"precipProbability":0},{"time":1541432880,"precipIntensity":0,"precipProbability":0}]},"hourly":{"summary":"Clear throughout the day.","icon":"clear-day","data":[{"time":1541426400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":57.23,"apparentTemperature":57.23,"dewPoint":43.07,"humidity":0.59,"pressure":1014.9,"windSpeed":1.52,"windGust":5.15,"windBearing":326,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":241.73},{"time":1541430000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":56.62,"apparentTemperature":56.62,"dewPoint":43.35,"humidity":0.61,"pressure":1015.07,"windSpeed":3.23,"windGust":4.66,"windBearing":310,"cloudCover":0.03,"uvIndex":0,"visibility":10,"ozone":241.83},{"time":1541433600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":57.18,"apparentTemperature":57.18,"dewPoint":45.84,"humidity":0.66,"pressure":1015.23,"windSpeed":4.31,"windGust":4.31,"windBearing":348,"cloudCover":0.09,"uvIndex":0,"visibility":10,"ozone":242.08},{"time":1541437200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":58.96,"apparentTemperature":58.96,"dewPoint":47.77,"humidity":0.66,"pressure":1015.36,"windSpeed":3.7,"windGust":4.34,"windBearing":304,"cloudCover":0.15,"uvIndex":2,"visibility":10,"ozone":242.42},{"time":1541440800,"summary":"Clear","icon":"clear-day","precipIntensity":0.0013,"precipProbability":0.01,"precipType":"rain","temperature":61.76,"apparentTemperature":61.76,"dewPoint":48.21,"humidity":0.61,"pressure":1015.35,"windSpeed":4.12,"windGust":4.52,"windBearing":288,"cloudCover":0.17,"uvIndex":3,"visibility":10,"ozone":242.84},{"time":1541444400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":64.33,"apparentTemperature":64.33,"dewPoint":47.39,"humidity":0.54,"pressure":1014.84,"windSpeed":4.74,"windGust":5.35,"windBearing":298,"cloudCover":0.15,"uvIndex":4,"visibility":10,"ozone":243.25},{"time":1541448000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":66.72,"apparentTemperature":66.72,"dewPoint":46.54,"humidity":0.48,"pressure":1014.14,"windSpeed":5.39,"windGust":6.64,"windBearing":293,"cloudCover":0.12,"uvIndex":4,"visibility":10,"ozone":243.73},{"time":1541451600,"summary":"Clear","icon":"clear-day","precipIntensity":0.0019,"precipProbability":0.01,"precipType":"rain","temperature":68.7,"apparentTemperature":68.7,"dewPoint":46.04,"humidity":0.44,"pressure":1013.68,"windSpeed":5.7,"windGust":7,"windBearing":283,"cloudCover":0.08,"uvIndex":4,"visibility":10,"ozone":244.15},{"time":1541455200,"summary":"Clear","icon":"clear-day","precipIntensity":0.0014,"precipProbability":0.01,"precipType":"rain","temperature":69.58,"apparentTemperature":69.58,"dewPoint":46.06,"humidity":0.43,"pressure":1013.43,"windSpeed":6.24,"windGust":8.17,"windBearing":288,"cloudCover":0.06,"uvIndex":3,"visibility":10,"ozone":244.7},{"time":1541458800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":69.2,"apparentTemperature":69.2,"dewPoint":46.8,"humidity":0.45,"pressure":1013.24,"windSpeed":6.68,"windGust":9.96,"windBearing":274,"cloudCover":0.04,"uvIndex":1,"visibility":10,"ozone":245.15},{"time":1541462400,"summary":"Clear","icon":"clear-day","precipIntensity":0.0018,"precipProbability":0.01,"precipType":"rain","temperature":67.74,"apparentTemperature":67.74,"dewPoint":47.68,"humidity":0.49,"pressure":1013.09,"windSpeed":6.58,"windGust":10.33,"windBearing":282,"cloudCover":0.02,"uvIndex":0,"visibility":10,"ozone":245.46},{"time":1541466000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":64.57,"apparentTemperature":64.57,"dewPoint":48.35,"humidity":0.56,"pressure":1013.03,"windSpeed":5.31,"windGust":8.75,"windBearing":287,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":245.42},{"time":1541469600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":61.31,"apparentTemperature":61.31,"dewPoint":48.98,"humidity":0.64,"pressure":1013.09,"windSpeed":4.29,"windGust":6.26,"windBearing":242,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":245.17},{"time":1541473200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":58.91,"apparentTemperature":58.91,"dewPoint":49.12,"humidity":0.7,"pressure":1013.2,"windSpeed":4.73,"windGust":5.85,"windBearing":251,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":244.97},{"time":1541476800,"summary":"Clear","icon":"clear-night","precipIntensity":0.0016,"precipProbability":0.01,"precipType":"rain","temperature":57.77,"apparentTemperature":57.77,"dewPoint":48.93,"humidity":0.72,"pressure":1013.5,"windSpeed":4.41,"windGust":5.12,"windBearing":249,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":244.72},{"time":1541480400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":57.59,"apparentTemperature":57.59,"dewPoint":48.61,"humidity":0.72,"pressure":1014.32,"windSpeed":4.04,"windGust":4.24,"windBearing":270,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":244.42},{"time":1541484000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":57.08,"apparentTemperature":57.08,"dewPoint":47.91,"humidity":0.71,"pressure":1014.72,"windSpeed":3.81,"windGust":4.14,"windBearing":259,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":244.35},{"time":1541487600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":56.51,"apparentTemperature":56.51,"dewPoint":47,"humidity":0.7,"pressure":1014.76,"windSpeed":3.53,"windGust":4.23,"windBearing":244,"cloudCover":0.02,"uvIndex":0,"visibility":10,"ozone":244.79},{"time":1541491200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":55.92,"apparentTemperature":55.92,"dewPoint":45.96,"humidity":0.69,"pressure":1014.63,"windSpeed":4.34,"windGust":4.44,"windBearing":291,"cloudCover":0.05,"uvIndex":0,"visibility":10,"ozone":245.63},{"time":1541494800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":55.26,"apparentTemperature":55.26,"dewPoint":45.01,"humidity":0.68,"pressure":1014.51,"windSpeed":4.34,"windGust":4.54,"windBearing":276,"cloudCover":0.07,"uvIndex":0,"visibility":10,"ozone":246.21},{"time":1541498400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":54.44,"apparentTemperature":54.44,"dewPoint":44.39,"humidity":0.69,"pressure":1014.42,"windSpeed":3.81,"windGust":4.46,"windBearing":279,"cloudCover":0.1,"uvIndex":0,"visibility":10,"ozone":246.7},{"time":1541502000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":53.59,"apparentTemperature":53.59,"dewPoint":43.86,"humidity":0.69,"pressure":1014.33,"windSpeed":3.99,"windGust":4.29,"windBearing":320,"cloudCover":0.13,"uvIndex":0,"visibility":10,"ozone":247.05},{"time":1541505600,"summary":"Clear","icon":"clear-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":52.6,"apparentTemperature":52.6,"dewPoint":43.19,"humidity":0.7,"pressure":1014.39,"windSpeed":2.18,"windGust":4.14,"windBearing":42,"cloudCover":0.17,"uvIndex":0,"visibility":10,"ozone":247.29},{"time":1541509200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":51.26,"apparentTemperature":51.26,"dewPoint":42.1,"humidity":0.71,"pressure":1014.76,"windSpeed":1.94,"windGust":4.07,"windBearing":63,"cloudCover":0.21,"uvIndex":0,"visibility":10,"ozone":247.29},{"time":1541512800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":50.04,"apparentTemperature":50.04,"dewPoint":40.87,"humidity":0.71,"pressure":1015.28,"windSpeed":2.25,"windGust":4.03,"windBearing":97,"cloudCover":0.26,"uvIndex":0,"visibility":10,"ozone":247.2},{"time":1541516400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":50.31,"apparentTemperature":50.31,"dewPoint":39.88,"humidity":0.67,"pressure":1015.74,"windSpeed":1.98,"windGust":3.89,"windBearing":79,"cloudCover":0.29,"uvIndex":0,"visibility":10,"ozone":247.12},{"time":1541520000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":52.93,"apparentTemperature":52.93,"dewPoint":39.39,"humidity":0.6,"pressure":1016.1,"windSpeed":3.1,"windGust":4.52,"windBearing":54,"cloudCover":0.28,"uvIndex":0,"visibility":10,"ozone":247.29},{"time":1541523600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"rain","temperature":57.05,"apparentTemperature":57.05,"dewPoint":39.16,"humidity":0.51,"pressure":1016.37,"windSpeed":1.91,"windGust":6.24,"windBearing":30,"cloudCover":0.25,"uvIndex":1,"visibility":10,"ozone":247.51},{"time":1541527200,"summary":"Clear","icon":"clear-day","precipIntensity":0.0004,"precipProbability":0.01,"precipType":"rain","temperature":60.82,"apparentTemperature":60.82,"dewPoint":38.92,"humidity":0.44,"pressure":1016.49,"windSpeed":2.15,"windGust":7.4,"windBearing":353,"cloudCover":0.22,"uvIndex":3,"visibility":10,"ozone":247.68},{"time":1541530800,"summary":"Clear","icon":"clear-day","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":63.43,"apparentTemperature":63.43,"dewPoint":38.43,"humidity":0.4,"pressure":1016.34,"windSpeed":2.65,"windGust":7.44,"windBearing":10,"cloudCover":0.17,"uvIndex":4,"visibility":10,"ozone":247.98},{"time":1541534400,"summary":"Clear","icon":"clear-day","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":66.17,"apparentTemperature":66.17,"dewPoint":37.92,"humidity":0.35,"pressure":1016,"windSpeed":2.98,"windGust":6.9,"windBearing":351,"cloudCover":0.13,"uvIndex":4,"visibility":10,"ozone":248.27},{"time":1541538000,"summary":"Clear","icon":"clear-day","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":68.26,"apparentTemperature":68.26,"dewPoint":37.9,"humidity":0.33,"pressure":1015.67,"windSpeed":3.42,"windGust":6.41,"windBearing":326,"cloudCover":0.09,"uvIndex":4,"visibility":10,"ozone":248.49},{"time":1541541600,"summary":"Clear","icon":"clear-day","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":69.35,"apparentTemperature":69.35,"dewPoint":38.68,"humidity":0.33,"pressure":1015.42,"windSpeed":3.5,"windGust":6.34,"windBearing":331,"cloudCover":0.08,"uvIndex":2,"visibility":10,"ozone":248.74},{"time":1541545200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":69.35,"apparentTemperature":69.35,"dewPoint":39.94,"humidity":0.34,"pressure":1015.16,"windSpeed":4.19,"windGust":6.35,"windBearing":250,"cloudCover":0.08,"uvIndex":1,"visibility":10,"ozone":248.82},{"time":1541548800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":68.49,"apparentTemperature":68.49,"dewPoint":41.38,"humidity":0.37,"pressure":1015.08,"windSpeed":4.77,"windGust":6.03,"windBearing":270,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":248.8},{"time":1541552400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":65.66,"apparentTemperature":65.66,"dewPoint":43.27,"humidity":0.44,"pressure":1015.24,"windSpeed":3.85,"windGust":5.08,"windBearing":302,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":248.51},{"time":1541556000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":61.75,"apparentTemperature":61.75,"dewPoint":45.32,"humidity":0.55,"pressure":1015.54,"windSpeed":3.36,"windGust":3.99,"windBearing":233,"cloudCover":0.14,"uvIndex":0,"visibility":10,"ozone":248.08},{"time":1541559600,"summary":"Clear","icon":"clear-night","precipIntensity":0.0004,"precipProbability":0.01,"precipType":"rain","temperature":58.68,"apparentTemperature":58.68,"dewPoint":46.54,"humidity":0.64,"pressure":1015.88,"windSpeed":3.39,"windGust":3.43,"windBearing":270,"cloudCover":0.15,"uvIndex":0,"visibility":10,"ozone":247.67},{"time":1541563200,"summary":"Clear","icon":"clear-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":57.43,"apparentTemperature":57.43,"dewPoint":46.3,"humidity":0.66,"pressure":1016.25,"windSpeed":2.93,"windGust":3.13,"windBearing":280,"cloudCover":0.14,"uvIndex":0,"visibility":10,"ozone":247.49},{"time":1541566800,"summary":"Clear","icon":"clear-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":57.02,"apparentTemperature":57.02,"dewPoint":45.21,"humidity":0.65,"pressure":1016.63,"windSpeed":2.02,"windGust":2.92,"windBearing":237,"cloudCover":0.12,"uvIndex":0,"visibility":10,"ozone":247.37},{"time":1541570400,"summary":"Clear","icon":"clear-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":56.72,"apparentTemperature":56.72,"dewPoint":43.93,"humidity":0.62,"pressure":1016.92,"windSpeed":2.47,"windGust":2.81,"windBearing":208,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":247.2},{"time":1541574000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":56.23,"apparentTemperature":56.23,"dewPoint":42.57,"humidity":0.6,"pressure":1017.05,"windSpeed":2.52,"windGust":2.82,"windBearing":166,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":246.68},{"time":1541577600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":55.77,"apparentTemperature":55.77,"dewPoint":41.06,"humidity":0.58,"pressure":1017.09,"windSpeed":1.94,"windGust":2.95,"windBearing":119,"cloudCover":0.13,"uvIndex":0,"visibility":10,"ozone":246},{"time":1541581200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":55.28,"apparentTemperature":55.28,"dewPoint":39.78,"humidity":0.56,"pressure":1017.09,"windSpeed":1.98,"windGust":3,"windBearing":101,"cloudCover":0.15,"uvIndex":0,"visibility":10,"ozone":245.51},{"time":1541584800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":54.75,"apparentTemperature":54.75,"dewPoint":39,"humidity":0.55,"pressure":1017.02,"windSpeed":1.04,"windGust":2.9,"windBearing":82,"cloudCover":0.15,"uvIndex":0,"visibility":10,"ozone":245.42},{"time":1541588400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":54.22,"apparentTemperature":54.22,"dewPoint":38.44,"humidity":0.55,"pressure":1016.88,"windSpeed":1.29,"windGust":2.77,"windBearing":65,"cloudCover":0.16,"uvIndex":0,"visibility":10,"ozone":245.44},{"time":1541592000,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"rain","temperature":53.58,"apparentTemperature":53.58,"dewPoint":37.81,"humidity":0.55,"pressure":1016.88,"windSpeed":1.46,"windGust":3.09,"windBearing":70,"cloudCover":0.17,"uvIndex":0,"visibility":10,"ozone":245.61},{"time":1541595600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":52.59,"apparentTemperature":52.59,"dewPoint":36.89,"humidity":0.55,"pressure":1017.06,"windSpeed":1.58,"windGust":3.14,"windBearing":73,"cloudCover":0.19,"uvIndex":0,"visibility":10,"ozone":245.89},{"time":1541599200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":51.67,"apparentTemperature":51.67,"dewPoint":35.9,"humidity":0.55,"pressure":1017.35,"windSpeed":2.32,"windGust":3.12,"windBearing":62,"cloudCover":0.2,"uvIndex":0,"visibility":10,"ozone":246.3}]},"daily":{"summary":"No precipitation throughout the week, with high temperatures peaking at 70°F on Sunday.","icon":"clear-day","data":[{"time":1541404800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1541428830,"sunsetTime":1541466461,"moonPhase":0.94,"precipIntensity":0.0005,"precipIntensityMax":0.0019,"precipIntensityMaxTime":1541451600,"precipProbability":0.09,"precipType":"rain","temperatureHigh":69.58,"temperatureHighTime":1541455200,"temperatureLow":50.04,"temperatureLowTime":1541512800,"apparentTemperatureHigh":69.58,"apparentTemperatureHighTime":1541455200,"apparentTemperatureLow":50.04,"apparentTemperatureLowTime":1541512800,"dewPoint":46.68,"humidity":0.6,"pressure":1014.34,"windSpeed":3.36,"windGust":10.33,"windGustTime":1541462400,"windBearing":286,"cloudCover":0.04,"uvIndex":4,"uvIndexTime":1541444400,"visibility":10,"ozone":243.56,"temperatureMin":56.51,"temperatureMinTime":1541487600,"temperatureMax":69.58,"temperatureMaxTime":1541455200,"apparentTemperatureMin":56.51,"apparentTemperatureMinTime":1541487600,"apparentTemperatureMax":69.58,"apparentTemperatureMaxTime":1541455200},{"time":1541491200,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1541515295,"sunsetTime":1541552803,"moonPhase":0.97,"precipIntensity":0.0002,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1541574000,"precipProbability":0.04,"precipType":"rain","temperatureHigh":69.35,"temperatureHighTime":1541545200,"temperatureLow":51.67,"temperatureLowTime":1541599200,"apparentTemperatureHigh":69.35,"apparentTemperatureHighTime":1541545200,"apparentTemperatureLow":51.67,"apparentTemperatureLowTime":1541599200,"dewPoint":42.09,"humidity":0.56,"pressure":1015.59,"windSpeed":1.5,"windGust":7.44,"windGustTime":1541530800,"windBearing":301,"cloudCover":0.15,"uvIndex":4,"uvIndexTime":1541530800,"visibility":10,"ozone":247.55,"temperatureMin":50.04,"temperatureMinTime":1541512800,"temperatureMax":69.35,"temperatureMaxTime":1541545200,"apparentTemperatureMin":50.04,"apparentTemperatureMinTime":1541512800,"apparentTemperatureMax":69.35,"apparentTemperatureMaxTime":1541545200},{"time":1541577600,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1541601760,"sunsetTime":1541639146,"moonPhase":0.02,"precipIntensity":0.0002,"precipIntensityMax":0.0005,"precipIntensityMaxTime":1541581200,"precipProbability":0.01,"precipType":"rain","temperatureHigh":69.71,"temperatureHighTime":1541628000,"temperatureLow":54.92,"temperatureLowTime":1541685600,"apparentTemperatureHigh":69.71,"apparentTemperatureHighTime":1541628000,"apparentTemperatureLow":54.92,"apparentTemperatureLowTime":1541685600,"dewPoint":39.03,"humidity":0.48,"pressure":1017.53,"windSpeed":1.31,"windGust":5.81,"windGustTime":1541613600,"windBearing":345,"cloudCover":0.15,"uvIndex":4,"uvIndexTime":1541617200,"visibility":10,"ozone":250.77,"temperatureMin":51.67,"temperatureMinTime":1541599200,"temperatureMax":69.71,"temperatureMaxTime":1541628000,"apparentTemperatureMin":51.67,"apparentTemperatureMinTime":1541599200,"apparentTemperatureMax":69.71,"apparentTemperatureMaxTime":1541628000},{"time":1541664000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1541688224,"sunsetTime":1541725492,"moonPhase":0.04,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureHigh":69.23,"temperatureHighTime":1541721600,"temperatureLow":51.77,"temperatureLowTime":1541772000,"apparentTemperatureHigh":69.23,"apparentTemperatureHighTime":1541721600,"apparentTemperatureLow":51.77,"apparentTemperatureLowTime":1541772000,"dewPoint":33.44,"humidity":0.37,"pressure":1017.99,"windSpeed":4.95,"windGust":15.52,"windGustTime":1541700000,"windBearing":10,"cloudCover":0.06,"uvIndex":4,"uvIndexTime":1541703600,"visibility":10,"ozone":260.04,"temperatureMin":54.92,"temperatureMinTime":1541685600,"temperatureMax":69.23,"temperatureMaxTime":1541721600,"apparentTemperatureMin":54.92,"apparentTemperatureMinTime":1541685600,"apparentTemperatureMax":69.23,"apparentTemperatureMaxTime":1541721600},{"time":1541750400,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-night","sunriseTime":1541774689,"sunsetTime":1541811839,"moonPhase":0.08,"precipIntensity":0,"precipIntensityMax":0.0001,"precipIntensityMaxTime":1541779200,"precipProbability":0,"temperatureHigh":69.28,"temperatureHighTime":1541804400,"temperatureLow":49.82,"temperatureLowTime":1541858400,"apparentTemperatureHigh":69.28,"apparentTemperatureHighTime":1541804400,"apparentTemperatureLow":48.31,"apparentTemperatureLowTime":1541858400,"dewPoint":29.56,"humidity":0.33,"pressure":1017.4,"windSpeed":5.15,"windGust":16.61,"windGustTime":1541764800,"windBearing":35,"cloudCover":0.54,"uvIndex":3,"uvIndexTime":1541790000,"visibility":10,"ozone":260.24,"temperatureMin":51.77,"temperatureMinTime":1541772000,"temperatureMax":69.28,"temperatureMaxTime":1541804400,"apparentTemperatureMin":51.77,"apparentTemperatureMinTime":1541772000,"apparentTemperatureMax":69.28,"apparentTemperatureMaxTime":1541804400},{"time":1541836800,"summary":"Partly cloudy until evening.","icon":"partly-cloudy-day","sunriseTime":1541861154,"sunsetTime":1541898187,"moonPhase":0.11,"precipIntensity":0.0001,"precipIntensityMax":0.0003,"precipIntensityMaxTime":1541851200,"precipProbability":0.01,"precipType":"rain","temperatureHigh":70.09,"temperatureHighTime":1541887200,"temperatureLow":57.37,"temperatureLowTime":1541948400,"apparentTemperatureHigh":70.09,"apparentTemperatureHighTime":1541887200,"apparentTemperatureLow":57.37,"apparentTemperatureLowTime":1541948400,"dewPoint":32.9,"humidity":0.37,"pressure":1015.47,"windSpeed":5.13,"windGust":8.73,"windGustTime":1541872800,"windBearing":24,"cloudCover":0.43,"uvIndex":3,"uvIndexTime":1541876400,"visibility":10,"ozone":267.65,"temperatureMin":49.82,"temperatureMinTime":1541858400,"temperatureMax":70.09,"temperatureMaxTime":1541887200,"apparentTemperatureMin":48.31,"apparentTemperatureMinTime":1541858400,"apparentTemperatureMax":70.09,"apparentTemperatureMaxTime":1541887200},{"time":1541923200,"summary":"Partly cloudy in the afternoon.","icon":"partly-cloudy-day","sunriseTime":1541947619,"sunsetTime":1541984537,"moonPhase":0.14,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureHigh":70.2,"temperatureHighTime":1541973600,"temperatureLow":56.48,"temperatureLowTime":1542034800,"apparentTemperatureHigh":70.2,"apparentTemperatureHighTime":1541973600,"apparentTemperatureLow":56.48,"apparentTemperatureLowTime":1542034800,"dewPoint":31.75,"humidity":0.31,"pressure":1018.21,"windSpeed":7.85,"windGust":9.82,"windGustTime":1541937600,"windBearing":27,"cloudCover":0.11,"uvIndex":3,"uvIndexTime":1541962800,"visibility":10,"ozone":279.98,"temperatureMin":57.37,"temperatureMinTime":1541948400,"temperatureMax":70.2,"temperatureMaxTime":1541973600,"apparentTemperatureMin":57.37,"apparentTemperatureMinTime":1541948400,"apparentTemperatureMax":70.2,"apparentTemperatureMaxTime":1541973600},{"time":1542009600,"summary":"Mostly cloudy starting in the afternoon.","icon":"partly-cloudy-night","sunriseTime":1542034085,"sunsetTime":1542070889,"moonPhase":0.17,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureHigh":69.21,"temperatureHighTime":1542060000,"temperatureLow":48.77,"temperatureLowTime":1542117600,"apparentTemperatureHigh":69.21,"apparentTemperatureHighTime":1542060000,"apparentTemperatureLow":48.77,"apparentTemperatureLowTime":1542117600,"dewPoint":30.46,"humidity":0.31,"pressure":1022.49,"windSpeed":6.08,"windGust":9.93,"windGustTime":1542031200,"windBearing":23,"cloudCover":0.33,"uvIndex":3,"uvIndexTime":1542049200,"visibility":10,"ozone":271.56,"temperatureMin":56.48,"temperatureMinTime":1542034800,"temperatureMax":69.21,"temperatureMaxTime":1542060000,"apparentTemperatureMin":56.48,"apparentTemperatureMinTime":1542034800,"apparentTemperatureMax":69.21,"apparentTemperatureMaxTime":1542060000}]},"flags":{"sources":["nearest-precip","nwspa","cmc","gfs","hrrr","icon","isd","madis","nam","sref","darksky"],"nearest-station":1.022,"units":"us"},"offset":-8}';

var newLocationObj = JSON.parse(newLocation);   // this will revert back to an object
console.log(newLocation);                       // prints the object.. rather long



