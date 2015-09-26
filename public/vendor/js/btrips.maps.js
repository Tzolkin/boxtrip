var origin_geometry, destination_geometry;
$(function() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var btripMap = Gmaps.build('Google');

  btripMap.buildMap({
    internal: {
      id: 'map-canvas'
    }
  },
  function() {
    directionsDisplay.setMap(btripMap.getMap());
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(displayOnMap);
  });

  function displayOnMap(position){
    var marker = btripMap.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    btripMap.map.centerOn(marker);
  };

  function calcRoute() {
    var origin      = new google.maps.LatLng(origin_geometry.location.H, origin_geometry.location.L);
    var destination = new google.maps.LatLng(destination_geometry.location.H, destination_geometry.location.L);

    btripMap.map.replaceMarkers('');

    var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      console.log(response);
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  // Completer Section
  $("#yolo_origin_address")
    .geocomplete()
    .bind("geocode:result", function(event, result) {
      origin_geometry = result.geometry;
      validateGeometries();
      // console.log(result);
    });
  $("#yolo_destination_address")
    .geocomplete()
    .bind("geocode:result", function(event, result) {
      destination_geometry = result.geometry;
      validateGeometries();
      // console.log(result);
    });

  function validateGeometries() {
    if ((origin_geometry !== undefined) && (destination_geometry !== undefined)) {
      calcRoute();
    }
  }
});
