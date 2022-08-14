document.addEventListener("DOMContentLoaded", () => {
  //= ../../../node_modules/swiper/swiper-bundle.js
  //= ../../../node_modules/threesixty-slider/dist/threesixty.min.js
  //= components/

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  window.addEventListener("scroll", () => {
    let scrolled = document.documentElement.scrollTop;

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    }

    if (scrolled <= 20) {
      header.classList.add("top");
    } else {
      header.classList.remove("top");
    }

    scrollPrev = scrolled;
  });

  // progress bars

  const chooseItems = document.querySelectorAll(".choose-item");

  function animateBars(bar) {
    const progressValue = bar.getAttribute("data-progress-value");

    bar.querySelector(".filled_bar").style.width = `${progressValue}%`;
  }

  if (chooseItems.length > 0) {
    let firstItemBars = chooseItems[0].querySelectorAll(".ci-data__item-progress");
    firstItemBars.forEach((bar) => {
      animateBars(bar);
    });
  }
});
