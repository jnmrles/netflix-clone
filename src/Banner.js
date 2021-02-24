import React from "react";

import "./Banner.css";

function Banner() {
  function truncate(string, end) {
    return string?.length > end ? string.substr(0, end - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/62/cb/b8/62cbb8138fd6c38a72198e09859a5426.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description This is the banner description ",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
