import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import ProfileScreen from "./ProfileScreen";
function App() {
  const user = true;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsrube = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout);
      }

      return unsubsrube;
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>{" "}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
