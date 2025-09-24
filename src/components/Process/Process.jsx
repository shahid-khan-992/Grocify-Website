import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-20'>
                <div className='mr-auto w-fit'>
                    <Heading highlight='Our' heading='Process' />
                </div>

                <div className='flex flex-wrap gap-y-15 basis-[320px] justify-between md:mt-15 mt-10 md:pt-50'>
                    {
                        steps.map((curElem) => {
                            const { id, number, title, para, icon } = curElem;
                            return (
                                <>
                                    <div key={id} className={`flex-1 ${id % 2 === 0 ? 'md:-mt-52' : ''}`}>
                                        <span className='flex justify-center items-center mx-auto rounded-full w-15 h-15 text-7xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed'>{number}</span>

                                        <div className="flex items-center gap-4 mt-8">
                                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-white text-2xl shrink-0">
                                                {icon}
                                            </div>

                                            <div>
                                                <h4 className="text-zinc-800 text-2xl font-bold">{title}</h4>
                                                <p className="text-zinc-600 mt-1">{para}</p>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Process


const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long stablieshed fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long stablieshed fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long stablieshed fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long stablieshed fact that a reader',
        icon: <BsTruck />
    },
]