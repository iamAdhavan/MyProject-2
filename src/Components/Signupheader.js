import React from 'react'
import './Signupheader.css'
import { useNavigate } from 'react-router'

function Signupheader() {
  const navigate = useNavigate();
  return (
    <div className='signup-head'>
        <img src="./logo.png" alt="Netflix Logo" className="signup-logo" />
        <button onClick={() => navigate("/Login")} className="signup-page-button">
              Sign In
            </button>
    </div>
  )
}

export default Signupheader