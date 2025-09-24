import React from 'react'

const Banner = ({title, BgImage}) => {
  return (
    <div className='h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage:`url(${BgImage})`}}>
        <h2 className='text-5xl text-white p-5 font-bold rounded-md z-10'>{title}</h2>
        <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner