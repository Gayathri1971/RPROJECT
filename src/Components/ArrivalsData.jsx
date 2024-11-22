import React from 'react'
import ArrivalMapping from './ArrivalMapping'
import { arrivalsList } from './ArrivalsList'
// import { arrivalsList } from './ProductData'

const ArrivalsData = () => {
  return (
    <div>
        <ArrivalMapping data={arrivalsList} />
    </div>
  )
}

export default ArrivalsData