"use client";
import React, { useState } from "react";
import Image from "next/image";

const Room = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/pictures/bedroom1.png", alt: "Bedroom Inspiration 1", title: "01", description: "Bed Room", subtitle: "Inner Peace" },
    { src: "/pictures/bedroom2.png", alt: "Bedroom Inspiration 2", title: "02", description: "Living Room", subtitle: "Comfort & Style" },
    { src: "/pictures/bedroom3.png", alt: "Bedroom Inspiration 3", title: "03", description: "Office", subtitle: "Productivity Zone" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-orange-50 min-h-screen py-10 px-4 sm:py-20 sm:px-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
       
        <div className="text-left mb-10 lg:mb-0 lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
            50+ Beautiful Rooms <br /> Inspiration
          </h1>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="bg-red-600 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-lg sm:text-xl rounded-lg hover:bg-red-600 transition duration-300">
            Explore More
          </button>
        </div>

        <div className="relative w-full sm:max-w-[450px] lg:max-w-[350px]">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto">
            {images.map((image, index) => {
              const position = (index - activeIndex + images.length) % images.length;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`absolute w-full h-full transition-all duration-500 cursor-pointer`}
                  style={{
                    transform: isActive
                      ? "translateX(0) scale(1)"
                      : position === 1
                      ? "translateX(50%) scale(0.85)"
                      : "translateX(100%) scale(0.7)",
                    opacity: position <= 2 ? 1 : 0,
                    zIndex: images.length - position,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      className="rounded-lg object-cover"
                    />
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-lg transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">{image.title}</h2>
                      <p className="text-sm sm:text-lg lg:text-2xl text-gray-200">{image.description}</p>
                      <p className="text-xs sm:text-lg lg:text-xl text-gray-400">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 lg:left-0 top-1/2 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-full hover:bg-slate-400 transition duration-300 shadow-lg"
            style={{ zIndex: 10 }}
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

      
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 lg:right-0 top-1/2 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-full hover:bg-slate-400 transition duration-300 shadow-lg"
            style={{ zIndex: 10 }}
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
