/// <reference path="jquery-1.11.1.min.js" />
/// <reference path="bootstrap.min.js" />
$(document).ready(function () {
  'use strict';
  if ($(window).width() <= 600) {
    $('.bg-img').html('<img src="img/mudanza.jpg" alt="Background Image" />')
  }
});


$(function () {
  $('.btn-rapida').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'price.html'
    }, 1000);
  });

  $('.btn-amplia').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'price_wide.html'
    }, 1000);
  });

  $('.btn-stands').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'partner/sign_up'
    }, 1000);
  });

  $('.btn-reservar').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'reservation.html'
    }, 1000);
  });

  $('.btn-reservar2').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'reservation.html'
    }, 1000);
  });

  $('.menu-right.two').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'partner/sign_up'
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
      window.top.location.href = 'partner/sign_in'
    }, 1000);
  });
  $('.btn-login-user').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'customer/sign_in'
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
      window.top.location.href = 'aviso_privacidad.html'
    }, 1000);
  });
  $('.btn-terminos').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'terminos_condiciones.html'
    }, 1000);
  });
  $('.btn-preguntas').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'preguntas.html'
    }, 1000);
  });
  $('.btn-admin').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'admin.html'
    }, 1000);
  });
  $('.btn-proveedor').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'reservation.html'
    }, 1000);
  });

  $('.btn-finish').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'thanks.html'
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
      window.top.location.href = 'confirm_reservation.html'
    }, 1000);
  });

  $('.btn-enterado').click(function () {
    $('body').fadeOut('slow');
    setTimeout(function () {
      window.top.location.href = 'index.html'
    }, 1000);
  });
});
