import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
 import Productsdata from "./Components/Productsdata"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import Cart from './Components/Cart';
import Shop from './Components/Shop';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path='shop' element={<Shop />}/>
        <Route path='productdata' element={<Productsdata />} />
        <Route path='cart' element={ <Cart />} />
        {/* <Route path='cartpage' element={  <CartPage />} /> */}

      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;