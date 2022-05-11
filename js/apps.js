const elHamburger = document.querySelector(".header-portfolio__hamburger")
const elHeader = document.querySelector(".header-portfolio")

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header-portfolio--open")
})