const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.navbar nav');

const body = document.body;

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  body.classList.toggle('no-scroll');
});