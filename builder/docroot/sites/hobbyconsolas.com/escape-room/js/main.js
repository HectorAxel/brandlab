document.querySelectorAll(".entry-parallax").forEach(el => {
  if (document.documentElement.clientWidth > 768) {
    $(el).parallax({ imageSrc: el.dataset.bg });
  } else {
    el.querySelector(".entry__img").innerHTML = `<img src="${
      el.dataset.bg
    }" alt="Escape Room" />`;
  }
});


$(function () {

  // Creamos un array con las ids de videos

  var videoId = ["x72uu8c", "x7406t2", "x7406ng"];
  
  // Insertamos el primer video del array (index 0) en el div del player

  $(".video-player").html(
    '<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/' +
      videoId[0] +
      '" allowfullscreen allow="autoplay"></iframe>'
  );

  // Recorremos el array para crear el listado de miniaturas

  for (i = 0; i < videoId.length; i++){
    $(".video-list").append(
      '<li class="video-thumb"><img src = "https://www.dailymotion.com/thumbnail/video/' +
        videoId[i] +
        '" id = "' +
        videoId[i] +
        '" ></li >'
    );
  }

  // Añadimos los eventos

  $(".video-thumb").children().click(function() {
    var video =
      '<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/' +
      $(this).attr("id") +
      '" allowfullscreen allow="autoplay"></iframe>';
    $('.video-player').html(video);
  });

});