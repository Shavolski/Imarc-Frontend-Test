import React from 'react';
import logo from '../assets/Logo.png';

//Navbar section
function Navbar({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="pt-2 pb-2 lg:pl-20 lg:flex lg:flex-row lg:shadow-lg">
      {/* Divided the navbar into 3 parts */}
      <div className="flex justify-between py-2 pl-2 pr-4 lg:pr-0 lg:pl-0">
        {/* Part 1: The logo */}
        <img src={logo} classname="w-full" alt="logo image"/>
        <button
          className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg id="Mobile_-_Menu" data-name="Mobile - Menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect id="Rectangle_1579" data-name="Rectangle 1579" width="24" height="24" fill="none"/>
            <g id="Group_1952" data-name="Group 1952" transform="translate(4318 4814)">
              <rect id="Rectangle_1576" data-name="Rectangle 1576" width="18" height="2" transform="translate(-4315 -4808)"/>
              <rect id="Rectangle_1577" data-name="Rectangle 1577" width="18" height="2" transform="translate(-4315 -4803)"/>
              <rect id="Rectangle_1578" data-name="Rectangle 1578" width="18" height="2" transform="translate(-4315 -4798)"/>
            </g>
          </svg>

        </button>
      </div>

      <div className={"lg:mx-12 lg:py-1 grid lg:flex lg:flex-row items-center" + (menuOpen ? " flex" : " hidden")} id="example-navbar-info">
        {/* Part 2: Navigation links */}
        <div className="lg:flex lg:flex-row lg:items-center">
          <a href="/#" className="flex-1 block px-8 bold_text font-semibold text-sm text-right ">About</a>
          <a href="/#" className="flex-1 block px-8 bold_text font-semibold text-sm text-right ">Blog</a>
          <a href="/#" className="flex-1 block px-8 bold_text font-semibold text-sm text-right ">Resources</a>
          <a href="/#" className="flex-1 block px-8 bold_text font-semibold text-sm text-right ">Contact</a>
        </div>

        {/* Part 3: The Trial button */}
        <div className="lg:mx-12 lg:px-8 lg:-mt-4">
          <button className="trial_button flex flex-row text-white font-thin py-2 px-6 ml-48 mt-3">
            FREE TRIAL &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
