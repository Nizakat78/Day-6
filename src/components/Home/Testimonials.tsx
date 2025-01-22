import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font relative">
      {/* Rotated Background Image */}
      <div
        className="absolute right-40 bottom-10 transform rotate-0 opacity-90 z-0"
        style={{
          backgroundImage: "url('/man2.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "300px",
          height: "300px",
        }}
      ></div>

      <div className="container px-5 py-24 mx-auto relative z-10">
        <h1 className="text-sm font-medium title-font text-yellow-400 italic mb-6 text-center">
          Testimonials
        </h1>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What our client are saying
        </h2>
        <div className="flex justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full md:w-1/2 relative">
            {/* Circular Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image
                src="Man.svg"
                alt="testimonial"
                width={20}
                height={20}
                className="rounded-full w-20 h-20 border-4 border-white shadow-md"
              />
            </div>
            {/* Testimonial Content */}
            <div className="mt-10 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-6 h-6 text-yellow-600 mx-auto mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>
              <div className="flex justify-center items-center space-x-1 mb-4">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-gray-300 text-lg">★</span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Alamin Hasan
                </h3>
                <p className="text-sm text-gray-500">Food Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
