$("#fullpage").fullpage({
  autoScrolling: true,
  scrollHorizontally: true,
  sectionSelector: ".section",
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  responsiveWidth: 1199,
  menu: ".sidebar-button-list",
  afterLoad: function (origin, destination, direction) {
    var origin = this;

    if (origin) {
      $(this).find(".fade-in").addClass("animate");
      $(this).find(".fade-in").eq(1).css("animation-delay", ".1s");
      $(this).find(".fade-in").eq(2).css("animation-delay", ".2s");
      $(this).find(".fade-in").eq(3).css("animation-delay", ".3s");
      $(this).find(".fade-in").eq(4).css("animation-delay", ".4s");
      $(this).siblings().find(".fade-in").removeClass("animate");
    }

    if (destination == 4) {
      $(".sidebar, .sidebar-button-item").addClass("scrolled-rnd");
      $(".sitemap-button div").addClass("scrolled-rnd");
    } else {
      $(".sidebar, .sidebar-button-item").removeClass("scrolled-rnd");
      $(".sitemap-button div").removeClass("scrolled-rnd");
    }
  },
});
