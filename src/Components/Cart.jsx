import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import './Cart.css';

const CartPage = () => {
  const location = useLocation();
  const cartData = location.state?.cart || [];  // Get cart data from navigation state

  const [cart, setCart] = useState(cartData);  // Initialize cart state
  const [quantity, setQuantity] = useState({}); // Track quantity of each item

  // Initialize quantities on first load
  useEffect(() => {
    const initialQuantity = {};
    cart.forEach(item => {
      initialQuantity[item.id] = 1; // Default quantity of 1
    });
    setQuantity(initialQuantity);
  }, [cart]);

  // Increment item quantity
  const handleIncrement = (itemId) => {
    setQuantity(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Decrement item quantity, prevent going below 1
  const handleDecrement = (itemId) => {
    setQuantity(prev => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1,
    }));
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId)); // Remove item from cart
  };

  return (
    <div className="container">
    <h1 className='text-primary text-center'>Best Product</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item border p-3 mb-3">
            <div className="d-flex">
              <img src={item.imgUrl} alt={item.productName} className="cart-item-image w-50" />
              <div className="cart-item-info ms-5">
                <h3>{item.productName}</h3>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>
                <p>Description: {item.shortDesc}</p>
                <button onClick={() => handleDecrement(item.id)} className="btn border rounded-circle">-</button>
                <span>Quantity: {quantity[item.id]}</span>
                <button onClick={() => handleIncrement(item.id)} className="btn border rounded-circle">+</button>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-danger mt-2 ms-2">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      
    </div>
  );
};

export default CartPage;