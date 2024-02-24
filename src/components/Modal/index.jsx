import Modal from 'react-modal';
import { useState } from 'react';
import mark from './tickmark.svg';
import cross from './crossmark.svg';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Mymodal=({isOpen,closeModel,product})=>{
    const navigate=useNavigate();
    function cartHandler(e)
    {
        navigate("/cart");
    }
    return(
        <Modal isOpen={isOpen} onRequestClose={closeModel} contentLabel='Example' className="Modalclass">
            <img className='tickmarkmodal' src={mark} alt='tickmark'/>
            <h2 className='modaladded'>1 Item added successfully</h2>
            <img className='modalcross' src={cross} alt='crossmark' onClick={closeModel}/>
            <div className='mainmodal'>
                <img className="modaldisplayimg" src={product?.displayImage} alt='displayimg'/>
                <p className='modalproductname'>{product?.name}</p>
                <p className='modalproductprice'>{`₹${product?.price}`}</p>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:"2rem"}}><button className='proceedcartbtn' onClick={cartHandler}>Proceed to Cart</button></div>
        </Modal>
    )

}
export default Mymodal;