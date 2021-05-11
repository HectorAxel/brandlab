var heroBg = {
  animateRain: function() {
    let rainLines = Math.ceil(document.body.clientWidth / 16);
    let innerLines = "";
    for (i = 0; i < rainLines; i++) {
      let positionY = Math.floor(Math.random() * 300 + 1);
      let animationDuration = Math.random() * 3000 + 2400;
      innerLines += `<div 
        class="rain-line rain-line-${i}"
        style="
          background-position-y: ${positionY}px;
          animation-duration: ${animationDuration}ms; 
        "
    
      ></div>`;
    }
    document.querySelector(".hero-bg").innerHTML = innerLines;
  },

  redrawRain: function() {
    let rainLines = Math.ceil(document.body.clientWidth / 16);
    let innerLines = "";
    for (i = 0; i < rainLines; i++) {
      let positionY = Math.floor(Math.random() * 300 + 1);
      let animationDuration = Math.random() * 3000 + 2400;
      innerLines += `<div 
        class="rain-line rain-line-no-animate"
        style="
          background-position-y: ${positionY}px;
          animation-duration: 0ms; 
        "
    
      ></div>`;
    }
    document.querySelector(".hero-bg").innerHTML = innerLines;
  }
};

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

setTimeout(() => {
  if (document.documentElement.clientWidth > 768) {
    heroBg.animateRain();
  } else {
    heroBg.redrawRain();
  }
}, 2000);

window.addEventListener("resize", () => {
  heroBg.redrawRain();
});
