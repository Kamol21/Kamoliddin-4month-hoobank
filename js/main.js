var elNavbar = document.querySelector("nav");
var elToggleBtn = document.querySelector(".tg-btn")


elToggleBtn.addEventListener("click", function () {
  elNavbar.classList.toggle("hidden");
})


elToggleBtn.addEventListener("click", function () {
  elToggleBtn.classList.toggle("animat");
  elToggleBtn.classList.toggle("not-animat");
})