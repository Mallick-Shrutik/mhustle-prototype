burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar-other');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');
logo = document.querySelector('.logo');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
