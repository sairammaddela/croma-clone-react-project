import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate,Link } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [user, setuser]=useState(false);



    async function userLogin(userData) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method: 'POST',
                headers: { 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
                body: JSON.stringify(userData),
            });
            const jsonData = await response.json();
            if(jsonData.status === "success")
            {
            localStorage.setItem('token', jsonData.token);
            delete jsonData['token'];
            navigate("/");
            console.log(jsonData);
            }
            else{
                setuser(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }, [])

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        appType: "ecommerce"
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const updateddata = { ...loginData };
        updateddata[e.target.name] = e.target.value;
        setLoginData(updateddata);
    }
    const signedin = () => {
        if (loginData.email && loginData.password)
            userLogin(loginData);

    }
    return (
        <div>
       
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#191919", height:"92vh"}}>
                <div className="login">
                    <p>Please enter your Email ID or Phone number</p>
                    <div className="details">
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Enter your Email ID"
                            onChange={handleSubmit}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Enter your password"
                            onChange={handleSubmit}
                            required
                        />
                    </div>
                    <div className="logincheck">
                        <input type="checkbox" />
                        <p style={{ fontSize: "0.85rem" }}>Keep me signed in</p>
                    </div>

                    <p className="terms">By continuing you agree to our terms and policies</p>
                    <button className="Loginbtn" onClick={signedin}>Continue</button>
                    {
                        user ? <h4 style={{color:"Red"}}>Not a Valid User Create Your Account</h4>:""

                    }
                    <p className="new-user">Don't have an account? <Link to="/Register"style={{color:"#12daa8"}}>Register</Link></p>
                </div>
            </div>
        </div>
    )

}
export default Login;