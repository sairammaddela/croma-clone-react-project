
import { Navigate, useNavigate } from "react-router-dom";
import fullstar from "./Star.svg";
import { useState,useEffect } from "react";
import heart from "./heart.svg";
import emptyheart from "./emptyheart.svg";
const Productcard=(props)=>{
    const {element}=props;
    const [getwishlist,setwishlist]=useState();
    let wishl="";
    function handleHeart(e)
    {
        e.stopPropagation();
        console.log(e.currentTarget.getAttribute("value"),e.currentTarget.getAttribute("value2"),"value2");
        const bodydata={
            productId:e.currentTarget.getAttribute("value")
        }
        const test=document.getElementById(`${e.currentTarget.getAttribute("value")}`);
        if(e.currentTarget.getAttribute("value2")==="true")
        {
            fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
            "method":"PATCH",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
            body:JSON.stringify(bodydata)
        })
            wishl=0;
            
            test.setAttribute("src",`${heart}`);
            test.setAttribute("value2","false");
        }
        else
        {
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${e.currentTarget.getAttribute("value")}`,{
            "method":"DELETE",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        })
            wishl=0;
            test.setAttribute("src",`${emptyheart}`);
            test.setAttribute("value2","true");
        }
    }
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,{
            "method":"GET",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
    }).then(data=>{
        data.json().then(data1=>{
            console.log(data1.data,"wishlist24");
            setwishlist(data1.data?.items);
        })
    })
    },[]);
    let wl=emptyheart;
    getwishlist?.forEach(val1=>{
        if(val1.products._id===element._id)
        {
            wl=heart;
        }
    })
    const navigate=useNavigate();
    function handleclick(e)
    {
        navigate(`/productdetails/${element._id}`);
    }
    return(
        <div className="searchcard" onClick={handleclick}>
            <img src={element.displayImage} alt={element.name} className="searchimage"/>
            <img src={wl} id={element._id} className="heartclass" alt="heart" onClick={handleHeart} value={element._id} value2={(wl===emptyheart)?"true":"false"}/>
            <div className="elementname">{element.name}</div>
            <div className="ratingvalue">{Math.ceil(element.ratings*100)/100}<img className="starrating" src={fullstar} alt="star"/></div>
            <h3>₹{element.price}</h3>
        </div>
    )
}
export default Productcard;