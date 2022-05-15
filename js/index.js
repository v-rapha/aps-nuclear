const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.navbar__list');
const navLinks = document.querySelectorAll('.navbar__list li');

function animateLinks() {
  navLinks.forEach((link, index) => {
    let milis = index / 7 + 0.3;

    link.style.animation
      ? (link.style.animation = '')
      : (link.style.animation = `navLinkFade 0.2s ease forwards ${milis}s`);
  });
}

function handleClick() {
  navList.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  animateLinks();
}

function addClickEvent() {
  mobileMenu.addEventListener('click', handleClick);
}

function init() {
  if (mobileMenu) {
    addClickEvent();
  }
}

init();
