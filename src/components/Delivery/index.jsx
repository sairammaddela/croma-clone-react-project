import { useEffect,useState } from "react";
import "./style.css"
import Shippingcards from "./shippingcard";
import Checkoutnavbar from "../checkoutnavbar/checkoutnavbar";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
const Delivery=()=>{
    const [getitems,setitems]=useState();
    const [getaddress,setaddress]=useState();
    const navigate=useNavigate();
    const classname=(localStorage.getItem("city")&&localStorage.getItem("name")&&localStorage.getItem("zipCode")&&localStorage.getItem("street")&&localStorage.getItem("state"))?"displaynone":"";
    useEffect(()=>{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",{
        method:"GET",
        headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
    }).then(data=>{
        data.json().then(data1=>{
            setitems(data1?.data);
        })
    })
    },[]);
    function submitHandler(e)
    {
        e.preventDefault();
        setaddress({
            "productId" : getitems?.product?._id,
            "quantity" : 1,
            "addressType": localStorage.getItem("addressType"),
            "address": {
            "street": localStorage.getItem("street"),
            "city": localStorage.getItem("city"),
            "state": localStorage.getItem("state"),
            "country": "India",
            "zipCode": localStorage.getItem("zipCode")
        }});
    }
    function changeHandler(e)
    {
        let obj;
        let assign=e.currentTarget.getAttribute("name")+"";
        obj=e.currentTarget.value;
        localStorage.setItem(assign,obj);
        console.log(localStorage.getItem(assign));
    }
    function typeHandler(e)
    {
        let obj;
        obj=e.currentTarget.innerText+"";
        localStorage.setItem("addressType",obj);
    }
    function checkoutHandler(e)
    {
        navigate("/mypayment");
    }
    return(
        <div className="cartsection">
            <Checkoutnavbar/>
            
            <div className="cartmain">
                <div className="cartproducts">
                    <div className={classname}>
                <form  style={{height: "30rem",background: "wheat","border-radius": "1rem",display: "flex","flex-wrap": "wrap", padding:"1rem"}}>
                        <h2 style={{width:"100%",color:"black"}}>Address Details</h2>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>Name <br/><input type="text" placeholder="Name" className="shippinginput" name="name" onChange={changeHandler}/></label>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>Address(flat no, building, company, street) <br/><input type="text" placeholder="Street" name="street" className="shippinginput" onChange={changeHandler}/></label>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>Pincode <br/><input type="text" placeholder="Pincode" name="zipCode" className="shippinginput" onChange={changeHandler}/></label>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>Landmark <br/><input type="text" placeholder="Landmark" className="shippinginput"/></label>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>Locality/ Sector/ Area <br/><input type="text" placeholder="Area" name="city" className="shippinginput" onChange={changeHandler}/></label>
                        <label style={{width:"50%","textAlign":"left","lineHeight":"2.5rem"}}>State <br/><input type="text" placeholder="State" name="state" className="shippinginput" onChange={changeHandler}/></label>
                        <label style={{"lineHeight":"2.5rem"}}>Address type <br/>
                        <div>
                            <button className="addresstypebtn" onClick={typeHandler}>Home</button>
                            <button className="addresstypebtn" style={{marginLeft:"1rem"}} onClick={typeHandler}>Work</button>
                            <button className="addresstypebtn" style={{marginLeft:"1rem"}} onClick={typeHandler}>Other</button>
                        </div>
                        </label>
                        <div style={{width:"100%"}}><button type="submit" onClick={submitHandler} style={{height: "2rem",width: "10rem","background-color": "#12daa8","border-radius": "1rem"}}>Save Address</button></div>
                    </form>
                    </div>
                    <div className={classname==="displaynone"?"":"displaynone"} style={{border: "1px solid black",width: "20rem","border-radius": "1rem",padding: "1rem","textAlign":"left"}}>
                        <h3 style={{color:"black"}}>Shipping Details</h3>
                        <p style={{color:"black"}}>{localStorage.getItem("name")}</p>
                        <p style={{color:"black"}}>{`${localStorage.getItem("street")}`}</p>
                        <p style={{color:"black"}}>{`${localStorage.getItem("street")}`}</p>
                        <p style={{color:"black"}}>{`${localStorage.getItem("city")}, ${localStorage.getItem("street")}`}</p>
                        <p style={{color:"black"}}>{`${localStorage.getItem("zipCode")}`}</p>
                    </div>
                    {/* {
                        getitems?.items?.map(val=>{
                            return <Shippingcards product={val}/>
                        })
                    } */}
                    {
                        <Shippingcards product={getitems?.items[0]}/>
                    }
                </div>
                <div className="cartcheckout">
                    <div className="cardcheckoutmain">
                    <h3>Order Summary (<span style={{color:"black"}} id="testcount">1</span>) item</h3>
                    <div style={{display:"flex",justifyContent:"space-between"}}><p className="pcolor">Original price</p><p className="pcolor" id="testprice">{getitems?.items[0].product?.price}</p></div>
                    <div style={{display:"flex",justifyContent:"space-between"}}><p className="pcolor">Total</p><p className="pcolor" id="testtotal">{getitems?.items[0].product?.price}</p></div>
                    <button className="cartcheckoutbtn" onClick={checkoutHandler}>Checkout</button>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Delivery;