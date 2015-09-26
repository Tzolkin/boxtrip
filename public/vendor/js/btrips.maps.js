$(function() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var handler = Gmaps.build('Google');

  handler.buildMap({
    internal: {
      id: 'map-canvas'
    }
  },
  function() {
    //directionsDisplay.setMap(handler.getMap());
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(displayOnMap);
  });

  function displayOnMap(position){
    var marker = handler.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    handler.map.centerOn(marker);
  };

  function calcRoute(origin, destination) {
    var origin      = new google.maps.LatLng(19.3894289, -99.1956463);
    var destination = new google.maps.LatLng(19.3719848, -99.1578443);

    // if(navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //   });
    // }

    var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  // calcRoute();

  // Completer Section
  $("#origin").geocomplete();
  $("#destination").geocomplete();
});
