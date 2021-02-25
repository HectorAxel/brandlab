//el.dataset.bg
document.querySelectorAll(".articles article").forEach((el, k) => {
  el.style.background = `url(${el.dataset.bg}) no-repeat center ${
    el.dataset.bgal || "center"
  } / cover`;
});
