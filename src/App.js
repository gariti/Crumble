import React from "react";
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUpForm/SignUpForm";
import LandingPage from "./components/Landing/Landing";
import Login from "./components/LoginForm/LoginForm";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/EditProfile/EditProfile";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <div>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/landing" component={LandingPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/editprofile" component={EditProfile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
              </div>
            </header>
          </div>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
