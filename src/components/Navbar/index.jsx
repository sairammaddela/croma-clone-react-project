import logo from "./Croma_Logo_acrkvn.svg"
import icon from "./Menu_icon.svg";
import "./styles.css";
import Input from "../Textinput/index";
import loc from "./location.svg";
import profile from "./profile.svg";
import cart from "./carticon.svg";
import Menuholder from "../MenuHolder";
import { useState,useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../Home";
import Profile from "../Profile";
const Navbar=()=>{
    // const [getcatarr,setcatarr]=useContext(store);
    const [getcatarr,setcatarr]=useState();
    const navigate=useNavigate();
  useEffect(()=>{
    try{fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",{
        method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }
    }).then(data=>{
        data.json().then(data1=>{
            setcatarr(data1.data);
        })
    })}catch(e){
        console.log(e);
    }
},[]);
const [getitems,setitems]=useState();
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
    //console.log(getcatarr);
    const styless={
        placeholder:"What are you looking for?",
        "margin-left": "4rem",
        width: "27rem",
        height: "1.8rem",
        "border-radius": "4px",
        padding:"0.5rem"
    }
    const [getboole,setboole]=useState(false);
    const [getprofilebool,setprofilebool]=useState(false);
    function clickHandler()
    {
        if(!getboole)
        setboole(true);
        else
        setboole(false);
    }
    function handleprofile(e)
    {
        if(!getprofilebool)
        setprofilebool(true);
        else
        setprofilebool(false);
    }
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo" id="cromalogo"/></Link>
            <div className="menusection" onClick={clickHandler}>
            <img src={icon} alt="icon" id="menuicon" style={{width:"2rem"}}/>
            <span>Menu</span>
            <Menuholder bool={getboole} catarr={getcatarr}/>
            </div>
            
            <Input styles={styless}/>
            <img src={loc} alt="location" id="locationicon"/>
            <span>Mumbai 501505</span>
            <div style={{position:"relative"}}>
            <img src={profile} alt="profile" id="profileicon" style={{width:"2rem"}} onClick={handleprofile}/>
            <div className={getprofilebool?"profileopacity":"displaynone"}>
            <Profile bool={getprofilebool}/>
            </div></div>
            <Link to="/cart">
            <img src={cart} alt="caraticon" id="carticon" style={{width:"2rem"}}/></Link>
            <div className="cartcountnavbar">{getitems?getitems?.items?.length:"0"}</div>

        </div>
    )
}
export default Navbar;