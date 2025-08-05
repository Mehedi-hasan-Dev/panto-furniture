import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

// Testimonial Data (images must be in /public/testi/)
const testimonials = [
  {
    image: "/testi/bg1.jpg",
    name: "Bang Upin",
    location: "Pelanggan, Jakarta",
    text: "“Ternyata banyak hal yang bisa membuat kita nyaman dan terfikir, mantap!”",
    stars: 5,
    avatar: "/testi/pic1.jpg",
  },
  {
    image: "/testi/bg2.jpg",
    name: "Ibuk Sukijan",
    location: "Ibu Rumah Tangga",
    text: "“Masih Pantes, jika sekarang barang tinggal di sortir karena barang-barang yang terlihat mewah!”",
    stars: 5,
    avatar: "/testi/pic2.jpg",
  },
  {
    image: "/testi/bg3.jpg",
    name: "Mpak Ina",
    location: "Karyawan Swasta",
    text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.”",
    stars: 5,
    avatar: "/testi/pic1.jpg",
  },
  {
    image: "/testi/bg1.jpg",
    name: "Mpak Ina",
    location: "Karyawan Swasta",
    text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.”",
    stars: 5,
    avatar: "/testi/pic3.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <h3 className="text-orange-500 text-sm tracking-widest uppercase text-center mb-2">
        Testimonials
      </h3>
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Client Reviews
      </h2>

      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <button className="swiper-button-prev bg-white p-2 rounded-full shadow-md">
          <ChevronLeft className="text-gray-700" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <button className="swiper-button-next bg-white p-2 rounded-full shadow-md">
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
      <style>
        {`
          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none;
          }
        `}
      </style>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="p-6 text-center relative">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-4 border-white absolute -top-6 left-1/2 -translate-x-1/2"
                />
                <div className="mt-8">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                  <p className="mt-3 text-gray-600 text-sm italic">
                    {item.text}
                  </p>
                  <div className="mt-4 flex justify-center text-orange-400 text-lg">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
