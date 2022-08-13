let videoMainSlider = new Swiper(".video-main__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  crossFade: true,
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
  crossFade: true,
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});
