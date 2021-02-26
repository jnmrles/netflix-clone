import React from "react";
import "./Test.css";
function Test({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  function truncate(string, end) {
    return string?.length > end ? string.substr(0, end - 1) + "..." : string;
  }
  return (
    <div class="content">
      <div class="background">
        <div class="left"></div>
        <div
          class="right"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <div class="content-container">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </div>
  );
}

export default Test;
