const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".nav__item");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
  });
});

$("#toggle1").on("click", function () {
  $("#content2").toggle();
  $("#content1").toggle();
});

$("#toggle2").on("click", function () {
  $("#content1").toggle();
  $("#content2").toggle();
});

$("#toggle3").on("click", function () {
  $("#content4").toggle();
  $("#content3").toggle();
});

$("#toggle4").on("click", function () {
  $("#content3").toggle();
  $("#content4").toggle();
});

$("#toggle5").on("click", function () {
  $("#content6").toggle();
  $("#content5").toggle();
});

$("#toggle6").on("click", function () {
  $("#content5").toggle();
  $("#content6").toggle();
});
