"use client"
import { motion } from 'framer-motion'

const Deals = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl mb-4 p-2">Today's Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       
        {/* Deal items will go here */}
        <div className="bg-gray-100 p-4 rounded-md">
          <motion.img whileHover={{scale: 0.9,transition: { duration: 1 },}}
            src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"  // Replace with the actual image path
            alt="Product 1"
            className="w-full h-48 object-cover mb-2 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">Red Converse Shoe</h3>
          <p className="text-gray-600">Description of Red Converse Shoe.</p>
          <div className="mt-4">
            <span className="text-gray-500 text-sm line-through mr-2">$69.99</span>
            <span className="text-red-600 text-lg font-semibold">$39.99</span>
          </div>
        </div>
        
        {/* Repeat this structure for other deal items */}
        <div className="bg-gray-100 p-4 rounded-md">
          <motion.img whileHover={{scale: 0.9,transition: { duration: 1 },}}
            src="https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"  // Replace with the actual image path
            alt="Product 1"
            className="w-full h-48 object-cover mb-2 rounded-md"
          />
    
          <h3 className="text-lg font-semibold mb-2">Planet Ocean Watch</h3>
          <p className="text-gray-600">Description of Watch.</p>
          <div className="mt-4">
            <span className="text-gray-500 text-sm line-through mr-2">89.99</span>
            <span className="text-red-600 text-lg font-semibold">$49.99</span>
          </div>
        </div>

          {/* Repeat this structure for other deal items */}
          <div className="bg-gray-100 p-4 rounded-md">
          <motion.img whileHover={{scale: 0.9,transition: { duration: 1 },}}
            src="https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"  // Replace with the actual image path
            alt="Product 1"
            className="w-full h-48 object-cover mb-2 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">Winter Jacket</h3>
          <p className="text-gray-600">Description of Winter Jacket.</p>
          <div className="mt-4">
            <span className="text-gray-500 text-sm line-through mr-2">$79.99</span>
            <span className="text-red-600 text-lg font-semibold">$59.99</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Deals;
