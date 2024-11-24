import React from 'react';

const ShopDataList = ({ data }) => {
  return (
    <div className="productlist row ">
      {data.length > 0 ? (
        data.map((product) => (
          
          <div key={product.id} className="productcard col-md-4 border">
                        <img src={product.imgUrl} alt={product.productName} className='image' />

            <h5 className='text-name'>{product.productName}</h5>
            
            <div className="d-flex justify-content-between align-items-center">
                <span className="card-text fw-bold">${product.price}</span>
                <button className="btn btn-outline-primary">
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


