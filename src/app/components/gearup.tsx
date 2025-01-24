"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BestsellingCard from "./ProductCard";
import { ProductType } from "../../../type/product";
import { client } from "@/sanity/lib/client";
import { bestofall } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Gearup = () => {


  const [products,setproduct]=useState<ProductType[]>([])
  
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
  // const dispatch = useAppDispatch();
  const mensScrollContainerRef = useRef<HTMLDivElement>(null);
  const womensScrollContainerRef = useRef<HTMLDivElement>(null);
  // const products = useAppSelector((state) => state.products.products);
  // const status = useAppSelector((state) => state.products.status);
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // Logic to filter bestselling products
  // // const productdata = products.filter((product) => product.isGearUp);
  // if (status === "loading") {
  //   return <div>Loading products...</div>;
  // }

  // if (status === "failed" || products.length === 0) {
  //   return <div>No products available</div>;
  // }

 
  const handleScroll = (
    direction: "left" | "right",
    section: "mens" | "womens"
  ) => {
    const scrollAmount = 300; // Amount to scroll
    const scrollContainer =
      section === "mens"
        ? mensScrollContainerRef.current
        : womensScrollContainerRef.current;

    if (scrollContainer) {
      if (direction === "left") {
        scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full h-auto flex flex-col mt-6 px-4 sm:px-6 lg:px-12 mb-6">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="w-full h-auto flex items-center mb-4">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Gear Up
          </p>
        </div>

        {/* Content */}
        <div className="w-full flex flex-wrap justify-between">
          {/* Left Section (Men's) */}
          <div className="w-full md:w-[48%]">
            <div className="flex flex-col gap-4">
              {/* Navigation */}
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm sm:text-base font-semibold">
                  Shop Men&#39;s
                </p>
                <div className="flex gap-6">
                  <button
                    onClick={() => handleScroll("left", "mens")}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={() => handleScroll("right", "mens")}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>

              {/* Render Men's Items */}
              <div
                ref={mensScrollContainerRef}
                className="w-full mt-2 flex h-auto items-center  gap-6 overflow-x-auto overflow-y-hidden scroll-smooth"
              >
                {products.map((item, i) => {
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
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section (Women's) */}
          <div className="w-full md:w-[48%]">
            <div className="flex flex-col gap-4">
              {/* Navigation */}
              <div className="flex justify-between items-center gap-6">
                <p className="text-sm sm:text-base font-semibold ml-4">
                  Shop Women&#39;s
                </p>
                <div className="flex gap-6">
                  <button
                    onClick={() => handleScroll("left", "womens")}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={() => handleScroll("right", "womens")}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>

              {/* Render Women's Items */}
              <div
                ref={womensScrollContainerRef}
                className="w-full mt-2 flex h-auto items-center gap-6 overflow-x-auto overflow-y-hidden scroll-smooth"
              >
                {products.map((item, i) => {
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
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
