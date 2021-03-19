import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { UserContext } from 'context/UserContext';
import 'firebase/auth';
import 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './Routes/PrivateRoute';
import Theme from './Theme';
import SoukAppBar from './components/SoukAppBar';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import EditProfile from './views/EditProfile/EditProfile';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import SignUpPage from './views/SignUpPage/SignUpPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AuthProvider>
        <UserProvider>
          <ThemeProvider theme={Theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Router>
              <div className="App">
                <header className="App-header">
                  <SoukAppBar />
                  <div>
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage} />
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute
                      exact
                      path="/profile"
                      component={ProfilePage}
                    />
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
    </div>
  );
}
