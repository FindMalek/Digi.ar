const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

menuBurger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});