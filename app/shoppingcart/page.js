import CartItems from '@/components/shoppingcart/CartItems'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <CartItems />
      </div>
    </div>
  )
}

export default page