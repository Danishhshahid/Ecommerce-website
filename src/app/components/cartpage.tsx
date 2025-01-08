import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart1 from "./../../../public/assets/cart1.png";
import cart2 from "./../../../public/assets/check (1).png"; // First item image
// New image for second item
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const Cartpage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-6">
      <div className="max-w-screen-lg w-full flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="lg:w-[60%] w-full flex flex-col gap-6">
          <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-xl font-bold">Free Delivery</h1>
            <p className="text-sm mt-2">
              Applies to orders of ₹ 14,000.00 or more.{" "}
              <Link href={"/"} className="underline font-bold">
                View Details
              </Link>
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Bag</h1>
            {/* Cart Item */}
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-4 border-b py-4"
              >
                <div className="w-full md:w-[50%] flex justify-center items-center">
                  {/* First Item Image */}
                  {idx === 0 && (
                    <Image
                      src={cart1}
                      alt="Cart Item"
                      className="max-w-[150px] max-h-[150px] object-contain"
                    />
                  )}
                  {/* Second Item Image */}
                  {idx === 1 && (
                    <Image
                      src={cart2} // New image for second item
                      alt="Cart Item"
                      className="max-w-[150px] max-h-[150px] object-contain"
                    />
                  )}
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex justify-between">
                    {/* Change Name for Second Item */}
                    <p className="text-lg font-medium">
                      {idx === 0
                        ? "MaxNike Air Max 97 SE"
                        : "Nike Air Max 97 SE"}{" "}
                      {/* Updated Name */}
                    </p>
                    {/* Change Price for Second Item */}
                    <p className="text-lg font-semibold">
                      ₹ {idx === 0 ? "3,895.00" : " 16 995.00"}
                    </p>
                  </div>
                  <div className="text-gray-600 text-sm">
                    <p>
                      {idx === 0 ? "Men's Shoes" : "Men's Shoes"}{" "}
                      {/* Updated Description */}
                    </p>
                    <p>
                      {idx === 0
                        ? "Men's Short-Sleeve Running Top"
                        : "Flat Pewter/Light Bone/Black/White"}
                    </p>{" "}
                    {/* Updated Description */}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex gap-2">
                      <p className="font-medium">Size:</p>
                      <p>{idx === 0 ? "L" : "8"}</p> {/* Updated Size */}
                    </div>
                    <div className="flex gap-2">
                      <p className="font-medium">Quantity:</p>
                      <p>1</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xl text-black">
                    <Link href={"/"}>
                      <FaRegHeart />
                    </Link>
                    <Link href={"/"}>
                      <RiDeleteBin6Line />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[30%] w-full flex flex-col gap-6 p-4 bg-gray-100 rounded-md">
          <h1 className="text-2xl font-bold">Summary</h1>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ 8,890.00</p> {/* Updated subtotal */}
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>₹ 8,890.00</p> {/* Updated total */}
          </div>
          <Link href={"/DynamicRoutes/checkout"}>
            <Button className="rounded-full w-full py-3 text-sm font-semibold bg-green-600 text-white">
              Member Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
