import React from 'react';
import './Service.css';
import { DiscountProducts } from '../discountproducts/DiscoutProducts';

const Datamapping = ({ data = [] }) => {
  
  return (
    <div>
      <div className='d-flex gap-3 text-center m-5 p-5'>
        {data.map((item, index) => (
          <div key={index} className=" p-2 container" style={{ backgroundColor: item.bg }}>
            <div className='border bg-white p-2  icons'>{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        ))}

      </div>
      <DiscountProducts />
    </div>
  );
};

export default Datamapping; 