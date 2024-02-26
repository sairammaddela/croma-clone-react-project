import Ordercard from "./Ordercard";
import { useEffect,useState } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
const Myorders=()=>{
    const [getitems,setitems]=useState();
    useEffect(()=>{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/order/",{
        method:"GET",
        headers: { 'Authorization':`Bearer ${localStorage.getItem("token")}`, 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
    }).then(data=>{
        data.json().then(data1=>{
            setitems(data1?.data);
        })
    })
    },[])
    return(
        <div className="cartsection">
            <Navbar/>
            <h2 style={{color:"black"}}>My Orders</h2>
            <div className="cartmain">
                <div className="cartproducts">
                    {
                        getitems?.map(val=>{
                            return <Ordercard product={val.order.items[0]}/>
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Myorders;