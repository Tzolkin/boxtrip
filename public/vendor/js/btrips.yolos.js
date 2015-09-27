$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('.btn-estimated').click(function () {
    if ($('#yolo_distance').val() == '') {
      alert("Ingresa las direcciones");
    }
    else {
      calcEstimated();
      setTimeout(function () {
        $('#estimado').fadeIn('slow');
      }, 1500);
    }
  });

  $('#strep1continue').click(function () {
    if (validateStep1()) {
      $('#yolo_estimated_date').val($('#datetimepicker4').val());
      $('#yolo_estimated_time').val($('#datetimepicker5').val());

      $('#step1').fadeOut();
      setTimeout(function () {
        $('#step2').fadeIn('slow');
        $('#progress-step-2').addClass('active');
      }, 1000);
    }
    else {
      alert('Complete la informacion solicitada.');
    }
  });

  function validateStep1() {
    if (
      ($('#yolo_origin_address').val() != "") &&
      ($('#yolo_destination_address').val() != "") &&
      ($('#yolo_items_number').val() != "") &&
      ($('#datetimepicker4').val() != "") &&
      ($('#datetimepicker5').val() != "")
    ) {
      return true;
    }
    return false;
  }
});

$('.ui-widget.log').niceScroll({
  cursorwidth: "8px",
});

// Bind normal buttons
Ladda.bind('div:not(.progress-demo) .btn-estimated', { timeout: 1500 });

// Bind progress buttons and simulate loading progress
Ladda.bind('.progress-demo .btn-estimated', {
  callback: function (instance) {
    var progress = 0;
    var interval = setInterval(function () {
      progress = Math.min(progress + Math.random() * 0.1, 1);
      instance.setProgress(progress);

      if (progress === 1) {
        instance.stop();
        clearInterval(interval);
      }
    }, 200);
  }
});

function showContent() {
  check = document.getElementById("checkbox12");
  if (check.checked) {
    $('#myModal3').modal('show');
  }
  else {
    $('#myModal3').modal('hidden');;
  }
}
