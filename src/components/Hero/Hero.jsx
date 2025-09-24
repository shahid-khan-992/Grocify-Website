import React from 'react'
import Grocey from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1200px] mx-auto px-10 flex items-center md:flex-row flex-col md:pt-22 pt-35'>
            {/* HERO CONTENT */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='md:text-6xl text-4xl font-bold mt-5'>
                    Tasty Organic <br/><span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[500px] my-6'>
                    Bred for a high content of benficial substances. our Products are all fresh and healthy.
                </p>
                <Button content="Shop Now"/>
            </div>

            {/* HERO IMAGE */}
            <div className='flex-1 relative'>
                <img src={Grocey} alt="Hero Image" />
                <div className='w-1/2 h-1/2 bg-orange-500 absolute bottom-0 right-10 -z-10 rounded-full blur-[60px]'></div>
            </div>
        </div>
    </section>
  )
}

export default Hero