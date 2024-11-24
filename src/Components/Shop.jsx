import React, { useState } from 'react';
import './Shop.css';
import ShopDataList from './ShopDataList'; // Component for displaying product list
import { shopproductList } from './DropdownData'; // Product list import
import Dropdowproduct from './Dropdowproduct'; // Dropdown component

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Search bar input
  const [selectedCategory, setSelectedCategory] = useState(''); // Default category
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product details

  // Update search term
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Update selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Show product details when clicked
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Go back to product list from details
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Filter products based on search term and category
  const filteredProducts = shopproductList.filter((product) => {
    const matchesSearch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  // Handle case when no products are available
  if (!shopproductList.length) {
    return <div className="text-center mt-5">No products available at the moment.</div>;
  }

  return (
    <div>
      <div className="shop-page">
        <h1 className="text-center text-light pt-5">Products</h1>
        {/* Product image section */}
        <div className="product-image-section">
          {/* <img
            src="https://media.houseandgarden.co.uk/photos/6294943156618cb1641c6da5/4:3/w_2668,h_2001,c_limit/MFOX9870.jpg"
            alt="Shop"
            className="shop-image"
          /> */}
        </div>
      </div>

      {/* Bottom section with dropdown and search bar */}
      <div className="bottom-section">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <Dropdowproduct
                onCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory}
              />
            </ul>
            <form className="d-flex">
              <input
                className="form-control searchbar"
                type="search"
                placeholder="Search products"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search Products"
              />
              <button type="button" className="btn search-icon" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* Show product details or list */}
      {selectedProduct ? (
        <div className="product-details">
          <h2 className="text-center text-primary mb-4">{selectedProduct.productName}</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src={selectedProduct.imgUrl || 'default-image.jpg'}
                alt={selectedProduct.productName}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-6">
              <h4>Details</h4>
              <p>{selectedProduct.description}</p>
              <p><strong>Price:</strong> ${selectedProduct.price || 'N/A'}</p>
              <button
                className="btn btn-secondary"
                onClick={handleBackToList}
                aria-label="Back to Product List"
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ShopDataList data={filteredProducts} onProductClick={handleProductClick} />
      )}
    </div>
  );
};

export default Shop;