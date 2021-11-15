let parent = document.querySelectorAll("[data-collapse");
parent.forEach((element) => {
  let clickTarget = element.querySelector("*");
  let collapseElement = element.nextElementSibling;
  let collapseElementChildren = collapseElement.children;
  let tl = new TimelineMax({
    reversed: true,
    paused: true,
  });

  tl.from(
    collapseElement,
    1.5,
    {
      className: "+=heightzero",
      ease: Expo.easeInOut,
    },
    "open"
  );
  tl.staggerFrom(
    collapseElementChildren,
    3,
    {
      autoAlpha: 0,
      ease: Expo.easeInOut,
    },
    0.8,
    "open+=.1"
  );

  clickTarget.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
});

anime.timeline().add({
  targets: ".main-title",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: 800,
});
