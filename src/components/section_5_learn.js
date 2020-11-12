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
          <div className="w-1/3 flex flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" width="84.97" height="57.074" viewBox="0 0 84.97 57.074">
              <path id="Path_496" data-name="Path 496" d="M58.627-69.473c5.009-.154,9.077-4.669,9.077-10.076s-4.068-9.194-9.077-8.458-9.081,5.238-9.081,10.069A8.6,8.6,0,0,0,58.627-69.473Zm7.88,3.832a15.428,15.428,0,0,0-7.88-1.98c-9.022.172-16.338,6.565-16.338,14.285a13.389,13.389,0,0,0,1.68,6.369c4.694.978,9.564,1.809,14.554,2.44a21.588,21.588,0,0,1-.355-3.915A22.235,22.235,0,0,1,66.507-65.641ZM83.8-70.5A11.754,11.754,0,0,0,95.561-82.238,11.743,11.743,0,0,0,83.8-93.968a11.743,11.743,0,0,0-11.756,11.73A11.754,11.754,0,0,0,83.8-70.5Zm21.161,22.059c0-10.888-9.476-19.713-21.161-19.713S62.654-59.33,62.654-48.442a18.5,18.5,0,0,0,2.169,8.7c6.12.554,12.474.851,18.975.851s12.864-.3,18.983-.851A18.42,18.42,0,0,0,104.959-48.442ZM118-79.249c0-4.831-4.068-9.334-9.081-10.069s-9.077,3.046-9.077,8.458,4.068,9.922,9.077,10.076A8.6,8.6,0,0,0,118-79.249Zm-8.622,29.5a21.588,21.588,0,0,1-.355,3.915c4.99-.631,9.86-1.462,14.554-2.44a13.389,13.389,0,0,0,1.68-6.369c0-7.72-7.316-14.113-16.338-14.285a15.428,15.428,0,0,0-7.88,1.98A22.235,22.235,0,0,1,109.38-49.753Z" transform="translate(-41.289 94.968)" fill="none" stroke="#ff5246" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <button className="mini_button flex flex-row font-normal px-3 mt-3 w-64 text-left">
              <p>
                LEADERSHIP DEVELOPMENT <span className="mini_svg"> &#9654;</span>
              </p>
            </button>
          </div>


          {/* Tech& Dev button */}
          <div className="w-1/3 flex flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" width="60.541" height="53.584" viewBox="0 0 60.541 53.584">
              <g id="Group_2155" data-name="Group 2155" transform="translate(-201.749 100.729)">
                <path id="Path_500" data-name="Path 500" d="M239.171-95.434a1.262,1.262,0,0,0-1.261,1.262,1.261,1.261,0,0,0,1.261,1.261,1.261,1.261,0,0,0,1.262-1.261A1.262,1.262,0,0,0,239.171-95.434Z" transform="translate(6.388 0.78)" fill="#8a8a8a" stroke="#db5935" stroke-width="1"/>
                <path id="Path_501" data-name="Path 501" d="M246.241-95.434a1.262,1.262,0,0,0-1.262,1.262,1.261,1.261,0,0,0,1.262,1.261,1.261,1.261,0,0,0,1.262-1.261A1.262,1.262,0,0,0,246.241-95.434Z" transform="translate(7.672 0.78)" fill="#8a8a8a" stroke="#db5935" stroke-width="1"/>
                <line id="Line_371" data-name="Line 371" x1="58.541" transform="translate(202.749 -88.036)" fill="none" stroke="#db5935" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <rect id="Rectangle_1748" data-name="Rectangle 1748" width="58.541" height="51.584" transform="translate(202.749 -99.729)" fill="none" stroke="#db5935" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <line id="Line_372" data-name="Line 372" x1="4.88" y2="22.826" transform="translate(230.105 -79.046)" fill="none" stroke="#db5935" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_502" data-name="Path 502" d="M234.828-79.056l9.41,7.667-9.41,7.667" transform="translate(5.828 3.756)" fill="none" stroke="#db5935" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_503" data-name="Path 503" d="M221.657-79.056l-9.41,7.667,9.41,7.667" transform="translate(1.726 3.756)" fill="none" stroke="#db5935" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </g>
            </svg>
            <button className="mini_button flex flex-row font-normal px-3 mt-3 w-64 text-left">
              <p>
                TECHNOLOGY & DEVELOPMENT <span className="mini_svg"> &#9654;</span>
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
              COMPLIANCE <span className="mini_svg">  &#9654;</span>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Learn;
