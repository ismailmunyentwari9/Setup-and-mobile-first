const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.cancel-icon');

const openMobileMenu = function () {
  mobileMenu.classList.remove('hidden');
  mobileMenu.style.display = 'flex';
};

hamburger.addEventListener('click', openMobileMenu);

const closeMobileMenu = function () {
  mobileMenu.style.display = 'none';
  mobileMenu.classList.add('hidden');
};

menuLinks.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);