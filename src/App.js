import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Dashboard from "./components/pages/Dashboard";
// import NewUserForm from "./components/NewUserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            {/* Root */}
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/newuser">New User?</Link>
              <Link to="/login">Login</Link>
            </Route>

            {/* New User */}
            <Route exact path="/newuser">
              {/* <NewUserForm /> */}
              <div>WIP</div>
            </Route>

            {/* Additional info page */}
            <Route exact path="/additionalinfo/:id">
              <div>WIP</div>
            </Route>

            {/* Dashboard */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
