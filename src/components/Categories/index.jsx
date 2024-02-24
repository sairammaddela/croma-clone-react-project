import { useNavigate } from "react-router-dom";
import "./style.css";
const Categories=(props)=>{
    //const [getarr,setarr]=useState();
    // useEffect(()=>{
    //     fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",{
    //         method:"GET",
    //         headers:{
    //             projectId: "90hr9xwxns9k"
    //         }
    //     }).then(data=>{
    //         data.json().then(data1=>{
    //             setarr(data1.data);
    //         })
    //     })
    // },[]);
    const navigate=useNavigate();
    function clickHandler(e)
    {
        navigate(`/category/${e.currentTarget.alt}`);
    }
    let arr=[{name:"Mobiles",alt:"mobile",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-720"},
             {name:"Televisions",alt:"tv",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-720"},
             {name:"Laptops",alt:"laptop",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-720"},
            {name:"Headphones&Earphones",alt:"audio",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-720"},
            {name:"Refrigerators",alt:"refrigerator",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-720"},
            {name:"HomeTheatres&Soundbars",alt:"audio",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-720"},
            {name:"Air Conditioners",alt:"ac",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-720"},
            {name:"Washing Machines",alt:"washingMachine",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-720"},
            {name:"Kitchen Appliances",alt:"kitchenappliances",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/kitchenappliances_categoryicons_xulmep.png?tr=w-720"},
            {name:"Tablets",alt:"tablet",img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-720"}]
    return(
        <div className="categoricomp">
            {
                arr.map(val=>{
                    return <img className="category_images" src={val.img} alt={val.alt} onClick={clickHandler} />
                })
            }
        </div>
    )
}
export default Categories;