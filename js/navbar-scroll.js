const navbar = document.querySelector('.site-navbar');

if (window.location.href.endsWith('index.html')) {
  navbar.classList.add('white-text');
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('white-bg');
    navbar.querySelector('.site-navigation.border-bottom').style.borderBottom = 'none';
    navbar.classList.remove('white-text');
  } else {
    navbar.classList.remove('white-bg');
    navbar.querySelector('.site-navigation.border-bottom').style.borderBottom = '0px solid #f3f3f4';
    if (window.location.href.endsWith('index.html')) {
      navbar.classList.add('white-text');
    }
  }
});
