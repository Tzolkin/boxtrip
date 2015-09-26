$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});

$('.ui-widget.log').niceScroll({
  cursorwidth: "8px",
});

// Bind normal buttons
Ladda.bind('div:not(.progress-demo) .btn-tarifa', { timeout: 1500 });

// Bind progress buttons and simulate loading progress
Ladda.bind('.progress-demo .btn-tarifa', {
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
