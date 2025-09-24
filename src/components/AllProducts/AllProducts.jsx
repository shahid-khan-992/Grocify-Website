import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title='All Products' BgImage={BgImage} categories={['All']}/>
    </div>
  )
}

export default AllProducts