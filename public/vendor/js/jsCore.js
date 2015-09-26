/// <reference path="jquery-1.11.1.min.js" />
/// <reference path="jquery.nicescroll.js" />
/// <reference path="bootstrap.min.js" />

$(document).ready(function () {
  'use strict';

  if ($(window).width() <= 600) {
    $('.bg-img').html('<img src="/vendor/img/mudanza.jpg" alt="Background Image" />')

    $('#collapseTwo').addClass('in');
    $('#collapseThree').addClass('in');
  }

  $('body').niceScroll();
});
//Loadlogo
$(function () {
  // We create an interval which will be removed when progress completes
  $('#excelsior').click(function () {
    $('#excelsior').loadgo();
    mainDemo();
    setTimeout(function () {
      window.open('https://www.youtube.com/watch?v=28LUVpbhJCo', '_blank')
    }, 3000);
  });

  var logoInterval;
  function mainDemo() {
    var p = 0;
    $('#excelsior').loadgo('resetprogress');   // reset progress to start again
    logoInterval = window.setInterval(function () {
      if ($('#excelsior').loadgo('getprogress') == 100) {
        // When progress completes, we have to clear the interval
        window.clearInterval(logoInterval);
      }
      else {
        var prog = p * 10;
        $('#excelsior').loadgo('setprogress', prog);
        p++;
      }
    }, 150);
  };
});

$(function () {
  // We create an interval which will be removed when progress completes
  $('#financiero').click(function () {
    $(this).loadgo();
    mainDemo();
    setTimeout(function () {
      window.open('http://www.elfinanciero.com.mx/universidades/app-para-contratar-mudanzas-lleva-mexicanos-a-silicon-valley.html', '_blank')
    }, 3000);
  });

  var logoInterval;
  function mainDemo() {
    var p = 0;
    $('#financiero').loadgo('resetprogress');   // reset progress to start again
    logoInterval = window.setInterval(function () {
      if ($('#financiero').loadgo('getprogress') == 100) {
        // When progress completes, we have to clear the interval
        window.clearInterval(logoInterval);
      }
      else {
        var prog = p * 10;
        $('#financiero').loadgo('setprogress', prog);
        p++;
      }
    }, 150);
  };
});

$(function () {
  // We create an interval which will be removed when progress completes
  $('#angelhack').click(function () {
    $(this).loadgo();
    mainDemo();
    setTimeout(function () {
      window.open('http://angelhack.com/ah8-meets-mexico-city/', '_blank')
    }, 3000);
  });

  var logoInterval;
  function mainDemo() {
    var p = 0;
    $('#angelhack').loadgo('resetprogress');   // reset progress to start again
    logoInterval = window.setInterval(function () {
      if ($('#angelhack').loadgo('getprogress') == 100) {
        // When progress completes, we have to clear the interval
        window.clearInterval(logoInterval);
      }
      else {
        var prog = p * 10;
        $('#angelhack').loadgo('setprogress', prog);
        p++;
      }
    }, 150);
  };
});

$(function () {
  // We create an interval which will be removed when progress completes
  $('#mastercard').click(function () {
    $(this).loadgo();
    mainDemo();
    setTimeout(function () {
      window.open('https://developer.mastercard.com/portal/display/blogs/2015/08/02/Meet+the+Developers+-+Mexico+City', '_blank')
    }, 3000);
  });

  var logoInterval;
  function mainDemo() {
    var p = 0;
    $('#mastercard').loadgo('resetprogress');   // reset progress to start again
    logoInterval = window.setInterval(function () {
      if ($('#mastercard').loadgo('getprogress') == 100) {
        // When progress completes, we have to clear the interval
        window.clearInterval(logoInterval);
      }
      else {
        var prog = p * 10;
        $('#mastercard').loadgo('setprogress', prog);
        p++;
      }
    }, 150);
  };
});

//Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

//Animates scroll
$(function () {
  $('#conocenos').click(function () {
    $('.container.content').animatescroll();
  });

  $('#pasos').click(function () {
    $('#cd-main-content').animatescroll();
  });
});

$(function () {
  $('.btn-cotizar').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/btrips'
    }, 1000);
  });

  $('#yolo').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/btrips/yolos/new'
    }, 1000);
  });
  $('#tailored').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/btrips/tailoreds/new'
    }, 1000);
  });

  $('.btn-registrar').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });
  $('.user-log').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-rapida').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-amplia').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-stands').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-reservar').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-reservar2').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.menu-right.two').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('#back').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-login-partner').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });
  $('.btn-login-user').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-add').click(function () {
    $('.row.enable').fadeOut('slow');
    setTimeout(function () {
      $('.row.disable').fadeIn('slow');
    }, 1000);
  });

  $('.btn-privacidad').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/privacy'
    }, 1000);
  });
  $('.btn-terminos').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/privacy'
    }, 1000);
  });
  $('.btn-preguntas').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/privacy'
    }, 1000);
  });
  $('.btn-admin').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });
  $('.btn-proveedor').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

  $('.btn-finish').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/btrips/thanks'
    }, 1000);
  });

  $('.btn-add-services').click(function () {
    setTimeout(function () {
      $('.services').fadeIn('slow');
    }, 800);
  });

  $('.btn-tarifa').click(function () {
    setTimeout(function () {
      $('.tarifa-hidden').fadeIn('slow');
    }, 1500);
  });

  $('.btn-table').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'user_data_yolo.html'
    }, 1000);
  });

  $('.btn-enterado').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = '/'
    }, 1000);
  });

});
