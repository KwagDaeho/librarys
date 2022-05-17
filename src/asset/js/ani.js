$(function () {
  // Scroll Animation (sa, 스크롤 애니메이션)
  const saTriggerMargin = 150;
  const saElementList = document.querySelectorAll(".sa");
  const saFunc = function () {
    for (const element of saElementList) {
      if (!element.classList.contains("show")) {
        if (
          window.innerHeight >
          element.getBoundingClientRect().top + saTriggerMargin
        ) {
          element.classList.add("show");
        }
      }
      if (window.innerHeight < element.getBoundingClientRect().top) {
        element.classList.remove("show");
      }
    }
  };
  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);

  hoverCssChanger = (target, css, from, to) => {
    $(target).mouseenter(function () {
      $(this).children("*").css(css, to);
    });
    $(target).mouseleave(function () {
      $(this).children("*").css(css, from);
    });
  };
  hoverCssChanger(".hover_scale_up", "transform", "scale(1.0)", "scale(1.15)");

  clickCssChanger = function (target, css, to) {
    $(target).click(() => {
      $(this).css(css, to);
    });
  };

  // modal_btn
  function updateMenuButton() {
    $(".menu-icon").toggleClass("is-active");
    console.log("asd");
  }
  $(".menu-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
  });

  // modal_btn list
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});
