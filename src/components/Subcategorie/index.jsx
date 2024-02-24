import React,{useState,useEffect,useRef} from "react";
import left from "./leftarrow.svg";
import right from "./rightarrow.svg";
import Rating from "../Rating";
import { useNavigate } from "react-router-dom";
import heart from "./heart.svg";
import emptyheart from "./emptyheart.svg";
const Subcategorie=(props)=>{
    const [getdeal,setdeal]=useState();
    const [getleftopacity,setleftopacity]=useState(0.3);
    const [getrightopacity,setrightopacity]=useState(1);
    const [getwishlist,setwishlist]=useState();
    let wishl="";
    function handleHeart(e)
    {
        if(!localStorage.getItem("token"))
        {
            e.stopPropagation();
            navigate("/Login");
        }
        else{
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
    }
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${props.sub}"}`,{
            method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }
        }).then(data=>{
            data.json().then(data1=>{
                setdeal(data1.data);
                //console.log(getdeal,"test");
            })
        })
    },[]);
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
    const [gettransform,settransform]=useState(0);
    var leftarrowhandler=()=>
    {
        if(getrightopacity===0.3 &&gettransform===-(getdeal?.length-3)*23)
        {
            setrightopacity(1);
        }
        if(gettransform!==0)
        {
            settransform(gettransform+23);
        }
        else
        {
            setleftopacity(0.3);
        }
        
    }
    var rightarrowhandler=()=>
    {
        if(getleftopacity===0.3&&gettransform===0)
        {
            setleftopacity(1);
        }
        if(gettransform!==-(getdeal?.length-3)*23)
        {
            settransform(gettransform-23);
        }
        else
        {
            setrightopacity(0.3);
        }
    }
    
    async function handlerror(image,i)
    {
        try{
        let res=await fetch(image);
        if(res.status!==200)
        {
            setdeal(getdeal.slice(0,i).concat(getdeal.slice(i+1)));
        }
        return res.status;
        }catch(e)
        {
            console.log(e);
        }
        ///let finalvalue=await res.json();
        //console.log(res.status);
        
        // if(res.status===404)
        // {
        //    // bool.current=true;
        //    //settopdeal(filterarray);
        // }
        return ;
        // let filterarray=gettopdeal.filter(val=>{
        //     let re=await fetch(`${gettopdeal[2].displayImage}`);
        //     return val.displayImage!==e.target.src;
        // });
        //settopdeal(filterarray);
        //console.log(gettopdeal.length,"length");
    }

    getdeal?.forEach((element,index) => {
        handlerror(element.displayImage,index)
    });
    function handleclick(e)
    {
        navigate(`/productdetails/${e.currentTarget.getAttribute("value")}`);
    }
    return(
        <div className="trendingdeal">
            <h2>{props.sub}</h2>
           <div id="dodflex">
            <img src={left} className="arrow" alt="leftarrow" onClick={leftarrowhandler} style={{opacity:getleftopacity}}/>
            <div id="dodfunctionality">
            <div className="dodsection" style={{transform:`translateX(${gettransform}rem`}}>
                
            {
                getdeal?.map(val=>{
                    let wl=emptyheart;
                    getwishlist?.forEach(val1=>{
                        if(val1.products._id===val._id)
                        {
                            wl=heart;
                        }
                    })
                    return <div className="dodcard" onClick={handleclick} value={val._id}><img className="dodimg" src={val.displayImage} alt={val.deal}/><img src={wl} id={val._id} className="heartclass" alt="heart" onClick={handleHeart} value={val._id} value2={(wl===emptyheart)?"true":"false"}/><span className="dodname">{val.name}</span><span>{`₹${val.price}`}</span><Rating ratings={val.ratings}/></div>
                })
            }
            
            </div>
            </div>
            <img src={right} className="arrow" alt="rightarrow" onClick={rightarrowhandler} style={{opacity:getrightopacity}}/></div>
            
        </div>
    )
}
export default Subcategorie;