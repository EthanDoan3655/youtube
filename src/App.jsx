import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Validation from "./Components/Validation";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const[products, setProducts]= useState([])
  useEffect(()=>{
    Axios.get("http://127.0.0.1:5001/api/product").then((response)=>{
      setProducts(response.data)
      console.log("raw data")
      console.log(response.data)
      console.log("pickle")
      console.log(products)
    }).catch((error)=>{
      throw error
    })
  },[])
  return(
    
  <Router>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/productlist" element={<ProductList products={products} />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>
  )
};

export default App;