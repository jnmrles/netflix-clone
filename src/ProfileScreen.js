import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";
import Nav from "./Nav.js";

import "./ProfileScreen.js";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreem__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </div>
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
