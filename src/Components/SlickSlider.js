import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



import Mankatha from './Images/Mankatha.jpg'
import Amaran from './Images/Amaran.jpg'
import PonniyinSelvan from './Images/ponniyin-selvan-1.jpg'
import Vettaiyan from './Images/Vettaiyan.jpg'
import Markantony from './Images/Mark-Antony.jpg'

const SlickSlider = ({ onClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed

    responsive: [
      {
        breakpoint: 1024, // For devices <= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For devices <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For devices <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movies = [ 
    {
      id: 1,
      title: "Mankatha",
      poster: Mankatha,
      path : "/Mankatha",
      
    },
    {
      id: 2,
      title: "Amaran",
      poster: Amaran,
      path : "/Amaran",
    },
    {
      id: 3,
      title: "Ponniyin Selvan",
      poster: PonniyinSelvan,
      path : "/Ponniyinselvan",
    },
    {
      id: 4,
      title: "Vettaiyan",
      poster: Vettaiyan,
      path : "/Vettaiyan"
    },
    {
      id: 5,
      title: "Mark Antony",
      poster: Markantony,
      path : "/Markantony",
    },
    
  ];

  return (
    
    <div className="slider-cont" onClick = {onClick} >
    
    
      <section style={{backgroundColor:"black"}}>

        <div style={{ padding: "70px ", backgroundColor: "#000", height: "70vh", maxWidth:"70%", margin:"auto" }}>
          <h2 style={{ color: "#fff", marginLeft: "20px" }}>Trending Now</h2>
          
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <div key={movie.id} path = {movie.path} style={{ padding: "10px" }}>
                
                   <div>
                   <Link to = {movie.path} >

                  <div style={{ position: "relative", margin: "60px 10px", }}>
                  
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        width: "100%",
                        borderRadius: "10px",
                        height: "320px",
                        objectFit: "cover",
                        // margin:"60px",
                        // padding:"0 30 0 0px"



                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        color: "#fff",
                        background: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        // gap:"10px"
                      }}
                    >
                      {index + 1}
                    </div>
                    
                  </div>
                  </Link>
                </div>
                

              </div>
            ))}
          </Slider>
        </div>
      </section>
      
      
    </div>
    

  );
};

export default SlickSlider;
