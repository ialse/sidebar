const nav = document.querySelector('.nav');
const content = document.querySelector('.content');
const btnMenu = document.querySelector('.header__button');

function handleClick() {
  nav.classList.toggle('nav_open');
  content.classList.toggle('content_menu-open');
}

btnMenu.addEventListener('click', handleClick);
