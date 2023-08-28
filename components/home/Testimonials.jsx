
import {FcBusinessman} from "react-icons/fc";
import React from 'react';
import { Reviews } from "@/constants";

const Testimonials = () => {

  return (
    <>
     <h2 className="text-xl mb-4 p-2">Testimonials</h2>
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
               <FcBusinessman className="w-10 h-10"/>
                <div>
                  <h2 className="text-lg font-semibold">{review.name}</h2>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonials;
