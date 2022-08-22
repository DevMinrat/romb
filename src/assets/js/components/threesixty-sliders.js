$(window).on("load", function () {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

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

    $(".equip-info").removeClass("hidden");
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

  if (isScrolledIntoView($(".equip-info"))) {
    initThreeSixtyUniform();
  }
  if (isScrolledIntoView($(".skills-slider"))) {
    initThreeSixtySkillFighter();
  }

  window.addEventListener("scroll", () => {
    if (
      isScrolledIntoView($(".equip-info")) &&
      $(".equip-info").hasClass("hidden")
    ) {
      initThreeSixtyUniform();
    }
    if (
      isScrolledIntoView($(".skills-slider")) &&
      $(".skills-slider").hasClass("hidden")
    ) {
      initThreeSixtySkillFighter();
    }
  });
});
