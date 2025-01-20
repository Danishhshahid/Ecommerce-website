"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { delItem } from "../store/features/cart";

const Cartpage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const total = cartArray.reduce((total, array) => {
    const discount = array.discount ?? 0; // Use 0 if discount is undefined
    return total + (array.price - (array.price * discount) / 100) * array.qty;
  }, 0);

  

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-6">
      <div className="max-w-screen-lg w-full flex flex-col lg:flex-row gap-6">
        {/* Check if cart is empty */}
        {cartArray.length === 0 ? (
          <div className="w-full flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            <Link href="/shop">
              <Button className="rounded-full px-6 py-3 text-sm font-semibold bg-green-600 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Left Section - Items */}
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
                {cartArray.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 border-b py-4"
                  >
                    <div className="w-full md:w-[50%] flex justify-center items-center">
                      {item.img && Array.isArray(item.img) ? (
                        <Image
                          src={item.img[0]} // Access the first image if it's an array
                          alt={item.title}
                          width={200}
                          height={200}
                          className="max-w-[150px] max-h-[150px] object-contain"
                        />
                      ) : (
                        <Image
                          src={item.img as StaticImageData} // Assume it's a StaticImageData
                          alt={item.title}
                          width={200}
                          height={200}
                          className="max-w-[150px] max-h-[150px] object-contain"
                        />
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium">{item.title}</p>
                        <p className="text-lg font-semibold">₹ {item.price}</p>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>{item.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          className="w-6 h-6 border-2 rounded-full border-gray-600 focus:outline-black active:border-none focus:border-black"
                          style={{ backgroundColor: item.color }}
                        ></Button>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex gap-2">
                          <p className="font-medium">Size:</p>
                          <p>{item.size}</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-medium">Quantity:</p>
                          <p>{item.qty}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-xl text-black">
                        <Link href={"/"}>
                          <FaRegHeart />
                        </Link>
                        
                          <RiDeleteBin6Line onClick={()=> dispatch(delItem(item.uuid))}  />
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Summary */}
            <div className="lg:w-[30%] w-full flex flex-col gap-6 p-4 bg-gray-100 rounded-md">
              <h1 className="text-2xl font-bold">Summary</h1>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{`$ ${total.toFixed(2)}`}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>{`(0)`}</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Link href={"/checkout"}>
                <Button className="rounded-full w-full py-3 text-sm font-semibold bg-green-600 text-white">
                  Member Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
