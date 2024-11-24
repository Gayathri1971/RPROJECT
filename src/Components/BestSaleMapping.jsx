import React, { useState } from 'react';
import {BestSalesList } from './BestSalesList';
// import './BestSales.css'; // Ensure styles for Best Sales are imported




const BestSalesMapping = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
  const [cart, setCart] = useState([]); // Track products added to the cart

  // Handler for product click
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product as selected
  };

  // Filter related products by category, excluding the selected product
  const getRelatedProducts = (category) => {
    if (!selectedProduct) return []; // Avoid errors if no product is selected
    return BestSalesList.filter(
      (item) => item.category === category && item.id !== selectedProduct.id
    );
  };

  // Handle Add to Cart functionality
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add product to the cart
    alert(`${product.productName} has been added to the cart!`); // Optional feedback
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Best Sales</h1>

      {/* Conditionally render selected product details */}
      {selectedProduct ? (
        <>
          {/* Single Product Display */}
          <div className="product-detail d-flex border p-3 mb-5">
            <img
              src={selectedProduct.imgUrl}
              alt={selectedProduct.productName}
              className="product-image me-4"
              onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
            />
            <div>
              <h2>{selectedProduct.productName}</h2>
              <p>{selectedProduct.description}</p>
              <p className="fw-bold">Price: ${selectedProduct.price}</p>
              <p>Category: {selectedProduct.category}</p>
              <div className="d-flex">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
              <button
                className="btn"
                style={{ backgroundColor: 'navy', color: 'white', padding: '5px', borderRadius: '4px' }}
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Related Products Display */}
          <h3 className="mb-4">Related Products</h3>
          <div className="row">
            {getRelatedProducts(selectedProduct.category).map((relatedItem) => (
              <div key={relatedItem.id} className="col-md-4 mb-4">
                <div className="product-item" onClick={() => handleProductClick(relatedItem)}>
                  <img
                    src={relatedItem.imgUrl}
                    alt={relatedItem.productName}
                    className="product-image"
                    onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
                  />
                  <h4 className="product-name">{relatedItem.productName}</h4>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <span className="product-price">${relatedItem.price}</span>
                    <button className="btn btn-outline-primary">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Default Product Listing (when no product is selected)
        <div className="row">
          {BestSalesList.map((item) => (
            <div
              key={item.id}
              className="col-md-4 mb-4"
              onClick={() => handleProductClick(item)} // Select product on click
            >
              <div className="product-item">
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="product-image"
                  onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
                />
                <h3 className="product-name">{item.productName}</h3>
                <div className="d-flex justify-content-between align-items-center p-1">
                  <span className="product-price">${item.price}</span>
                  <div className="d-flex">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                  
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleAddToCart(item)} // Add product to cart
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSalesMapping;
