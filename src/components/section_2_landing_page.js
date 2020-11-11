import React from 'react';
import ReactDOM from 'react-dom';

//Landing page section
function Landing_page() {
  return (

    {/* Image first and it's wrapped in a div for the text */}
    <div className="landing-page w-screen">

      {/* space to and from the picture */}
      <div className="py-48 pl-48">
        <h1 className="font-bold text-white text-6xl pb-20">LOREM IPSUM</h1>
        {/* The smaller text */}
        <div className="flex flex-col">
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};
export default Landing_page;
