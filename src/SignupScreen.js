import React from "react";
import "./SignupScreen.css";
const SignupScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const logIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={logIn}>
          {" "}
          Sign In
        </button>

        <h4>
          <span className="grey__highlight">New to Netflix? </span>
          <span className="link__highlight" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
