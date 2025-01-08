import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import heroData from "./../../Data/heroData.json";

const Hero = () => {
  const productdata = heroData[0];
  return (
    <div className="w-full h-auto mt-3 mb-6 flex flex-col">
      {/* Top Section */}
      <div className="w-full h-auto bg-slate-100 flex flex-col justify-center items-center px-4 py-3">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl text-center">
          {productdata.Heading1}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-center mt-2">
          {productdata.heading2}
          <Link
            href="/DynamicRoutes/allproducts"
            className="font-semibold underline"
          >
            {productdata.headinglink}
          </Link>
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-auto flex justify-center items-center my-6 px-4 sm:px-8">
        <Image
          src={productdata.Images}
          width={1400}
          height={600}
          alt="Hero Image"
          className="rounded-xl w-full max-w-[1400px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <p className="text-sm sm:text-base text-gray-600">First Look</p>
        <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-tight">
          {productdata.name}
        </h1>
        <p className="text-sm sm:text-base max-w-[800px] text-gray-700 mt-2">
          {productdata.description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Button className="rounded-3xl px-6 py-2 bg-black text-white hover:bg-gray-800">
            {productdata.ButtonName1}
          </Button>
          <Button className="rounded-3xl px-6 py-2 bg-black hover:bg-gray-300">
            {productdata.ButtonName2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
