<?php
$WeatherSource = "https://api.darksky.net/forecast/b07431fb31f0d5dce323ac70c78103d1/" . $_GET["lat"] . "," . $_GET["lng"];      // make sure not to send values twice
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>