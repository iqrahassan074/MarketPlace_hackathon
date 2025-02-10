"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white px-4 py-4 shadow-md relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="z-20">
            <Image
              src="/pictures/logo.png"
              alt="Furniro Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-10">
              <li><Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link></li>
              <li><Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
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

            <button 
              className="md:hidden z-20 text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

    
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
   
      {/* Hero Section */}
      <div className="relative h-48 md:h-96 ">
        <Image
          src="/pictures/hero1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-black">Blog</h1>
        </div>
      </div>

     
      <div className="flex flex-wrap container mx-auto py-6 md:py-12 px-4">
        
        <div className="w-full lg:w-3/4 lg:pr-8">
          <div className="space-y-8">
            
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-full max-w-xl mx-auto">
                <Image
                  src="/pictures/laptop.png"
                  alt="Laptop"
                  width={900}
                  height={600} 
                  className="w-full h-72 object-cover rounded-xl" 
                />
              </div>
              <h3 className="font-bold text-2xl mt-6">Going all-in with millennial design</h3>
              <p className="text-black font-medium text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
              <Link href="/posts/going-all-in-with-millennial-design" className="text-blue-800 font-bold mt-4 inline-block">Read more</Link>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-full max-w-xl mx-auto">
                <Image
                  src="/pictures/pen.jpg"
                  alt="Pen"
                  width={900}
                  height={600}  
                  className="w-full h-72 object-cover rounded-xl" 
                />
              </div>
              <h3 className="font-bold text-2xl mt-6">Exploring new ways of decorating</h3>
              <p className="text-black font-medium text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
              <Link href="/posts/exploring-new-ways-of-decorating" className="text-blue-800 font-bold mt-4 inline-block">Read more</Link>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-full max-w-xl mx-auto">
                <Image
                  src="/pictures/book.png"
                  alt="Book"
                  width={900}
                  height={600}  
                  className="w-full h-72 object-cover rounded-xl" 
                />
              </div>
              <h3 className="font-bold text-2xl mt-6">Handmade pieces that took time to make</h3>
              <p className="text-black font-medium text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
              <Link href="/posts/handmade-pieces-that-took-time-to-make" className="text-blue-800 font-bold mt-4 inline-block">Read more</Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="mb-6">
            <input
             type="text"
             placeholder="Search..."
             className="w-full p-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out hover:border-blue-400"
              />
          </div>

           <div className="mb-6">
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <ul>
              <li className="mb-2 font-bold"><Link href="/categories/crafts">Crafts</Link> <span className="text-black font-medium">(2)</span></li>
              <li className="mb-2 font-bold"><Link href="/categories/design">Design</Link> <span className="text-black">(8)</span></li>
              <li className="mb-2 font-bold"><Link href="/categories/handmade">Handmade</Link> <span className="text-black">(7)</span></li>
              <li className="mb-2 font-bold"><Link href="/categories/interior">Interior</Link> <span className="text-black">(1)</span></li>
              <li className="mb-2 font-bold"><Link href="/categories/wood">Wood</Link> <span className="text-black">(6)</span></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="font-bold text-xl mb-4">Recent Posts</h2>
            <ul className="space-y-6">
          
              <li className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/pictures/laptop.png"
                    alt="Laptop"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-lg">Going all-in with millennial design</h3>
                  <p className="text-gray-500 text-sm ">03 Aug 2022</p>
                </div>
              </li>

              <li className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/pictures/pen.jpg"
                    alt="Pen"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-lg">Exploring new ways of decorating</h3>
                  <p className="text-gray-500 text-sm">03 Aug 2022</p>
                </div>
              </li>

              <li className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/pictures/book.png"
                    alt="Book"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-lg">Handmade pieces that took time to make</h3>
                  <p className="text-gray-500 text-sm">03 Aug 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 md:space-x-4 mt-8 mb-10 px-4">
        <button className="px-3 md:px-4 py-2 bg-yellow-700 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200">1</button>
        <button className="px-3 md:px-4 py-2 bg-yellow-200 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200">2</button>
        <button className="px-3 md:px-4 py-2 bg-yellow-200 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200">3</button>
        <button className="px-3 md:px-4 py-2 bg-yellow-200 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200">Next</button>
      </div>

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

export default Blog;
















































