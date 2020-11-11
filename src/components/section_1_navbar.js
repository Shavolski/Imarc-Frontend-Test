import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';

//Navbar section
function Navbar() {
  return (
    <div className="pt-4">
      <img src={logo} />
      <div>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800">List your property</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800">Trips</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800">Messages</a>
      </div>
    </div>
  );
};

export default Navbar;
