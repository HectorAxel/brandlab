$(document).ready(function () {
  console.log("ready!");
  document.querySelectorAll(".entry-parallax").forEach((el) => {
    if (document.documentElement.clientWidth > 768) {
      $(el).parallax({ imageSrc: el.dataset.bg });
    } else {
      el.querySelector(
        ".entry__img"
      ).innerHTML = `<img src="${el.dataset.bg}" alt="Huawei" />`;
    }
  });
});

window.onscroll = () => {
  if (window.pageYOffset > 200) {
    document.querySelector("header").classList.add("mini");
  } else {
    document.querySelector("header").classList.remove("mini");
  }
};

document.querySelector(".to_top").addEventListener("click", (e) => {
  e.preventDefault;
  scrollTo(0, 0);
});
