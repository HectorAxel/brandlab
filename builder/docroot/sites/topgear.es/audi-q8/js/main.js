//el.dataset.bg
document.querySelectorAll(".articles article").forEach((el, k) => {
  el.style.background = `url(${el.dataset.bg}) no-repeat center ${el.dataset
    .bgal || "center"} / cover`;
});
window.onscroll = () => {
  if (window.pageYOffset > 400) {
    document.querySelector("header").classList.add("mini");
  } else {
    document.querySelector("header").classList.remove("mini");
  }
};

