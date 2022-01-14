var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".page-header__button-open-menu");

  navMain.classList.remove("");
  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
    }
});
