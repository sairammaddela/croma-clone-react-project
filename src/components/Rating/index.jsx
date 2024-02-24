import React,{useState} from "react";
import {FaStar, FaStarHalf,FaRegStar} from "react-icons/fa";
import fullstar from "./Star.svg";
import halfstar from "./Halfstar.svg";
import emptystar from "./Emptystar.svg";
const Rating=(props)=>{
    const {ratings}=props;
    let star_ceil=Math.ceil(ratings);
    let star_floor=Math.floor(ratings);
    let half_star=(ratings*100)%100;
    const arr=[1,2,3,4,5];
    //console.log(ratings,star_ceil,star_floor,half_star);
    
    return(
        <div>
            {
                arr.map((val)=>{
                    
                    if(val<=star_floor)
                    {
                        return <img className="starrating" src={fullstar} alt="star"/>;
                    }
                    else if(val<=star_ceil&&half_star>=25&&half_star<=75)
                    {
                        return <img className="starrating" src={halfstar} alt="halfstar"/>;
                    }
                    else if(val<=star_ceil&&half_star>75)
                    {
                        return <img className="starrating" src={fullstar} alt="star"/>
                    }
                    else{
                        return <img className="starrating" src={emptystar} alt="emptystar"/>;
                    }
                })
            }
        </div>
    )
}
export default Rating;