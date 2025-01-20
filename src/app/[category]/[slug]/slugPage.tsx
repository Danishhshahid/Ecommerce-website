"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BsCart3 } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addToCart } from '@/app/store/features/cart';
import AddToCartToastify from '@/app/components/AddToCartToastify';



const SlugPage = ({ params }: { params: Promise<{ slug: string }> }) => {
     const { slug } = React.use(params); 
    // Fetch the products from the Redux store
    const product = useAppSelector((state) => state.products); 
    // Filter products based on category
    const slugdata = product.filter((val) => val.slug === slug);
    const dispatch = useAppDispatch()
    const [cartItem, setcartItem] = useState({
       id:slugdata[0].id,
        title:slugdata[0].title,
        img:slugdata[0].img,
        slug: slugdata[0].slug,
        price:slugdata[0].price,
        category:slugdata[0].category,
        size: slugdata[0].size[0],
        qty: slugdata[0].qty,
        discount:slugdata[0].discount,
        color:slugdata[0].color[0]
    })
    // let uuid = Math.floor(1000 + Math.random()*9000)

    // console.log(uuid)


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
          <div className='flex gap-10'>
            {/* color div */}
            <div className="flex gap-3">
            {slugdata[0].color.map((item, i) => (
              // <div key={i}>
              <Button
                key={i}
                onClick={() => setcartItem({ ...cartItem, color: item })}
                className="w-6 h-6 border-2 rounded-full border-gray-600 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              ></Button>
              // </div>
            ))}
          </div>
         
                {/* Size div */}
          <div className="sm:text-sm flex gap-3">
          <label htmlFor="size-select" className="block font-medium text-gray-700">
                   Size
                   </label>
            <select
              name=""
              id=""
              onChange={(e)=>setcartItem({...cartItem, size:e.target.value})}
              className="select select-bordered border-2 border-black"
            >
              <option disabled defaultValue={"Select Size"}>
                Select Size
              </option>
              {slugdata[0].size.map((item, i) => (
                <option key={i}>{item}
                </option>
              ))}
            </select>
          </div>
          </div>
          {/* quantity */}
          <div className="flex gap-3 items-center">
            <p>Quantity:</p>

            <Button
              onClick={() =>
                setcartItem({
                  ...cartItem,
                  qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                })
              }
              className="flex items-center justify-center bg-black text-white w-[20px] h-[25px]"
            >
              <FaMinus />
            </Button>

            <p className="text-xl"> {cartItem.qty}</p>

            <Button
              onClick={() => setcartItem({ ...cartItem, qty: ++cartItem.qty })}
              className="flex items-center justify-center bg-black text-white  w-[20px] h-[25px]"
            >
              <FaPlus />
            </Button>
          </div>
          {/* <Button onClick={()=>dispatch(addToCart(cartItem))} className='w-[120px] rounded-3xl mt-4'>
            <BsCart3 />
             Add to cart
          </Button> */}
          <AddToCartToastify cartItem={cartItem}/>
          <Button className='w-full rounded-3xl mt-4'>
            <BsCart3 /> Buy Now !
          </Button>
        </div>
        
      </div>
    </div>
  );
}

export default SlugPage;
