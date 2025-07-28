import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 text-xs text-gray-600 dark:text-gray-400 grid grid-cols-1 md:grid-cols-6 gap-8 border-t border-gray-300 dark:border-gray-700">
      <div className="col-span-1 flex flex-col items-start space-y-2">
        <a href="#" aria-label="Authentik logo" className="text-2xl font-bold tracking-tight">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16L7 8l4 8 4-16 4 24" />
          </svg>
          <span className="sr-only">Authentik</span>
        </a>
        <span>CREATE HONESTLY.</span>
      </div>
      <div className="col-span-2 md:col-span-1 space-y-2">
        <p className="font-semibold">WE BELIEVE</p>
        <p className="italic">“The key to building an authentic business is building an authentic life.” — Brian Gardner</p>
      </div>
      <div className="col-span-1 space-y-2">
        <p className="font-semibold">ABOUT</p>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Start Here</a></li>
          <li><a href="#" className="hover:underline">Our Blog</a></li>
          <li><a href="#" className="hover:underline">Podcast</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
        </ul>
      </div>
      <div className="col-span-1 space-y-2">
        <p className="font-semibold">SERVICES</p>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Consulting</a></li>
          <li><a href="#" className="hover:underline">Social Media</a></li>
          <li><a href="#" className="hover:underline">Web Design</a></li>
          <li><a href="#" className="hover:underline">Get in Touch</a></li>
        </ul>
      </div>
      <div className="col-span-1 space-y-2">
        <p className="font-semibold">RESOURCES</p>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Themes</a></li>
          <li><a href="#" className="hover:underline">Web Fonts</a></li>
          <li><a href="#" className="hover:underline">Tutorials</a></li>
          <li><a href="#" className="hover:underline">Daily Reads</a></li>
        </ul>
      </div>
      <div className="col-span-1 space-y-2">
        <p className="font-semibold">CONNECT</p>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">GitHub</a></li>
        </ul>
      </div>
      <div className="col-span-6 text-center mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        © 2018 · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
