import { useState,useEffect } from "react";
import "./style.css";
import Footer from "../footer";
import Checkoutnavbar from "../checkoutnavbar/checkoutnavbar";
import { useNavigate } from "react-router-dom";
const Mypayment=()=>{
    const navigate=useNavigate();
    const [getactive,setactive]=useState({
        debitcards:"activeclass",
        upi:"inactive",
        netbanking:"inactive",
        cod:"inactive"
    });
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
    },[]);
    function activeHandler(e)
    {
        let obj={...getactive};
        obj.debitcards="inactive";
        obj.upi="inactive";
        obj.netbanking="inactive";
        obj.cod="inactive";
        const assigner=e.currentTarget.getAttribute("name");
        obj[assigner]="activeclass";
        setactive(obj);

    }
    function submitHandler(e)
    {
        const bodydata={
                "productId" : getitems?.items[0]?.product?._id,
                "quantity" : 1,
                "addressType": "HOME",
                "address": {
                "street": localStorage.getItem("street"),
                "city": localStorage.getItem("city"),
                "state": localStorage.getItem("state"),
                "country": "India",
                "zipCode": localStorage.getItem("zipCode")
            }
        }
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/order/convertCartToOrder",{
            "method":"POST",
            headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
            body:JSON.stringify(bodydata)
        });
        navigate("/orderplaced");
    }
    return(
        <div className="cartsection">
            <Checkoutnavbar/>
            <h2>Payments</h2>
            <div className="cartmain">
                <div className="cartproducts" style={{display: "flex", "flex-direction": "row",width: "55rem",border: "2px solid #12daa8"}}>
                    <div style={{background:"#f7f7f7"}}>
                        <div onClick={activeHandler} name="debitcards" className={getactive?.debitcards} style={{border: "1px solid rgb(226, 226, 226)",cursor:"pointer"}}><img className="paymenticon" src="https://assets.juspay.in/hyper/images/croma/ic_card.png"/><p style={{color:"black"}}>Credit / Debit Cards</p></div>
                        <div onClick={activeHandler} name="upi" className={getactive?.upi} style={{border: "1px solid rgb(226, 226, 226)",cursor:"pointer"}}><img className="paymenticon" src="https://assets.juspay.in/hyper/images/croma/ic_upi_icon.png"/><p style={{color:"black"}}>UPI</p></div>
                        <div onClick={activeHandler} name="cod" className={getactive?.cod} style={{border: "1px solid rgb(226, 226, 226)",cursor:"pointer"}}><img className="paymenticon" src="https://images.bewakoof.com/web/cod-icon-1645705427.png"/><p style={{color:"black"}}>Cash on Delivery</p></div>                       
                    </div>
                    <div className={getactive?.debitcards==="activeclass"?"":"displaynone"}>
                    <form>
                        <h4>Enter Debit / Credit Card DetailsCard number</h4>
                        <div>
                        <input type="text" className="paymentinput" required style={{border: "none", "border-bottom": "2px solid rgb(226, 226, 226)","margin-bottom": "1rem"}} placeholder="Enter card number here"/>
                        <img style={{width:"2.5rem"}} src="https://assets.juspay.in/hyper/images/common/jp_default_card.png" alt="paymenticon"/>
                        </div>
                        <div style={{"margin-top": "2rem"}}>
                            <label>Expiry <input required className="paymentinput" style={{width: "4.8rem", border: "none","border-bottom": "2px solid rgb(226, 226, 226)"}} type="text" placeholder="MM/YYYY"/></label>
                            <label style={{"margin-left":"1.7rem"}}>CVV <input required className="paymentinput" style={{border: "none", width: "3rem", "border-bottom": "2px solid rgb(226, 226, 226)"}} type="text" placeholder="CVV"/></label>
                        </div>
                        <button type="Submit" className="paymentbtn" onClick={submitHandler} style={{width: "10rem",height: "2.5rem", "margin-top": "2rem", background: "rgb(18, 218, 168)", border: "none", "border-radius": "1rem", cursor: "pointer"}}>Place order & Pay</button>
                    </form>
                    </div>
                    <div className={getactive?.upi==="activeclass"?"":"displaynone"}>
                        <form>
                            <h3>UPI ID / VPA</h3>
                            <input type="text" required className="paymentinput" placeholder="e.g sairam@upi" style={{"margin-top":"2rem",border: "none", width: "8rem", "border-bottom": "2px solid rgb(226, 226, 226)"}}/>
                            <p style={{color:"#737373"}}>A collect request will be sent to this UPI ID</p>
                            <button type="Submit" className="paymentbtn" style={{"margin-top":"3rem",width: "10rem",height: "2.5rem", "margin-top": "2rem", background: "rgb(18, 218, 168)", border: "none", "border-radius": "1rem", cursor: "pointer"}}>Place order & Pay</button>
                        </form>
                    </div>
                    <div className={getactive?.cod==="activeclass"?"":"displaynone"}>
                        <h4 style={{color:"black"}}>Cash on Delivery charges are free</h4>
                        <button type="Submit" className="paymentbtn" style={{"margin-top":"3rem",width: "10rem",height: "2.5rem", "margin-top": "2rem", background: "rgb(18, 218, 168)", border: "none", "border-radius": "1rem", cursor: "pointer"}}>Place order & Pay</button>
                    </div>
                </div>
                <div style={{width:"35rem",marginLeft:"1rem"}}>
                    
                    <div style={{border:"0.2rem solid black",borderRadius:"1rem",marginBottom:"1rem"}}>
                    <h2>Order Summary</h2>
                    <div style={{display:"flex"}}>
                        <img className="modaldisplayimg" src={getitems?.items[0]?.product?.displayImage} alt="image"/>
                        <p style={{color:"black", fontWeight:"700"}}>{getitems?.items[0]?.product?.name}</p>
                        <p style={{color:"black", fontWeight:"700"}}>{`₹${getitems?.items[0]?.product?.price}`}</p>
                    </div>
                    <div>
                    <p style={{fontWeight:"700",color:"black",textAlign:"left"}}>Shipping details</p>
                    <p style={{color:"black", textAlign:"left"}}>{localStorage.getItem("street")},{localStorage.getItem("city")},{localStorage.getItem("state")},India,{localStorage.getItem("zipCode")}</p>
                    </div>
                    </div>
                    <div style={{border:"0.2rem solid black",borderRadius:"1rem"}}>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <p style={{fontWeight:"700",color:"black"}}>Amount Payable</p>
                            <p style={{color:"black"}}>{`₹${getitems?.items[0]?.product?.price}`}</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",borderBottom:"0.1rem solid black"}}>
                            <p style={{fontWeight:"700",color:"black"}}>Delivery Charges</p>
                            <p style={{color:"black"}}>Free</p>
                        </div>
                    </div>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <p style={{fontWeight:"700",color:"black"}}>Net Payable</p>
                            <p style={{color:"black"}}>{`₹${getitems?.items[0]?.product?.price}`}</p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default Mypayment;