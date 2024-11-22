// import React from 'react';
// import './Datamaping.css';
// import PropTypes from 'prop-types';

// import Serviceproductdata from './Serviceproductdata';
// // const Datamaping = ({ productData }) => {
//     const Datamaping = ({ productData = [] }) => {
//         // console.log("Product Data:", productData);
      
//         // if (!Array.isArray(productData) || productData.length === 0) {
//         //   return <div></div>; 
//         // }
//     return (
//         <div id="carouselExampleSlides" className="container mb-5 carousel slide" data-bs-ride="carousel" data-bs-interval="800">
//             <div className="carousel-inner">
//                 {productData.map((item, index) => (
//                     <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
//                         <div className="carousel-item-content d-flex justify-content-lg-end align-items-center">
//                             <img src={item.cover} className="carousel-image  w-90" alt={item.title} />

//                             <div className="carousel-caption text-start mb-5 pb-5 me-5 pe-5">
//                                 <h2 className="text-black">{item.title}</h2>
//                                 <p className="text-black w-50 text-start">{item.desc}</p>
                                
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlides" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlides" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//             <Serviceproductdata />
//         </div>
//     );
// };
// Datamaping.propTypes = {
//     productData: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         cover: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         desc: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   };

// export default Datamaping;


import React from 'react';
import './Datamaping.css';
import PropTypes from 'prop-types';

import Serviceproductdata from './Serviceproductdata';

const Datamaping = ({ productData = [] }) => {
    return (
        <div
            id="carouselExampleSlides"
            className="container mb-5 carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="800"
        >
            <div className="carousel-inner">
                {productData.map((item, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={item.id.toString()} // Ensure the key is a string
                    >
                        <div className="carousel-item-content d-flex justify-content-lg-end align-items-center">
                            <img
                                src={item.cover}
                                className="carousel-image w-90"
                                alt={item.title}
                            />
                            <div className="carousel-caption text-start mb-5 pb-5 me-5 pe-5">
                                <h2 className="text-black">{item.title}</h2>
                                <p className="text-black w-50 text-start">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlides"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleSlides"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
            <Serviceproductdata />
        </div>
    );
};

Datamaping.propTypes = {
    productData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // Accept both string and number
                .isRequired,
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Datamaping;
