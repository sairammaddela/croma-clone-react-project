import { useEffect, useState } from "react";
import profileicon from "./profile.svg";
import emptyheart from "./emptyheart.svg";
import order from "./order.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Profile=(props)=>{
    const navigate=useNavigate();
    const {bool}=props;
    let [getstyleheight,setstyleheight]=useState({
        height:"0rem"
    });
    let [getuser,setuser]=useState();
    const [getclass,setclass]=useState("displaynone");
    let credentials="Login";
    console.log(localStorage.getItem("token"),"hey");
    if(localStorage.getItem("token"))
    {
        credentials="Logout";
    }
    useEffect(()=>{
        try{
            fetch("https://academics.newtonschool.co/api/v1/ecommerce/user",{
                method:"GET",
                headers:{
                    projectId: "b4j0aeyd1jd1",
                    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjYzZTMyYzcxNGIzMmY1YWExZDQ5MSIsImlhdCI6MTcwNjQ0MjI5MCwiZXhwIjoxNzM3OTc4MjkwfQ.9IdUnGrhGLdXOWi066q1kisecBOXQSEqXXwZqhWqypw"
                }
            }).then(data=>{
                data.json().then(data1=>{
                    setuser(data1.data);
                })
            })
        }catch(e)
        {
            console.log(e);
        }
    },[]);
    
        if(bool&&getstyleheight.height!="22rem")
        {

            setstyleheight({height:"22rem"});
        }
        else if(getstyleheight.height!=="0rem"&&!bool)
        {
            setstyleheight({height:"0rem"});
        }
        let usertoken=localStorage.getItem;
        
        console.log(localStorage.getItem("token"));
        
    let username=getuser?.filter((val,i)=>
    {
        console.log(i,val.name);
        if(i===2)
        return true; 
        else 
        return false;
    });
    if(!username)
    {
        username="My profile";
    }
    console.log(username[0]?.name,"username");
    function logHandler(e)
    {
        if(localStorage.getItem("token"))
        {
            localStorage.setItem("token","");
            setclass("test");
        }
        else
        {
            navigate("/Login");
        }
    }
    function mywishlistHandler(e)
    {
        navigate("/wishlist");
    }
        return(
            <div className={bool?"profilelist":"displaynone"} style={getstyleheight}>
                <div style={{color:"white",display:"flex"}}>
                <div style={{position:"relative",top:"-1rem"}}>
                    <img src={profileicon} alt="icon" style={{width: "3rem",position: "relative",top: "1.5rem","margin-right": "1rem"}}/>
                </div>
                <div>
                <h3 style={{"textAlign":"left"}}>{localStorage.getItem("token")&&getuser?`Hello ${getuser[2]?.name}`:"My profile"}</h3>
                {/* <h3 style={{"textAlign":"left"}}>My Profile</h3>
                <p style={{"fontSize":"smaller"}}> Edit your basic details</p> */}
                </div>
                </div>
                <div style={{color:"white",display:"flex"}} onClick={mywishlistHandler}>
                <div>
                    <img src={emptyheart} alt="icon" style={{width: "3rem",position: "relative",top: "1.5rem","margin-right": "1rem"}}/>
                </div>
                <div>
                <h3 style={{"textAlign":"left"}}>My Wishlist</h3>
                <p style={{"fontSize":"smaller"}}> Have a look at your favourite products</p>
                </div>
                </div>
                <div style={{color:"white",display:"flex"}}>
                <div>
                    <img src={order} alt="icon" style={{width: "3rem",position: "relative",top: "1.5rem","margin-right": "1rem"}}/>
                </div>
                <div>
                <h3 style={{"textAlign":"left"}}>My Orders</h3>
                <p style={{"fontSize":"smaller"}}>View, track orders</p>
                </div>
                </div>
                <div>
                    <button className="log" onClick={logHandler}>{credentials}</button>
                </div>
            </div>
        )
    
}
export default Profile;