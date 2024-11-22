import React from 'react';
import { DiscountProductsMapping } from './DiscoutProductsmapping';
import { discountProductList } from './DiscountProductList';

 export const DiscountProducts = () => {
  return (
    <div>
      <DiscountProductsMapping data={discountProductList} />
    </div>
  );
};