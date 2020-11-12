import React from 'react';
import ReactDOM from 'react-dom';

//Grid section
function Grid() {
  return (
    <div className="flex mb-10 mx-48">
      <div className="grid_1 w-1/3 py-64 relative m-1">
        <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
          <p>ff</p>
          <p>ffr</p>
        </div>
      </div>

      <div className="w-1/3">
        <div className="grid_2 h-1/2 text-gray-700 text-center px-2 py-32 my-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
            <p>ff</p>
            <p>ffr</p>
          </div>
        </div>

        <div className="grid_3 h-1/2 text-gray-700 text-center px-2 py-32 my-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
            <p>ff</p>
            <p>ffr</p>
          </div>
        </div>
      </div>

      <div className="w-1/3 flex flex-col">
        <div className="grid_4 flex-1 text-gray-700 text-center px-4 m-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
            <p>ff</p>
            <p>ffr</p>
          </div>
        </div>
        <div className="grid_5 flex-1 text-gray-700 text-center px-4 mx-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
            <p>ff</p>
            <p>ffr</p>
          </div>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-3 m-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-gray-700">
            <p>ff</p>
            <p>ffr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
