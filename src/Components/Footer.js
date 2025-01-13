import React from 'react';
import { useState } from 'react';
import './Footer.css'
import { useNavigate } from 'react-router';


function Footer() {
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
      return;
    }

    // Navigate to the next page
    navigate("/Signup", { state: { email } });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
    return (
        <div className="last-cont">
            <section className="about">
                <div className='about-cont'>
                    <div className="para">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="last-cta-container">
                        
                        <input type="email" placeholder="Email address" value={email} className="email-input" onChange={(e) => handleSignup(e)}></input>
                        <button className="get-started-button">Get Started &gt;</button>
                        
                    </div>
                    </form>
                    
                    <p className="call">Questions ? Call 000-800-1743</p>
                    <div className="abt-list">
                        <div className='footer-list'>
                            <a href='#Faq'>FAQ</a>
                            <a href='#Help'>Help Centre</a>
                            <a href='#Account'>Account</a>
                            <a href='#Media'>Media Centre</a>
                        </div>
                        <div className='footer-list'>
                            <a href='#IR'>Investor Relations</a>
                            <a href='#Jobs'>Jobs</a>
                            <a href='#WTW'>Ways to Watch</a>
                            <a href='#TOU'>Terms of use</a>
                        </div>
                        <div className='footer-list'>
                            <a href='#Privacy'>Privacy</a>
                            <a href='#CP'>Cookie Preferences</a>
                            <a href='#CI'>Corporate Information</a>
                            <a href='#CU'>Contact Us</a>
                        </div>
                        <div className='footer-list'>
                            <a href='#Speed'>Speed Test</a>
                            <a href='#LegalNotice'>Legal Notices</a>
                            <a href='#OON'>Only on Netflix</a>
                        </div>
                    </div>
                    <div>
                        <select className="language-dropdown-footer">
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                        </select>
                    </div>
                    <div>
                        <p className="Nt">Netflix India</p>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Footer









