$("#popup .icon-gallery, #popup .capitulo").click(function (e) {
  e.preventDefault();
  $(".popup").addClass("open");
  $("html").css("overflow", "hidden");
});
$("i.close").click(function () {
  $(".popup").removeClass("open");
  $("html").css("overflow", "inherit");
});
