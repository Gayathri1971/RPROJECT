import React from 'react';

const ShopDataList = ({ data }) => {
  return (
    <div className="productlist row ">
      {data.length > 0 ? (
        data.map((product) => (
          <div key={product.id} className="productcard col-md-4 border">
            <h5 className='text-name'>{product.productName}</h5>
            <img src={product.imgUrl} alt={product.productName} className='image' />
            <div className="d-flex justify-content-center mb-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
            <p>Avg Rating: {product.avgRating}</p>
            <div className="d-flex justify-content-between align-items-center">
                <span className="card-text fw-bold">${product.price}</span>
                <button className="btn border rounded-circle">
                  +
                </button>
              </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ShopDataList;