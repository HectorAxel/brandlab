$("#popup-one .icon-gallery, #popup-one .capitulo").click(function (e) {
  e.preventDefault();
  console.log("click");

  $(".popup-one").css("display", "block");
  $("html").css("overflow", "hidden");
});
$("i.close").click(function () {
  $(".popup-one").css("display", "none");
  $("html").css("overflow", "inherit");
});

$("#popup-two .icon-gallery, #popup-two .capitulo").click(function (e) {
  e.preventDefault();
  console.log("click");

  $(".popup-two").css("display", "block");
  $("html").css("overflow", "hidden");
});
$("i.close").click(function () {
  $(".popup-two").css("display", "none");
  $("html").css("overflow", "inherit");
});
