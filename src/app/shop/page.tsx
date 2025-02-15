"use client";
import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      image: "/pictures/Lolita.png",
    },
    {
      name: "Respira",
      description: "Outdoor Bar Table and Stool",
      price: "Rp 500.000",
      discount: "-50%",
      label: "New",
      image: "/pictures/Respira.jpg",
    },
  ];

  const repeatedProducts = [...products, ...products, ...products, ...products];

  const Dis = () => {
    return (
      <div className="bg-orange-100 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">High Quality</h2>
            <p className="text-sm text-black mt-2">Crafted from top materials</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Free Shipping</h2>
            <p className="text-sm text-black mt-2">On orders over $150</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Order Over $150</h2>
            <p className="text-sm text-black mt-2">Get free shipping</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Warranty Protection</h2>
            <p className="text-sm text-black mt-2">Over 2 years</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <IoMdClose size={24} className="text-gray-700" />
          </button>
          <div className="mt-12">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block text-gray-700 hover:text-gray-500 font-bold py-2" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="block text-gray-700 hover:text-gray-500 font-bold py-2" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block text-gray-700 hover:text-gray-500 font-bold py-2" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-gray-700 hover:text-gray-500 font-bold py-2" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="bg-white px-4 py-4 shadow-md relative">
        <div className="container mx-auto flex justify-between items-center">
          
        
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 absolute right-4"
          >
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>

          <div className="ml-0 lg:ml-0">
            <Image
              src="/pictures/logo.png"
              alt="Furniro Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-10">
              <li><Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link></li>
              <li><Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4 mr-6">
            <Link href="/search">
              <IoIosSearch size={24} className="text-gray-700 hover:text-gray-500" />
            </Link>
            <Link href="/favorites">
              <FaRegHeart size={24} className="text-gray-700 hover:text-gray-500" />
            </Link>
            <Link href="/cart">
              <IoCartOutline size={24} className="text-gray-700 hover:text-gray-500" />
            </Link>
            <Link href="/profile">
              <RiUser2Fill size={24} className="text-gray-700 hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </header>

      <div className="relative h-96">
        <Image
          src="/pictures/hero1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 container mx-auto text-center text-black py-36">
          <h1 className="text-5xl font-bold">Shop</h1>
        </div>
      </div>

      <div className="bg-orange-100 container mx-auto p-3">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-4 font-bold mb-4 sm:mb-0">
            <span>Show</span>
            <select className="p-2 border rounded">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>

          <div className="flex items-center space-x-4 font-bold">
            <label>Sort By</label>
            <select className="p-2 border rounded">
              <option>Default</option>
              <option>-30% Discount</option>
              <option>-50% Discount</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {repeatedProducts.map((product, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden relative group">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-64"
              />

              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex justify-center font-bold space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-orange-400 p-2 rounded-full  shadow-lg hover:bg-orange-400 transition-colors duration-200">
                  <FaShareAlt size={18} />
                </button>
                <button className="bg-white text-orange-400 p-2 rounded-full  shadow-lg hover:bg-orange-400 transition-colors duration-200">
                  <MdOutlineCompareArrows size={18} />
                </button>
                <button className="bg-white text-orange-400 p-2 rounded-full shadow-lg hover:bg-orange-400 transition-colors duration-200">
                  <AiOutlineLike size={18} />
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-orange-400 py-3 px-6 font-medium shadow-lg hover:bg-orange-300 hover:text-white transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
              

              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-black">{product.price}</span>
                  <span className="text-sm text-black">{product.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 py-8">
        <button className="bg-yellow-700 text-black py-2 px-6 rounded-full hover:bg-yellow-400">
          1
        </button>
        <button className="bg-yellow-200 text-black py-2 px-6 rounded-full hover:bg-yellow-400">
          2
        </button>
        <button className="bg-yellow-200 text-black py-2 px-6 rounded-full hover:bg-yellow-400">
          3
        </button>
        <button className="bg-yellow-200 text-black py-2 px-6 rounded-full hover:bg-yellow-400">
          Next
        </button>
      </div>

      <Dis />

      <footer className="bg-gray-100 text-black py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Funiro</h3>
            <p className="text-sm font-medium">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-400 font-bold">Home</Link></li>
              <li><Link href="/shop" className="hover:text-gray-400 font-bold">Shop</Link></li>
              <li><Link href="/returns" className="hover:text-gray-400 font-bold">Payment Options</Link></li>
              <li><Link href="/about" className="hover:text-gray-400 font-bold">About</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-400 font-bold">Privacy Policies</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400 font-bold">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400 font-bold">Return</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Help</h3>
            <p className="text-sm">Enter Your Email Address</p>
            <input type="email" placeholder="Email Address" className="p-2 w-full mt-2 rounded-md" />
            <button className="bg-gray-400 text-black p-2 w-full mt-2 rounded-md">SUBSCRIBE</button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-sm">0322-3333-444</p>
          </div>
        </div>

        <div className="bg-gray-200 py-4 text-center text-sm font-medium mt-8">
          <p>2023 Furniro. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
