const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.desk-logo');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.desk-nav');

const navLink = document.querySelectorAll('.desk-nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  navLink.forEach((link) => link.classList.toggle('active'));
});

navLink.forEach((link) => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    logo.classList.remove('active');
    navMenu.classList.remove('active');
    navBar.classList.remove('active');
    navLink.forEach((link) => link.classList.remove('active'));
  }));
