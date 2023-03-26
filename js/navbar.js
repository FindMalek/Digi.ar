$(document).ready(function() {
  var navbar = $("#navbar");
  var navbarLogo = $(".navbarLogo");
  var navLinks = $(".nav-link");

  if ($(window).width() > 992 && navbarLogo.attr("src") === "images/Digital Army - white.svg") {
    navbarLogo.attr("src", "images/Digital Army - black.svg");
  }

  $(window).scroll(function() {
    if ($(window).width() > 992) {
      if ($(window).scrollTop() > 50) {
        navbar.addClass("scroll");
        navbarLogo.attr("src", "images/Digital Army - white.svg");
        navLinks.removeClass("text-dark").addClass("text-light");
      } else {
        navbar.removeClass("scroll");
        navbarLogo.attr("src", "images/Digital Army - black.svg");
        navLinks.removeClass("text-light").addClass("text-dark");
      }
    } else if ($(window).width() > 992) {
      navbar.removeClass("scroll");
      navbarLogo.attr("src", "images/Digital Army - black.svg");
      navLinks.removeClass("text-light").addClass("text-dark");
    }
  });
});


const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav li a');
const contactBtn = document.querySelector('.nav-link.btn.btn-primary');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('ms-auto');
  navbarCollapse.classList.toggle('collapse');
  navbarCollapse.classList.toggle('show');

  const expanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  navbarToggler.setAttribute('aria-expanded', !expanded);

  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";

    navLinks.forEach((link) => {
      link.classList.remove('text-dark');
      link.classList.add('text-light');
    });

    contactBtn.style.bottom = "0";
    contactBtn.style.background = "#145fd8";
    contactBtn.style.borderColor = "#105fdf";
  } else {
    navbarCollapse.style.maxHeight = "0";

    navLinks.forEach((link) => {
      link.classList.remove('text-light');
      link.classList.add('text-dark');
    });

    contactBtn.style.bottom = "20%";
    contactBtn.style.background = "#4285f4";
    contactBtn.style.borderColor = "#4285f4";
  }
});

