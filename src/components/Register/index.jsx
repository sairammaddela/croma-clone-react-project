import React from "react";
import { useState } from "react";

import "./style.css";
import { Link, useNavigate} from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();


    const [user, setuser] = useState(false);



    async function userLogin(userData) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
                method: 'POST',
                headers: { 'projectID': 'b4j0aeyd1jd1', "Content-Type": "application/json", },
                body: JSON.stringify(userData),
            });
            const jsonData = await response.json();
            if (jsonData.status === "success") {
                localStorage.setItem('token', jsonData.token);
                delete jsonData['token'];
                navigate("/");
                console.log(jsonData);
            }
            else {
                setuser(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         navigate('/');
    //     }
    //     window.scrollTo(0, 0);
    // }, [])

    const [loginData, setLoginData] = useState({
        name: "",
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
        if (loginData.email && loginData.password && loginData.name)
            userLogin(loginData);

    }
    return (
        <div>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#191919", height: "92vh" }}>
                <div className="signup">
                    <p style={{fontSize:"1.4rem", fontWeight:"700"}}>Create New Account</p>
                    <div className="details">
                    <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Enter your Name"
                            onChange={handleSubmit}
                            required
                        />

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
                    <button className="Registerbtn" style={{marginTop:"1rem"}}onClick={signedin}>Proceed</button>
                    <p className="new-user">Already Registered? <Link to="/Login" style={{ color: "#12daa8" }}>Login</Link></p>
                </div>
            </div>
        </div>
    )


}
export default Register;