const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("close");
  menu.classList.toggle("open");
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".progressbar-wrapper", {
  scrollTrigger: ".progressbar-wrapper",
  x: "100%",
  duration: 2,
});
