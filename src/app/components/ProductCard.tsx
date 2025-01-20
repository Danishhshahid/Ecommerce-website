import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/features/cart";
import BSCaddToCart from "./BSCaddToCart";

const BestsellingCard = (
  
  {
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description?: string;
  price: number;
  category?: string;
  slug: string;
}


) => {
  const dispatch = useAppDispatch()
  
  return (
    <div className="flex-shrink-0 flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6 max-w-sm">
      {/* Image Section */}
      <Link href={`/${category}/${slug}`}>
        <div className="w-full h-60 bg-gray-50 rounded-t-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={320}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col w-full">
          {/* Title and Price */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-800 truncate">{title}</p>
            <p className="text-sm font-semibold text-gray-900">${price}</p>
          </div>

          {/* Category and Description */}
          <div className="mt-2">
            {category && (
              <p className="text-sm text-gray-500">
                <span className="font-medium">{category}</span>
              </p>
            )}
            {description && (
              <p className="text-sm text-gray-500 break-words whitespace-normal">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
      {/* Action Buttons */}
      <div className="flex justify-center p-4 pt-0 gap-4">
       
        <BSCaddToCart slug={slug}/>
        <Button className="bg-black text-white hover:bg-gray-900 px-4 py-2">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default BestsellingCard;
