$(".close").click(function(e) {
  e.preventDefault();
  console.log("hola");
  $(".popup, .contain-popup").css("display", "none");
  $("html").css("overflow", "inherit");
  $('#player').attr('src', $('iframe').attr('src'));
});
$(".historys > .info").click(function(e) {
  e.preventDefault();
  $(".popup, .one").css("display", "flex");
  $("html").css("overflow", "hidden");
  console.log("here");
});
$(".historys > .gallery").click(function(e) {
  e.preventDefault();
  $(".popup, .two").css("display", "flex");
  $("html").css("overflow", "hidden");
  console.log("here");
});
$(".historys > .interview").click(function(e) {
  e.preventDefault();
  $(".popup, .three").css("display", "flex");
  $("html").css("overflow", "hidden");
  console.log("here");
});
$(".buttons > .video").click(function(e) {
  e.preventDefault();
  $(".popup, .four").css("display", "block");
  $('#player').css("display", "block");
  $("html").css("overflow", "hidden");
  console.log("here");
});


