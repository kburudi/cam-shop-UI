// const navBar = document.querySelector(".main-header");

// window.addEventListener("scroll", e => {
//   navBar.setAttribute("style", "background-color : transparent");
//   if (window.pageYOffset >= 420) {
//     navBar.setAttribute("style", "background-color : #0761867d;");
//   }
// });

const slideArray = document.querySelectorAll(".slides");
const nextSlide = document.querySelector(".toggle-right");
const prevSlide = document.querySelector(".toggle-left");
const sliderBox = document.querySelector("section#slider");

let sliderController = direction => {
  const currentSlide = document.querySelector("div.slides.active");
  let currentSlideIndex = parseInt(currentSlide.classList[1].split("-")[1]) - 1;
  let nextSlideIndex = parseInt(currentSlide.classList[1].split("-")[1]);
  let prevSlideIndex = parseInt(currentSlide.classList[1].split("-")[1]) - 2;
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
  } else if (direction === "prev") {
    slideArray[prevSlideIndex].classList.add("active");
  }
};

// window.addEventListener("load", e => {
//   // navBar.setAttribute("style", "background-color : transparent");
//   startLoad();
// });
let autoSlide = setInterval(myTimer, 4000);

function myTimer() {
  sliderController("next");
}

function stopAutoload() {
  clearInterval(autoSlide);
}

let restartSlider = () => {
  setTimeout(function() {
    autoSlide = setInterval(myTimer, 4000);
  }, 3000);
};

// sliderController("auto");
nextSlide.addEventListener("click", e => {
  e.preventDefault();
  stopAutoload();
  sliderController("next");
  restartSlider();
});

prevSlide.addEventListener("click", e => {
  e.preventDefault();
  stopAutoload();
  sliderController("prev");
  restartSlider();
});
