import React from "react";
import sofaImage from "./../../public/experience.jpg"; // Vite or CRA will bundle this

export default function ExperienceSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
      {/* Left Image */}
      <div className="relative">
        {/* Layered background cards */}
        <div className="absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-lg -z-10"></div>
        <div className="absolute top-6 left-6 w-full h-full bg-gray-50 rounded-lg -z-20"></div>

        <img
          src={sofaImage}
          alt="Sofa"
          className="rounded-lg shadow-lg relative z-10"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-md">
        <p className="uppercase text-sm font-semibold tracking-widest text-orange-500 mb-2">
          Experiences
        </p>
        <h2 className="text-3xl font-bold mb-4 leading-snug">
          We Provide You The Best Experience
        </h2>
        <p className="text-gray-500 mb-6">
          You don't have to worry about the result because all of these interiors
          are made by people who are professionals in their fields with an elegant
          and luxurious style and with premium-quality materials.
        </p>
        <a href="#" className="text-orange-500 font-medium hover:underline">
          More info
        </a>
      </div>
    </section>
  );
}
