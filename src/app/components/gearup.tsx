import React from "react";
import G1 from "./../../../public/assets/g1.png";
import G2 from "./../../../public/assets/g2.png";
import G3 from "./../../../public/assets/g3.png";
import G4 from "./../../../public/assets/g4.png";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Gearup = () => {
  return (
    <div className="w-full h-auto flex flex-col px-4 sm:px-6 lg:px-12 mb-6">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="w-full h-auto flex items-center mb-4">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">Gear Up</p>
        </div>
        {/* Content */}
        <div className="w-full flex flex-wrap gap-6">
          {/* Left Section */}
          <div className="w-full md:w-[48%]">
            <div className="flex flex-col gap-4">
              {/* Navigation */}
              <div className="flex justify-end items-center gap-2">
                <p className="text-sm sm:text-base">Shop Men&#39;s</p>
                <Link href={"/"}>
                  <div className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xl">
                    <IoIosArrowBack />
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xl">
                    <IoIosArrowForward />
                  </div>
                </Link>
              </div>
              {/* Items */}
              <div className="flex flex-wrap justify-between gap-6">
                <div className="w-full sm:w-[48%]">
                  <Image src={G1} alt="item1" />
                  <div className="flex justify-between mt-2">
                    <p>Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p>₹3895</p>
                  </div>
                  <p className="text-gray-500 text-sm">Men&#39;s Short-Sleeve Running Top</p>
                </div>
                <div className="w-full sm:w-[48%]">
                  <Image src={G2} alt="item2" />
                  <div className="flex justify-between mt-2">
                    <p>Nike Dri-FIT Challenger</p>
                    <p>₹2495</p>
                  </div>
                  <p className="text-gray-500 text-sm">Men&#39;s 2-in-1 Versatile Shorts</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-[48%]">
            <div className="flex flex-col gap-4">
              {/* Navigation */}
              <div className="flex justify-end items-center gap-2">
                <p className="text-sm sm:text-base">Shop Women&#39;s</p>
                <Link href={"/"}>
                  <div className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xl">
                    <IoIosArrowBack />
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xl">
                    <IoIosArrowForward />
                  </div>
                </Link>
              </div>
              {/* Items */}
              <div className="flex flex-wrap justify-between gap-6">
                <div className="w-full sm:w-[48%]">
                  <Image src={G3} alt="item3" />
                  <div className="flex justify-between mt-2">
                    <p>Nike Dri-FIT ADV Run Division</p>
                    <p>₹5295</p>
                  </div>
                  <p className="text-gray-500 text-sm">Women&#39;s Long-Sleeve Running Top</p>
                </div>
                <div className="w-full sm:w-[48%]">
                  <Image src={G4} alt="item4" />
                  <div className="flex justify-between mt-2">
                    <p>Nike Fast</p>
                    <p>₹3795</p>
                  </div>
                  <p className="text-gray-500 text-sm">Women&#39;s 7/8 Leggings with Pockets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
