"use client"

import {RiDeleteBin6Line} from "react-icons/ri";
import { useCart } from "@/CartContext";

const CartItemCard = ({product}) => {
  const {dispatch} = useCart();

  const incrementQuantity = (product) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };

  const decrementQuantity = (product) => {
    // Check if the quantity is greater than 1 before decrementing
    if (product.quantity > 1) {
      dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
    } else {
      // If the quantity is 1 or less, remove the product from the cart
      dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    }
  };

  // Calculate the total price for each cart item
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-2">
      <div className="grid grid-cols-1 lg:grid-cols-3  py-2">
        <div className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-normal">{product.title}</h3>
            <p className="text-gray-500 text-sm">Price: ${product.price}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decrementQuantity(product)}
            className="text-gray-500 text-lg hover:text-gray-700"
          >
            -
          </button>
          <span className="text-sm">{product.quantity}</span>
          <button
            onClick={() => incrementQuantity(product)}
            className="text-gray-500 text-lg hover:text-gray-700"
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() =>  dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
            className="text-red-600 hover:text-red-800"
          >
            <RiDeleteBin6Line className="w-4 h-4"/>
          </button>
          <span className="text-sm">${calculateItemTotal(product).toFixed(2)}</span> 
        </div>
      </div>     
  </div>
  )
}

export default CartItemCard