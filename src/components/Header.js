import React from 'react';

const Header = ({ theme, toggleTheme, menuOpen, toggleMenu }) => {
  return (
    <header className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <a href="#" aria-label="Authentik logo" className="text-2xl font-bold tracking-tight">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16L7 8l4 8 4-16 4 24" />
        </svg>
        <span className="sr-only">Authentik</span>
      </a>
      <nav
        id="nav-menu"
        className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md max-h-0 overflow-hidden md:static md:max-h-full md:overflow-visible md:flex md:space-x-8 flex-col md:flex-row text-sm font-medium transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? 'max-h-full overflow-visible' : 'max-h-0 overflow-hidden'
        }`}
      >
        <a href="#" className="block px-4 py-2 md:py-0 md:px-0 hover:underline">
          Start Here
        </a>
        <a href="#" className="block px-4 py-2 md:py-0 md:px-0 hover:underline">
          Our Blog
        </a>
        <a href="#" className="block px-4 py-2 md:py-0 md:px-0 hover:underline">
          Podcast
        </a>
        <a href="#" className="block px-4 py-2 md:py-0 md:px-0 hover:underline">
          Newsletter
        </a>
        <a href="#" className="block px-4 py-2 md:py-0 md:px-0 font-semibold hover:underline">
          Get in Touch
        </a>
      </nav>
      <button
        id="mobile-menu-toggle"
        aria-label="Toggle Menu"
        className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <svg
            id="menu-close-icon"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            id="menu-open-icon"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <button
        id="theme-toggle"
        aria-label="Toggle Dark Mode"
        className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <svg
            id="theme-toggle-dark-icon"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        ) : (
          <svg
            id="theme-toggle-light-icon"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 5.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
