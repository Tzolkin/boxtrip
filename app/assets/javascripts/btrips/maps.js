var origin_geometry, destination_geometry;

// Calculate estimated
function calcEstimated() {
  var estimated;
  var distance = $('#yolo_distance').val();
  var data = {
    'distance': distance,
    'items': $('#yolo_items_number').val(),
    'mins': $('#yolo_mins').val()
  };

  $.ajax({
    data: data,
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
    var origin      = new google.maps.LatLng(origin_geometry.location.lat(), origin_geometry.location.lng());
    var destination = new google.maps.LatLng(destination_geometry.location.lat(), destination_geometry.location.lng());

    // TODO clear Markers
    btripMap.removeMarkers();

    var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      $('#yolo_distance').val(response.routes[0].legs[0].distance.value);
      $('#yolo_mins').val(response.routes[0].legs[0].duration.value);
      calcEstimated();
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  // Completer Section
  $("#yolo_origin_address")
    .geocomplete({
      language: 'es-MX',
      address: 'Distrito Federal',
      componentRestrictions: {
        country: 'MX'
      }
    })
    .bind("geocode:result", function(event, result) {
      var reg_expresion = /D.F./;
      if (reg_expresion.test(result.formatted_address)) {
        origin_geometry = result.geometry;
        $('#yolo_origin_lat').val(origin_geometry.location.lat());
        $('#yolo_origin_lng').val(origin_geometry.location.lng());
        validateGeometries();
      }
      else {
        $(this).val('');
        $('#yolo_origin_lat').val('');
        $('#yolo_origin_lng').val('');
        window.alert('El servicio YOLO no se encuentra disponible en la dirección seleccionada.');
      }
    });
  $("#yolo_destination_address")
    .geocomplete({
      language: 'es-MX',
      address: 'Distrito Federal',
      componentRestrictions: {
        country: 'MX'
      }
    })
    .bind("geocode:result", function(event, result) {
      var reg_expresion = /D.F./;
      if (reg_expresion.test(result.formatted_address)) {
        destination_geometry = result.geometry;
        $('#yolo_destination_lat').val(destination_geometry.location.lat());
        $('#yolo_destination_lng').val(destination_geometry.location.lng());
        validateGeometries();
      }
      else {
        $(this).val('');
        $('#yolo_destination_lat').val('');
        $('#yolo_destination_lng').val('');
        window.alert('El servicio YOLO no se encuentra disponible en la dirección seleccionada.');
      }
    });

  function validateGeometries() {
    if ((origin_geometry !== undefined) && (destination_geometry !== undefined)) {
      calcRoute();
    }
  }
});
