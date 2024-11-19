import React from 'react';
import './Product.css'; // Assuming you have a CSS file for styling

const ProductMapping = ({ data = [] }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Best Products</h1>
      <div className="row">
        {data.map((items) => (
          <div key={items.id} className="col-md-4 mb-4">
            <div className="product-item">
              <img src={items.imgUrl} alt={items.productName} className="product-image" />
              <h3 className="product-name">{items.productName}</h3>
              <div className='d-flex'>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>              
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="product-price">${items.price}</span>
                <span className="text-control">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMapping;