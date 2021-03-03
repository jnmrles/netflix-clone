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

      <div className="login__body">
        <>
          <h1>Unlimited films, TV programs and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="login__getButton">Get Started</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
