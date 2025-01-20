import React, { useState } from "react";
import Faq from "./Components/Faq";
import "./Main.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useNavigate } from 'react-router-dom';
import SlickSlider from "./Components/SlickSlider";

function Main() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  
    const handleSignup = (e) => {
      setEmail(e.target.value || ""); // Default to empty string if input is undefined
      setError("");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Ensure email is not undefined or empty
      if (!email || !email.trim()) {
        setError("Email field cannot be empty.");
        return;
      }
  
      // Validate email format
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        alert('Please enter a valid email address.');
        return;
      }
  
      // Navigate to the next page
      navigate("/Signup", { state: { email } });
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  
};
  return (
    <div className="BG">
      
      <div className="fix">
      // <Navbar />
    <div className="navbar">
      
      <img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="Netflix Logo" className="navbar-logo" />
      
      <div className="navbar-items">
        <div className="dropdown-container">
          <i className="bi bi-globe2"></i>
          <select className="language-dropdown">
          
           <option value="en">English</option>
            <option value="hi">हिंदी</option>
            
          </select>
        </div>
        <button onClick={() => navigate("/Login")} className="signin-button">Sign In</button>
      </div>
    
    </div>
      <div className="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <h1>Unlimited movies, <br></br>TV shows and more</h1>
            <h2>Starts at ₹149. Cancel at any time.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form onSubmit={handleSubmit}>
            <div className="cta-container">
            
              <input type="email" value={email} placeholder="Email address" className="email-input" onChange={(e) => handleSignup(e)}></input>
              <button type="submit" className="get-started-button">Get Started &gt;</button>
              
            </div>
            </form>
           



          </div>
        </div>

      </div>
      <SlickSlider />

      <div className="sec_1">
        <section className="reasons-to-join">
          <div className="reasons-to-join-container">
            <h2>More reasons to join</h2>
            <div className="reasons-cards">
              <div className="reason-card">
                <h3>Enjoy on your TV</h3>
                <p>
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, and more.
                </p>
              </div>
              <div className="reason-card">
                <h3>Download your shows to watch offline</h3>
                <p>Save your favourites easily and always have something to watch.</p>
              </div>
              <div className="reason-card">
                <h3>Watch everywhere</h3>
                <p>
                  Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
              </div>
              <div className="reason-card">
                <h3>Create profiles for kids</h3>
                <p>
                  Send kids on adventures with their favourite characters in a space just for
                  them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Faq />
      <Footer/>
      </div>

    </div >

  );
}

export default Main;




