import React from 'react'

import ProductMapping from './ProductMapping'
import { productsList } from './ProductList'

const ProductData = () => {
  return (
    <div>
       <ProductMapping  data={productsList}/>
    </div>
  )
}

export default ProductData