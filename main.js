const businessItem = document.querySelectorAll(".business-item");

businessItem.forEach(function (item) {
  item.addEventListener("mousemove", function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    let element = e.target;

    while (element !== item) {
      mouseX += element.offsetLeft;
      mouseY += element.offsetTop;
      element = element.parentNode;
    }

    this.querySelector(".cursor").style.left = mouseX + "px";
    this.querySelector(".cursor").style.top = mouseY + "px";
  });
});

$(".rnd-box").hover(function () {
  $(this).toggleClass("transform-width");
  $(this).find(".rnd-text-wrap > div").toggleClass("rnd-fade-in");
});

// menu open
$(".sitemap-button").click(function () {
  $(".menu").toggleClass("active");
  $(".white").toggleClass("logo-white");
  $(".color").toggleClass("logo-white");
  $(".gnb").toggleClass("hidden");
  $(".bar-top,.bar-bottom").toggleClass("active");
});

// accordion menu
$(window)
  .resize(function () {
    if (window.innerWidth < 768) {
      $(".drawer-menu-button").click(function () {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find(".drawer-menu-list").slideUp();
      });
    }
  })
  .resize();

// header color
var $header = $("header");
var $page = $(".about");
var $window = $(window);
var pageOffsetTop = $page.offset().top;

$window
  .resize(function () {
    pageOffsetTop = $page.offset().top;
    if (window.innerWidth < 1200) {
      $window.on("scroll", function () {
        var scrolled = $window.scrollTop() >= pageOffsetTop;
        $header.toggleClass("scroll", scrolled);
      });
    }
  })
  .resize();
