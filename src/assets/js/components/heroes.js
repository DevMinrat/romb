const heroesSlider = document.querySelector(".heroes-slider");
const hsItems = document.querySelectorAll(".heroes-item");

function initHeroesSlider() {
  let hsItemWidth;

  function gethsItemWidth() {
    if (window.innerWidth >= 500) {
      hsItemWidth = 20;
    } else {
      hsItemWidth = 13;
    }
  }

  gethsItemWidth();

  if (window.innerWidth > 920) {
    scrollLock.disablePageScroll();
    document.documentElement.style.overflow = "hidden";
  } else {
    scrollLock.enablePageScroll();
    document.documentElement.style.overflow = "";
  }

  const hsItemsCount = hsItems.length;

  //   let currentSlide = hsItemsCount >= 3 ? Math.round(hsItemsCount / 2) : 1;
  let currentSlide = 4;
  let sliderPos =
    currentSlide > 1 ? (currentSlide * hsItemWidth - hsItemWidth) * -1 : 0;

  heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;

  setSerialNum();

  setActiveSlides(currentSlide);

  let enableScroll = true;

  heroesSlider.addEventListener("wheel", (e) => {
    if (window.innerWidth < 920) return;
    if (!enableScroll) return;

    const delta = Math.sign(e.deltaY);

    if (delta < 0) {
      if (currentSlide > 1) {
        sliderPos += hsItemWidth;
        currentSlide -= 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    }
    if (delta > 0) {
      if (currentSlide < hsItemsCount) {
        sliderPos -= hsItemWidth;
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

  window.addEventListener("keyup", (e) => {
    if (!enableScroll) return;

    if (e.code == "ArrowLeft") {
      if (currentSlide > 1) {
        sliderPos += hsItemWidth;
        currentSlide -= 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    }
    if (e.code == "ArrowRight") {
      if (currentSlide < hsItemsCount) {
        sliderPos -= hsItemWidth;
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

  heroesSlider.ondragstart = function () {
    return false;
  };

  heroesSlider.addEventListener("touchstart", (e) => {
    let start = e.changedTouches[0].pageX;
    let end;
    let direction;

    function setDirection(e) {
      end = e.changedTouches[0].pageX;

      let dif = start - end;

      if (start > end && dif >= 60) {
        if (currentSlide < hsItemsCount) {
          sliderPos -= hsItemWidth;
          currentSlide += 1;
          setActiveSlides(currentSlide);
          heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
        }
      } else if (start < end && dif <= -60) {
        if (currentSlide > 1) {
          sliderPos += hsItemWidth;
          currentSlide -= 1;
          setActiveSlides(currentSlide);
          heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
        }
      }

      return direction;
    }

    heroesSlider.addEventListener(
      "touchend",
      (e) => {
        setDirection(e);
      },
      { once: true }
    );
  });

  window.addEventListener("resize", () => {
    gethsItemWidth();
    sliderPos =
      currentSlide > 1 ? (currentSlide * hsItemWidth - hsItemWidth) * -1 : 0;
    heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
    setActiveSlides(currentSlide);
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

if (heroesSlider) {
  initHeroesSlider();
}
