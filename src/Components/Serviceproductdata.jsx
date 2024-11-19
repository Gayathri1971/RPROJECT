import React from 'react';
import { serviceData } from './ServiceData';
import Datamaping from './Datamaping';

const Serviceproductdata = () => {
  return (
    <div>
      <Datamaping data={serviceData} />
    </div>
  );
};

export default Serviceproductdata;