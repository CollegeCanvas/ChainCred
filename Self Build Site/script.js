// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Scroll behavior
window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav-header');
  if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
