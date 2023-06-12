// Toggler
function toggle() {
    const toggler = document.getElementById('nav-section')
    const hamburger = document.getElementById('hamburger')
    list = toggler.classList;
    list.toggle('toggler')
    listHam = hamburger.classList;
    listHam.toggle('fa-bars')
    listHam.toggle('fa-times')

}

// Nav background

const navbar = document.querySelector('.navbar-menu');
const headerHeigh = document.querySelector('.hero').clientHeight;
window.onscroll = () => {
    if (window.scrollY > headerHeigh-60) {
        navbar.classList.add('nav-active');
        navbar.classList.add('navbar-menu-fixed');
    } else {
        navbar.classList.remove('nav-active');
        navbar.classList.remove('navbar-menu-fixed');
    }
};

