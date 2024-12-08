import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import item1 from "./../../../public/assets/item1.png";
import item2 from "./../../../public/assets/item2.png";
import Image from 'next/image';

const Bestofall = () => {
  return (
    <div className="w-full h-auto flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full h-full flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Best of Air Max</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm sm:text-base">Shop</p>
            <Link href="/">
              <div className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200">
                <IoIosArrowBack />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200">
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          {[
            { src: item1, name: "Nike Air Max Pulse", price: "₹13995", category: "Women's Shoes" },
            { src: item1, name: "Nike Air Max Pulse", price: "₹13995", category: "Men's Shoes" },
            { src: item2, name: "Nike Air Max 97 SE", price: "₹16995", category: "Men's Shoes" },
          ].map((item, index) => (
            <div key={index} className="w-full h-[500px] flex flex-col">
              {/* Image Section */}
              <div className="w-full h-[80%] flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
                <Image src={item.src} alt={item.name} className="object-contain" />
              </div>

              {/* Product Info */}
              <div className="w-full h-[20%] flex flex-col justify-between mt-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm font-semibold">{item.price}</p>
                </div>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestofall;
