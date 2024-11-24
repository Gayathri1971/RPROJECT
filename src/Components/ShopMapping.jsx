import React, { useState } from 'react';
import './Shop.css';

const ShopMapping = ({ data = [] }) => {
  // State to store the clicked product's details
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle the click event on the product image or card
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container cards">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-sm" onClick={() => handleProductClick(product)}>
              <img src={product.imgUrl} className='product-image' alt={product.productName} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <div className="d-flex justify-content-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star text-warning"></i>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="card-text fw-bold">${product.price}</span>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShopMapping;