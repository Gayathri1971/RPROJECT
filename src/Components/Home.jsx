import React from 'react'
import Productsdata from './Productsdata'
import ArrivalMapping from './ArrivalMapping'
// import Productsdata from './Productsdata'
// import ProductData from './ProductData'
// import { DiscountProducts } from './DiscountProducts'

function home() {
  return (
    <div>
         <Navbar />
      {/* <Productsdata/> */}
      <ArrivalsData />
      < BestSalesMapping />
      <Footer />
    </div>
  )
}

export default home