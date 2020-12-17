import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './Routes/PrivateRoute';
import Theme from './Theme';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import EditProfile from './views/EditProfile/EditProfile';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import SignUpPage from './views/SignUpPage/SignUpPage';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={Theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Router>
            <div className="App">
              <header className="App-header">
                <div>
                  <Route exact path="/landing" component={LandingPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/signup" component={SignUpPage} />
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/profile" component={ProfilePage} />
                  <PrivateRoute
                    exact
                    path="/editprofile"
                    component={EditProfile}
                  />
                </div>
              </header>
            </div>
          </Router>
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  );
}
