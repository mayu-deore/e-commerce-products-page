import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import "./ProductsPage.css"

const ProductsPage = () => {
  return (
    <div className='product-page-main-div'>
        <Navbar/>
        <Carousel/>
    </div>
  )
}

export default ProductsPage