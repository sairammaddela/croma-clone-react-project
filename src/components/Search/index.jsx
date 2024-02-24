import { useNavigate, useParams,Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./style.css";
import React,{useEffect,useState,useRef} from "react";
import Searchcard from "./searchcard";
import Footer from "../footer";
const Searchcomponent=(props)=>{
    let {id}=useParams();

    const [getcount,setcount]=useState(0);
    const [getresults,setresults]=useState();
    const [gettoggler,settoggler]=useState(0);
    const [getbrand,setbrand]=useState();
    const [gettag,settag]=useState();
    const [getcategoryclass,setategoryclass]=useState("displaynone");
    let category="";
    if(getresults)
    {
        category=getresults[0]?.subCategory;
    }
    
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${id}"}&limit=500`,{
        method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }
    }).then(data=>{
        data.json().then(data1=>{
            setresults(data1.data);
            setcount(data1.results);
            settoggler(gettoggler+1);
        })
    })
    },[id])
    async function handlerror(image,i)
    {
        try{
        let res=await fetch(image);
        if(res.status!==200)
        {
            setresults(getresults.slice(0,i).concat(getresults.slice(i+1)));
        }
        return res.status;
        }catch(e)
        {
            console.log(e);
        }
        return ;
    }

    getresults?.forEach((element,index) => {
        handlerror(element.displayImage,index)
    });
    useEffect(()=>{
        let arr1=[];
        let arr2=[];
        getresults?.forEach(val=>{
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
                    setresults(data1.data);
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
                    setresults(data1.data);
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
                    setresults(data1.data);
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
            let array=[...getresults];
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
            setresults(array);
        }
        else if(e.currentTarget.value+""==="Price(Highest First)")
        {
            let array=[...getresults];
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
            setresults(array);
        }
        else if(e.currentTarget.value+""==="Top Rated")
        {
            let array=[...getresults];
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
            setresults(array);
        }
    }
    return(
        <div className="Searchcomp">
            <Navbar/>
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
            <h1>Results for "{id}"<span id="spancount">({getresults?.length})</span></h1>
            <div className="searchitems">
            {getresults?.map((val)=>{
                return <Searchcard element={val}/>
            })}
            </div>
            <Footer/>
        </div>
        
    )
}
export default Searchcomponent;