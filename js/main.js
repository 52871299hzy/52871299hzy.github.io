$(document).ready(function () {
  $(window).scroll(function () {
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if (scrollt > 200) {
      $("#gotop").fadeIn(0);
      if ($(window).width() >= 1200) {
        //$(".navbar").stop().fadeTo(400, 0.2);
      }
    } else {
      $("#gotop").fadeOut(0);
      if ($(window).width() >= 1200) {
        //$(".navbar").stop().fadeTo(400, 1);
      }
    }
  });
  $("#gotop").click(function () {
    $("html,body").animate({ scrollTop: "0px" }, 200);
  });
  $(".navbar").mouseenter(function () {
    //$(".navbar").fadeTo(100, 1);
  });
  $(".navbar").mouseleave(function () {
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if (scrollt > 200) {
      //$(".navbar").fadeTo(100, 0.2);
    }
  });
  replaceMeta();
  $(window).resize(function () {
    replaceMeta();
  });
});
replaceMeta = function () {
  if ($(window).width() < 980) {
    if ($("#side_meta #post_meta").length > 0) {
      $("#post_meta").appendTo("#top_meta");
    }
    if ($("#sidebar #site_search").length > 0) {
      $("#site_search").appendTo("#top_search");
      $("#site_search #st-search-input").css("width", "95%");
    }
  } else {
    if ($("#top_meta #post_meta").length > 0) {
      $("#post_meta").appendTo("#side_meta");
    }
    if ($("#top_search #site_search").length > 0) {
      $("#site_search").prependTo("#sidebar");
      $("#site_search #st-search-input").css("width", "85%");
    }
  }
};
