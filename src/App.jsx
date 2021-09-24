/* eslint-disable no-console */
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { getUserData } from 'Firebase/firestore'
import { UserProvider } from 'context/UserContext'
import { signOut, getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { authObserver } from './Firebase/auth'
import PrivateRoute from './Routes/PrivateRoute'
import Theme from './Theme'
import SoukAppBar from './components/SoukAppBar'
import EditProfile from './views/EditProfile/EditProfile'
import Home from './views/Home/Home'
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import ProfilePage from './views/ProfilePage/ProfilePage'

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
}))

export default function App() {
  const classes = useStyles()
  const [auth, setAuth] = useState()
  const [user, setUser] = useState({ data: null, uid: null })

  useEffect(() => {
    const unsubscribe = authObserver(setAuth)
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!user.data && auth) {
      // @ts-ignore
      getUserData(auth.uid).then((data) => {
        if (data)
          setUser({
            // @ts-ignore
            ...auth,
            data,
          })
        else {
          // TODO: No should handle this a better way...
          // scrub the bad account and notify user to reregister?
          console.log(
            `Something went wrong, user ${user.uid}
       details were not found in the database. User will be signed out`,
          )
          signOut(getAuth())
        }
      })
    }

    if (user.data && !auth) {
      // User signed out
      setUser({ data: null, uid: null })
    }
  }, [auth])

  return (
    <UserProvider user={user}>
      <div className={classes.root}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <div className="App">
            <header className="App-header">
              <div>
                <Router>
                  <SoukAppBar />

                  <Switch>
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <PrivateRoute exact path="/" component={Home} user={user} />
                    <PrivateRoute
                      exact
                      path="/profile"
                      component={ProfilePage}
                      user={user}
                    />
                    <PrivateRoute
                      exact
                      path="/editprofile"
                      component={EditProfile}
                      user={user}
                    />
                  </Switch>
                </Router>
              </div>
            </header>
          </div>
        </ThemeProvider>
      </div>
    </UserProvider>
  )
}
