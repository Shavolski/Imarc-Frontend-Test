import React from 'react';
import ReactDOM from 'react-dom';

//Learn section
function Learn() {
  return (
    <div className="bg-5 my-4">
      <div className="py-10 mx-48">
        {/* This section has 2 main parts, the outer and the inner layer */}
        <div className="mini_title text-center text-3xl mb-8">Ways you can learn</div>

        {/* This handles the 3 main links */}
        {/* Leadership button */}
        <div className="flex content-center flex-wrap ml-20">
          <div className="w-1/3 ">

            <button className="mini_button flex flex-row font-normal px-3 mt-3 w-64 text-left">
              <p>
                MOBILE DEVICES
              </p>
            </button>
          </div>


          {/* Tech& Dev button */}
          <div className="w-1/3 flex flex-row ">

            <button className="mini_button flex flex-row font-normal px-3 mt-3 w-64 text-left">
              <p>
                EBOOKS
              </p>
            </button>
          </div>


          {/* Compliance button */}
          <div className="w-1/3 flex flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" width="46.873" height="62.246" viewBox="0 0 46.873 62.246">
              <g id="Group_2153" data-name="Group 2153" transform="translate(-413.756 83.185)">
                <path id="Path_497" data-name="Path 497" d="M433.741-35.856h6.9v-8.135h8.135v-6.9h-8.135v-8.135h-6.9v8.135h-8.134v6.9h8.134Z" fill="#db5935"/>
                <path id="Path_498" data-name="Path 498" d="M424.829-75.106h-6.387a4.69,4.69,0,0,0-4.686,4.685v44.8a4.692,4.692,0,0,0,4.686,4.686h37.5a4.692,4.692,0,0,0,4.686-4.686v-44.8a4.69,4.69,0,0,0-4.686-4.685h-6.387v-.485a2.124,2.124,0,0,0-2.121-2.123h-4.449l-.038-.333a5.785,5.785,0,0,0-5.756-5.138,5.784,5.784,0,0,0-5.755,5.138l-.038.333H426.95a2.124,2.124,0,0,0-2.121,2.123Zm24.727,1.848h6.387a2.839,2.839,0,0,1,2.837,2.837v44.8a2.841,2.841,0,0,1-2.837,2.838h-37.5a2.841,2.841,0,0,1-2.837-2.838v-44.8a2.84,2.84,0,0,1,2.837-2.837h6.387v1.852h-4.047a2.746,2.746,0,0,0-2.742,2.743v40.7a2.747,2.747,0,0,0,2.742,2.743H453.6a2.746,2.746,0,0,0,2.741-2.743v-40.7a2.745,2.745,0,0,0-2.741-2.743h-4.047Zm-23.292-2.334a.687.687,0,0,1,.686-.688h4.958a.94.94,0,0,0,.672-.285.932.932,0,0,0,.262-.68l-.007-.12a4.368,4.368,0,0,1,4.357-4.387,4.329,4.329,0,0,1,3.081,1.278,4.331,4.331,0,0,1,1.277,3.084l-.008.154a.929.929,0,0,0,.267.674.94.94,0,0,0,.669.282h4.957a.688.688,0,0,1,.687.688v7.343a.688.688,0,0,1-.687.687H426.95a.687.687,0,0,1-.686-.687Zm.686,9.465h20.485a2.124,2.124,0,0,0,2.121-2.122v-1.722H453.6a1.31,1.31,0,0,1,1.308,1.308v40.7a1.311,1.311,0,0,1-1.308,1.309H420.782a1.311,1.311,0,0,1-1.308-1.309v-40.7a1.31,1.31,0,0,1,1.308-1.308h4.047v1.722A2.124,2.124,0,0,0,426.95-66.127Z" fill="#db5935"/>
                <rect id="Rectangle_1747" data-name="Rectangle 1747" width="16.596" height="1.747" transform="translate(428.835 -71.63)" fill="#db5935"/>
              </g>
            </svg>

            <button className="mini_button flex flex-row font-normal py-2 px-3 mt-3 w-64 text-left">
              LIVE LEARNING
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Learn;
