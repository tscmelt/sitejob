const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');
const crossIcon = document.querySelector('.cross-menu-icon');
const nav = document.querySelector('.navbar nav');

menuIcon.addEventListener('click', () => {
  navbar.classList.add('open');
  nav.classList.add('show');
});

crossIcon.addEventListener('click', () => {
  navbar.classList.remove('open');
  nav.classList.remove('show');
});