import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {/* Rows */}
    </div>
  );
}

export default HomeScreen;
