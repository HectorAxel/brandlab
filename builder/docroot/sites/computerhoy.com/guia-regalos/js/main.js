jQuery(function () {
  var top = jQuery('#totop');

  if (top.length > 0) {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() >= 1000) {
        top.fadeIn();
      } else {
        top.fadeOut();
      }
    });

    top.click(function () {
      jQuery("body,html").scrollTop(0);
    });

  };
});
