import {Link} from "react-router-dom";
import Navbar from "../Navbar";
import Categories from "../Categories";
import { createContext,useState,useEffect } from "react";
import Dealoftheday from "../Dealoftheday/Dealoftheday";
import Trendingdeals from "../Trendingdeals";
import Subcategorie from "../Subcategorie";
import "./style.css";
import Footer from "../footer";
import Carousel from "../Banner";
export const store=createContext();
const Home=(props)=>{
    const [getcatarr,setcatarr]=useState();
  useEffect(()=>{
    fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",{
        method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }
    }).then(data=>{
        data.json().then(data1=>{
            setcatarr(data1.data);
        })
    })
},[]);
return(
    <div className="home">
      
        <store.Provider value={[getcatarr,setcatarr]}>
        
        <Navbar/>
        <Carousel/>
        <Categories/>
  <Dealoftheday/>
  <Trendingdeals/>
  {
    getcatarr?.map(val=>{
      return <Subcategorie sub={val}/>;
    })
  }
  </store.Provider>
  <Footer/>
    </div>
)
}
export default Home;