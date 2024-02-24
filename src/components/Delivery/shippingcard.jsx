import "./style.css";
const Shippingcards=({product})=>{
    return(
    <div className="cartmainclass">
        <div className='mainmodal'>
                <img className="modaldisplayimg" src={product?.product?.displayImage} alt='displayimg'/>
                <p className='modalproductname' style={{color:"black"}}>{product?.product?.name}</p>
                <p className='modalproductprice' style={{color:"black"}}>{`₹${product?.product?.price}`}</p>
        </div>
        </div>
    )
}
export default Shippingcards;