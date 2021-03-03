import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        ></img>
        <button className="login__button">Sign In</button>
        <div className="login__gradient"></div>
      </div>
    </div>
  );
}

export default Login;
