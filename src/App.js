import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUpForm/SignUpForm";
import LandingPage from "./components/Landing/Landing";
import Login from "./components/LoginForm/LoginForm";
import EditProfile from "./components/EditProfile/EditProfile";
import { AuthProvider } from "./Firebase/Auth";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/landing" component={LandingPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Route exact path="/login" component={Login} />

              {/* TODO */}
              {/* <Route exact path="/profile" component={Profile} /> */}
            </div>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
