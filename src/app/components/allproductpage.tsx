"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { StaticImageData } from "next/image";
import BestsellingCard from "./ProductCard";
import { useAppSelector } from "../store/hooks";
import { ProductType } from "../../../type/product";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Allproductpage = () => {
  const [products,setproduct]=useState<ProductType[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProduct: ProductType[] = await client.fetch(allproducts);
        setproduct(fetchedProduct); 
        // console.log(setproduct)
        // Set the fetched products correctly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for the sidebar toggle

  return (
    <div className="w-full min-h-screen flex items-center overflow-hidden">
      <div className="w-full h-full m-6 flex flex-col">
        {/* Header Section */}
        <div className="w-full h-[50px] text-black flex items-center justify-between">
          <div className="text-black">
            <h1 className="text-2xl sm:text-xl md:text-2xl">New(500)</h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex justify-center items-center">
              <LuSettings2 className="text-xl sm:text-2xl md:text-3xl" />
            </div>
            <div className="flex justify-center items-center">
              <IoIosArrowForward className="hover:rotate-90 transition-transform duration-300 text-xl sm:text-2xl md:text-3xl" />
            </div>
            {/* Hamburger Menu Icon */}
            <div className="block lg:hidden">
              <IoIosMenu
                className="text-3xl cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle Sidebar
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex">
          {/* Sidebar (Filter Section) */}
          <div
            className={`lg:w-[20%] h-full bg-white shadow-md p-4 fixed top-0 left-0 z-10 lg:block transition-transform duration-300 ${
              isSidebarOpen ? "block" : "hidden"
            } lg:relative`}
          >
            {/* Category Section */}
            <div className="w-full h-auto flex flex-col">
              <p className="text-sm sm:text-base md:text-lg font-bold">
                Sort By
              </p>
              <ul className="flex flex-col gap-4 overflow-auto">
                <li>
                  <Link href={"/"}>Shoes</Link>
                </li>
                <li>
                  <Link href={"/"}>Sports Bras</Link>
                </li>
                <li>
                  <Link href={"/"}>Tops & T-Shirts</Link>
                </li>
                <li>
                  <Link href={"/"}>Hoodies & Sweatshirts</Link>
                </li>
                <li>
                  <Link href={"/"}>Jackets</Link>
                </li>
                <li>
                  <Link href={"/"}>Trousers & Tights</Link>
                </li>
                <li>
                  <Link href={"/"}>Shorts</Link>
                </li>
                <li>
                  <Link href={"/"}>Tracksuits</Link>
                </li>
                <li>
                  <Link href={"/"}>Jumpsuits & Rompers</Link>
                </li>
                <li>
                  <Link href={"/"}>Skirts & Dresses</Link>
                </li>
                <li>
                  <Link href={"/"}>Socks</Link>
                </li>
                <li>
                  <Link href={"/"}>Accessories & Equipment</Link>
                </li>
              </ul>
            </div>

            {/* Filter Section */}
            <div className="h-auto w-full mt-6">
              <div className="p-4 w-full max-w-sm bg-white shadow-md rounded-lg">
                <details className="mb-4 border-t-2">
                  <summary className="flex justify-between w-full items-center cursor-pointer text-lg font-semibold">
                    <div className="flex w-full justify-between items-center">
                      <h1>Gender</h1>
                      <p>
                        <IoIosArrowForward className="hover:rotate-90 transition-transform duration-300" />
                      </p>
                    </div>
                  </summary>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Men</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Women</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Unisex</span>
                    </label>
                  </div>
                </details>
                <details className="mb-4 border-t-2">
                  <summary className="flex justify-between w-full items-center cursor-pointer text-lg font-semibold">
                    <h1>Kids</h1>
                    <p>
                      <IoIosArrowForward className="hover:rotate-90 transition-transform duration-300" />
                    </p>
                  </summary>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Boys</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Girls</span>
                    </label>
                  </div>
                </details>
                <details>
                  <summary className="flex justify-between w-full items-center cursor-pointer text-lg font-semibold">
                    <h1>Price</h1>
                    <p>
                      <IoIosArrowForward className="hover:rotate-90 transition-transform duration-300" />
                    </p>
                  </summary>
                  <div className="mt-2 space-y-2 border-t-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Under ₹2,500.00</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>₹2,501.00 - ₹5,000.00</span>
                    </label>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Product Grid Section */}
          <div className="w-full lg:w-[80%] h-full pl-0 lg:pl-6 flex flex-col">
            <div className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((items, i) => {
                  const imageUrl = items.image ? urlFor(items.image).url() : "/assets/default-placeholder.png"; // Fallback to a placeholder image
                

                // if (Array.isArray(items.img)) {
                //   imageSrc = items.img[0] || "";
                // } else if (items.img && (items.img as StaticImageData).src) {
                //   imageSrc = (items.img as StaticImageData).src;
                // } else {
                //   imageSrc = "/assets/default-placeholder.png";
                // }

                return (
                  <div
                    key={i}
                    className="transition-transform transform hover:scale-105"
                  >
                    <BestsellingCard
                      src={imageUrl}
                      alt={items.productName}
                      title={items.productName}
                      price={items.price}
                      category={items.category}
                      slug={items.slug.current}
                      product={items}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproductpage;
