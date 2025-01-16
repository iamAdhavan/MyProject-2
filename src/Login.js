import React, { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import Signlogo from "./Components/Signlogo";
import Loginfooter from "./Components/Loginfooter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://flask-1-2.onrender.com/login", {
        email,
        password,
      });

      if (response.status === 200) {
        navigate('/MovieSection');
        alert("Login successful");
      }
    } catch (error) {
      alert(error.response?.data?.error || "An error occurred");
    }
  };







  console.log("Email:", email);
  console.log("Password:", password);


  return (



    <div className="start">


      <div className="Container_1">
        <Signlogo />




        <div className="Content-1">
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="Group">
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
            <div className="Login">
              <div className="Error">
                <a href="/forgot">
                  Forgot Password?
                </a>
              </div>
              <div className="Remember">
                <input type="checkbox" className="cont" />
                <label>Remember me</label>
              </div>
            </div>
          </form>
          <div className="Signup-link">
            <span>New to Netflix? </span>
            <a href="/signup">Sign up now.</a>
          </div>
          <div className="captcha-info">
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
            <a href="/Learn"> Learn more.</a>
          </div>
        </div>

            
      </div>
      <div className="headache">
        <h2>empty</h2>

      </div>
      <Loginfooter/>

      {/* <div className="last-cont-login">
        <div className="footer-login-cont">

          <p className="query">Questions? Call 000-800-919-1743</p>
          <div className="footer-login-main">
            <div className="footer-login">
              <a href="#Faq">FAQ</a>
              <a href="#Help">Help Centre</a>
              <a href="#TOU">Terms Of Use</a>
              <a href="#Privacy">Privacy</a>
            </div>
            <div className="footer-login">
              <a href="#Cookie">Cookie Preferences</a>
              <a href="#CO">Corporate Information</a>
            </div>
          </div>
        </div>

      </div> */}

    </div >


  );
};

export default LoginPage;
