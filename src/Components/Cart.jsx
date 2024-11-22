// // // import React, { useState, useEffect } from "react";
// // // import PropTypes from "prop-types";

// // // const Cart = ({ DiscountProducts = [] }) => {
// // //   const [cart, setCart] = useState([]);

// // //   // Log DiscountProducts when updated
// // //   useEffect(() => {
// // //     console.log("Received DiscountProducts:", DiscountProducts);
// // //   }, [DiscountProducts]);

// // //   // Function to handle updating item quantities in the cart
// // //   const updateCartQuantity = (product, action) => {
// // //     setCart((prevCart) => {
// // //       const updatedCart = [...prevCart];
// // //       const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

// // //       if (itemIndex !== -1) {
// // //         // If item exists, update quantity
// // //         if (action === "increase") {
// // //           updatedCart[itemIndex].quantity += 1;
// // //         } else if (action === "decrease") {
// // //           if (updatedCart[itemIndex].quantity > 1) {
// // //             updatedCart[itemIndex].quantity -= 1;
// // //           } else {
// // //             updatedCart.splice(itemIndex, 1); // Remove item if quantity is 1
// // //           }
// // //         }
// // //       } else if (action === "increase") {
// // //         // If item is not in cart, add it
// // //         updatedCart.push({ ...product, quantity: 1 });
// // //       }

// // //       return updatedCart;
// // //     });
// // //   };

// // //   // Render cart items with quantity controls
// // //   const renderCartItems = () => {
// // //     if (!cart.length) {
// // //       return <p>Your cart is empty.</p>;
// // //     }

// // //     return cart.map((item) => (
// // //       <div key={item.id} className="cart-item d-flex border border-2 bg-light w-100 p-2 mb-3">
// // //         <img
// // //           src={item.imgUrl}
// // //           alt={item.productName}
// // //           className="cart-item-img"
// // //           onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image if URL is broken
// // //         />
// // //         <div className="cart-item-details ms-3">
// // //           <h6>{item.productName}</h6>
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <span className="cart-item-total">
// // //               ${item.price} x {item.quantity} = ${item.price * item.quantity}
// // //             </span>
// // //             <div className="d-flex cart-item-buttons">
// // //               <button
// // //                 className="btn btn-outline-primary cart-btn"
// // //                 onClick={() => updateCartQuantity(item, "increase")}
// // //               >
// // //                 + {/* Large plus symbol */}
// // //               </button>
// // //               <button
// // //                 className="btn btn-outline-primary cart-btn"
// // //                 onClick={() => updateCartQuantity(item, "decrease")}
// // //               >
// // //                 - {/* Large minus symbol */}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     ));
// // //   };

// // //   // Render discount products with an option to add to cart
// // //   const renderDiscountProducts = () => {
// // //     if (!Array.isArray(DiscountProducts) || DiscountProducts.length === 0) {
// // //       return <p>No products available.</p>;
// // //     }

// // //     return DiscountProducts.map((item) => (
// // //       <div className="col-md-4 col-lg-4" key={item.id}>
// // //         <div className="card shadow-sm h-100">
// // //           <small className="bg-secondary text-light text-center rounded-pill w-25 p-2 mt-0">
// // //             {item.discount || 0}%
// // //           </small>
// // //           <img
// // //             src={item.imgUrl}
// // //             alt={item.productName}
// // //             className="card-img-top mt-3 p-2"
// // //             style={{ height: "200px", objectFit: "cover" }}
// // //             onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image for broken URLs
// // //           />
// // //           <div className="card-body">
// // //             <h5 className="card-title">{item.productName}</h5>
// // //             <small className="text-muted">Rating: {item.avgRating || "No rating"}</small>
// // //             <div className="d-flex justify-content-between align-items-center mt-2">
// // //               <span className="fw-bold">${item.price}</span>
// // //               <button
// // //                 className="btn btn-outline-primary"
// // //                 onClick={() => updateCartQuantity(item, "increase")}
// // //               >
// // //                 Add to Cart
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     ));
// // //   };

// // //   return (
// // //     <div className="container my-5">
// // //       <h2 className="text-center text-primary mb-4">Big Discount</h2>

// // //       {/* Cart Section */}
// // //       <div className="cart-section bg-light p-3 mb-5">
// // //         <h4>Cart Items</h4>
// // //         {renderCartItems()}
// // //       </div>

// // //       {/* Discount Products Section */}
// // //       <div className="row g-3 mt-2">
// // //         {renderDiscountProducts()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Prop validation for DiscountProducts array
// // // Cart.propTypes = {
// // //   DiscountProducts: PropTypes.arrayOf(
// // //     PropTypes.shape({
// // //       id: PropTypes.number.isRequired,
// // //       productName: PropTypes.string.isRequired,
// // //       price: PropTypes.number.isRequired,
// // //       discount: PropTypes.number.isRequired,
// // //       imgUrl: PropTypes.string.isRequired,
// // //       avgRating: PropTypes.number,
// // //     })
// // //   ).isRequired,
// // // };

// // // export default Cart;

// // import React, { useState, useEffect } from "react";
// // import PropTypes from "prop-types";

// // const Cart = ({ DiscountProducts = [] }) => {
// //   const [cart, setCart] = useState([]);

// //   // Log DiscountProducts when updated
// //   useEffect(() => {
// //     if (!Array.isArray(DiscountProducts)) {
// //       console.warn("DiscountProducts is not an array:", DiscountProducts);
// //     } else {
// //       console.log("Received DiscountProducts:", DiscountProducts);
// //     }
// //   }, [DiscountProducts]);

// //   // Function to handle updating item quantities in the cart
// //   const updateCartQuantity = (product, action) => {
// //     setCart((prevCart) => {
// //       const updatedCart = [...prevCart];
// //       const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

// //       if (itemIndex !== -1) {
// //         // If item exists, update quantity
// //         if (action === "increase") {
// //           updatedCart[itemIndex].quantity += 1;
// //         } else if (action === "decrease") {
// //           if (updatedCart[itemIndex].quantity > 1) {
// //             updatedCart[itemIndex].quantity -= 1;
// //           } else {
// //             updatedCart.splice(itemIndex, 1); // Remove item if quantity is 1
// //           }
// //         }
// //       } else if (action === "increase") {
// //         // If item is not in cart, add it
// //         updatedCart.push({ ...product, quantity: 1 });
// //       }

// //       return updatedCart;
// //     });
// //   };

// //   // Filter valid discount products
// //   const validDiscountProducts = DiscountProducts.filter(
// //     (item) =>
// //       item.id &&
// //       item.productName &&
// //       typeof item.price === "number" &&
// //       item.imgUrl
// //   );

// //   // Render cart items with quantity controls
// //   const renderCartItems = () => {
// //     if (!cart.length) {
// //       return <p>Your cart is empty.</p>;
// //     }

// //     return cart.map((item) => (
// //       <div key={item.id} className="cart-item d-flex border border-2 bg-light w-100 p-2 mb-3">
// //         <img
// //           src={item.imgUrl}
// //           alt={item.productName}
// //           className="cart-item-img"
// //           onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
// //         />
// //         <div className="cart-item-details ms-3">
// //           <h6>{item.productName}</h6>
// //           <div className="d-flex justify-content-between align-items-center">
// //             <span className="cart-item-total">
// //               ${item.price} x {item.quantity} = ${item.price * item.quantity}
// //             </span>
// //             <div className="d-flex cart-item-buttons">
// //               <button
// //                 className="btn btn-outline-primary cart-btn"
// //                 onClick={() => updateCartQuantity(item, "increase")}
// //                 aria-label={`Increase quantity of ${item.productName}`}
// //               >
// //                 +
// //               </button>
// //               <button
// //                 className="btn btn-outline-primary cart-btn"
// //                 onClick={() => updateCartQuantity(item, "decrease")}
// //                 aria-label={`Decrease quantity of ${item.productName}`}
// //               >
// //                 -
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     ));
// //   };

// //   // Render discount products with an option to add to cart
// //   const renderDiscountProducts = () => {
// //     if (!validDiscountProducts.length) {
// //       return <p>No products available.</p>;
// //     }

// //     return validDiscountProducts.map((item) => (
// //       <div className="col-md-4 col-lg-4" key={item.id}>
// //         <div className="card shadow-sm h-100">
// //           <small className="bg-secondary text-light text-center rounded-pill w-25 p-2 mt-0">
// //             {item.discount || 0}%
// //           </small>
// //           <img
// //             src={item.imgUrl}
// //             alt={item.productName}
// //             className="card-img-top mt-3 p-2"
// //             style={{ height: "200px", objectFit: "cover" }}
// //             onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
// //           />
// //           <div className="card-body">
// //             <h5 className="card-title">{item.productName}</h5>
// //             <small className="text-muted">Rating: {item.avgRating || "No rating"}</small>
// //             <div className="d-flex justify-content-between align-items-center mt-2">
// //               <span className="fw-bold">${item.price}</span>
// //               <button
// //                 className="btn btn-outline-primary"
// //                 onClick={() => updateCartQuantity(item, "increase")}
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div className="container my-5">
// //       <h2 className="text-center text-primary mb-4">Big Discount</h2>

// //       {/* Cart Section */}
// //       <div className="cart-section bg-light p-3 mb-5">
// //         <h4>Cart Items</h4>
// //         {renderCartItems()}
// //       </div>

// //       {/* Discount Products Section */}
// //       <div className="row g-3 mt-2">{renderDiscountProducts()}</div>
// //     </div>
// //   );
// // };

// // // Prop validation for DiscountProducts array
// // Cart.propTypes = {
// //   DiscountProducts: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       productName: PropTypes.string.isRequired,
// //       price: PropTypes.number.isRequired,
// //       discount: PropTypes.number,
// //       imgUrl: PropTypes.string.isRequired,
// //       avgRating: PropTypes.number,
// //     })
// //   ).isRequired,
// // };

// // // Default props
// // Cart.defaultProps = {
// //   DiscountProducts: [],
// // };

// // export default Cart;

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const Cart = ({ DiscountProducts = [] }) => {
//   const [cart, setCart] = useState([]);

//   // Log DiscountProducts when updated
//   useEffect(() => {
//     if (!Array.isArray(DiscountProducts)) {
//       console.warn("DiscountProducts is not an array:", DiscountProducts);
//     } else {
//       console.log("Received DiscountProducts:", DiscountProducts);
//     }
//   }, [DiscountProducts]);

//   // Function to handle updating item quantities in the cart
//   const updateCartQuantity = (product, action) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart];
//       const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

//       if (itemIndex !== -1) {
//         // If item exists, update quantity
//         if (action === "increase") {
//           updatedCart[itemIndex].quantity += 1;
//         } else if (action === "decrease") {
//           if (updatedCart[itemIndex].quantity > 1) {
//             updatedCart[itemIndex].quantity -= 1;
//           } else {
//             updatedCart.splice(itemIndex, 1); // Remove item if quantity is 1
//           }
//         }
//       } else if (action === "increase") {
//         // If item is not in cart, add it
//         updatedCart.push({ ...product, quantity: 1 });
//       }

//       return updatedCart;
//     });
//   };

//   // Filter valid discount products
//   const validDiscountProducts = DiscountProducts.filter(
//     (item) =>
//       item.id &&
//       item.productName &&
//       typeof item.price === "number" &&
//       item.imgUrl
//   );

//   // Render cart items with quantity controls
//   const renderCartItems = () => {
//     if (!cart.length) {
//       return <p>Your cart is empty.</p>;
//     }

//     return cart.map((item) => (
//       <div key={item.id} className="cart-item d-flex border border-2 bg-light w-100 p-2 mb-3">
//         <img
//           src={item.imgUrl}
//           alt={item.productName}
//           className="cart-item-img"
//           onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
//         />
//         <div className="cart-item-details ms-3">
//           <h6>{item.productName}</h6>
//           <div className="d-flex justify-content-between align-items-center">
//             <span className="cart-item-total">
//               ${item.price} x {item.quantity} = ${item.price * item.quantity}
//             </span>
//             <div className="d-flex cart-item-buttons">
//               <button
//                 className="btn btn-outline-primary cart-btn"
//                 onClick={() => updateCartQuantity(item, "increase")}
//                 aria-label={`Increase quantity of ${item.productName}`}
//               >
//                 +
//               </button>
//               <button
//                 className="btn btn-outline-primary cart-btn"
//                 onClick={() => updateCartQuantity(item, "decrease")}
//                 aria-label={`Decrease quantity of ${item.productName}`}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   // Render discount products with an option to add to cart
//   const renderDiscountProducts = () => {
//     if (!validDiscountProducts.length) {
//       return <p>No products available.</p>;
//     }

//     return validDiscountProducts.map((item) => (
//       <div className="col-md-4 col-lg-4" key={item.id}>
//         <div className="card shadow-sm h-100">
//           <small className="bg-secondary text-light text-center rounded-pill w-25 p-2 mt-0">
//             {item.discount || 0}%
//           </small>
//           <img
//             src={item.imgUrl}
//             alt={item.productName}
//             className="card-img-top mt-3 p-2"
//             style={{ height: "200px", objectFit: "cover" }}
//             onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
//           />
//           <div className="card-body">
//             <h5 className="card-title">{item.productName}</h5>
//             <small className="text-muted">Rating: {item.avgRating || "No rating"}</small>
//             <div className="d-flex justify-content-between align-items-center mt-2">
//               <span className="fw-bold">${item.price}</span>
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={() => updateCartQuantity(item, "increase")}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center text-primary mb-4">Big Discount</h2>

//       {/* Cart Section */}
//       <div className="cart-section bg-light p-3 mb-5">
//         <h4>Cart Items</h4>
//         {renderCartItems()}
//       </div>

//       {/* Discount Products Section */}
//       <div className="row g-3 mt-2">{renderDiscountProducts()}</div>
//     </div>
//   );
// };

// // Prop validation for DiscountProducts array
// Cart.propTypes = {
//   DiscountProducts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       productName: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       discount: PropTypes.number,
//       imgUrl: PropTypes.string.isRequired,
//       avgRating: PropTypes.number,
//     })
//   ).isRequired,
// };

// // Default props
// Cart.defaultProps = {
//   DiscountProducts: [],
// };

// export default Cart;

import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const Cart = ({ DiscountProducts = [] }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Log DiscountProducts when updated
  useEffect(() => {
    if (!Array.isArray(DiscountProducts)) {
      console.warn("DiscountProducts is not an array:", DiscountProducts);
    } else {
      console.log("Received DiscountProducts:", DiscountProducts);
    }
  }, [DiscountProducts]);

  const updateCartQuantity = (product, action) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (itemIndex !== -1) {
        if (action === "increase") {
          updatedCart[itemIndex].quantity += 1;
        } else if (action === "decrease") {
          if (updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity -= 1;
          } else {
            updatedCart.splice(itemIndex, 1);
          }
        }
      } else if (action === "increase") {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });
  };

  const validDiscountProducts = useMemo(() => {
    return DiscountProducts.filter(
      (item) =>
        item.id &&
        item.productName &&
        typeof item.price === "number" &&
        item.imgUrl
    );
  }, [DiscountProducts]);

  const renderCartItems = () => {
    if (!cart.length) {
      return <p>Your cart is empty.</p>;
    }

    return cart.map((item) => (
      <div
        key={item.id}
        className="cart-item d-flex border border-2 bg-light w-100 p-2 mb-3"
      >
        <img
          src={item.imgUrl}
          alt={item.productName}
          className="cart-item-img"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
        <div className="cart-item-details ms-3">
          <h6>{item.productName}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <span className="cart-item-total">
              ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </span>
            <div className="d-flex cart-item-buttons">
              <button
                className="btn btn-outline-primary cart-btn"
                onClick={() => updateCartQuantity(item, "increase")}
                aria-label={`Increase quantity of ${item.productName}`}
              >
                +
              </button>
              <button
                className="btn btn-outline-primary cart-btn"
                onClick={() => updateCartQuantity(item, "decrease")}
                aria-label={`Decrease quantity of ${item.productName}`}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderDiscountProducts = () => {
    if (!validDiscountProducts.length) {
      return <p>No products available.</p>;
    }

    return validDiscountProducts.map((item) => (
      <div className="col-md-4 col-lg-4" key={item.id}>
        <div className="card shadow-sm h-100">
          <small className="bg-secondary text-light text-center rounded-pill w-25 p-2 mt-0">
            {item.discount || 0}%
          </small>
          <img
            src={item.imgUrl}
            alt={item.productName}
            className="card-img-top mt-3 p-2"
            style={{ height: "200px", objectFit: "cover" }}
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className="card-body">
            <h5 className="card-title">{item.productName}</h5>
            <small className="text-muted">
              Rating: {item.avgRating || "No rating"}
            </small>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="fw-bold">${item.price}</span>
              <button
                className="btn btn-outline-primary"
                onClick={() => updateCartQuantity(item, "increase")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Big Discount</h2>

      {/* Cart Section */}
      <div className="cart-section bg-light p-3 mb-5">
        <h4>Cart Items</h4>
        {renderCartItems()}
      </div>

      {/* Discount Products Section */}
      <div className="row g-3 mt-2">{renderDiscountProducts()}</div>
    </div>
  );
};

// Prop validation for DiscountProducts array
Cart.propTypes = {
  DiscountProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      imgUrl: PropTypes.string.isRequired,
      avgRating: PropTypes.number,
    })
  ).isRequired,
};

// Default props
Cart.defaultProps = {
  DiscountProducts: [],
};

export default Cart;
