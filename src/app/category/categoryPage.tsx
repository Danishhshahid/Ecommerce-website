"use client";

import BestsellingCard from "./../components/ProductCard";
import { useAppSelector } from "../store/hooks";
import React from "react";
import { StaticImageData } from "next/image";

const CategoryPage = ({
  params,
}: {
  params: { category: string };
}) => {
  const { category } =params;

  // Fetch the products from the Redux store
  const product = useAppSelector((state) => state.products.products);

  // Filter products based on category
  const bestsell = product.filter((val) => val.category === category);

  return (
    <div>
      {" "}
      {/* Header Section */}
      {/* Header Section */}
      <div className="flex justify-center items-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mx-5 mb-6 capitalize">
          {category}
        </h1>
      </div>
      {/* Product Grid Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {bestsell.map((item, i) => {
          let imageSrc = item.imageUrl;

          // if (Array.isArray(item.imageUrl)) {
          //   imageSrc = item.imageUrl || "";
          // } else if (item.imageUrl && (item.imageUrl as StaticImageData).src) {
          //   imageSrc = (item.img as StaticImageData).src;
          // } else {
          //   imageSrc = "/assets/default-placeholder.png";
          // }

          return (
            <div
              key={i}
              className="transition-transform transform hover:scale-105 w-[350px]"
            >
              <BestsellingCard
                src={imageSrc}
                alt={item.productName}
                title={item.productName}
                price={item.price}
                category={item.category}
                description={item.description}
                slug={item.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
