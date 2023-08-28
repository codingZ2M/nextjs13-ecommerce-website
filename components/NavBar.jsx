"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavLinks } from '@/constants';
import {AiOutlineMenu} from "react-icons/ai";
import {BsCart4} from "react-icons/bs"
import { useCart } from '@/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const [numberOfItems, setNumberOfItems] = useState(0);

  const calculateTotalItems = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Use useEffect to calculate the total items whenever the cart changes
  useEffect(() => {
    setNumberOfItems(calculateTotalItems());
  }, [state.cart]);

  return (
    <nav className="bg-white py-8 px-8 shadow-md ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-black font-normal text-xl">CZ2M Store</span>
          </Link>
           <ul className="flex space-x-6 max-xl:hidden">
            {NavLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  href={navLink.link}
                  className="text-black hover:text-red-500  font-normal text-sm"
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
          <div>
          <Link href="/shoppingcart">
            <div className=''>
              <BsCart4 className='relative w-6 h-6 text-red-500'/>
              <div class="z-10 absolute top-[26px] right-[120px] sm:top-[26px] sm:right-[24px] w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <span className=' text-white text-xs'>{numberOfItems}</span>
              </div>
            </div>
          </Link>
        </div>
          <div className='hidden max-xl:block'>            
                <AiOutlineMenu className='w-[30px] h-[30px]' />
          </div>
        </div>       
    </nav>
  );
};

export default Navbar;
