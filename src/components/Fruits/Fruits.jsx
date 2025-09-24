import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title='Fruits & Veggies' BgImage={BgImage} categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits