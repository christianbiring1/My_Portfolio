let hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".desk-logo");
let navMenu = document.querySelector(".nav-menu");
let navBar = document.querySelector(".desk-nav");

let navLink = document.querySelectorAll(".desk-nav a");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  logo.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
  navLink.forEach((link) => link.classList.toggle("active"));
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    logo.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
    navLink.forEach((link) => link.classList.remove("active"));
  })
);
