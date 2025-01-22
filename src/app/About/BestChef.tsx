import React from 'react';
import { SiCodechef } from "react-icons/si";
import { PiBowlSteamBold } from "react-icons/pi";
import { IoIosMan } from "react-icons/io";




const Bestchef = () => {
  return (
    <section className="bg-black text-white py-12 px-6 sm:py-16 sm:px-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Why Choose us</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-12">
        <img
          src="/About4.svg"
          alt="Delicious Food"
          className="rounded-lg w-full max-w-6xl mx-auto"
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {/* Feature 1 */}
        <div>
          <div className="text-4xl mb-4">
            <span className="material-icons flex justify-center"><SiCodechef /> </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Best Chef</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
        {/* Feature 2 */}
        <div>
          <div className="text-4xl mb-4">
            <span className="material-icons flex justify-center"><PiBowlSteamBold /></span>
          </div>
          <h3 className="text-xl font-bold mb-2">120 Item Food</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
        {/* Feature 3 */}
        <div>
          <div className="text-4xl mb-4">
            <span className="material-icons flex justify-center"><IoIosMan /></span>
          </div>
          <h3 className="text-xl font-bold mb-2">Clean Environment</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bestchef;
