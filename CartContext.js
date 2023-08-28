"use client"
// components/CartContext.js
import { createContext, useContext, useReducer } from 'react';

// Define the initial state for the cart
const initialState = {
  cart: [],
};

// Create a context for the cart
const CartContext = createContext();

// Create a reducer to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increment its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it
        return { ...state, cart: [...state.cart, action.payload] };
      }

      case 'INCREMENT_QUANTITY':
        // Increment the quantity of a product in the cart
        const incrementCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cart: incrementCart };
  
      case 'DECREMENT_QUANTITY':
        // Decrement the quantity of a product in the cart
        const decrementCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return { ...state, cart: decrementCart };

    case 'REMOVE_FROM_CART':
      // Remove a product from the cart
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing the cart context
export const useCart = () => {
  return useContext(CartContext);
};
