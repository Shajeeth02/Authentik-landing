const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }
}

// On page load, set theme from localStorage or system preference
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
})();

themeToggleBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

mobileMenuToggleBtn.addEventListener('click', () => {
  if (navMenu.classList.contains('max-h-0')) {
    navMenu.classList.remove('max-h-0', 'overflow-hidden');
    navMenu.classList.add('max-h-full', 'overflow-visible');
    menuOpenIcon.classList.add('hidden');
    menuCloseIcon.classList.remove('hidden');
  } else {
    navMenu.classList.add('max-h-0', 'overflow-hidden');
    navMenu.classList.remove('max-h-full', 'overflow-visible');
    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');
  }
});
