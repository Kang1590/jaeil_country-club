$(document).ready(function () {
  /* 1) 메인 메뉴에 마우스를 대면 모든 하위메뉴가 서서히 아래로 슬라이드 되면서 나타나고,
	      메뉴영역에서 마우스를 떼면 모든 하위메뉴는 서서히 위로 슬라이드 되면서 사라진다. (30점) */
  $(".mainMenu").mouseenter(function () {
    $("header>div").stop().animate({ height: "350px" });
    $(".mainMenu+nav").stop().slideDown();
  });
  $("header>div>nav").mouseleave(function () {
    $("header>div").stop().animate({ height: "100px" });
    $(".mainMenu+nav").stop().slideUp();
    $(".mainMenu").removeClass("act");
  });

  // 2)하위메뉴에 마우스 오버시 해당 메인 메뉴의 활성화는 유지되며, 메뉴영역을 벗어나면 활성화는 해제된다. (20점)

  $(".submenu a").mouseenter(function () {
    $(".mainMenu").removeClass("act");
    $(this).parent().prev().addClass("act");
  });

  /* 3) 큰 배너형 이미지 3장은 자동으로 오른쪽 방향을 향해 한 장씩 슬라이드된다. (30점) 
     (페이지를 빠져나오기 전까지 반복 루프)  */
  const slide = setInterval(Right, 2500);
  function Right() {
    $("#sliding div")
      .stop()
      .animate({ left: 0 }, 1000, function () {
        $(this).prepend($(this).children().last());
        $(this).css("left", "-1280px");
      });
  }

  /* 4) 공지사항 목록에서 텍스트 항목을 클릭하면 팝업모달이 서서히 나타나고,
	   [닫기]버튼을 클릭하면 팝업모달은 서서히 사라진다. (20점) */
  $("#notice a").click(function () {
    $("#popup").stop().fadeIn();
  });
  $("#popup>button").click(function () {
    $("#popup").stop().fadeOut();
  });
}); /////////////////////////////////all end
