import React from 'react';

const Dropdowproduct = ({ onCategoryChange }) => {
  const categories = ['sofa', 'chair','mobile','watch','wireless','product']; // Assuming these are the categories in your data

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select Category
      </button>
      <ul className="dropdown-menu">
        {categories.map((category) => (
          <li key={category}>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => onCategoryChange(category)} // Pass category to the parent
            >
              {category}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Dropdowproduct;