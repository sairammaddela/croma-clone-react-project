import React,{useState,useEffect} from "react";
const Search=(props)=>{
    const [getsearcharr,setsearcharr]=useState();
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"field":"${}"}`,{method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }}).then(data=>{
            data.json().then(data1=>{
                setsearcharr(data1.data);
            })
        })
    })
}
export default Search;