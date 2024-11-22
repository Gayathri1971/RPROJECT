import React from 'react';
import DataMapping from './DataMapping'
import { serviceData } from './Data'; // Ensure serviceData is correctly exported from Data.js

const Serviceproductdata = () => {
  return (
    <div>
      <DataMapping productData={serviceData} />
    </div>
  );
};

export default Serviceproductdata;
