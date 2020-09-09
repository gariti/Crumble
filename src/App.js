import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import AdditionalInfoForm from "./components/AdditionalInfoForm/AdditionalInfoForm";
import { AuthProvider } from "./Firebase/Auth";
import "./App.css";
import PrivateRoute from "./PrivateRoute";

function App() {
  
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <Router> 
            <Switch>
              {/* Root
              (if Authenticated go to dashboard, else go to landing page) */}
              <PrivateRoute exact path="/" component={Dashboard} />
j
              {/* Landing */}
              <Route exact path="/landing">
                <LandingPage/>
              </Route>

              {/* Login */}
              <Route exact path="/login">
                <Login/>
              </Route>

              {/* New User */}
              <Route exact path="/newuser">
                {/* <NewUserForm /> */}
                <SignUp/>
              </Route>j
j
              {/* Additional info page */}
              <Route exact path="/additionalinfo/">
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
    </AuthProvider>
  );
}

export default App;
