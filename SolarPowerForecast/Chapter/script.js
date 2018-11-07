/*  JavaScript 6th Edition
    Chapter 11
    Chapter case

    Whole Spectrum Energy Solutions
    Author: 
    Date:   

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ";
var weatherReport;
var httpRequest = new XMLHttpRequest();     // This var is a class

function getWeather(evt) {
   var latitude;
   var longitude;
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCity = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCity = evt.srcElement.innerHTML;
      }
   }
   if (selectedCity === "Tucson, AZ") {
      latitude = 37.7577;
      longitude = -122.4376;
   } else if (selectedCity === "Chicago, IL") {
      latitude = 41.8337329;
      longitude = -87.7321555;
   } else if (selectedCity === "Montreal, QC") {
      latitude = 45.5601062;
      longitude = -73.7120832;
   }

//httpRequest.open("get", "https://api.darksky.net/forecast/b07431fb31f0d5dce323ac70c78103d1/37.8267,-122.4233");              // created instance of object and method
httpRequest.open("get", "solar.php?lat=" + latitude + "&lng=" + longitude)
httpRequest.send();                  // can include null in paramters send(null);  without it, it will default.
httpRequest.onreadystatechange = aFunction;                //any time there is a change, fire this function
}

function aFunction()
{
    if (httpRequest.readyState == 4) 
        {
            var weatherReport = httpRequest.responseText;
            console.log(weatherReport);
            var jsObject = JSON.parse(weatherReport);
            console.log(jsObject)
            console.log(jsObject.latitude)
            theLat = jsObject.latitude;
            document.getElementById("theLat").innerHTML = theLat;
        }
}



var locations = document.querySelectorAll("section ul li");
for (var i = 0; i < locations.length; i++) {
   if (locations[i].addEventListener) {
      locations[i].addEventListener("click", getWeather, false);
   } else if (locations[i].attachEvent) {
      locations[i].attachEvent("onclick", getWeather);
   }
}
if (window.addEventListener) {
   window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", getWeather);
}