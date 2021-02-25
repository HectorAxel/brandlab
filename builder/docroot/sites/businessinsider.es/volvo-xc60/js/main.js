Number.prototype.integer = function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
}

window.addEventListener(
  "load",
  () => {
    document.querySelector(".loader").classList.add("invisible");

    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 1200);
  },
  false
);
window.addEventListener(
  "scroll",
  () => {
    calc = window.scrollY / 800;
    opacity = 1 - calc;
    scale = 1 + calc;
    if (opacity >= 0.2){
      document.querySelector(".characters-bg").style.webkitFilter = "opacity(" + opacity + ")";
      document.querySelector(".characters2-bg").style.webkitFilter = "opacity(" + opacity + ")";
    } else {
      document.querySelector(".characters-bg").style.webkitFilter = "opacity(0.1)";
      document.querySelector(".characters2-bg").style.webkitFilter = "opacity(0.1)";
    }
    document.querySelector(".characters2-bg").style.transform = "translateY(" + window.scrollY + "px)";
    document.querySelector(".characters2-bg").style.transform = "scale(" + scale + ")";
    if (window.pageYOffset > 200) {
      document.querySelector("header").classList.add("mini");
    } else {
      document.querySelector("header").classList.remove("mini");
    }

    translateSummary = $('.summary').offset().top - 500;
    if (window.scrollY > translateSummary ){
      $('.summary').addClass('animate');
    }
  },
  false
);
$( ".video-button" ).click(function(e) {
  e.preventDefault();
  var ref = $(this).attr('src');
  var h2 = $(this).siblings('h2');
  var lead = $(this).siblings('.lead');
  var body = $(this).siblings('.body');
  $( ".video-modal iframe" ).attr('src',ref);
  $("body").addClass('modal');
  h2.clone().appendTo(".video-modal .modal-title");
  lead.clone().appendTo(".video-modal .modal-text");
  body.clone().appendTo(".video-modal .modal-text");
});
$( ".button-close" ).click(function(e) {
  e.preventDefault();
  $("body").removeClass('modal');
  $( ".video-modal iframe" ).attr('src','');
  $(".video-modal .modal-title").empty();
  $(".video-modal .modal-text").empty();
});
