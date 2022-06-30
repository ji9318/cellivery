$(".main-slider").slick({
  autoplay: true,
  autoplaySpeed: 6500,
  fade: true,
  prevArrow: $(".prev-button"),
  nextArrow: $(".next-button"),
  dots: true,
  pauseOnHover: false,
});

$("#slick-slide-control00").html(
  '<span class="dots-content">Bio-Based Premium Living & Health</span>'
);
$("#slick-slide-control01").html(
  '<span class="dots-content">Make Your Life Better</span>'
);
$("#slick-slide-control02").html(
  '<span class="dots-content">Think Differently, Make a Trend</span>'
);

$(".slick-dots li button").prepend('<div class="dots-bar"></div>');
