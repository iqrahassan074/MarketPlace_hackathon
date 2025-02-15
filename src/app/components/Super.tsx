'use client';

import React from 'react';
import Image from 'next/image';
import { FaShareAlt } from 'react-icons/fa';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';

const Super = () => {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      label: "New",
      image: "/pictures/Syltherine.png",
    },
    {
      name: "Leviosa",
      description: "Stylish Cafe Chair",
      price: "Rp 2.500.000",
      discount: "-30%",
      label: "New",
      image: "/pictures/leviosa.png",
    },
    {
      name: "Lolito",
      description: "Luxury Sofa",
      price: "Rp 7.000.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Grifo.png",
    },
    {
      name: "Respira",
      description: "Outdoor Bar Table and Stool",
      price: "Rp 500.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Grifo.png",
    },
    {
      name: "Grifo",
      description: "Night Lamp",
      price: "Rp 1.500.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Grifo.png",
    },
    {
      name: "Muggo",
      description: "Small Mug",
      price: "Rp 150.000",
      discount: "-30%",
      label: "New",
      image: "/pictures/leviosa.png",
    },
    {
      name: "Pingky",
      description: "Cute Bed Set",
      price: "Rp 7.000.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Syltherine.png",
    },
    {
      name: "Potty",
      description: "Minimalist Flower Pot",
      price: "Rp 500.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Syltherine.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Products</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </div>
              <div className="absolute top-2 right-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">
                {product.label}
              </div>
 
               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
                 <div className="flex space-x-4">
                   <button className="bg-white  text-orange-300 p-2 rounded-full  border-red-400 shadow-lg  transition-colors duration-200">
                    <MdOutlineCompareArrows size={18} />
                   </button>
                   <button className="bg-white  text-orange-300 p-2 rounded-full  border-red-400 shadow-lg  transition-colors duration-200">
                     <AiOutlineLike size={18} />
                   </button>
                   <button className="bg-white text-orange-300 p-2 rounded-full  border-red-400 shadow-lg   transition-colors duration-200">
                     <FaShareAlt size={18} />
                   </button>
                 </div>
                 <button className="bg-white text-orange-300 py-3 px-6 font-medium shadow-lg hover:bg-orange-300 hover:text-white transition-colors duration-200">
                   Add to Cart
                 </button>
               </div>
             </div> 

            <div className="mt-4">
              <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm sm:text-base text-gray-500 font-medium">{product.description}</p>
              <p className="text-md sm:text-lg text-gray-700 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-gray-200 text-red-700 font-bold border border-red-500 px-8 py-2 rounded hover:bg-red-500 hover:text-white transition duration-200">
          See More
        </button>
      </div>
    </div>
  );
};

export default Super;
