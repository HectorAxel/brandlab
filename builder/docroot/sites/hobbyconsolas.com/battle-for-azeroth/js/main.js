const options = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'image',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: '../img/battle-for-azeroth/particle.png',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'right',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble'
      },
      onclick: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 0,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

if (window.innerWidth > 780) {
  particlesJS("particles", options);
}


// Cerrar 

document.querySelector('.main-close').addEventListener("click", () => {
  document.body.classList = "";
  document.querySelector('.main-video').innerHTML = "";
});

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27 && (document.body.classList == "horde" || document.body.classList == "alliance") ) {
    document.body.classList = "";
    document.querySelector('.main-video').innerHTML = "";
  }
};

let addButtonListener = function(el, bodyClass, videoID = "k6VCrARqtQK4kQrJrun") {
  document.getElementById(el).addEventListener("click", () => {
    document.body.classList.add(bodyClass);
    setTimeout(function() {
      addVideoToContainer(videoID)
    }, 600);
  })  
}

let addVideoToContainer = function(videoID) {
  const videoString = 
    `<iframe frameborder="0" src="//www.dailymotion.com/embed/video/${videoID}?autoPlay=1&queue-autoplay-next=0&queue-enable=0&ui-logo=0" allowfullscreen="" allow="autoplay"></iframe>`
  document.querySelector('.main-video').innerHTML = videoString; 
}

addButtonListener('button-horde', 'horde', 'k6VCrARqtQK4kQrJrun');
addButtonListener('button-alliance', 'alliance', 'k2bT16fTJrRpodrJruo');