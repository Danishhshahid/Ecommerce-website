"use client";

import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import React from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/features/cart";
import { BsCart3 } from "react-icons/bs";
import { StaticImageData } from "next/image";

interface cartItem{
  id: number;
  title: string;
  img: string[] | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string;
  size: string;
  qty: number;
  discount: number | undefined;
  color: string;
}

const AddToCartToastify = ({cartItem} :{cartItem : cartItem}) => {
  const notify = () =>
    toast.success("Product Added To Cart Successfuly !", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
        const dispatch = useAppDispatch()
    
  return (
    <>
    <div className="w-fit"  onClick={()=>dispatch(addToCart(cartItem))}>
      {/* <button onClick={notify}>Notify!</button> */}
      <Button  onClick={notify} className='w-[120px] rounded-3xl mt-4'>
                  <BsCart3 />
                   Add to cart
                </Button>
     
    </div>
     <ToastContainer
     position="bottom-right"
     autoClose={100}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable={false}
     pauseOnHover={false}
     theme="light"
     transition={Flip}
   />
   </>
  );
};

export default AddToCartToastify;
