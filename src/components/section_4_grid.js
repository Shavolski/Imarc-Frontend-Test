import React from 'react';
import ReactDOM from 'react-dom';

//Grid section
function Grid() {
  return (
    <div className="flex mb-10 mx-48">
      <div className="grid_1 w-1/3 py-64 relative m-1">
        <div className="absolute bottom-0 right-0 h-20 w-full bg-1 font-semibold">
          <p className="pl-4 pt-2 text-white w-48">LEADERSHIP DEVELOPMENT</p>
          <p className="pl-4 text-sm">Leading with Vision</p>
        </div>
      </div>

      <div className="w-1/3">
        <div className="grid_2 h-1/2 px-2 py-32 my-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-2 font-semibold">
            <p className="pl-4 pt-2 text-white w-48">TECHNOLOGY & DEVELOPMENT</p>
            <p className="pl-4 text-sm">Developer</p>
          </div>
        </div>

        <div className="grid_3 h-1/2 px-2 py-32 my-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-3 font-semibold">
            <p className="pl-4 pt-2 text-white w-48">COMPLIANCE</p>
            <p className="pl-4 text-sm w-48">Work Place Harassment Training</p>
          </div>
        </div>
      </div>

      <div className="w-1/3 flex flex-col">
        <div className="grid_4 flex-1 px-4 m-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-3 font-semibold">
            <p className="pl-4 pt-2 text-white w-48">TECHNOLOGY & DEVELOPMENT</p>
            <p className="pl-4 text-sm">Security</p>
          </div>
        </div>
        <div className="grid_5 flex-1 px-4 mx-1 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full bg-2 font-semibold">
            <p className="pl-4 pt-2 text-white w-48">LEADERSHIP DEVELOPMENT</p>
            <p className="pl-4 text-sm">Management Essentials</p>
          </div>
        </div>
        <div className="flex-1 bg-gray-400 px-3 m-1 bg-4 relative">
          <div className="absolute bottom-0 right-0 h-20 w-full font-semibold">
            <p className="pl-4 pt-2 text-white w-48">COMPLIANCE</p>
            <p className="pl-4 text-sm">Compliance Training for the Federal Government</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
