import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="relative bg-black pt-8 pb-6">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-black fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl text-red-500 font-semibold">
                Dont think Just order!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-red-500">
                Our Delivery is very safe covid-free.
              </h5>
              <div class="mt-6">
                <a href="https://www.instagram.com/rajput_amanjs/?hl=en">
                  <button
                    class="hover:bg-red-400 bg-red-200 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <img
                      src="https://s2.svgbox.net/social.svg?ic=instagram&color=000"
                      width="32"
                      height="32"
                    />
                  </button>
                </a>
                <a href="https://twitter.com/amanjaisingh1">
                  <button
                    class="hover:bg-red-400 bg-red-200 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <img
                      src="https://s2.svgbox.net/social.svg?ic=twitter&color=000"
                      width="32"
                      height="32"
                    />
                  </button>
                </a>
                <button
                  class="hover:bg-red-400 bg-red-200 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img
                    src="https://s2.svgbox.net/social.svg?ic=youtube"
                    width="32"
                    height="32"
                  />
                </button>
                <button
                  class="hover:bg-red-400 bg-red-200 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img
                    src="https://s2.svgbox.net/social.svg?ic=discord&color=000"
                    width="32"
                    height="32"
                  />
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-red-400 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Github
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-red-400 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a class="text-red-100 hover:text-red-500 font-semibold block pb-2 text-sm">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-400" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-white font-semibold py-1">
                Copyright © 2021 Kitchen-jungle
                <a class="text-white hover:text-gray-300"> Pvt limited</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
