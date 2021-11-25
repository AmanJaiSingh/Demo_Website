import React from "react";
import { Link } from "react-router-dom";

export default function Shoping_Cart({ name, price, img, currentCount }) {
  return (
    <div class="m-5">
      <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
          <h1 class="text-md font-bold text-gray-800 uppercase dark:text-white">
            {name}
          </h1>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={img} alt="NIKE AIR" />

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 class="text-lg font-bold text-white">{price}</h1>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            +
          </button>
          <div class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-100 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            {currentCount}
          </div>
          <div class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-100 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            -
          </div>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
