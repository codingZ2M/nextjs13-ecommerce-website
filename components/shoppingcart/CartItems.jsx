"use client"
import React from 'react';
import { useCart } from '@/CartContext';
import CartItemCard from './CartItemCard';

const CartItems = () => {
  const { state} = useCart();

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

    // Calculate the final total price of all items in the cart
    const calculateTotalPrice = () => {
      return state.cart.reduce((total, item) => total + calculateItemTotal(item), 0);
    };

  return (
    <div className="container mx-auto">
     <h2 className="text-xl mb-4 p-2">Cart Items</h2>
     <ul>
        {state.cart.map((product) => (
          <li key={product.id}>
            <CartItemCard key={product.id} product = {product}/> 
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-end mt-10'>
        <h3 className="font-normal text-base">Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartItems;
