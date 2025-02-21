const burgerMenu = document.querySelector('.mobile-menu');

const burgerMenuOpen = document.querySelector('.menu-btn-open')
const burgerMenuClose = document.querySelector('.menu-btn-close')
// const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleBurger = () => burgerMenu.classList.toggle('is-open');

burgerMenuOpen.addEventListener('click', toggleBurger);
burgerMenuClose.addEventListener('click', toggleBurger);
