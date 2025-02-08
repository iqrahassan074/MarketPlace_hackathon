"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5"; 
import { FaPhone } from "react-icons/fa";     
import { IoTimeSharp } from "react-icons/io5"; 
import { IoMdClose } from "react-icons/io";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
    
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />
      )}
      
     
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden`}>
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
          
          <div className="ml-0 lg:ml-0">
            <Image
              src="/pictures/logo.jpeg"
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

       
          <div className="flex items-center space-x-4">
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
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 ml-4"
          >
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </header>

      <div className="relative h-48 md:h-72 lg:h-96">
        <Image
          src="/pictures/hero1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Contact</h1>
        </div>
      </div>

      <div className="py-8 md:py-12 bg-slate-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center">Get In Touch With Us</h2>
            <p className="text-black text-center font-medium px-4">
              For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
            
            <div className="mt-8 space-y-6 px-4">
              <div className="flex items-start space-x-4">
                <IoLocation size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Address</h3>
                  <p className="text-black font-medium">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-black font-medium">Mobile: +(84) 546-6789</p>
                  <p className="text-black font-medium">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <IoTimeSharp size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Working Time</h3>
                  <p className="text-black font-medium">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-black font-medium">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">Contact Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-black mb-2 font-bold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-black mb-2 font-bold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-black mb-2 font-bold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject optional"
                  className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-black mb-2 font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 py-8 md:py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">High Quality</h2>
            <p className="text-sm text-black mt-2">Crafted from top materials</p>
          </div>

          <div className="text-center p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Free Shipping</h2>
            <p className="text-sm text-black mt-2">On orders over $150</p>
          </div>

          <div className="text-center p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Order Over $150</h2>
            <p className="text-sm text-black mt-2">Get free shipping</p>
          </div>

          <div className="text-center p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Warranty Protection</h2>
            <p className="text-sm text-black mt-2">Over 2 years</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 text-black py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <input 
              type="email" 
              placeholder="Email Address" 
              className="p-2 w-full mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" 
            />
            <button className="bg-gray-400 text-black p-2 w-full mt-2 rounded-md hover:bg-gray-500 transition duration-300">
              SUBSCRIBE
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-sm">0322-3333-444</p>
            <p className="text-sm">example@furniro.com</p>
          </div>
        </div>

        <div className="bg-gray-200 py-4 mt-8 text-center text-sm font-medium">
          <p>2023 Furniro. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
