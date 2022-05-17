// Made By Haraho:곽대호

// Define Functions
$(function () {
  copyHtmlByClass = (from, to) => {
    let copyFrom = document.querySelectorAll(from);
    let copyTo = document.querySelectorAll(to);
    from = from.replace(".", "");
    to = to.replace(".", "");
    const copyNum = document.getElementsByClassName(from).length;
    for (let i = 0; i < copyNum; i++) {
      let fromHtml = copyFrom[i].innerHTML;
      copyTo[i].innerHTML = fromHtml;
    }
  };

  addAloneClass = (target, className) => {
    $(target).click(function () {
      $(this).addClass(className);
      $(this).siblings().removeClass(className);
    });
  };

  toggleAloneClass = (target, className) => {
    $(target).click(function () {
      $(this).toggleClass(className);
      $(this).siblings().removeClass(className);
    });
  };

  toggleClass = (target, className) => {
    $(target).click(function () {
      $(this).toggleClass(className);
    });
  };
  const goToTop = (target) => {
    $(target).click(function (e) {
      e.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        700,
        "swing"
      );
    });
  };
  // Use Functions

  copyHtmlByClass(".tp_gnb_nav", ".tp_modal_gnb_nav");

  $(".btn_menu").click(function () {
    $(".tp_modal_gnb_nav").toggleClass("modal_on");
  });
  goToTop(".go_to_top");
  goToTop(".header_logo");
});
