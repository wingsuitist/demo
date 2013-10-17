function lookup_location() {
  geoPosition.getCurrentPosition(showGeo, showGeoError);
}

function showGeo(loc) {
  $("#geo-wrapper").css({'width':'320px','height':'350px'});
  var map = new GMap2(document.getElementById("geo-wrapper"));
  var center = new GLatLng(loc.coords.latitude, loc.coords.longitude);
  map.setCenter(center, 14);
  map.addControl(new GSmallMapControl());
  map.addControl(new GMapTypeControl());
  map.addOverlay(new GMarker(center, {draggable: false, title: "You are here (more or less)"}));
}

function showGeoError() {
  $("#live-geolocation").html('Unable to determine your location.');
}
