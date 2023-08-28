import HeroBanner from '@/components/home/HeroBanner'
import FeaturedProducts from '@/components/home/products/FeaturedProducts'
import Deals from '@/components/home/Deals'
import Testimonials from '@/components/home/Testimonials'
import Subscription from '@/components/home/Subscription'

const Home = () => {
  return (
    <main className='relative'>
      <section className='sm:px-16 px-8 sm:mb-20 mb-14 mt-4'>
          <HeroBanner/>
      </section>
      <div className='sm:px-16 px-8 sm:mb-20 mb-6'>
        <section className='mb-6 sm:mb-20'>
            <FeaturedProducts/>
        </section>
        <section className='mb-12 sm:mb-20'>
            <Deals/>
        </section>
        <section className='mb-10 sm:mb-20'>
            <Testimonials/>
        </section>
        <section className='mb-10 sm:mb-20'>
          <Subscription/>
        </section>
      </div>
    </main>
  )
}

export default Home