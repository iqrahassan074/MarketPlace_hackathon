"use client"
import React from "react";
import Image from "next/image";

const Furni = () => {
  const sizes = [
    "w-full h-60",    
    "w-2/3 h-56",     
    "w-2/3 h-48",     
    "w-2/3 h-64",     
    "w-2/3 h-52",     
    "w-2/3 h-60",     
    "w-2/3 h-50",   
    "w-2/3 h-55",     
  ];

  const offsets = [
    "translate-y-0",
    "translate-y-2",
    "translate-y-4",
    "translate-y-3",
    "translate-y-1",
    "translate-y-2",
    "translate-y-1",
    "translate-y-3",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-600">Share your setup with</h2>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">#FuniroFurniture</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${offsets[index % offsets.length]}`}
          >
            <Image
              src={`/pictures/furniture${index + 1}.png`}
              alt={`Furniture ${index + 1}`}
              width={300}
              height={300}
              className={`${sizes[index % sizes.length]} object-cover shadow-lg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furni;
