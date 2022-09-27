//= components/jquery3.6.0.js

document.addEventListener("DOMContentLoaded", () => {
  //= ../../../node_modules/swiper/swiper-bundle.js
  //= ../../../node_modules/chart.js/dist/chart.js
  //= components/threesixty.js
  //= components/sliders.js
  //= components/charts.js
  //= components/threesixty-sliders.js
  //= components/scroll-lock.js
  //= components/heroes.js

  const header = document.querySelector(".header");
  const hmBtn = document.querySelector(".burger-menu");
  const headerContent = document.querySelector(".header__content");
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

    hmBtn.classList.remove("menu-on");
    headerContent.classList.remove("active");
  });

  if (document.documentElement.scrollTop <= 20) {
    header.classList.add("top");
  }

  hmBtn.addEventListener("click", () => {
    hmBtn.classList.toggle("menu-on");
    headerContent.classList.toggle("active");
  });

  // videos youtube

  function loadVideo() {
    window.YT.ready(function () {
      new window.YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "PpjdTwQwWWY",
        playerVars: { autoplay: 1, controls: 0, showinfo: 0 },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    });

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      var videoStatuses = Object.entries(window.YT.PlayerState);
      console.log(videoStatuses.find((status) => status[1] === event.data)[0]);
      event.target.playVideo();
    }
  }

  $(document).ready(function () {
    $.getScript("https://www.youtube.com/iframe_api", function () {
      loadVideo();
    });
  });

  // const navLinks = document.querySelectorAll(".nav-list__item-link"),
  //   navSections = document.querySelectorAll(".nav-section");

  // window.addEventListener("scroll", () => {
  //   let scrollDistance = window.scrollY;

  //   navSections.forEach((el, index) => {
  //     if (scrollDistance >= el.offsetTop - 250) {
  //       navLinks.forEach((elem) => {
  //         if (elem.classList.contains("active")) {
  //           elem.classList.remove("active");
  //         }
  //       });

  //       navLinks[index].classList.add("active");
  //     } else if (scrollDistance < 300) {
  //       navLinks[index].classList.remove("active");
  //     }
  //   });
  // });
  // navLinks[0].classList.add("active");

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

  // FAQ

  const faqAccTitle = document.querySelectorAll(".faq-item__heading"),
    faqAccText = document.querySelectorAll(".faq-item__text-wrapper");

  if (faqAccTitle.length > 0) {
    for (let i = 0; i < faqAccTitle.length; i++) {
      faqAccTitle[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = faqAccText[i];

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  // link to top

  const toTopLink = document.querySelector(".hero-top");

  if (toTopLink) {
    toTopLink.addEventListener("click", () => {
      var body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    });
  }
});
