import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
function App() {
  const user = null;
  useEffect(() => {
    const unsubsrube = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
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
