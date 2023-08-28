// components/Subscription.js
import React from 'react';

const Subscription = () => {
  return (
    <div className="bg-gradient-to-br from-red-500 to-black text-white py-12">
      <div className="max-w-screen-md mx-auto px-4 font-normal">
        <h2 className="text-xl sm:text-4xl mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-sm sm:text-lg mb-8 ">Stay updated with our latest news and offers.</p>
        <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow py-3 px-4 rounded-full bg-white bg-opacity-20 text-white text-sm placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black hover:bg-red-500 hover:text-white text-sm py-2 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
