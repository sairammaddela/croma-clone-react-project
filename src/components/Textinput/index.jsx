import "./style.css";
import { useNavigate } from "react-router-dom";

const Input=(props)=>{
    const navigate=useNavigate();
function handleinput(e){
    console.log(e.target.value);
    if(e.target.value)
    {
        navigate(`/search/${e.target.value}`);
    }
}
function debouncer(func,delay)
{
    let timer;
    return function(e){
        clearTimeout(timer);
            timer=setTimeout(()=>{
                func(e);
            },delay); 
    }

}
const debounce=debouncer(handleinput,1000);
    const {styles}=props;
    return <input type="text" className="inputclass" placeholder={styles.placeholder} style={{...styles}} onInput={debounce}/>
}
export default Input;