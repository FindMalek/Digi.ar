const navbar = document.querySelector('.site-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('white-bg');
    navbar.querySelector('.site-navigation.border-bottom').style.borderBottom = 'none';
  } else {
    navbar.classList.remove('white-bg');
    navbar.querySelector('.site-navigation.border-bottom').style.borderBottom = '1px solid #f3f3f4';
  }
});
