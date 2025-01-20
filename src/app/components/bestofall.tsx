"use client";
import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BestsellingCard from "./ProductCard";
import { useAppSelector } from "../store/hooks";
import { StaticImageData } from "next/image";

const Bestofall = () => {
  const products = useAppSelector((state) => state.products);
  

  // Logic to filter bestselling products
  const bestsell = products.filter((product) => product.isBestSelling);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = 300; // Amount to scroll
    if (scrollContainerRef.current) {
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Best of Air Max</h1>
        <div className="flex items-center gap-2">
          <p className="text-sm sm:text-base">Shop</p>
          <button
            onClick={() => handleScroll("left")}
            className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Product Section */}
      <div
        ref={scrollContainerRef}
        className="w-full mt-2 flex h-[450px] gap-6 overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        {bestsell.map((item, i) => {
         let imageSrc: string = "";

         if (Array.isArray(item.img)) {
           imageSrc = item.img[0] || "";
         } else if (item.img && (item.img as StaticImageData).src) {
           imageSrc = (item.img as StaticImageData).src;
         } else {
           imageSrc = "/assets/default-placeholder.png";
         }

         return (
           <div
             key={i}
             className="transition-transform transform hover:scale-105 w-[350px]"
           >
             <BestsellingCard
               src={imageSrc}
               alt={item.title}
               title={item.title}
               price={item.price}
               category={item.description}
               slug={item.slug}
             />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bestofall;
