import { useState,useEffect } from "react";
import Navbar from "../Navbar";
import Cartcard from "./cartcard";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
const Cartpage=()=>{
    const [getitems,setitems]=useState();
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",{
        method:"GET",
        headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
    }).then(data=>{
        data.json().then(data1=>{
            setitems(data1?.data);
        })
    })
    },[])
    return(
        <div className="cartsection">
            <Navbar/>
            <h2>Your Cart</h2>
            <div className="cartmain">
                <div className="cartproducts">
                    {
                        (getitems&&getitems?.items?.length>0)?(getitems?.items?.map(val=>{return <Cartcard product={val}/>})):<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg"/><p style={{"font-weight": "bold"}}>Oops! Your wishlist looks empty</p><button style={{width:"20rem"}} className="cartcheckoutbtn" onClick={()=>{navigate("/")}}>Continue Shopping</button></div>
                    }
                </div>
                <div className="cartcheckout">
                    <div className="cardcheckoutmain">
                    <h3>Order Summary (<span style={{color:"black"}} id="testcount">{getitems?.items.length}</span>) items</h3>
                    <div style={{display:"flex",justifyContent:"space-between"}}><p className="pcolor">Original price</p><p className="pcolor" id="testprice">{getitems?.totalPrice}</p></div>
                    <div style={{display:"flex",justifyContent:"space-between"}}><p className="pcolor">Total</p><p className="pcolor" id="testtotal">{getitems?.totalPrice}</p></div>
                    <button className="cartcheckoutbtn">Checkout</button>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Cartpage;