import { useState } from "react";
import "./style.css";
const Cartcard=({product})=>{
    console.log(product.product.name);
    const [getdelete,setdelete]=useState("cartmainclass");
    let a=document.getElementById("testprice");
    let b=document.getElementById("testtotal");
    let c=document.getElementById("testcount");
    let price=product?.product?.price;
    console.log("testa",a,price);
    function wishlistHandler(e)
    {
        const bodydata={
            productId:product?.product?._id
        }
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
            "method":"PATCH",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
            body:JSON.stringify(bodydata)
        });
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${product?.product?._id}`,{
            "method":"DELETE",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        });
        a.innerText=parseInt(a.innerText)-parseInt(price);
    b.innerText=a.innerText;
    c.innerText=parseInt(c.innerText)-1;
        setdelete("displaynone");
    }
    function removeHandler(e)
    {
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${product?.product?._id}`,{
            "method":"DELETE",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        });
        a.innerText=parseInt(a.innerText)-parseInt(price);
    b.innerText=a.innerText;
    c.innerText=parseInt(c.innerText+"")-1;
        setdelete("displaynone");
    }
    return(
        <div className={getdelete==="cartmainclass"?"cartmainclass":"displaynone"}>
        <div className='mainmodal'>
                <img className="modaldisplayimg" src={product?.product?.displayImage} alt='displayimg'/>
                <p className='modalproductname' style={{color:"black"}}>{product?.product?.name}</p>
                <p className='modalproductprice' style={{color:"black"}}>{`₹${product?.product?.price}`}</p>
        </div>
        <div>
            <button className="Cartcardbtn" onClick={wishlistHandler}>Move to Wishlist</button>
            <button className="Cartcardbtn" onClick={removeHandler}>Remove</button>
        </div>
        </div>
    )
}
export default Cartcard;