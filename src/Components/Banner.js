import React from "react";
import "./Banner.css";
import { Link as Link1 } from "react-scroll";

const Banner = () => {
  const bannerMovie = {
    title: "Featured Movie",
    description: "This is an exciting movie you don't want to miss!",
    imageUrl: "https://images.news9live.com/wp-content/uploads/2024/12/Pushpa-2-day-2-box-office-collection-worldwide.png?q=50&w=1200/",
  };
  

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerMovie.imageUrl})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{bannerMovie.title}</h1>
        <p className="banner-description">{bannerMovie.description}</p>
        <div className="banner-buttons">      
             <a href="/MenuMovie1" className="banner-button" >Play</a>
             <a href="/MenuMovie1" className="banner-button">More Info</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
