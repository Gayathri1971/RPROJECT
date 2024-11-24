import React, { useState } from 'react';
import './Shop.css';
import ShopDataList from './ShopDataList'; // Component for displaying product list
import { shopproductList } from './DropdownData'; // Product list import
import Dropdowproduct from './Dropdowproduct'; // Dropdown component


const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('sofa'); // Default category
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Filter products based on search term and selected category
  const filteredProducts = (shopproductList || []).filter((product) => {
    const matchesSearchTerm = product.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className="shop-page">
        <h1 className="text-center text-light pt-5">Products</h1>
        <nav className="navbar navbarr navbar-expand-lg">
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
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <i className="fa-solid fa-magnifying-glass text-light-emphasis search"></i>
            </form>
          </div>
        </nav>
      </div>

      {/* Conditional rendering for product details or product list */}
      {selectedProduct ? (
        <div className="product-details">
          <h2>{selectedProduct.productName}</h2>
          <p>{selectedProduct.description}</p>
          <button className="btn btn-primary" onClick={handleBackToList}>
            Back to Products
          </button>
        </div>
      ) : (
        <ShopDataList data={filteredProducts} onProductClick={handleProductClick} />
       
      )}
    </div>
  );
};

export default Shop;