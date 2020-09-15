// Navbar background transparent or not
const navbar = document.getElementById('alden-navbar');
let scrolled = false;

window.onscroll = function () {
  if (this.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = true;
  }
};
