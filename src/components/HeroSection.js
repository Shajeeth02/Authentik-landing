import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] py-16 fade-in-up">
      <div className="relative rounded overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Snoqualmie Pass, WA—United States"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />
        <figcaption className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          Snoqualmie Pass, WA—United States
        </figcaption>
        <div className="absolute inset-0 bg-black bg-opacity-40 shadow-lg flex flex-col justify-center px-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Welcome to <br />
            <span className="text-indigo-400">Authentik.</span>
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            We help creative entrepreneurs build an honest brand &amp; digital platform.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-orange-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              START YOUR JOURNEY
            </a>
            <a
              href="#"
              className="text-white-300 hover:underline flex items-center space-x-1 font-medium transition duration-300 ease-in-out"
            >
              <span>LEARN MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
