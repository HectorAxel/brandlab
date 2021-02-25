$("#popup .icon-plus, #popup .capitulo").click(function(e) {
  e.preventDefault();

  $(".popup").css("display", "block");
  $("html").css("overflow", "hidden");
});

$(".popup-video-link").click(function(e) {
  e.preventDefault();
  $(".popup-video").css("display", "flex");
  $(".popup-video iframe").attr("src",$(this).attr("data-src"));
  $("html").css("overflow", "hidden");
});
$("i.close-video").click(function() {
  $(".popup-video iframe").attr("src","");
  $(".popup-video").css("display", "none");
  $("html").css("overflow", "inherit");
});
$("i.close").click(function() {
  $(".popup").css("display", "none");
  $("html").css("overflow", "inherit");
});

$(".article").hover(function (e) {
  e.preventDefault();
  $(this).toggleClass("hover")
})
