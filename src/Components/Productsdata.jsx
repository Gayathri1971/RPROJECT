import React from 'react';
import Datamaping from './Datamaping';
import { SliderData } from './Data';

const Productsdata = () => {
  return (
    <div>
      <Datamaping productData={SliderData} />
    </div>
  );
};

export default Productsdata;