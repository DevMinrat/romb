//= components/jquery3.6.0.js

document.addEventListener("DOMContentLoaded", () => {
  //= ../../../node_modules/swiper/swiper-bundle.js
  //= ../../../node_modules/chart.js/dist/chart.js
  //= components/threesixty.js
  //= components/sliders.js
  //= components/charts.js
  //= components/threesixty-sliders.js

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
    let firstItemBars = chooseItems[0].querySelectorAll(
      ".ci-data__item-progress"
    );
    firstItemBars.forEach((bar) => {
      animateBars(bar);
    });
  }

  // launching timer

  const launchingTimer = document.querySelector(".launching-timer");

  if (launchingTimer) {
    const deadline = launchingTimer.dataset.timer;

    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minuts = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minuts,
        seconds: seconds,
      };
    }

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }

    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector("#launching-timer__days"),
        hours = timer.querySelector("#launching-timer__hours"),
        minutes = timer.querySelector("#launching-timer__minutes"),
        seconds = timer.querySelector("#launching-timer__seconds"),
        timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }

    setClock(".launching-timer__content", deadline);
  }
});
