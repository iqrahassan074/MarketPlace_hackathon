// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import { BsSuitHeart } from "react-icons/bs";
// import { RiUser2Fill } from "react-icons/ri";
// import { IoCartOutline } from "react-icons/io5";
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white px-4 py-4 shadow-md">
//       <div className="container mx-auto flex items-center justify-between md:justify-center">
      
//         <div className="flex justify-center items-center">
//           <Image
//             src="/pictures/logo.png" 
//             alt="Logo"
//             width={150}
//             height={50}
//           />
//         </div>

     
//         <ul className="hidden md:flex items-center space-x-10 justify-center flex-grow">
//           <li>
//             <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
//           </li>
//           <li>
//             <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
//           </li>
//           <li>
//             <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
//           </li>
//         </ul>

        
//         <div className="flex items-center space-x-6 justify-center md:space-x-10">
//           <Link href="/search">
//             <FaSearch size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/favorites">
//             <BsSuitHeart size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/cart">
//             <IoCartOutline size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/profile">
//             <RiUser2Fill size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//         </div>

        
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-500 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>

    
//       <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-100 px-4 py-2`}>
//         <ul className="space-y-4 text-center">
//           <li>
//             <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
//           </li>
//           <li>
//             <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
//           </li>
//           <li>
//             <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





















// "use client";  // Add this line at the top to mark this as a Client Component

// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import { BsSuitHeart } from "react-icons/bs";
// import { RiUser2Fill } from "react-icons/ri";
// import { IoCartOutline } from "react-icons/io5";
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white px-4 py-4 shadow-md">
//       <div className="container mx-auto flex items-center justify-between md:justify-center">
//         <div className="flex justify-center items-center">
//           <Image
//             src="/pictures/logo.png" 
//             alt="Logo"
//             width={150}
//             height={50}
//           />
//         </div>

//         <ul className="hidden md:flex items-center space-x-10 justify-center flex-grow">
//           <li>
//             <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
//           </li>
//           <li>
//             <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
//           </li>
//           <li>
//             <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
//           </li>
//         </ul>

//         <div className="flex items-center space-x-6 justify-center md:space-x-10">
//           <Link href="/search">
//             <FaSearch size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/favorites">
//             <BsSuitHeart size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/cart">
//             <IoCartOutline size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//           <Link href="/profile">
//             <RiUser2Fill size={24} className="text-gray-700 hover:text-gray-500" />
//           </Link>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-500 focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-100 px-4 py-2`}>
//         <ul className="space-y-4 text-center">
//           <li>
//             <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
//           </li>
//           <li>
//             <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
//           </li>
//           <li>
//             <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













"use client";

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { RiUser2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        <div className="flex justify-center items-center">
          <Image
            src="/pictures/logo.png" 
            alt="Logo"
            width={150}
            height={50}
          />
        </div>

        <ul className="hidden md:flex items-center space-x-10 justify-center flex-grow">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6 justify-center md:space-x-10">
          <Link href="/search">
            <FaSearch size={24} className="text-gray-700 hover:text-gray-500" />
          </Link>
          <Link href="/favorites">
            <BsSuitHeart size={24} className="text-gray-700 hover:text-gray-500" />
          </Link>
          <Link href="/cart">
            <IoCartOutline size={24} className="text-gray-700 hover:text-gray-500" />
          </Link>
          <Link href="/profile">
            <RiUser2Fill size={24} className="text-gray-700 hover:text-gray-500" />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-100 px-4 py-2`}>
        <ul className="space-y-4 text-center">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Shop</Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-500 font-bold transition duration-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; // Ensure this export is present
