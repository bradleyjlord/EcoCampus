document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          burgerMenu.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });

  document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
          burgerMenu.classList.remove('active');
          navLinks.classList.remove('active');
      }
  });
});