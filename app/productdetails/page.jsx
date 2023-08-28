"use client"
import {useEffect, useState} from 'react'
import {  useSearchParams} from 'next/navigation';
import PRODUCTS from '@/constants';
import {AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "@/CartContext";
import Image from 'next/image';

const ProductDetailsPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const {dispatch} = useCart();
  const [product, setProduct] = useState({});
  
  const notify = () => toast.success(`${product.title} added into cart`);
  
  useEffect( () => {
    const existingProduct = PRODUCTS.find((product)=> product.id == productId)
          setProduct(existingProduct);
          }, [productId]
  )

  return (
    <div className='w-full bg-[#FFFFFF] min-h-screen my-4 sm:my-12'>
    <div className="mt-6 flex gap-2 sm:gap-20 flex-col sm:flex-row items-center justify-center m-auto bg-white text-black ">
       <div className=''>
            <Image src={product.image} width={300} height={500}  alt="product_image"/>
       </div> 
       <div className='flex flex-col items-start space-y-4 font-verdana p-10 w-full sm:w-1/3 text-justify'>
           <span className='text-xl sm:text-2xl'>{product.title}</span>
           <div className='flex  items-center justify-center gap-1 text-red-600'>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiOutlineStar/>
           <span className='text-black text-sm'>(201)</span>
         </div>
         <span className='text-sm'>{product.details}</span>
         <span className='text-xl'>${product.price}.00</span>
        
        
         <div className='flex flex-col sm:flex-row gap-4 w-full'>
           <button className='flex items-center justify-center sm:w-60 text-black bg-white font-medium border-[1px] border-[#000000]  py-2.5
                          hover:bg-black hover:text-white hover:border-white'
                          onClick={()=>{dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } }); notify()}} >
             ADD TO CART
           </button>
           <Toaster />
           <button className='flex items-center justify-center  sm:w-60 text-white bg-black font-medium border-[1px] border-[#fff]  py-2.5
                          hover:bg-white hover:text-black hover:border-black'>
             BUY NOW
           </button>
         </div>
     </div>
 </div> 
</div>
  )
}

export default ProductDetailsPage;