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