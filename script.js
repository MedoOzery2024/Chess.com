// JavaScript to toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const header = document.querySelector('header');

mobileMenu.addEventListener('click', () => {
  header.classList.toggle('menu-active');
});
