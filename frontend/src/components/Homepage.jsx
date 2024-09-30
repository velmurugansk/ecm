import React from 'react'
import Productcarousel from './homepage/Productcarousel'
import Category from './homepage/Category'
import Bestsellers from './homepage/Bestsellers';

function Homepage() {
  return (
    <div>
      <Productcarousel/>
      <Category />
      <Bestsellers />
    </div>
  )
}

export default Homepage