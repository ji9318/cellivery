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
  $(this).find(".rnd-text-wrap > div").toggleClass("fade-in");
});
