import React from 'react';

//Landing page section
function Landing_page() {
  return (
    <div className="landing-page w-screen h-full -mt-6">
      {/* space to and from the picture */}
      <div className="py-10 lg:py-48 lg:pl-48">
        <h1 className="font-bold text-white text-3xl lg:text-6xl lg:pb-20 pl-2 lg:pl-0">LOREM IPSUM</h1>
        {/* The smaller text */}
        <div className="flex flex-col">
          <p className=" w-48 pl-2 lg:pl-0 lg:w-full text-sm lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};
export default Landing_page;
