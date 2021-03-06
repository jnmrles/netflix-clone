import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./ProfileScreen";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log("user", user);

  useEffect(() => {
    const unsubsrube = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });
    return unsubsrube;
  }, [dispatch]);
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
