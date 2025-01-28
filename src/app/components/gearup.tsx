"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BestsellingCard from "./ProductCard";
import { ProductType } from "../../../type/product";
import { client } from "@/sanity/lib/client";
import { bestofall } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  
  
} from "@/components/ui/carousel";

const Gearup = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [mensApi, setMensApi] = useState<CarouselApi | undefined>(); // Carousel API instance for Men's section
  const [womensApi, setWomensApi] = useState<CarouselApi | undefined>(); // Carousel API instance for Women's section
  const [mensSelectedIndex, setMensSelectedIndex] = useState(0); // Active slide index for Men's section
  const [womensSelectedIndex, setWomensSelectedIndex] = useState(0); // Active slide index for Women's section

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: ProductType[] = await client.fetch(bestofall);
        setProducts(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Autoplay functionality for Men's section
  useEffect(() => {
    if (!mensApi) return;

    const interval = setInterval(() => {
      mensApi.scrollNext(); // Move to the next slide
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [mensApi]);

  // Autoplay functionality for Women's section
  useEffect(() => {
    if (!womensApi) return;

    const interval = setInterval(() => {
      womensApi.scrollNext(); // Move to the next slide
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [womensApi]);

  // Handle slide change for Men's section
  useEffect(() => {
    if (!mensApi) return;

    mensApi.on("select", () => {
      setMensSelectedIndex(mensApi.selectedScrollSnap()); // Update active slide index
    });
  }, [mensApi]);

  // Handle slide change for Women's section
  useEffect(() => {
    if (!womensApi) return;

    womensApi.on("select", () => {
      setWomensSelectedIndex(womensApi.selectedScrollSnap()); // Update active slide index
    });
  }, [womensApi]);

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
        <div className="w-full flex flex-wrap justify-between gap-6">
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
                    onClick={() => mensApi?.scrollPrev()}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={() => mensApi?.scrollNext()}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>

              {/* Shadcn Carousel for Men's Section */}
              <Carousel
                setApi={setMensApi} // Set the carousel API instance
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true, // Enable smooth scrolling on touch devices
                }}
                className="w-full"
              >
                <CarouselContent>
                  {products.map((item, i) => {
                    const imageUrl = item.image
                      ? urlFor(item.image).url()
                      : "/assets/default-placeholder.png"; // Fallback to a placeholder image

                    return (
                      <CarouselItem
                        key={i}
                        className="basis-[80%] sm:basis-1/1 md:basis-1/2 lg:basis-1/2" // Adjust for mobile screens
                        >
                        <div className="transition-transform transform hover:scale-105">
                          <BestsellingCard
                            src={imageUrl}
                            alt={item.productName}
                            title={item.productName}
                            price={item.price}
                            category={item.description}
                            slug={item.slug.current}
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>

              {/* Custom Pagination Dots for Men's Section */}
              <div className="flex justify-center gap-2 mt-4">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => mensApi?.scrollTo(index)} // Scroll to the selected slide
                    className={`w-2 h-2 rounded-full transition-colors ${
                      mensSelectedIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
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
                    onClick={() => womensApi?.scrollPrev()}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={() => womensApi?.scrollNext()}
                    className="bg-gray-100 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full flex justify-center items-center text-lg sm:text-2xl hover:bg-gray-200"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>

              {/* Shadcn Carousel for Women's Section */}
              <Carousel
                setApi={setWomensApi} // Set the carousel API instance
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true, // Enable smooth scrolling on touch devices
                }}
                className="w-full"
              >
                <CarouselContent>
                  {products.map((item, i) => {
                    const imageUrl = item.image
                      ? urlFor(item.image).url()
                      : "/assets/default-placeholder.png"; // Fallback to a placeholder image

                    return (
                      <CarouselItem
                        key={i}
                        className="basis-[80%] sm:basis-1/1 md:basis-1/2 lg:basis-1/2" // Adjust for mobile screens
                      >
                        <div className="transition-transform transform hover:scale-105">
                          <BestsellingCard
                            src={imageUrl}
                            alt={item.productName}
                            title={item.productName}
                            price={item.price}
                            category={item.description}
                            slug={item.slug.current}
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>

              {/* Custom Pagination Dots for Women's Section */}
              <div className="flex justify-center gap-2 mt-4">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => womensApi?.scrollTo(index)} // Scroll to the selected slide
                    className={`w-2 h-2 rounded-full transition-colors ${
                      womensSelectedIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;