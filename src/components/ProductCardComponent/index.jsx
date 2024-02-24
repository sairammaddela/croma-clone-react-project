import { useEffect, useState } from "react"
import Productcard from "./productcard";
import { useNavigate, useParams,Link } from "react-router-dom";
import Navbar from "../Navbar";
import arrowdd from "./arrowdropdown.svg";
import "./style.css";
import Footer from "../footer";
const Productcardtemplate=(props)=>{
    const [getcarddetails,setcarddetails]=useState();
    const [gettoggler,settoggler]=useState(0);
    const [getbrand,setbrand]=useState();
    const [gettag,settag]=useState();
    const [getcategoryclass,setategoryclass]=useState("displaynone");
    const navigate=useNavigate();
    let {category}=useParams();
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${category}"}`,{
            method:"GET",
            headers:{
                projectId: "b4j0aeyd1jd1"
            }
        }).then(data=>data.json().then(data1=>{
            setcarddetails(data1.data);
            settoggler(gettoggler+1);
        }))

    },[category]);
    // category
    useEffect(()=>{
        let arr1=[];
        let arr2=[];
        getcarddetails?.forEach(val=>{
            if(arr1.indexOf(val.brand)<0)
            {
                arr1.push(val.brand);
            }
            if(arr2.indexOf(val.sellerTag)<0)
            {
                arr2.push(val.sellerTag);
            }
            
        });
        
        setbrand(arr1);
        settag(arr2);
        
    },[gettoggler]);
    //getbrand,gettag
    async function handlerror(image,i)
    {
        try{
        let res=await fetch(image);
        if(res.status!==200)
        {
            setcarddetails(getcarddetails.slice(0,i).concat(getcarddetails.slice(i+1)));
        }
        return res.status;
        }catch(e)
        {
            console.log(e);
        }
        return ;
    }

    getcarddetails?.forEach((element,index) => {
        handlerror(element.displayImage,index)
    });
    function catclickHandler()
    {
        if(getcategoryclass==="displaynone")
        {
            setategoryclass("selectulfilter");
        }
        else{
            setategoryclass("displaynone");
        }
    }
    function changeHandler(e)
    {
        const brandid=document.getElementById("brandfilter");
        const sellerid=document.getElementById("sellerfilter");
        const sort=document.getElementById("sorting");
        sort.value="Sort by Featured";
        if(brandid.value+""==="Brand"&&sellerid.value+""!=="Seller Tag")
        {
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${category+""}","sellerTag":"${sellerid.value+""}"}`,{
                method:"GET",
            headers:{
                projectId: "b4j0aeyd1jd1"
            }
            }).then(data=>{
                data.json().then(data1=>{
                    setcarddetails(data1.data);
                });
            });
        }
        else if(brandid.value+""!=="Brand"&&sellerid.value+""==="Seller Tag")
        {
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${category+""}","brand":"${brandid.value+""}"}`,{
                method:"GET",
            headers:{
                projectId: "b4j0aeyd1jd1"
            }
            }).then(data=>{
                data.json().then(data1=>{
                    setcarddetails(data1.data);
                });
            });
        }
        else
        {
            fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${category+""}","brand":"${brandid.value+""}","sellerTag":"${sellerid.value+""}"}`,{
                method:"GET",
            headers:{
                projectId: "b4j0aeyd1jd1"
            }
            }).then(data=>{
                data.json().then(data1=>{
                    setcarddetails(data1.data);
                });
            });
        }
        console.log(brandid.value,"brand");
        console.log(sellerid.value,"seller");
    }
    function listHandler(e)
    {
        settoggler(gettoggler+1);
    }
    function sortHandler(e)
    {
        if(e.currentTarget.value+""==="Price(Lowest First)")
        {
            let array=[...getcarddetails];
            for(let i=0;i<array?.length;i++)
            {
                for(let j=0;j<array?.length;j++)
                {
                    if(array[i].price<array[j].price)
                    {
                        let temp=array[i];
                        array[i]=array[j];
                        array[j]=temp;
                    }
                }
            }
            setcarddetails(array);
        }
        else if(e.currentTarget.value+""==="Price(Highest First)")
        {
            let array=[...getcarddetails];
            for(let i=0;i<array?.length;i++)
            {
                for(let j=0;j<array?.length;j++)
                {
                    if(array[i].price>array[j].price)
                    {
                        let temp=array[i];
                        array[i]=array[j];
                        array[j]=temp;
                    }
                }
            }
            setcarddetails(array);
        }
        else if(e.currentTarget.value+""==="Top Rated")
        {
            let array=[...getcarddetails];
            for(let i=0;i<array?.length;i++)
            {
                for(let j=0;j<array?.length;j++)
                {
                    if(array[i].ratings>array[j].ratings)
                    {
                        let temp=array[i];
                        array[i]=array[j];
                        array[j]=temp;
                    }
                }
            }
            setcarddetails(array);
        }
    }
    return(
        <div className="Searchcomp">
            <Navbar/>
            <h1>{category}</h1>
            <div style={{display:"flex",justifyContent:"space-between",position:"relative",width:"100%",margin:"2rem"}}>
                <div style={{display:"flex",justifyContent:"space-around",width:"50rem"}}>
            <div className="selectfilter" style={{textAlign:"left"}} onClick={catclickHandler}>
            {category}
                <div className={getcategoryclass==="selectulfilter"?"selectulfilter":"displaynone"}>
                <ul className="ulfilter">
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/ac`} className="menulinkitem">ac</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/audio`} className="menulinkitem">audio</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/health`} className="menulinkitem">health</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/kitchenappliances`} className="menulinkitem">kitchenappliances</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/laptop`} className="menulinkitem">laptop</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/mobile`} className="menulinkitem">mobile</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/refrigerator`} className="menulinkitem">refrigerator</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/tablet`} className="menulinkitem">tablet</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/travel`} className="menulinkitem">travel</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/tv`} className="menulinkitem">tv</Link></li>
                <li className="menulistitem" onClick={listHandler}><Link to={`/category/washingMachine`} className="menulinkitem">washingMachine</Link></li>
                </ul>
                </div>
            </div>
            <select className="selectfilter" id="brandfilter" onChange={changeHandler}>
                <option>Brand</option>
                {
                    getbrand?.map(val=>{
                        return <option>{val}</option>
                    })
                }
            </select>
            <select className="selectfilter" id="sellerfilter" onChange={changeHandler}>
            <option>Seller Tag</option>
                {
                    gettag?.map(val=>{
                        return <option>{val}</option>
                    })
                }
            </select>
            </div>
            <div style={{position:"absolute",right:"2rem"}}>
                <select className="selectfilter" onChange={sortHandler} id="sorting">
                    <option>Sort by Featured</option>
                    <option>Price(Highest First)</option>
                    <option>Price(Lowest First)</option>
                    <option>Top Rated</option>
                </select>
            </div>
            </div>
            <div className="searchitems">
            {getcarddetails?.map((val)=>{
                return <Productcard element={val}/>
            })}
            </div>
            <Footer/>
        </div>
        
    )

}
export default Productcardtemplate;