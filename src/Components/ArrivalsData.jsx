import React from 'react'
import ArrivalMapping from './ArrivalMapping'
import { arrivalsList } from './ArrivalsList'

const ArrivalsData = () => {
  return (
    <div>
        <ArrivalMapping data={arrivalsList} />
    </div>
  )
}

export default ArrivalsData