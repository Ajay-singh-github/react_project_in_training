import "../css/SignIn.css";
import HeaderComponent from "../Components/HeaderComponet";
import React, { useState } from "react";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (e) => {
    e.signin();
    
    console.log("Login submitted");
  };

  const handleRegisterSubmit = (e) => {
    e.signin();
    
    console.log("Register submitted");
  };

  return (
    <>
      <HeaderComponent />

      <div className="account-page">
        <div className="signincontainer">
          <div className="signrow">
            <div className="signcol-2">
              <div className="signform-container">
                <div className="signform-btn">
                  <span onClick={() => setIsLogin(true)}>Login</span>
                  <span onClick={() => setIsLogin(false)}>Register</span>
                  
                </div>

                {isLogin ? (
                  <form id="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn">Login</button>
                    <a href="/">Forgot password?</a>
                  </form>
                ) : (
                  <form id="registerForm" onSubmit={handleRegisterSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <button type="submit" className="btn">Register</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}