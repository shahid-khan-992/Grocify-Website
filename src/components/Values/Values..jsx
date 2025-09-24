import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'


const Values = () => {

    const [leftValue, setLeftValue] = useState(value);

    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Values" />

                <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15">
                    {/* LEFT VALUES */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {
                            leftValue.slice(0, 2).map((curElem) => {

                                const {id, title, para, icon} = curElem;

                                return (
                                    <div key={id} className='flex md:flex-row-reverse items-center gap-5'>
                                        <div>
                                            <span className='flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full'>{icon}</span>
                                        </div>

                                        <div className='md:text-right'>
                                            <h3 className='text-zinc-800 text-2xl font-bold'>{title}</h3>
                                            <p className='text-zinc-600'>{para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* IMAGE */}
                    <img src={Basket} alt="basket" className='md:flex w-1/3 hidden' />

                    {/* RIGHT VALUES */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {
                            leftValue.slice(2).map((curElem) => {

                                const {id, title, para, icon} = curElem;

                                return (
                                    <div key={id} className='flex items-center gap-5'>
                                        <div>
                                            <span className='flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 rounded-full'>{icon}</span>
                                        </div>

                                        <div>
                                            <h3 className='text-zinc-800 text-2xl font-bold'>{title}</h3>
                                            <p className='text-zinc-600'>{para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values



const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'The sun rose slowly over the hills, spreading warmth and light across.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'Children played joyfully in the garden, laughter echoing through peaceful',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Birds chirped from tree branches, while flowers danced soft summer breeze.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'A quiet library stood in the corner, filled with stories to be discovered.',
        icon: <FaSeedling />
    },

]