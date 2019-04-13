const navBar = document.querySelector(".main-header");
window.addEventListener("load", e => {
  navBar.setAttribute("style", "background-color : transparent");
});

window.addEventListener("scroll", e => {
  navBar.setAttribute("style", "background-color : transparent");
  if (window.pageYOffset >= 420) {
    navBar.setAttribute("style", "background-color : #035490db;");
  }
});
