import PRODUCTS from "@/constants"
import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
  return (
    <div className="">
    <h2 className="text-center text-lg sm:text-xl mt-6 mb-2"> Featured Products</h2>
    <div className=" mt-4 sm:mt-8 mb-12
      items-center justify-center px-0 grid grid-cols-1 gap-x-6 sm:gap-x-6 gap-y-12
      xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
   
       {
            PRODUCTS.map( (product) => (
            <ProductCard key={product.id} product = {product}/> 
         ))      
       }
     
    </div>
</div>
  )
}

export default FeaturedProducts