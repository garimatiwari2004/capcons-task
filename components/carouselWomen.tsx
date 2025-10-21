"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function CarouselWomen() {
  const slides = [
  {
    src: "/assets/landingPage/womentee.png",
    title: "Nike Dri-FIT ADV Run Division",
    price: "₹ 3895",
    description: "Women's Short sleeve",
  },
  {
    src: "/assets/landingPage/leggings.png",
    title: "Nike Dri-FIT Challenger",
     price: "₹ 2495",
    description: "Women's Leggings",
  },
  {
    src: "/assets/landingPage/womentee.png",
    title: "Nike Dri-FIT ADV Run Division",
    price: "₹ 3895",
    description: "Women's Short sleeve",
  },
  {
    src: "/assets/landingPage/leggings.png",
    title: "Nike Dri-FIT Challenger",
     price: "₹ 2495",
    description: "Women's Leggings",
  },
];

  return (
    <div className="w-full  mx-auto py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        
        loop
        className="rounded-2xl "
        breakpoints={{
          0: {
            slidesPerView: 1, // mobile: 1 slide
          },
          640: {
            slidesPerView: 2, // tablet: 2 slides
          }
          
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl shadow-md flex flex-col items-center bg-white p-4">
              <Image
                src={slide.src}
                alt={slide.title}
                width={400}
                height={300}
                className="object-cover w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg"
              />
              <div className="flex justify-between w-full text-black p-4">
              <h3 className="mt-4 text-lg font-semibold">{slide.title}</h3>
              <h3 className="mt-4 text-lg font-semibold">{slide.price}</h3>
              </div>
              <p className="text-gray-500 text-sm mt-1 text-left w-full px-4">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}
