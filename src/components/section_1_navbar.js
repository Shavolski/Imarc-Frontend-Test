import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/Logo.png';

//Navbar section
function Navbar() {
  return (
    <div className="py-2 pl-20 flex flex-row">
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
          FREE TRIAL
          <svg className="flex-1 m-2" xmlns="http://www.w3.org/2000/svg" width="8.359" height="9.536" viewBox="0 0 8.359 9.536">
            <path id="Path_490" data-name="Path 490" d="M494.73,230.4l-6.875-4.06a.763.763,0,0,0-1.144.675v7.975a.763.763,0,0,0,1.144.675l6.875-4.06a.7.7,0,0,0,0-1.2" transform="translate(-486.711 -226.231)" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
