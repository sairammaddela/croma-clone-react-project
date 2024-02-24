import { useEffect, useState } from "react";
import Wishlistcard from "./whishlistcard";
import "./style.css";
import Navbar from "../Navbar";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
const Wishlistpage=()=>{
    const [getwishlist,setwishlist]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
            method:"GET",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        }).then(data=>{
            data.json().then(data1=>{
                setwishlist(data1.data?.items);
            })
        })
    },[])
    return(
        <div style={{width:"100%", background:"#191919"}}>
            <Navbar/>
            <h2>My Wishlist</h2>
            <div style={{display:"flex",flexDirection:"column","alignItems":"center",gap:"1rem"}}>
            {
                getwishlist?.length?(getwishlist?.map(val=>{return <Wishlistcard product={val.products}/>})):<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg"/><p style={{"font-weight": "bold"}}>Oops! Your wishlist looks empty</p><button className="cartcheckoutbtn" onClick={()=>{navigate("/")}}>Continue Shopping</button></div>
            }
            </div>
            <Footer/>
        </div>
    )
}
export default Wishlistpage;