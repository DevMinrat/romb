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

  hsItems.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      let num = +el.dataset.number;
      sliderPos = num > 1 ? (num * hsItemWidth - hsItemWidth) * -1 : 0;
      currentSlide = num;
      setActiveSlides(num);
      heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
    });
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

  let startX, startY;
  let isDown = false;
  let end;
  let direction;

  heroesSlider.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
    isDown = true;
  });

  function setDirection(e) {
    end = e.changedTouches[0].pageX;

    let dif = startX - end;

    if (startX > end && dif >= 60) {
      if (currentSlide < hsItemsCount) {
        sliderPos -= hsItemWidth;
        currentSlide += 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    } else if (startX < end && dif <= -60) {
      if (currentSlide > 1) {
        sliderPos += hsItemWidth;
        currentSlide -= 1;
        setActiveSlides(currentSlide);
        heroesSlider.style.transform = `translate3d(${sliderPos}rem, 0px, 0px)`;
      }
    }

    return direction;
  }

  heroesSlider.addEventListener("touchmove", (e) => {
    if (isDown) {
      let deltaX = Math.abs(e.changedTouches[0].pageX - startX);
      let deltaY = Math.abs(e.changedTouches[0].pageY - startY);

      if (deltaX > deltaY) {
        scrollLock.disablePageScroll();
      }
    }
  });

  heroesSlider.addEventListener("touchend", (e) => {
    setDirection(e);
    isDown = false;

    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
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
    el.classList.remove("slide-until-before-prev");
    el.classList.remove("slide-before-prev");
    el.classList.remove("slide-prev");
    el.classList.remove("slide-active");
    el.classList.remove("slide-next");
    el.classList.remove("slide-after-next");
  });

  let earlyBeforePrevSlide = hsItems[num - 5];
  let untilBeforePrevSlide = hsItems[num - 4];
  let beforePrevSlide = hsItems[num - 3];
  let prevSlide = hsItems[num - 2];

  let activeSlide = hsItems[num - 1];

  let nextSlide = activeSlide.nextElementSibling;
  let afterNextSlide =
    hsItems.length != num ? nextSlide.nextElementSibling : null;

  if (earlyBeforePrevSlide) {
    earlyBeforePrevSlide.classList.add("slide-early-before-prev");
  }
  if (untilBeforePrevSlide) {
    untilBeforePrevSlide.classList.add("slide-until-before-prev");
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
