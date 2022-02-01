var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".page-header__button--close");

  navMain.classList.remove("navigation--nojs");
  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
      navToggle.classList.add("page-header__button--opened");
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
      navToggle.classList.remove("page-header__button--opened");
    }
});
