import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-12 rounded max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2 space-y-6 max-w-3xl">
        <h2 className="text-3xl font-bold">Get started today.</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Introducing the Authentik Framework™ for creative entrepreneurs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm text-gray-900 dark:text-gray-100">
          <div>
            <h3 className="font-semibold">Authentik Living</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We believe that living an honest and intentional life will carry over to the way you run your business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Authentik Design</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We believe that amazing typography and white space will help you build a beautiful website experience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Authentik Business</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We believe that being genuine and transparent with your audience is paramount to a successful business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Authentik Community</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We believe that doing life together—both business and personal—is the only way to go about this journey.
            </p>
          </div>
        </div>
      </div>
      <form className="bg-white dark:bg-gray-900 p-8 rounded shadow max-w-md mx-auto md:mx-0" aria-label="Start your journey form">
        <div className="mb-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16L7 8l4 8 4-16 4 24" />
          </svg>
          <h3 className="mt-2 font-semibold text-lg">Start your journey.</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">We help creative entrepreneurs build an honest brand &amp; digital platform.</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6 flex items-center text-xs text-gray-600 dark:text-gray-400">
          <input type="checkbox" id="terms" required className="mr-2" />
          <label htmlFor="terms" className="select-none">
            I accept the <a href="#" className="underline">terms of service</a> and <a href="#" className="underline">privacy policy</a>.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default GetStartedSection;
