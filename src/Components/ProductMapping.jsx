import React, { useState } from 'react';
import './Product.css'; // Ensure styling is handled here

const ProductMapping = ({ data = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the clicked product
  const [cart, setCart] = useState([]); // Track items added to the cart

  // Handle clicking a product
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product as selected
  };

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to the cart!`);
  };

  // Get related products based on the selected product's category
  const getRelatedProducts = (category) => {
    return data.filter((item) => item.category === category && item.id !== selectedProduct.id);
  };

  return (
    <div className="container">
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
              <p>
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Price:</strong> ${selectedProduct.price}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: 'navy',
                  color: 'white',
                  padding: '5px',
                  borderRadius: '4px',
                }}
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Related Products */}
          <h3 className="mb-4">Related Products</h3>
          <div className="related-products">
            {getRelatedProducts(selectedProduct.category).map((relatedItem) => (
              <div key={relatedItem.id} className="related-product-card">
                <img
                  src={relatedItem.imgUrl}
                  alt={relatedItem.productName}
                  className="related-product-image"
                  onClick={() => handleProductClick(relatedItem)} // Click to view this product
                />
                <h4>{relatedItem.productName}</h4>
                <p>${relatedItem.price}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering product click
                    handleAddToCart(relatedItem);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          {/* <h2>Please select a product to view its details.</h2> */}
        </div>
      )}
    </div>
  );
};

export default ProductMapping;
