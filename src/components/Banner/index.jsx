import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";
import { useNavigate } from 'react-router-dom';
const Carousel=()=>{
    const settings={
        dots:true,
        infitnite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
    };
    const navigate=useNavigate();
    function acHandler(e)
    {
        navigate("/category/ac");
    }
    function tvHandler(e)
    {
        navigate("/category/tv");
    }
    function laptopHandler(e)
    {
        navigate("/category/laptop");
    }
    function tabHandler(e)
    {
        navigate("/category/tablet");
    }
    function refrigerator(e)
    {
        navigate("/category/refrigerator");
    }
    return(
        <div style={{width:"100%"}}>
            <Slider {...settings}>
                <div><img onClick={acHandler} alt='ac' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708531423/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Summer%20Ready/Rotating%2022nd%20feb/HP%20Rotating%20banners/HP_SummerCampaign_20Feb24_ngrwll.png?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
                <div><img onClick={tvHandler} alt='tv' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708604154/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/24%20Feb/Desktop/HP_TVs_24Feb2024_r1aj35.jpg?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
                <div><img onClick={laptopHandler} alt='laptop' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708604151/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/24%20Feb/Desktop/HP_Laptops_24Feb2024_ummlss.jpg?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
                <div><img onClick={acHandler} alt='ac' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708712157/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/24%20Feb/Desktop/HP_ACSummerCampaign_CoolestDealsonACs_23Feb24_tcu00y.png?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
                <div><img onClick={tabHandler} alt='tablet' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708604153/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/24%20Feb/Desktop/HP_Tablets_24Feb2024_aydbje.jpg?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
                <div><img onClick={refrigerator} alt='refridgerator' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708604152/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/24%20Feb/Desktop/HP_Ref_24Feb2024_xmowwz.jpg?tr=w-2048' style={{width:"100%",cursor:"pointer"}}/></div>
            </Slider>
            
        </div>
    )
}
export default Carousel;

