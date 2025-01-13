import React from "react";
import "./MoviesCard.css";
import { Link } from "react-router-dom";

const MoviesCard = ({ title, imageUrl, path, onClick }) => (
  
  <div className="movie-card" onClick={onClick}>
    <Link to= {path}>
    <img src={imageUrl} alt={title} className="movie-image" />
    <h3 className="movie-title">{title}</h3>
    </Link>
  </div>
  
);

export default MoviesCard;
