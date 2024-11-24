import React from "react";
import Cart from "./Cart";
import {discountProductList} from "./CartData"; 

const CartProduct = () => {
  return (
    <div>
      <Cart DiscountProducts={discountProductList} />
    </div>
  );
};

export default CartProduct;

