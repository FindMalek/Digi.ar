// Scroll functionality for navbar
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile responsive functionality for navbar
var checkbox = document.querySelector('.navbar-container input[type="checkbox"]');
var menuLinks = document.querySelectorAll('.menu-items a');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        checkbox.checked = false;
    });
});

const header = document.querySelector('header');
const logo = document.querySelector('#navbarLogo');

// Use window.getComputedStyle to get the background color of the header
const bgColor = window.getComputedStyle(header).getPropertyValue('background-color');

// Check if the background color is light or dark
// You can use any other method to check the background color, this is just an example
const isLight = bgColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
const r = isLight[1];
const g = isLight[2];
const b = isLight[3];
const brightness = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);

// Change the image source based on the brightness of the background
if (brightness > 125) {
    logo.src = 'images/Digital Army - white.svg';
} else {
    logo.src = 'images/Digital Army - black.svg';
}