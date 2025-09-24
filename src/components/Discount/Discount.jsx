import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section
      className="bg-contain bg-no-repeat bg-right bg-zinc-200"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="md:bg-transparent bg-zinc-200 flex md:flex-row flex-col py-10 max-w-[1200px] mx-auto px-10">
        <span className="md:text-8xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">20%</span>
        <div className="max-w-[700px]">
          <h3 className="md:text-6xl text-4xl text-zinc-800 font-bold">First Order Discount</h3>
          <p className="text-zinc-600 my-6">
            Get a discount today and save big on your favorite items. Shop smart, use special offers, and enjoy amazing deals before the sale ends soon!
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  )
}

export default Discount
