"use client";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BestsellingCard from "./ProductCard";
import { getProducts } from '../../app/store/features/product'; // Add this import
import { urlFor } from "@/sanity/lib/image";
import  SanityImageSource  from "@sanity/image-url";
import { useEffect, useRef, useState } from "react";
import { ProductType } from "../../../type/product";
import { client } from "@/sanity/lib/client";
import { bestofall } from "@/sanity/lib/queries";



const Bestofall = () => {

const [products,setproduct]=useState<ProductType[]>([])
const scrollContainerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  async function fetchProducts() {
    try {
      const fetchedProduct: ProductType[] = await client.fetch(bestofall);
      setproduct(fetchedProduct); 
      // console.log(setproduct)
      // Set the fetched products correctly
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  fetchProducts();
}, []);

  


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
        className="w-full mt-5 items-center flex h-auto gap-6 overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        {products.map((item, i) => {
  // const imageUrl = item.imageUrl || "/assets/default-placeholder.png";
  const imageUrl = item.image ? urlFor(item.image).url() : "/assets/default-placeholder.png"; // Fallback to a placeholder image


          return (
            <div
              key={i}
              className="transition-transform transform hover:scale-105 w-[350px]"
            >
              <BestsellingCard
               src={imageUrl}
                alt={item.productName}
                title={item.productName}
                price={item.price}
                category={item.description}
                slug={item.slug.current}
                product ={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bestofall;
