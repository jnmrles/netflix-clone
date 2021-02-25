import React, { useState } from "react";
import "./Preview.css";
function Preview(props) {
  const [closed, setClosed] = useState(false);
  const movie = props.movie;

  const base_url = "https://image.tmdb.org/t/p/original/";

  return closed === false ? (
    <>
      <section class="section">
        <div class="content">
          <h2 class="title">This is a title</h2>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At non ex
            earum, libero dignissimos voluptates. Quis beatae dolorem autem
            ipsa!
          </p>
        </div>
        {/* <img
          className="image"
          key={movie.id}
          src={`${base_url}${
            movie.poster_path ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        /> */}
        <div className="banner--fadeBottom"></div>
        <div
          className="preview__image"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${
              movie.poster_path ? movie.poster_path : movie.backdrop_path
            }")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRpeat: "no-repeat",
          }}
        ></div>
      </section>
    </>
  ) : null;
}

export default Preview;
