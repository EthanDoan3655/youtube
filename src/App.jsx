import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
// import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
// import Validation from "./Components/Validation";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";


function App(){
  
  
 
  return( 
  <Router>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/productlist" element={<ProductList/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>
  )
};

export default App;