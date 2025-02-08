import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-whitecmd
     py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">BROWSE THE RANGE</h1>
        <p className="text-gray-600 mt-4 text-sm font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <Image
            src="/pictures/furniture3.png"
            alt="Dinning"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="mt-4 text-lg font-bold text-gray-700">DINNING</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/pictures/living.jpeg"
            alt="Living"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="mt-4 text-lg font-bold text-gray-700">LIVING</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/pictures/bedroom.jpeg"
            alt="Bedroom"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="mt-4 text-lg font-bold text-gray-700">BEDROOM</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

