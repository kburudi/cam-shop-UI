const slideArray = document.querySelectorAll(".slides");
const nextSlide = document.querySelector(".toggle-right");
const prevSlide = document.querySelector(".toggle-left");
const sliderBox = document.querySelector("section#slider");

let sliderController = direction => {
  const currentSlide = document.querySelector("div.slides.active");
  const maxSlideIndex = slideArray.length - 1;
  const minSlideIndex = 0;
  if (direction === "next") {
  } else {
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

console.log(window);
