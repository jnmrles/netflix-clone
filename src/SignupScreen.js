import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "./firebase.js";
const SignupScreen = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
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
