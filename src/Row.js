import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Preview from "./Preview";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [viewPreview, setViewPreview] = useState(false);
  const [movie, setMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (e) => {
    setViewPreview(!viewPreview);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => {
                  handleClick();
                  setMovie(movie);
                }}
                onScroll={() => setViewPreview(false)}
              />
            )
        )}
      </div>
      {!viewPreview ? null : <Preview movie={movie} />}
    </div>
  );
}

export default Row;
