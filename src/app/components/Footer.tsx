import React from 'react';
import Link from 'next/link';  

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
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

      <div className="bg-gray-300 py-4 text-center text-sm font-light">
        <p>2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
