import Link from 'next/link';
import React from 'react';
import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";



const Header = () => {
  return (
    <div className="w-full flex h-[60px] text-black mt-3 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full h-full">
        <div className="w-full h-full flex justify-between items-center">
          {/* Left Nike Icon */}
          <div className="text-4xl sm:text-5xl lg:text-6xl">
            <Link href={"/"}> <SiNike /></Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:block">
            <ul className="flex gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
              <li><Link href="/featuredPage">News & Featured</Link></li>
              <li><Link href="/allproducts">Men</Link></li>
              <li><Link href="/allproducts">Women</Link></li>
              <li><Link href="/allproducts">Kids</Link></li>
              <li><Link href="/allproducts">Sale</Link></li>
              <li><Link href="/allproducts">SNKRS</Link></li>
            </ul>
          </div>

          {/* Search, Heart, and Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Input */}
            <div className="flex items-center rounded-3xl bg-gray-100 px-2 sm:px-4 py-1">
              <Link href="/">
                <CiSearch className="text-xl sm:text-2xl" />
              </Link>
              <Input 
                placeholder="Search" 
                className="outline-0 bg-transparent border-0 text-sm sm:text-base w-[80px] sm:w-[150px] lg:w-[200px]" 
              />
            </div>

            {/* Heart Icon */}
            <Link href="/">
              <FaRegHeart className="text-xl sm:text-2xl" />
            </Link>

            {/* Cart Icon */}
            <Link href="/Cartpage">
              <IoBagHandleOutline className="text-xl sm:text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
