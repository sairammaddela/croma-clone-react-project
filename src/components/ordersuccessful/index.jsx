import Navbar from "../Navbar";
import "./style.css";
import { Link } from "react-router-dom";
function OrderPlaced() {
  return (
    <>
    <Navbar/>
    <div className="orderPlaceContainer">
        <div className="orderPlacedContent">
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIwIYITCUq8t7w4JysqZvKdq7j_Pii6Xqhw&usqp=CAU" />
    
          <div className="orderPlacedText">
            <div>Your order has been placed</div>
            <div>Thank you for placing order</div>
          </div>
        </div>
        <div className="orderHistoryButton">
          <Link to="/myorders">
            <button className="gotoorderhistory">Order History</button>
          </Link>
        </div>
    </div>
    </>
  );
}
export default OrderPlaced;