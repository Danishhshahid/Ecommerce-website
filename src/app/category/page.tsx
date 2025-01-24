"use client"
import React, { useState, useEffect } from "react";
import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: Promise<{ category: string }> }) => {
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { category } = await params;
      setCategory(category);
    };

    fetchData();
  }, [params]);

  if (!category) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="w-full h-auto flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Pass the category wrapped in the params object to CategoryPage */}
      <CategoryPage params={{ category }} />
    </div>
  );
};

export default Category;
