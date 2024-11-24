import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import '../discountproducts/Discount.css';
import ArrivalsData from '../arrivals/ArrivalsData';

export const DiscountProductsMapping = ({ data = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product
  const [relatedProducts, setRelatedProducts] = useState([]); // State to store related products
  const [cart, setCart] = useState([]); // State to manage cart
  const navigate = useNavigate();  // React Router's navigation hook

  // Handle product click to display its details and related products
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Store the clicked product's details
    const related = data.filter(
      (item) => item.category === product.category && item.id !== product.id
    ); // Find products with the same category
    setRelatedProducts(related); // Store the related products
  };

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.find((item) => item.id === product.id);
      if (!isAlreadyInCart) {
        const newCart = [...prevCart, product]; // Add product if not already in cart
        navigate('/cart', { state: { cart: newCart } }); // Navigate to cart page with updated cart
        return newCart;
      }
      return prevCart; // If already in cart, don't add again
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Best Discount</h1>

      {/* Conditionally render selected product details */}
      {selectedProduct ? (
        <>
          <h2 className="text-center mt-4">{selectedProduct.productName}</h2>
          <div className="product-detail d-flex border m-5">
            <img
              src={selectedProduct.imgUrl}
              alt={selectedProduct.productName}
              className="product-image"
            />
            <div className="border p-3">
              <p><strong>Description:</strong>{selectedProduct.shortDesc}</p>
              <p>{selectedProduct.description}</p>
              <p><strong>Price:</strong>${selectedProduct.price}</p>
              <p><strong>Discount:</strong>{selectedProduct.discount}% off</p>
              <p><strong>Category:</strong>{selectedProduct.category}</p>
              {/* <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(selectedProduct)} // Add to cart on click
              >
                Add to Cart
              </button> */}
               <button
                className="btn"
                style={{ backgroundColor: 'navy', color: 'white', padding: '5px', borderRadius: '4px' }}
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Display related products */}
          <h3 className="text-center mt-4">Related Products</h3>
          <div className="row">
            {relatedProducts.map((item) => (
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
                    <button
                      className="text-control"
                      onClick={() => handleAddToCart(item)} // Add to cart on click
                    >
                      +
                    </button>
                    <button className="text-control">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Display the product list if no product is selected
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
                  <button
                    className="text-control"
                    onClick={() => handleAddToCart(item)} // Add to cart on click
                  >
                    +
                  </button>
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