import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="relative">
      <Navbar />

      
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/pictures/hero.jpeg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />

        <div className="absolute top-1/4 sm:top-1/3 md:top-1/4 right-4 sm:right-8 md:right-10 transform text-[#bc8a14] bg-[#fff3e3] p-6 sm:p-8 md:p-12 shadow-lg max-w-[90%] sm:max-w-[80%] text-left">
          <h6 className="text-xl text-black font-semibold sm:text-lg md:text-xl">New Arrival</h6>
          <h3 className="text-3xl sm:text-2xl md:text-5xl font-bold mt-2">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-black mt-4 text-lg sm:text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolore
          </p>
          <button className="buyBtn mt-6 py-2 px-6  bg-[#907026] text-white font-semibold hover:bg-[#5b3e33]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
