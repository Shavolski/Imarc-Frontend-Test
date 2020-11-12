import React from 'react';
import book_1 from '../assets/book_1.svg';
import book_2 from '../assets/book_2.svg';
import book_3 from '../assets/book_3.svg';

//Learn section
function Learn() {
  return (
    <div className="bg-5 my-4">
      <div className="py-10 lg:mx-48">
        {/* This section has 2 main parts, the outer and the inner layer */}
        <div className="mini_title text-center text-xl lg:text-3xl mb-8">Ways you can learn</div>

        {/* This handles the 3 main links */}
        {/* Leadership button */}
        <div className="flex content-center flex-wrap ml-4 lg:ml-40">
          <div className="w-1/3">
            <img src={book_1} alt="svg1"/>
            <button className="mini_button flex flex-row font-normal px-3 mt-3 -ml-8 text-center">
              <p>
                MOBILE DEVICES
              </p>
            </button>
          </div>


          {/* Tech& Dev button */}
          <div className="w-1/3">
            <img src={book_2} alt="svg2"/>
            <button className="mini_button flex flex-row font-normal px-3 mt-3 text-center">
              <p>
                EBOOKS
              </p>
            </button>
          </div>


          {/* Compliance button */}
          <div className="w-1/3">
            <img src={book_3} alt="svg3"/>
            <button className="mini_button flex flex-row font-normal px-3 mt-3 -ml-6 text-center">
              LIVE LEARNING
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Learn;
