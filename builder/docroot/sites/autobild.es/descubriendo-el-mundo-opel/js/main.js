document.querySelectorAll(".entry-parallax").forEach(el => {
  if (document.documentElement.clientWidth > 768) {
    $(el).parallax({ imageSrc: el.dataset.bg });
  } else {
    el.querySelector(".entry__img").innerHTML = `<img src="${
      el.dataset.bg
    }" alt="El futuro es de todos" />`;
  }
});

document.querySelector('.main-close').addEventListener("click", () => {
  document.body.classList = "";
  document.querySelector('.main-video').innerHTML = "";
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27 && document.body.classList == "player") {
    document.body.classList = "";
    document.querySelector('.main-video').innerHTML = "";
  }
};

let addButtonListener = function () {
  document.getElementById('button-player').addEventListener("click", () => {
    document.body.classList.add('player');
    setTimeout(function () {
      addVideoToContainer()
    }, 600);
  })
}

let addVideoToContainer = function () {
  var video =
    ' <div class="container-video"><div class="container-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/yTf40ayWAPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
  document.querySelector('.main-video').innerHTML = video;
}

addButtonListener();