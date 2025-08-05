import React from "react";
import img1 from "./../../public/pic1.jpg"; // Top image
import img2 from "./../../public/pic2.jpg"; // Middle image
import img3 from "./../../public/experience.jpg"; // Bottom image

export default function MaterialsSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
      {/* Left Text Content */}
      <div className="max-w-md">
        <p className="uppercase text-sm font-semibold tracking-widest text-orange-500 mb-2">
          Materials
        </p>
        <h2 className="text-3xl font-bold mb-4 leading-snug">
          Very Serious Materials For Making Furniture
        </h2>
        <p className="text-gray-500 mb-6">
          Because porto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price.
        </p>
        <a
          href="#"
          className="text-orange-500 font-medium hover:underline flex items-center gap-1"
        >
          More info <span>→</span>
        </a>
      </div>

      {/* Right Images */}
      <div className="relative">
        {/* Background rectangle */}
        <div className="absolute top-8 left-8 w-full h-full bg-gray-50 rounded-lg -z-10"></div>

        {/* Image layout */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img src={img1} alt="Material 1" className="rounded-lg shadow-lg" />
            <img src={img3} alt="Material 3" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex items-center h-full">
            <img src={img2} alt="Material 2" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
