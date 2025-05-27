import "../css/SignIn.css";
import HeaderComponent from "../Components/HeaderComponet";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  var navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUserName] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userpassword, setUserPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = (e) => {
    const isLogin = JSON.parse(localStorage.getItem("register"))
    if (isLogin?.status) {
      if (isLogin.useremail == email && isLogin.userpassword == password) {
        localStorage.setItem("login", JSON.stringify({ "loginstatus": true }))
        toast('Logged in Successfully.');
        navigate("/cart")
      } else {
        toast('Check Ur Email or Password');
        localStorage.removeItem("login")
      }
    }
  };

  const handleRegisterSubmit = (e) => {
    localStorage.setItem("register", JSON.stringify({ "username": username, "useremail": useremail, "userpassword": userpassword, "status": true }))
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
                  <div id="loginForm">
                    <input type="text" placeholder="User Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn" onClick={() => handleLoginSubmit()}>Login</button>
                    <a href="/">Forgot password?</a>
                  </div>
                ) : (
                  <form id="registerForm" onSubmit={handleRegisterSubmit}>
                    <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
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