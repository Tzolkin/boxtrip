var origin_geometry, destination_geometry;

// Calculate estimated
function calcEstimated() {
  var estimated;
  var distance = $('#yolo_distance').val();

  $.ajax({
    data: { 'distance': distance },
    type: 'GET',
    data_type: 'JSON',
    url: '/btrips/yolos/calc_estimated',
    success: function(response) {
      var estimated = parseFloat(response.estimated);
      $('#yolo_quotation').val(response.estimated);
      if ($('#price-quotation') !=  undefined)
        $('#price-quotation').text(estimated.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }));
    },
    error: function(response) {

    }
  });
}

$(function() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var btripMap = Gmaps.build('Google');

  btripMap.buildMap({
    internal: {
      id: 'map-canvas'
    },
    provider: {
      zoom:      10,
      center:    new google.maps.LatLng(19.3907336,-99.1436126)
    }
  },
  function() {
    directionsDisplay.setMap(btripMap.getMap());
  });

  function calcRoute() {
    var origin      = new google.maps.LatLng(origin_geometry.location.H, origin_geometry.location.L);
    var destination = new google.maps.LatLng(destination_geometry.location.H, destination_geometry.location.L);

    // TODO clear Markers
    btripMap.removeMarkers();

    var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      $('#yolo_distance').val(response.routes[0].legs[0].distance.value);
      calcEstimated();
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
      $('#yolo_origin_lat').val(origin_geometry.location.H);
      $('#yolo_origin_lng').val(origin_geometry.location.L);
      validateGeometries();
    });
  $("#yolo_destination_address")
    .geocomplete()
    .bind("geocode:result", function(event, result) {
      destination_geometry = result.geometry;
      $('#yolo_destination_lat').val(destination_geometry.location.H);
      $('#yolo_destination_lng').val(destination_geometry.location.L);
      validateGeometries();
    });

  function validateGeometries() {
    if ((origin_geometry !== undefined) && (destination_geometry !== undefined)) {
      calcRoute();
    }
  }
});
