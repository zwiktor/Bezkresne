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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

