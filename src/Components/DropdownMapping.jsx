import React from 'react';

const DropdownMapping = ({ productdata = [] }) => {
  return (
    <div>
      {/* Check if product data is available */}
      {productdata.length > 0 ? (
        productdata.map((item) => (
          <div key={item.id} className="product-card">
            {/* Fallback image if imgUrl is missing */}
            <img
              src={item.imgUrl || 'path/to/default-Image.jpg'} // Replace with a valid default image path
              alt={item.productName || 'Product'}
              className="product-image"
            />
            <div className="card-body text-center">
              {/* Product name */}
              <h5 className="card-title">{item.productName}</h5>
              {/* Rating stars - assumes fixed 5 stars rating */}
              <div className="d-flex justify-content-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star text-warning"></i>
                ))}
              </div>
              {/* Price and Add to cart button */}
              <div className="d-flex justify-content-between align-items-center">
                <span className="card-text fw-bold">${item.price}</span>
                <button className="btn border rounded-circle">
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default DropdownMapping;