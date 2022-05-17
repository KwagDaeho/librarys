$(document).ready(function () {
  $(".tp_gnb a").on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    console.log("asd");
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      700,
      "swing"
    );
  });

  if (matchMedia("screen and (max-width: 1023px)").matches) {
    $(".btn_menu").click(function () {
      $(".gnb_media_company").stop().toggle(400);
    });
    $(".gnb_media_company").click(function () {
      $(this).stop().toggle(400);
    });
  }
  // 섹션 숫자 맞춰서 각 섹션 id 입력.
  let heightSec01 = $("#Sec01").height();
  let heightSec02 = heightSec01 + $("#Sec02").height();
  let heightSec03 = heightSec02 + $("#Sec03").height();
  let heightSec04 = heightSec03 + $("#Sec04").height();
  let heightSec05 = heightSec04 + $("#Sec05").height();
  let heightSec06 = heightSec05 + $("#Sec06").height();

  // [ 400px ] 아래로 스크롤시 클래스 주입
  // $(document).on("scroll", function () {
  //   var scrollValue = $(document).scrollTop();
  //   if (scrollValue > 400) {
  //     $("header").addClass("header_inverse");
  //   } else {
  //     $("header").removeClass("header_inverse");
  //   }
  // });
});
