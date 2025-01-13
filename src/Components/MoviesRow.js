import React from "react";
import MoviesCard from "./MoviesCard";
import "./MoviesRow.css";
import {Link} from "react-router-dom"

const MoviesRow = ({ title, movies }) => (
  <div className="movie-row">
    <h2 className="row-title">{title}</h2>
    <div className="row-cards">
      {movies.map((movie) => (
        
        <MoviesCard key={movie.id} title={movie.title} imageUrl={movie.imageUrl}  path={movie.path} />
        
        
      ))}
    </div>
  </div>
);

export default MoviesRow;
