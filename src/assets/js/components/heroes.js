const heroesSlider = document.querySelector(".heroes-slider");
const hsItems = document.querySelectorAll(".heroes-item");
scrollLock.disablePageScroll();
document.documentElement.style.overflow = "hidden";

function initHeroesSlider() {
  let hsWidth = $(heroesSlider).width();
  const hsItemsCount = hsItems.length;

  //   let currentSlide = hsItemsCount >= 3 ? Math.round(hsItemsCount / 2) : 1;
  let currentSlide = 4;
  let sliderPos = currentSlide > 1 ? (currentSlide * 20 - 20) * -1 : 0;

  heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;

  setSerialNum();

  setActiveSlides(currentSlide);

  let enableScroll = true;

  window.addEventListener("wheel", (e) => {
    if (!enableScroll) return;

    const delta = Math.sign(e.deltaY);

    if (delta < 0) {
      if (currentSlide > 1) {
        sliderPos += 20;
        currentSlide -= 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    }
    if (delta > 0) {
      if (currentSlide < hsItemsCount) {
        sliderPos -= 20;
        currentSlide += 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    }

    enableScroll = false;

    setTimeout(function () {
      enableScroll = true;
    }, 500);
  });
}

function setSerialNum() {
  hsItems.forEach((el, i) => {
    el.dataset.number = i + 1;
  });
}

function setActiveSlides(num) {
  hsItems.forEach((el) => {
    el.classList.remove("slide-early-before-prev");
    el.classList.remove("slide-before-prev");
    el.classList.remove("slide-prev");
    el.classList.remove("slide-active");
    el.classList.remove("slide-next");
    el.classList.remove("slide-after-next");
  });

  let earlyBeforePrevSlide = hsItems[num - 5];
  let beforePrevSlide = hsItems[num - 3];
  let prevSlide = hsItems[num - 2];

  let activeSlide = hsItems[num - 1];

  let nextSlide = activeSlide.nextElementSibling;
  let afterNextSlide =
    hsItems.length != num ? nextSlide.nextElementSibling : null;

  if (earlyBeforePrevSlide) {
    earlyBeforePrevSlide.classList.add("slide-early-before-prev");
  }
  if (beforePrevSlide) {
    beforePrevSlide.classList.add("slide-before-prev");
  }
  if (prevSlide) {
    prevSlide.classList.add("slide-prev");
  }

  activeSlide.classList.add("slide-active");

  if (nextSlide) {
    nextSlide.classList.add("slide-next");
  }
  if (afterNextSlide) {
    afterNextSlide.classList.add("slide-after-next");
  }
}

initHeroesSlider();
