import "./Login.css"
import React from "react";

import Login from "components/Login";

const LoginPage = (props) => {
    return (
        <div className="LoginPage row">
            <header className="theme-bgc header container">
                <div className="img-logo-wrapper">
                    <h1 style={{margin: "1rem", color: "#423b3d"}}>Taskflow</h1>
                    <h4 style={{fontWeight: "bold", letterSpacing: "2.4px"}}>Process Manager</h4>
                </div>
                <div className="container">
                    <Login {...props}/>
                </div>
            </header>
        </div>
    )
};

export default LoginPage;
