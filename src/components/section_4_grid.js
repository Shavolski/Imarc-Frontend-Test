import React from 'react';
import ReactDOM from 'react-dom';

//Grid section
function Grid() {
  return (
    <div class="flex bg-gray-200 mb-10 mx-48">
      <div class="w-1/3 bg-gray-200">fff</div>

      <div class="w-1/3 bg-gray-200">
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-1 m-1">1</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-1 m-1">2</div>
      </div>

      <div class="w-1/3 bg-gray-200">
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-1 m-1">1</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-1 m-1">2</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-1 m-1">3</div>
      </div>
    </div>
  );
};

export default Grid;
