import Mypayment from "../Mypayment";
import logo from "./croma.svg";
import { Link, useNavigate } from "react-router-dom";
const Checkoutnavbar=()=>{
    const navigate=useNavigate();
    function cartHandler(e)
    {
        navigate("/cart");
    }
    function shippingHandler(e)
    {
        navigate("/shipping");
    }
    function paymentHandler(e)
    {
        navigate("/mypayment");
    }
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo" id="cromalogo"/></Link>
            <div style={{border:"1px solid grey",display:"flex","margin-left": "30rem","border-radius": "1rem" }}>
                <div onClick={cartHandler} style={{border:"1px solid grey",color:"white",width: "6rem",height: "2rem","font-size": "larger",cursor: "pointer","border-bottom-left-radius": "1rem","border-top-left-radius": "1rem"}}>Cart</div>
                <div onClick={shippingHandler} style={{border:"1px solid grey",color:"white",width: "6rem",height: "2rem","font-size": "larger",cursor: "pointer"}}>Shipping</div>
                <div onClick={paymentHandler} style={{border:"1px solid grey",color:"white",width: "6rem",height: "2rem","font-size": "larger",cursor: "pointer","border-top-right-radius": "1rem","border-bottom-right-radius":"1rem"}}>Payment</div>
            </div>
        </div>
    )
}
export default Checkoutnavbar;