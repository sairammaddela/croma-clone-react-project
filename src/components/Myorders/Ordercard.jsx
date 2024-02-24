

const Ordercard=(product)=>{
    console.log(product.product.product._id);
    return(
        <div className="cartmainclass">
        <div className='mainmodal'>
                <img className="modaldisplayimg" src={product?.product?.product?.displayImage} alt='displayimg'/>
                <p className='modalproductname' style={{color:"black"}}>{product?.product?.product?.name}</p>
                <p className='modalproductprice' style={{color:"black"}}>{`₹${product?.product?.product?.price}`}</p>
        </div>
        </div>
    )
}
export default Ordercard;