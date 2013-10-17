function lookup_location() {
	if (geoPosition.init()) {
		geoPosition.getCurrentPosition(showGeo, showGeoError);
  	}
}

function showGeo(loc) {
  $("#geo").html("lat: " + loc.coords.latitude + "<br />long: " + loc.coords.longitude);
}

function showGeoError() {
  $("#geo").html('Unable to determine your location.');
}

function tilt(x,y) {
	x = (x == null) ? 0 : Math.floor(x);
	y = (y == null) ? 0 : Math.floor(y);
	$("#gyro").html("x: " + x + "<br />y: " + y);
	var rgb = "rgb(" + (120 + (x * 10)) + "," + (120 + (y * 10)) + ",0)";
	//console.log("rgb: "+rgb);
	$("#gyro").css({"background-color":rgb});
}

$( document ).ready(function() {
	lookup_location();
	setInterval(function(){
		lookup_location();
	},10000);
	
	tilt();

});
