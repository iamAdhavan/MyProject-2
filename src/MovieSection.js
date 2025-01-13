import React from "react";
import {useEffect} from "react";
import Banner from "././Components/Banner";
import MoviesRow from "./Components/MoviesRow";
import "./App.css";
import MovieNavBar from "./Components/MovieNavbar";
import { useHref, useNavigate } from "react-router";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

const categories = {

  trending: [
    { id: 1, title: "Pushpa 2", imageUrl: "https://i.pinimg.com/736x/80/3f/cd/803fcd5a217628ddc58845b6bec3732f.jpg" , path : "/MenuMovie1" },
    { id: 2, title: "Lucky Baskar", imageUrl: "https://i.pinimg.com/736x/99/b6/3d/99b63dc9c4877ce14b7ab6520f5037a7.jpg", path : "/Menu1" },
    { id: 3, title: "Brother", imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Brother_Indian_film.jpg" , path : "/Brother" },
    { id: 4, title: "Vikram", imageUrl: "https://i.pinimg.com/736x/09/1c/5b/091c5b23a0d0c5be39986c4c747ba4f2.jpg", path : "/Vikram" },
    { id: 5, title: "Meiyazhagan", imageUrl: "https://kuluqatar.com/storage/images/movies/meiyazhagan.jpg" , path : "/Meiyazhagan" },


    
  ],
  popular: [
    { id: 6, title: "Amaran", imageUrl: "https://static.moviecrow.com/movies/4636-amaran/236826-236823-amaran-px214.jpeg" , path : "/Amaran" },
    { id: 7, title: "Love Today", imageUrl: "https://static.toiimg.com/photo/92656272.cms", path:"/Lovetoday"},
    { id: 8, title: "Lubber Pandhu", imageUrl: "https://cdn.cinematerial.com/p/297x/bo9zumcs/lubber-pandhu-indian-movie-poster-md.jpg?v=1727430533" , path : "/LubberPandhu" },
    { id: 9, title: "GOAT", imageUrl: "https://i.pinimg.com/736x/f3/9f/5f/f39f5fd18e7bcdd63213c4bd4c0bb5d4.jpg" , path : "/Goat"},
    { id: 10, title: "Bloody Beggar", imageUrl: "https://i.pinimg.com/736x/87/0e/e0/870ee05ea2b22b73687d3613dcdb2278.jpg" , path : "/Bloodybeggar"},

   
  ],




};
   const MovieSection = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    },[]);
    // const navigate = useNavigate();

     const handleMovieClick = (movie) => {
    
    
  };
  return (


    <div className="movie-sec">
      
        <div className="app-bg">

          <MovieNavBar />
          <Banner />
          <div className="movie-container">

            <MoviesRow title="Trending Now" movies={categories.trending} />
            <MoviesRow title="Popular on Netflix" movies={categories.popular} />
            

          </div>
      

    </div>
    
    </div >
    
  );
};

export default MovieSection;
