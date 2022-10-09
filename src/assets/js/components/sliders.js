let videoMainSlider = new Swiper(".video-main__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
  //   breakpoints: {
  //     320: {
  //       spaceBetween: 15,
  //     },
  //     801: {
  //       spaceBetween: 10,
  //     },
  //     1301: {
  //       spaceBetween: 20,
  //     },
  //   },
});

let avatarSlider = new Swiper(".avatar-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});

let chooseSlider = new Swiper(".choose-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});

chooseSlider.on("slideChange", function (e) {
  let currentProgressBars = e.slides[e.activeIndex].querySelectorAll(
    ".ci-data__item-progress"
  );

  currentProgressBars.forEach((el) => {
    animateBars(el);
  });
});

let teamSlider = new Swiper(".team-slider", {
  slidesPerView: "auto",
  spaceBetween: 100,

  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },

  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    921: {
      spaceBetween: 50,
    },
    1111: {
      spaceBetween: 70,
    },
    1581: {
      spaceBetween: 100,
    },
  },
});

let roadmapSlider = new Swiper(".roadmap-slider", {
  slidesPerView: "auto",
  spaceBetween: 80,

  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    921: {
      spaceBetween: 50,
    },
    1111: {
      spaceBetween: 70,
    },
    1581: {
      spaceBetween: 80,
    },
  },
});
