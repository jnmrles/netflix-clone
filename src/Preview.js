import React, { useState } from "react";
import "./Preview.css";
function Preview(props) {
  const [closed, setClosed] = useState(false);
  const movie = props.movie;

  const base_url = "https://image.tmdb.org/t/p/original/";

  return closed === false ? (
    <>
      <div className="preview">
        <div className="preview__background">
          <div className="preview__background__shadow"></div>
          <img
            className="preview__image"
            src={`${base_url}${
              movie.poster_path ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        </div>

        <div className="preview__details">
          <div className="details_container">
            <h1 className="details__title">NAME</h1>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default Preview;
