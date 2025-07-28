import React from 'react';

const JourneySection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto fade-in-up">
      <h2 className="text-3xl font-bold mb-6">Start your journey.</h2>
      <p className="max-w-3xl mb-10 text-gray-700 dark:text-gray-300">
        Come as you are. Bring your talents, your brilliance, your frustrations, your struggles—and let’s turn them into something awesome.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <article className="space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-900 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16L7 8l4 8 4-16 4 24" />
            </svg>
            <h3 className="font-semibold">Be inspired.</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We want to give you the help and support you need to make huge strides towards the vision you’re after in your business.
            </p>
          </article>
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <article className="space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-900 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-semibold">Get connected.</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Jam with fellow tribe members, share experiences, stay accountable, and encourage one another on your journey.
            </p>
          </article>
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <article className="space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-900 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A12.083 12.083 0 0112 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14L5.84 10.578a12.083 12.083 0 00-.665 6.479A12.083 12.083 0 0012 14z" />
            </svg>
            <h3 className="font-semibold">Equip yourself.</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Discover the tools and resources you need to build a beautiful website and create an amazing brand and digital platform.
            </p>
          </article>
        </div>
      </div>
      <a href="#" className="mt-6 inline-block text-xs text-gray-600 dark:text-gray-400 hover:underline font-medium transition duration-300 ease-in-out">
        TAKE THE FIRST STEP TODAY →
      </a>
    </section>
  );
};

export default JourneySection;
