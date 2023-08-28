"use client"
import Image from "next/image"
import Link from "next/link"
import {BsCart2} from "react-icons/bs";
import { useCart } from "@/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion'

const ProductCard = ({product}) => {
  const { dispatch } = useCart();
  const notify = () => toast.success(`${product.title} added into cart`);

  return (
    
    <div className="border border-gray-300 p-2">
        <Link href={`/productdetails?id=${product.id}`}>
          <motion.img  whileHover={{scale: 0.9,transition: { duration: 1 },}} src={product.image}  />
        </Link>
      
        <div className=''>
           <div className="flex items-center justify-between px-0 mt-2">
              <span className='w-72 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>{product.title}</span>
              <span className='text-sm font-semibold'>${product.price}.00</span>
            </div>
            <div className='flex gap-2 items-center justify-center mt-2'>
              <BsCart2 className="w-4 h-4"/>
              <span className='text-xs cursor-pointer' 
                onClick={()=>{dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } }); notify()}}
              >ADD TO CART</span>
               <Toaster />
           </div>
        </div>
    </div>
 
  )
}

export default ProductCard