$(document).ready(function () {
    $(".countdownt-timer").countdowntimer({
      startDate: "2023/12/31 00:00:00", //set server date and time as "<?php echo date('Y/m/d H:i:s'); ?>".
      dateAndTime: "2024/01/10 00:00:00", //end date
      size: "xs",
    });

  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  $(".owl-carousel-product").owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

});

$(window).scroll(function () { 
 if($(this).scrollTop() >= 500){
  $('#scroll-to-top').fadeIn();
 }
 else{
  $('#scroll-to-top').fadeOut(); 
 }
});

$("#scroll-to-top").click(function(e){
  e.preventDefault();
  $('body,html').animate({
    scrollTop:0
  },80)
});