document.querySelectorAll(".entry-parallax").forEach(el => {
  // if (document.documentElement.clientWidth > 768) {
    $(el).parallax({ imageSrc: el.dataset.bg });
  // } else {
  //   el.querySelector(".entry__img").innerHTML = `<img src="${
  //     el.dataset.bg
  //   }" alt="Huawei" />`;
  // }
});

window.onscroll = () => {
  if (window.pageYOffset > 56) {
    document.querySelector("header").classList.add("mini");
  } else {
    document.querySelector("header").classList.remove("mini");
  }
};

var height= $(".collapsible").height();
$(".collapsible").css('max-height', '300px' );

$( ".collapsible-button" ).click(function() {
  if (  $(".collapsible").attr("show") == "off" ) {
      $(".collapsible").attr("show", "on");
      $(".collapsible").css('max-height', height );
      $( ".collapsible-button" ).addClass("hide");
    } else {
      $(".collapsible").attr("show", "off");
      $(".collapsible").css('max-height', "300px" );
      $( ".collapsible-button" ).removeClass("hide");
  }
});


$( ".video-button" ).click(function(e) {
  e.preventDefault();
  var ref = $(this).attr('src');
  $( ".video-modal iframe" ).attr('src',ref);
  $("body").addClass('modal');
});
$( ".button-close" ).click(function(e) {
  e.preventDefault();
  $("body").removeClass('modal');
  $( ".video-modal iframe" ).attr('src','');
});


// document.querySelector(".to_top").addEventListener("click", e => {
//   e.preventDefault;
//   scrollTo(0, 0);
// });
