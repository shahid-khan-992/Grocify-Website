import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/seafood-banner.jpg'

const SeaFoods = () => {
  return (
    <div>
      <CategoryPage title='Meat & SeaFoods' BgImage={BgImage} categories={['SeaFoods']}/>
    </div>
  )
}

export default SeaFoods