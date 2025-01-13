import React from "react";
import "./Navbar.css";
import LoginPage from "../Login";
import { useNavigate } from 'react-router-dom';
// import "../node_modules/bootstrap/scss/functions";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "~bootstrap/scss/bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';





function Navbar() {
 
    const navigate = useNavigate();

  return (
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
  );
}

export default Navbar;


// import React from "react";
// import "./Navbar.css";




// function Navbar() {
//   return (
    
   
// <div className='navbar_1'>
// <div className='navbar_netflix'>
//     <img src='./logo.png' alt='logo' className='netflix_logo'></img>
//     <nav className='nav_bar'>



// <div className='navbar_nav_items'>
//     <div className='nav_item'>
//         <div className='dropdown_container'>
//         <i class="bi bi-globe2"></i>
//             <select name='languages' id='languagesSelect' className='language_drop_down'>
//                 <option value='english' selected>English</option>
//                 <option value='hindi' Hindi></option>

//             </select>
//         </div>
//     </div>
//     <div className='nav_item'>
//         <button className='signin_button'>Sign In</button>
//     </div>
// </div>
// </nav>

// </div>
// </div>
//   );
// }

// export default Navbar;
