const navBar = document.querySelector(".main-header");
window.addEventListener("load", e => {
  navBar.setAttribute("style", "background-color : transparent");
});

window.addEventListener("scroll", e => {
  navBar.setAttribute("style", "background-color : transparent");
  if (window.pageYOffset >= 420) {
    navBar.setAttribute("style", "background-color : #0761867d;");
  }
});

const slideArray = document.querySelectorAll(".slides");
const nextSlide = document.querySelector(".toggle-right");
const prevSlide = document.querySelector(".toggle-left");
const sliderBox = document.querySelector("section#slider");

let sliderController = direction => {
  const currentSlide = document.querySelector("div.slides.active");
  let nextSlideIndex = parseInt(currentSlide.classList[0].split("-")[1]);
  let prevSlideIndex = parseInt(currentSlide.classList[0].split("-")[1]) - 2;
  const maxSlideIndex = slideArray.length - 1;
  const minSlideIndex = 0;
  if (nextSlideIndex >= slideArray.length) {
    nextSlideIndex = minSlideIndex;
  }

  if (prevSlideIndex < 0) {
    prevSlideIndex = maxSlideIndex;
  }

  currentSlide.classList.remove("active");
  if (direction === "next") {
    slideArray[nextSlideIndex].classList.add("active");
  } else {
    slideArray[prevSlideIndex].classList.add("active");
  }
};

nextSlide.addEventListener("click", e => {
  e.preventDefault();
  sliderController("next");
});

prevSlide.addEventListener("click", e => {
  e.preventDefault();
  sliderController("prev");
});
