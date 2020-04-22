import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Dashboard from "./components/pages/Dashboard";
import NewUserForm from "./components/NewUserForm";
import AdditionalInfoForm from "./components/AdditionalInfoForm";
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
              <NewUserForm />
            </Route>

            {/* Additional info page */}
            <Route exact path="/additionalinfo/:id">
              <AdditionalInfoForm />
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
