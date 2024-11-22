import React, { useState } from 'react';
import './Service.css'; // Import CSS for styling
import { DiscountProducts } from './DiscountProducts'; // Import Discount Products Data
import ArrivalsData from './ArrivalsData'; // Import Arrivals data
import { serviceData } from './ServiceData';
import BestSalesMapping from './BestSaleMapping';

const DiscountProductsMapping = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handler for product click
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product as selected
  };

  return (
    <div>
      {/* Mapping serviceData */}
      <div className="d-flex gap-3 text-center m-5 p-5">
        {serviceData.map((item, index) => (
          <div key={index} className="p-2 container" style={{ backgroundColor: item.bg }}>
            <div className="border bg-white p-2 icons">
              {item.icon} {/* JSX element from serviceData */}
            </div>
            <h5>{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Discount Products</h2>

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
                <p>{selectedProduct.shortDesc}</p>
                <p>Price: ${selectedProduct.price}</p>
                <p>Category: {selectedProduct.category}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>

            {/* Related Products */}
            <h3 className="mb-4">Related Products</h3>
            <div className="row">
              {DiscountProducts.filter(item => item.category === selectedProduct.category && item.id !== selectedProduct.id)
                .map((relatedItem) => (
                  <div key={relatedItem.id} className="col-md-4 mb-4">
                    <div className="product-item" onClick={() => handleProductClick(relatedItem)}>
                      <div className="position-relative">
                        {/* Discount Label in the top-left corner */}
                        <span
                          className="position-absolute text-light rounded-pill px-2 py-1"
                          style={{ top: '10px', left: '10px', fontSize: '0.8rem', backgroundColor: 'navy' }}
                        >
                          {relatedItem.discount}% Off
                        </span>
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
                  </div>
                ))}
            </div>
          </>
        ) : (
          // Default Product Listing
          <div className="row">
            {DiscountProducts.map((item) => (
              <div
                key={item.id}
                className="col-md-4 mb-4"
                onClick={() => handleProductClick(item)} // Select product on click
              >
                <div className="product-item">
                  <div className="position-relative">
                    {/* Discount Label in the top-left corner */}
                    <span
                      className="position-absolute text-light rounded-pill px-2 py-1"
                      style={{ top: '10px', left: '10px', fontSize: '0.8rem', backgroundColor: 'navy' }}
                    >
                      {item.discount}% Off
                    </span>
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="product-image"
                      onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
                    />
                  </div>
                  <h3 className="product-name">{item.productName}</h3>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <span className="product-price">${item.price}</span>
                    <div className="d-flex">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                    </div>
                    <button className="btn btn-outline-primary">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
        
      <ArrivalsData />
      < BestSalesMapping />
    </div>
  );
};

export default DiscountProductsMapping;
