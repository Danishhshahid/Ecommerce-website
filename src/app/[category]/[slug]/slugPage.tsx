"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { BsCart3 } from "react-icons/bs";
import { useAppSelector } from "../../store/hooks";


const SlugPage = ({ params }: { params: Promise<{ slug: string }> }) => {
     const { slug } = React.use(params); 
    // Fetch the products from the Redux store
    const product = useAppSelector((state) => state.products); 
    // Filter products based on category
    const slugdata = product.filter((val) => val.slug === slug);


  return (
    <div>
      <div className='w-full h-full flex flex-col lg:flex-row justify-around px-6'>
        {/* Left Div: Image */}
        <div className='w-full lg:w-[40%] h-full flex justify-center mb-6 lg:mb-0'>
                    {/* Check if img is an array */}
                    {slugdata[0]?.img && Array.isArray(slugdata[0].img) && slugdata[0].img.length > 0 && (
                        <Image 
                            src={slugdata[0].img[0]} 
                            alt={slugdata[0].title} 
                            className='w-full h-full object-contain' 
                            width={500} // Add width and height
                            height={500} // Add height to avoid layout shifts
                        />
                    )}
                </div>

        {/* Right Div: Product Info */}
        <div className='w-full lg:w-[40%] flex flex-col gap-6'>
          <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'> {slugdata[0].title} </h1>
            {/* <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>PLT.AF.ORM</h2> */}
          </div>
          <p className='text-sm sm:text-base lg:text-lg break-words whitespace-normal'>
           {slugdata[0].description}
          </p>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{`$ ${slugdata[0].price}`}</h3>

          <Button className='w-[120px] rounded-3xl mt-4'>
            <BsCart3 /> Add to cart
          </Button>
          <Button className='w-full rounded-3xl mt-4'>
            <BsCart3 /> Buy Now !
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default SlugPage;
