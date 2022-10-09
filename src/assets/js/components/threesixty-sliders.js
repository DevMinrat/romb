$(window).on("load", function () {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  if (document.querySelector(".equip")) {
    function initThreeSixtyUniform() {
      var three60Uniform = $(".uniform").ThreeSixty({
        totalFrames: 36,
        endFrame: 36,
        currentFrame: 1,
        imgList: ".threesixty_images",
        progress: ".spinner",
        imagePath: "assets/images/equipment/uniform/small/",
        filePrefix: "",
        ext: ".png",
        height: 250,
        width: 250,
        navigation: false,
        disableSpin: false,
        responsive: true,
      });
      $(".equip-uniform").removeClass("hidden");
    }

    function initThreeSixtyHelmet() {
      var three60Helmet = $(".helmet").ThreeSixty({
        totalFrames: 36,
        endFrame: 36,
        currentFrame: 1,
        imgList: ".threesixty_images",
        progress: ".spinner",
        imagePath: "assets/images/equipment/uniform/small/",
        filePrefix: "",
        ext: ".png",
        height: 250,
        width: 250,
        navigation: false,
        disableSpin: false,
        responsive: true,
      });
      $(".equip-helmet").removeClass("hidden");
    }
    function initThreeSixtyGloves() {
      var three60Gloves = $(".gloves").ThreeSixty({
        totalFrames: 36,
        endFrame: 36,
        currentFrame: 1,
        imgList: ".threesixty_images",
        progress: ".spinner",
        imagePath: "assets/images/equipment/uniform/small/",
        filePrefix: "",
        ext: ".png",
        height: 250,
        width: 250,
        navigation: false,
        disableSpin: false,
        responsive: true,
      });
      $(".equip-gloves").removeClass("hidden");
    }
    function initThreeSixtyMouthguard() {
      var three60Mouthguard = $(".mouthguard").ThreeSixty({
        totalFrames: 36,
        endFrame: 36,
        currentFrame: 1,
        imgList: ".threesixty_images",
        progress: ".spinner",
        imagePath: "assets/images/equipment/uniform/small/",
        filePrefix: "",
        ext: ".png",
        height: 250,
        width: 250,
        navigation: false,
        disableSpin: false,
        responsive: true,
      });
      $(".equip-mouthguard").removeClass("hidden");
    }

    function initThreeSixtySkillFighter() {
      var three60SkillsFighter = $(".skills-fighter").ThreeSixty({
        totalFrames: 36,
        endFrame: 36,
        currentFrame: 1,
        imgList: ".threesixty_images",
        progress: ".spinner",
        imagePath: "assets/images/skills/fighter/",
        filePrefix: "sf-",
        ext: ".png",
        height: 810,
        width: 810,
        navigation: false,
        disableSpin: false,
        responsive: true,
      });
      $(".skills-slider").removeClass("hidden");
    }

    if (isScrolledIntoView($(".equip-uniform"))) {
      initThreeSixtyUniform();
    }
    if (isScrolledIntoView($(".equip-helmet"))) {
      initThreeSixtyHelmet();
    }
    if (isScrolledIntoView($(".equip-gloves"))) {
      initThreeSixtyGloves();
    }
    if (isScrolledIntoView($(".equip-mouthguard"))) {
      initThreeSixtyMouthguard();
    }

    if (isScrolledIntoView($(".skills-slider"))) {
      initThreeSixtySkillFighter();
    }

    window.addEventListener("scroll", () => {
      if (
        isScrolledIntoView($(".equip-uniform")) &&
        $(".equip-uniform").hasClass("hidden")
      ) {
        initThreeSixtyUniform();
      }
      if (
        isScrolledIntoView($(".equip-helmet")) &&
        $(".equip-helmet").hasClass("hidden")
      ) {
        initThreeSixtyHelmet();
      }
      if (
        isScrolledIntoView($(".equip-gloves")) &&
        $(".equip-gloves").hasClass("hidden")
      ) {
        initThreeSixtyGloves();
      }
      if (
        isScrolledIntoView($(".equip-mouthguard")) &&
        $(".equip-mouthguard").hasClass("hidden")
      ) {
        initThreeSixtyMouthguard();
      }

      if (
        isScrolledIntoView($(".skills-slider")) &&
        $(".skills-slider").hasClass("hidden")
      ) {
        initThreeSixtySkillFighter();
      }
    });
  }

  if (document.querySelector(".hero-item__slider")) {
    var three60Hero = $(".hero-slider").ThreeSixty({
      totalFrames: 36,
      endFrame: 36,
      currentFrame: 1,
      imgList: ".threesixty_images",
      progress: ".spinner",
      imagePath: "assets/images/skills/fighter/",
      filePrefix: "sf-",
      ext: ".png",
      height: 540,
      width: 540,
      navigation: false,
      disableSpin: false,
      responsive: true,
    });
  }
  if (document.querySelector(".coin__slider-wrapper")) {
    var three60Coin = $(".coin-360").ThreeSixty({
      totalFrames: 36,
      endFrame: 36,
      currentFrame: 1,
      imgList: ".threesixty_images",
      progress: ".spinner",
      imagePath: "assets/images/coin/coin-360/",
      filePrefix: "00",
      ext: ".png",
      height: 550,
      width: 550,
      navigation: false,
      disableSpin: false,
      responsive: true,
    });
  }
});
