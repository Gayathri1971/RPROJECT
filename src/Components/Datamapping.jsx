// import React from 'react';
import './Service.css';
import { DiscountProducts } from './DiscountProducts';
import { serviceData } from './ServiceData'; 

const DataMapping = () => {
  return (
    <div>
      {/* Mapping serviceData */}
      <div className="d-flex gap-3 text-center m-5 p-5">
        {serviceData.map((item, index) => (
          <div key={index} className="p-2 container" style={{ backgroundColor: item.bg }}>
            <div className="border bg-white p-2 icons">
              {item.icon} {/* JSX element from serviceData */}
            </div>
            <h5>{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Discount Products Section with Cards */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Discount Products</h2>
        <div className="row">
          {DiscountProducts.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm">
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">{item.shortDesc}</p>
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold">${item.price}</span>
                    <span className="text-danger">{item.discount}% off</span>
                  </div>
                  <button className="btn btn-outline-primary mt-2">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataMapping;
