import React from "react";
import { Link as Link1 } from "react-scroll";
import "./Styles.css";
import logo from "./Images/net-logo.jpg"
import Menu from "./Menu"

const MovieContent = () => {
  return (
    <div>
      <div className="hero-item">
        <div className="hero-items">
          <img src={logo} alt="" />
        </div>
        <div className="hero-item-content">
          <div className="item-content-wraper">
            <div className="item-content-title ">MONEY HEIST</div>
            <div className="movie-title">MONEY HEIST</div>
            <div className="movie-infos">
              <div className="movie-info">
                <span>9.5</span>
                <span>|</span>
              </div>
              <div className="movie-info">
                <span>4 Seasons</span>
                <span>|</span>
              </div>
              <div className="movie-info">
                <span>HD</span>
                <span>|</span>
              </div>
              <div className="movie-info">
                <span>18+</span>
              </div>
            </div>
            <div className="item-content-description">
              Eight thieves take hostages and lock themselves in the Royal Mint
              of Spain as a criminal mastermind manipulates the police to carry
              out his plan.
            </div>
            <Link1 to="video" smooth={true} duration={1000}>
              <button className="but">Watch Trailer</button>
            </Link1>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="movie-title">MONEY HEIST</div>
        <div className="movie-infos">
          <div className="movie-info">
            <span>9.5</span>
          </div>
          <div className="movie-info">
            <span>|</span>
          </div>
          <div className="movie-info">
            <span>4 Seasons</span>
          </div>
          <div className="movie-info">
            <span>|</span>
          </div>
          <div className="movie-info">
            <span>HD</span>
          </div>
          <div className="movie-info">
            <span>|</span>
          </div>
          <div className="movie-info">
            <span>18+</span>
          </div>
        </div>
        <div className="item-content-description">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </div>
        <Link1 to="video" smooth={true} duration={1000}>
          <button className="but">Watch Trailer</button>
        </Link1>
      </div>
      <Menu/>
    </div>
    
  );
};

export default MovieContent;
