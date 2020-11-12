import React from 'react';
import ReactDOM from 'react-dom';

//Grid section
function Grid() {
  return (
    <div class="flex bg-gray-200 mb-10 mx-48">
      <div class="w-1/3 bg-gray-400 m-1 py-64">full space</div>

      <div class="w-1/3 bg-gray-200">
        <div class="h-1/2 text-gray-700 text-center bg-gray-400 px-2 m-1 py-32">1</div>
        <div class="h-1/2 text-gray-700 text-center bg-gray-400 px-2 m-1 py-32">2</div>
      </div>

      <div class="w-1/3 flex flex-col bg-gray-200">
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 m-1">1</div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 m-1">2</div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 m-1">3</div>
      </div>
    </div>
  );
};

export default Grid;
