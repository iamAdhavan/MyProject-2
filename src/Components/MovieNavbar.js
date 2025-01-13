import React, { useState, useEffect } from "react";
import "./MovieNavbar.css";

const MovieNavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show && "navbar-black"}`}>
      <div className="navbar-content">
        <img
          className="navbar-logo"
          src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
          alt="Netflix Logo"
        />
        <ul className="navbar-links">
          <a href="MovieSection">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="Login">Log out</a>
        </ul>
        {/* <img
          className="navbar-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        /> */}
      </div>
    </nav>
  );
};

export default MovieNavBar;
