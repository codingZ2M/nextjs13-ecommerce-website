"use client"
import Button from "../elements/Button"
import { Statistics} from "@/constants"

const HeroBanner = () => {

  return (
   <section className="w-full border-2 border-red-500 p-2 flex flex-col sm:flex-row h-4/6 ">  
      <div className="flex flex-col justify-center sm:items-start sm:px-16 px-8">
        <p className="text-lg sm:text-xl text-red-500">Elevate Your Lifestyle with Us</p>
        <h1 className="mt-10 text-3xl sm:text-8xl font-medium">
          <span  className="">Innovate Your Everyday.</span>
          <br/>
          <span className="text-red-500 inline-block mt-6 sm:mt-12">Shop</span>
          The Extraordinary.
        </h1>
        <p className="mt-4 text-sm">Your destination for online shopping excellence. Shopping made simple, just for you</p>
        <Button className="" buttonLabel="Show Now"/>

        <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
           {
            Statistics.map((data, id) =>(
              <div key={id}>
                <p className="text-black text-xl sm:text-4xl my-2 font-bold">{data.value}</p>
                <p className="text-slate-500 font-medium">{data.label}</p>
              </div>
            ))
           }
        </div>
      </div>

      <div className="hidden sm:flex bg-black w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
        }} 
      >          
      </div>
   </section>
  )
}

export default HeroBanner