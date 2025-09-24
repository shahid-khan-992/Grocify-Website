import React from 'react'
import Banner from '../Banner/Banner'
import productData from '../Products/Product'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const CategoryPage = ({title, BgImage, categories=[]}) => {
    const filteredItems = categories.includes('All')
    ? productData : productData.filter(item => categories.includes(item.category))
  return (
    <div>
        <Banner title={title} BgImage={BgImage}/>

        <div className='max-w-[1200px] mx-auto px-10 grid grid-col-1 md:grid-cols-4 gap-8 py-15'>
                    {
                        filteredItems.map((curElem) => {
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
    </div>
  )
}

export default CategoryPage