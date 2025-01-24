

import React from "react";
// import { Product } from "../utils/type";
import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: Promise<{ category: string }> }) => {
  // Unwrap the params using React.use
  //  const { category } = React.use(params);
 

  return (
    <div className="w-full h-auto flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header Section */}
      <CategoryPage params = {params}/>
      
    </div>
  );
};

export default Category;
