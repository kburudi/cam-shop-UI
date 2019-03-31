let slideArray = [];
slideArray[0] = document.querySelector(".slide-1");
slideArray[1] = document.querySelector(".slide-2");
slideArray[2] = document.querySelector(".slide-3");
slideArray[3] = document.querySelector(".slide-4");
slideArray[4] = document.querySelector(".slide-5");

slideArray.forEach((el, index) => {
  console.log(el);
  el.addEventListener("click", e => {
    if (index + 1 == slideArray.length) {
      index = -1;
    }
    console.log(el);
    el.classList.remove("active");
    slideArray[index + 1].classList.add("active");
  });
});
