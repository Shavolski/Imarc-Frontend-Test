import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/Logo.png';
import social_icons from '../assets/social_icons.svg';

//Footer section
function Footer() {
  return (
    <div className="mt-12 mx-48">
      <div className="main_footer h-32 bg-gray-400 flex">
        <div class="w-2/6 bg-gray-400 text-center">
          <img src={logo} />
          <img src={social_icons} className="pt-3"/>
        </div>
        <div class="w-1/6 p-2 bg-gray-500 text-center">.w-5/6</div>
        <div class="w-1/6 p-2 bg-gray-400 text-center">.w-1/6</div>
        <div class="w-1/6 p-2 bg-gray-500 text-center">.w-5/6</div>
        <div class="w-3/6 p-2 bg-gray-400 text-center">.w-1/6</div>
      </div>
      <div className="my-4">Footer</div>
    </div>
  );
};

export default Footer;
