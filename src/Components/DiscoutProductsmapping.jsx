import React, { useState } from 'react';
import 'Discount.css';
import ArrivalsData from './ArrivalsData';

export const DiscountProductsMapping = ({ data = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Find related products in the same category excluding the clicked one
    const related = data.filter((item) => item.category === product.category && item.id !== product.id);
    setRelatedProducts(related);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Best Discount</h1>

      {/* Conditionally render selected product details */}
      {selectedProduct && (
        <>
          <h2 className="text-center mt-4">{selectedProduct.productName}</h2>
          <div className="product-detail d-flex border m-5">
            <img
              src={selectedProduct.imgUrl}
              alt={selectedProduct.productName}
              className="product-image"
            />
            <div className="border p-3">
              <p>Description: {selectedProduct.shortDesc}</p>
              <p>{selectedProduct.description}</p>
              <p>Price: ${selectedProduct.price}</p>
              <p>Discount: {selectedProduct.discount}% off</p>
              <p>Category: {selectedProduct.category}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>

          {/* Related Products */}
          <h3 className="text-center mt-4">Related Products</h3>
          <div className="row">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div
                    className="product-item"
                    onClick={() => handleProductClick(item)} // Trigger product click handler
                  >
                    <p className="bg-dark text-white rounded-pill percentage mt-1 p-2">
                      {item.discount}% off
                    </p>
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="product-image"
                    />
                    <h3 className="product-name mt-3">{item.productName}</h3>
                    <div className="d-flex">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2">
                      <span className="product-price">${item.price}</span>
                      <button className="text-control">+</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No related products available.</p>
            )}
          </div>
        </>
      )}

      {/* Product List when no product is selected */}
      {!selectedProduct && (
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div
                className="product-item"
                onClick={() => handleProductClick(item)} // Trigger product click handler
              >
                <p className="bg-dark text-white rounded-pill percentage mt-1 p-2">
                  {item.discount}% off
                </p>
                <img src={item.imgUrl} alt={item.productName} className="product-image" />
                <h3 className="product-name mt-3">{item.productName}</h3>
                <div className="d-flex">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center p-2">
                  <span className="product-price">${item.price}</span>
                  <button className="text-control">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ArrivalsData />
    </div>
  );
};
