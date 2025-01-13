import React, { useState } from "react";
import './Signup.css';
import Signupheader from "./Components/Signupheader";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Response data:', data); // Debug log

      if (response.ok) {
        console.log('Signup successful:', data);
        alert('Signup successful! Redirecting to login...');
        navigate('/Login');
      } else {
        console.error('Signup error:', data.error);
        alert(data.error || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-Container">
      <Signupheader />
      <div className="signup-content">
        <div className="signup-cont-sec">
          <div className="signup-first">
            <h1>Create a password to start<br></br>your membership</h1>
            <p>Just a few more steps and you're done!<br></br>We hate paperwork, too.</p>
          </div>
          <form onSubmit={handleSignup}>
            <div className="signup-detail-cont">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="signup-detail-cont">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button className="signup-next-button">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
