/* eslint-disable no-console */
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from 'assets/img/free/biryani.jpg'
import { Copyright } from 'components/Copyright'
// import ForgotPassword from 'components/Forms/ForgotPassword'
import Login from 'components/Forms/Login'
import SignUp from 'components/Forms/SignUp'
import { UserContext } from 'context/UserContext'
import React, { useContext, useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function LoginPage() {
  const classes = useStyles()
  const [form, setForm] = useState('login')
  const { user } = useContext(UserContext)
  const history = useHistory()

  useEffect(() => {
    if (user) {
      // already logged in
      history.push('/')
    }
  }, [user])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {form === 'login' && <Login setForm={setForm} />}
        {form === 'signup' && <SignUp setForm={setForm} />}
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  )
}

export default withRouter(LoginPage)
