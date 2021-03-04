import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
function App() {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
