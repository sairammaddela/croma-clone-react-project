import "./style.css";
import Mymodal from "../Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Wishlistcard=({product})=>{
    const [Modalisopen,setModalisopen]=useState(false);
    const [getdelete,setdelete]=useState("whishlistcard");
    const navigate=useNavigate();
    function cartHandler(e)
    {
        const bodydata={
            quantity:1
        }
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${product._id}`,{
            method:"PATCH",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
            body:JSON.stringify(bodydata)
        })
        setModalisopen(true);
    }
    const closeModal=()=>{
        setModalisopen(false);
    }
    function deleteHandler(e)
    {
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${product._id}`,{
            "method":"DELETE",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        });
        setdelete("displaynone");

    }
    function errorHandler(e)
    {
        
        console.log(e.currentTarget,"testing");
        const s=e.currentTarget;
        s.setAttribute("src","data:image/png;base64,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");
    }
    return(
        <div className={getdelete!=="displaynone"?"whishlistcard":"displaynone"}>
            <div>
                <img src={product.displayImage} alt="display" onError={errorHandler} style={{width:"10rem"}}/>
            </div>
            <div style={{textAlign:"left",width:"50rem"}}>
                <h4 style={{color:"white"}}>{product.name}</h4>
                <h4 style={{color:"white"}}>₹{product.price}</h4>
            </div>
            <div className="wishlistbtnsction">
                <button onClick={cartHandler} style={{height:"2.5rem",backgroundColor:"#12daa8", color:'black',cursor:"pointer","border-radius":"1rem"}}>Add to Cart</button>
                <button onClick={deleteHandler} style={{height:"2.5rem",background:"black", color:'white', border:"1px solid white",cursor:"pointer","border-radius":"1rem"}}>Delete</button>
                <Mymodal isOpen={Modalisopen} closeModel={closeModal} product={product}/>
            </div>
        </div>
    )
}
export default Wishlistcard;