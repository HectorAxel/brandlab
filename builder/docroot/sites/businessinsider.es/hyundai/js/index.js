$("#popup .icon-plus, #popup .capitulo").click(function(e) {
  e.preventDefault();
  console.log("click");

  $(".popup").css("display", "block");
  $("html").css("overflow", "hidden");
});
$("i.close").click(function() {
  $(".popup").css("display", "none");
  $("html").css("overflow", "inherit");
});
$(".article").hover(function (e) {
  e.preventDefault();
  $(this).toggleClass("hover")
})

window.onscroll = () => {
  if (window.pageYOffset > 200) {
    document.querySelector("header").classList.add("mini");
  } else {
    document.querySelector("header").classList.remove("mini");
  }
};