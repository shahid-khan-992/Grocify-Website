import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import productData from './Product'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const Products = () => {

    const [activeTab, setActiveTab] = useState('All')
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFoods']
    const filteredItems = activeTab === 'All' 
    ? productData : productData.filter(item=> item.category === activeTab)

    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-20'>
                <Heading highlight='Our' heading='Products' />

                {/* TABS */}
                <div className='flex flex-wrap gap-3 justify-center mt-10'>
                    {
                        categories.map((category) => {
                            return (
                                <button key={category}
                                    className={`rounded-lg px-5 py-2 text-lg 
                                ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white' : 'bg-zinc-200'}`}
                                    onClick={() => setActiveTab(category)}>
                                    {category}
                                </button>
                            )
                        })
                    }
                </div>

                {/* CARD CONTAINER */}
                <div className='grid grid-col-1 md:grid-cols-4 gap-8 pt-15'>
                    {
                        filteredItems.slice(0, 8).map((curElem) => {
                            const {id, title, price, image} = curElem;
                            return (
                                <>
                                    {/* CARD */}
                                    <div key={id} className='bg-zinc-200 p-5 rounded-lg'>
                                        {/* CARD ICON */}
                                        <div className='flex justify-between items-center'>
                                            <span className='text-2xl text-zinc-300'>
                                                <FaHeart />
                                            </span>
                                            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-3 py-2 text-xl rounded-sm'>
                                                <FaPlus />
                                            </button>
                                        </div>

                                        {/* CARD IMAGE */}
                                        <div className='w-full h-40'>
                                            <img src={image} alt="Card Image" className='w-full h-full mx-auto object-contain' />
                                        </div>

                                        {/* CARD CONTENT */}
                                        <div className='text-center'>
                                            <h3 className='text-2xl'>{title}</h3>
                                            <p className='text-2xl font-bold my-3'>${price.toFixed(2)}</p>
                                            <Button content='Shop Now' />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Link to='/allproducts'>
                        <Button content='View All' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Products

