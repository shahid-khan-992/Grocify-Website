import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title='Dairy & Eggs' BgImage={BgImage} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy