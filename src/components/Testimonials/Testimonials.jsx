import React from 'react'
import Heading from '../Heading/Heading'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoStar } from "react-icons/io5";


const Testimonials = () => {
    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-20'>
                <Heading highlight='Customers' heading='Saying' />

                <div className='flex justify-end gap-x-3 mt-5 py-5'>
                    <button className='custome-next text-2xl text-zinc-800 rounded-sm w-11 h-11 bg-zinc-200 flex justify-center items-center cursor-pointer hover:bg-orange-500 hover:text-zinc-200 duration-400'>
                        <FaChevronLeft />
                    </button>
                    <button className='custome-prev text-2xl text-zinc-800 rounded-sm w-11 h-11 bg-zinc-200 flex justify-center items-center cursor-pointer hover:bg-orange-500 hover:text-zinc-200 duration-400'>
                        <FaChevronRight />
                    </button>
                </div>



                <Swiper
                    navigation={{ nextEl: '.custome-next', prevEl: '.custome-prev' }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        review.map((curElem) => {
                            const { id, name, profession, rating, para, image } = curElem;
                            return (
                                <>
                                    <SwiperSlide key={id} className='bg-zinc-200 rounded-md p-8'>
                                        <div className='flex gap-5 items-center'>
                                            <div className='w-16 h-16 rounded-full bg-red-300 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                                                <img src={image} alt="image" className='w-full h-full' />
                                            </div>
                                            <div>
                                                <h5 className='text-xl font-bold'>{name}</h5>
                                                <p className='text-zinc-600'>{profession}</p>
                                                <span className="flex text-yellow-500 text-xl">
                                                    {Array.from({ length: rating }, (_, index) => (
                                                        <IoStar key={index} />
                                                    ))}
                                                </span>
                                            </div>
                                        </div>

                                        <div className='mt-10 min-h-[15vh]'>
                                            <p className='text-zinc-600'>{para}</p>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials

const review = [
    {
        id: 1,
        name: "Emily Johnson",
        profession: "Food Blogger",
        rating: 3,
        para: "The products were fresh and nicely packed, but delivery took longer than expected. Still a decent Will try again soon.",
        image: Customer1
    },
    {
        id: 2,
        name: "Zayn Ali",
        profession: "Home Chef",
        rating: 5,
        para: "Absolutely loved the quality! Everything from fruits to dairy was super fresh. I’ve already recommended friends and family.",
        image: Customer2
    },
    {
        id: 3,
        name: "Sarah Lee",
        profession: "Nutritionist",
        rating: 4,
        para: "Great variety of healthy options and the packaging was eco-friendly too. Would’ve given 5 stars if prices were a bit lower.",
        image: Customer3
    },
    {
        id: 4,
        name: "Mohammed Ali",
        profession: "Fitness Coach",
        rating: 5,
        para: "Perfect for someone who needs clean and fresh ingredients. The chicken breast and kale were top-notch. My go-to store from!",
        image: Customer4
    },
    {
        id: 5,
        name: "Aliya Zahra",
        profession: "Mother & Baker",
        rating: 4,
        para: "Easy to order and delivered right on time. The kids loved the strawberries and I found everything I needed for baking too.",
        image: Customer5
    }
]
