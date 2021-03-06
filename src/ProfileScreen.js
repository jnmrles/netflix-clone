import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";
import { auth } from "./firebase.js";
import Nav from "./Nav.js";

import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  console.log(user.email);
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

          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p>No Active Subscriptions</p>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
