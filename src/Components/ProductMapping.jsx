import React, { useState } from 'react';
import './Product.css'; 

const ProductMapping = ({ data = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); 

  // Handler for product click
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product as selected
  };

  // Get related products based on the selected product's category
  const getRelatedProducts = (category) => {
    return data.filter((item) => item.category === category && item.id !== selectedProduct.id);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Best Products</h1>

      {selectedProduct ? (
        <>
          {/* Single Product Details */}
          <div className="product-detail d-flex border p-3 mb-5">
            <img
              src={selectedProduct.imgUrl}
              alt={selectedProduct.productName}
              className="product-image me-4"
            />
            <div>
              <h2>{selectedProduct.productName}</h2>
              <p>{selectedProduct.description}</p>
              <p>Price: ${selectedProduct.price}</p>
              <p>Category: {selectedProduct.category}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>

          {/* Related Products */}
          <h3 className="mb-4">Related Products</h3>
          <div className="row">
            {getRelatedProducts(selectedProduct.category).map((relatedItem) => (
              <div key={relatedItem.id} className="col-md-4 mb-4">
                <div
                  className="product-item"
                  onClick={() => handleProductClick(relatedItem)} // Click to view this product
                >
                  <img
                    src={relatedItem.imgUrl}
                    alt={relatedItem.productName}
                    className="product-image"
                  />
                  <h4 className="product-name">{relatedItem.productName}</h4>
                  <span className="product-price">${relatedItem.price}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Default Product Listing
        <div className="row">
          {data.map((item) => (
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
                />
                <h3 className="product-name">{item.productName}</h3>
                <div className="d-flex">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <span className="product-price">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductMapping;