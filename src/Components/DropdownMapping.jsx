import React, { useState } from 'react';

const DropdownMapping = ({ productdata = [] }) => {
  // State to store the clicked product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle the click event on an image
  const handleImageClick = (item) => {
    setSelectedProduct(item);
  };

  // Handle the click event on the Add to cart button
  const handleButtonClick = (item) => {
    setSelectedProduct(item);
  };

  return (
    <div>
      {/* Display clicked product details at the top if one is selected */}
      {selectedProduct && (
        <div className="clicked-product-info mt-4">
          <h3>Product Details</h3>
          <p><strong>Product Name:</strong> {selectedProduct.productName}</p>
          <p><strong>Price:</strong> ${selectedProduct.price}</p>
          <p><strong>Description:</strong> {selectedProduct.description || 'No description available'}</p>
          <p><strong>Available Since:</strong> {selectedProduct.date || 'No date available'}</p>
          {/* Add any other related data here */}
        </div>
      )}

      {/* Check if product data is available */}
      {productdata.length > 0 ? (
        productdata.map((item) => (
          <div key={item.id} className="product-card">
            {/* Image with click handler */}
            <img
              src={item.imgUrl || 'path/to/default-image.jpg'} // Fallback image path
              alt={item.productName || 'Product'}
              className="product-image"
              onClick={() => handleImageClick(item)} // Handle image click
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
                
                <button
                    className="btn btn-outline-primary"
                    onClick={() => handleAddToCart(item)} // Add product to cart
                  >
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