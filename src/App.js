import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import { Routes,Route } from "react-router-dom";
import Productsdata from "./Components/Productsdata"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='productdata' element={<Productsdata />} />

      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
