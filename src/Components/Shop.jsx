import React, { useState, useEffect } from 'react';
import './Shop.css';
import ShopDataList from './ShopDataList'; // Assuming this component displays the products
import { shopproductList } from './DropdownData'; // Updated product list import
import Dropdowproduct from './Dropdowproduct'; // Correct import for category dropdown

const Shop = () => {
  // State to manage the search term and selected category (default to "sofa")
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('sofa'); // Default category

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle category change (called from Dropdowproduct)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
      <h1 className="text-center text-light pt-5 thick-blue-text">Products</h1>
      <nav className="navbar navbarr navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* Pass the category change handler to Dropdowproduct */}
              <Dropdowproduct onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
            </ul>
            {/* Search bar */}
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

      {/* Pass filtered products to the data display component */}
      <ShopDataList data={filteredProducts} />
    </div>
  );
};

export default Shop;