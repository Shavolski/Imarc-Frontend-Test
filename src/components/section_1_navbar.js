import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/Logo.png';

//Navbar section
function Navbar() {
  return (
    <div className="pt-2 pb-4 pl-20 flex flex-row shadow-lg">
      {/* Divided the navbar into 3 parts */}
      {/* Part 1: The logo */}
      <img src={logo} classname="w-full"/>

      {/* Part 2: Navigation links */}
      <div className="mx-12 py-4 flex flex-row items-center">
        <a href="#" className="flex-1 block px-8 bold_text font-semibold text-sm">About</a>
        <a href="#" className="flex-1 block px-8 bold_text font-semibold text-sm">Blog</a>
        <a href="#" className="flex-1 block px-8 bold_text font-semibold text-sm">Resources</a>
        <a href="#" className="flex-1 block px-8 bold_text font-semibold text-sm">Contact</a>
      </div>

      {/* Part 3: The Trial button */}
      <div className="mx-12 px-8">
        <button className="trial_button flex flex-row text-white font-thin py-2 px-6 ml-48 mt-3">
          FREE TRIAL &#9654;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
