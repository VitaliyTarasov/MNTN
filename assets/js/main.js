const openMenuIcon = document.getElementById('menu-icon-open');
const closeMenuIcon = document.getElementById('menu-icon-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');

const heroImageBot = document.getElementById('hero-bot-img');
const heroImageMiddle = document.getElementById('hero-middle-img');
const heroImageTop = document.getElementById('hero-top-img');
const heroData = document.getElementById('hero-data')


openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');
    headerOverlay.classList.add('menu-opened');
});

closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');
    headerOverlay.classList.remove('menu-opened');
});

window.addEventListener('mouseup', (e) => {
    if (e.target !== mobileMenu && e.target !== openMenuIcon) {
        mobileMenu.classList.remove('menu-opened');
        headerOverlay.classList.remove('menu-opened');
    }
});

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    heroImageBot.style.transform = "translateY(" + -scrollPosition * 0.02 + "%)";
    heroImageMiddle.style.transform = "translateY(" + -scrollPosition * 0.04 + "%)";
    heroImageTop.style.transform = "translateY(" + -scrollPosition * 0.01 + "%)";
    heroData.style.opacity = 150 - scrollPosition * 0.3 + "%";
});