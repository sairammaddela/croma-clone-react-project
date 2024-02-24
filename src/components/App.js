import "../styles/App.css";
import Navbar from "./Navbar";
import Categories from "./Categories";
import {BrowserRouter,Routes, Route} from "react-router-dom"; 
import { createContext,useState,useEffect } from "react";
import Dealoftheday from "./Dealoftheday/Dealoftheday";
import Trendingdeals from "./Trendingdeals";
import Subcategorie from "./Subcategorie";
import Home from "./Home";
import Searchcomponent from "./Search";
import Productcardtemplate from "./ProductCardComponent";
import Productdetail from "./Productdetails";
import Login from "./Login";
import Register from "./Register";
import Cartpage from "./Cart";
import Wishlistpage from "./Whishlist";
import Delivery from "./Delivery";
import Mypayment from "./Mypayment";
import OrderPlaced from "./ordersuccessful";
import Myorders from "./Myorders";
import Carousel from "./Banner";


export const App=()=> {
  
  return (
  <div className="App">
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/search/:id" element={<Searchcomponent/>}/>
    <Route path="/category/:category" element={<Productcardtemplate/>}/>
    <Route path="/productdetails/:productid" element={<Productdetail/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/cart" element={<Cartpage/>}/>
    <Route path="/wishlist" element={<Wishlistpage/>}/>
    <Route path="/shipping" element={<Delivery/>}/>
    <Route path="/mypayment" element={<Mypayment/>}/>
    <Route path="/orderplaced" element={<OrderPlaced/>}/>
    <Route path="/myorders" element={<Myorders/>}/>
    <Route path="/banner" element={<Carousel/>}/>
  </Routes>
  </BrowserRouter>
  {/* <Home/> */}
  </div>
  )
}

//export default App;
