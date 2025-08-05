import React from "react";
import { Search } from "lucide-react"; 

const Banner = () => {
  return (
    <section className='bg-[url("/Banner.png")] bg-cover bg-center w-full'>
      <div className="flex flex-col justify-center items-center pt-24 md:pt-[168px] pb-[300px] md:pb-[524px] px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white leading-tight">
          Make your interior more <br />
          minimalistic & modern
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 leading-relaxed">
          Turn your room with Panto into a lot more minimalist <br />
          and modern with ease and speed
        </p>

        
        <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center px-4 py-2 w-[300px] sm:w-[400px]">
          <input
            type="search"
            placeholder="Search furniture"
            className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
          <button className="ml-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2">
            <Search size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
