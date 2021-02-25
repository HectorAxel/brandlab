jQuery(function () {

  var matu = jQuery('.container-matu');
  var init = matu.offset().top - jQuery(window).height() + matu.height();
  var end = matu.offset().top;
  var bottom = end - init;

  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > init && jQuery(window).scrollTop() < end) {
      var scrollTop = jQuery(window).scrollTop();
      var num = (scrollTop - init) * 7 / bottom;
      var numInt = parseInt(num);
      jQuery('.matu').removeClass('show');     
      jQuery('#m' + numInt).addClass('show');
    }
  });
});
