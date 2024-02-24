import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import rightarrow from "./rightarrow.svg";
import leftarrow from "./leftarrow.svg"
import fullstar from "./Star.svg";
import heart from "./heart.svg";
import emptyheart from "./emptyheart.svg";
import Mymodal from "../Modal";
import "./style.css"
import Footer from "../footer";
const Productdetail=()=>{
    let {productid}=useParams();
    const [getproduct,setproduct]=useState();
    const [gettransform,settransform]=useState(0);
    const [getimagedisplay,setimagedisplay]=useState(getproduct?.images[0]);
    const navigate=useNavigate();
    function handleHeart(e)
    {
        e.stopPropagation();
        //console.log(e.currentTarget.getAttribute("value"),e.currentTarget.getAttribute("value2"),"value2");
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
            
            
            test.setAttribute("src",`${heart}`);
            test.setAttribute("value2","false");
        }
        else
        {
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${e.currentTarget.getAttribute("value")}`,{
            "method":"DELETE",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
        })
            test.setAttribute("src",`${emptyheart}`);
            test.setAttribute("value2","true");
        }
    }
    useEffect(()=>{
        try{
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productid}`,{
            method:"GET",
            headers:{
                projectId: "90hr9xwxns9k"
            }
        }).then(data=>data.json().then(data1=>{
            setproduct(data1.data);
            setimagedisplay(data1.data.images[0]);
        }))
        }catch(e)
        {
            console.log(e);
        }
    },[]);
    const [getwishlist,setwishlist]=useState();
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
    function leftbtnhandle(e)
    {
        if(gettransform!==0)
        {
            settransform(gettransform+10);
        }
        
    }
    function rightbtnhandle(e)
    {
       // console.log(getproduct?.images.length*10-40,gettransform);
        if(gettransform!==-(getproduct?.images.length*10-30))
        {
            settransform(gettransform-10);
        }
        
    }
    function imagehandler(e)
    {
        
        setimagedisplay(e.target.src);
        
    }
    //imagehandler();
    console.log(getimagedisplay);
    let wl=emptyheart;
    getwishlist?.forEach(val1=>{
        if(val1.products._id===getproduct._id)
        {
            wl=heart;
        }
    })
    const [Modalisopen,setModalisopen]=useState(false);

    function clickhandler(e)
    {
        if(!localStorage.getItem("token"))
        {
            navigate("/Login");
        }
        else{
        const bodydata={
            quantity:1
        }
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productid}`,{
            method:"PATCH",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
            body:JSON.stringify(bodydata)
        })
        setModalisopen(true);
    }
        
    }
    const closeModal=()=>{
        setModalisopen(false);
    }
    return(
        <div id="productdetailspage">
            <Navbar/>
            <div className="productdetaildisplaysection">
                <div className="productdetailimgsection">
                
                    <div className="producttinyimgsection">
                        <img src={leftarrow} alt="leftarrow" className="productdetalleftarrow" onClick={leftbtnhandle}/>
                        <div className="controloverflow">
                        <div className="multipleminiimages" style={{transform:`translateY(${gettransform}rem`}}>
                        {
                            getproduct?.images.map(val=>{
                                return <img src={val} alt={getproduct?.name} className="productsmallimg" onClick={imagehandler}/>
                            })
                        }
                        </div></div>
                        <img src={rightarrow} alt="leftarrow" className="productdetalrightarrow" onClick={rightbtnhandle}/>
                    </div>
                    <div className="prodctdetailimgsection">
                        <img src={getimagedisplay} alt={getproduct?.name} className="productdisplayimg"/>
                        <img src={wl} id={getproduct?._id} className="heartclass" alt="heart" onClick={handleHeart} value={getproduct?._id} value2={(wl===emptyheart)?"true":"false"}/>
                    </div>
                </div>
                <div className="displaydetails">
                    <h3>{getproduct?.name}</h3>
                    <div className="ratingvalue">{Math.ceil(getproduct?.ratings*100)/100}<img className="starrating" src={fullstar} alt="star"/></div>
                    <h2 style={{'margin-bottom':0}}>{`₹${getproduct?.price}.00`}</h2>
                    <p style={{'margin-top':0}}>(incl. All Taxes)</p>
                    <button className="productdetailsbtn" style={{"margin-right":"1rem"}}>Buy</button>
                    <button className="productdetailsbtn" onClick={clickhandler}>Add to Cart</button>
                    <div>
                        <h3>Key Features</h3>
                        <ul>
                            {getproduct?.features.map(val=>{
                                return <li>{val}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Mymodal isOpen={Modalisopen} closeModel={closeModal} product={getproduct}/>
            <div className="productdetailoverview">
                <h3>Overview</h3>
                <p dangerouslySetInnerHTML={{__html: getproduct?.description}}></p>
            </div>
            <Footer/>
        </div>
    )
}
export default Productdetail;