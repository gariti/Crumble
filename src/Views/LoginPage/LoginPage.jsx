/* eslint-disable no-console */
import { Avatar, Backdrop, Dialog, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import foodTruck from 'Assets/svg/undraw_Street_food_re_uwex.svg'
import { Copyright } from 'Components/Copyright'
import ForgotPassword from 'Components/Forms/ForgotPassword'
// import ForgotPassword from 'components/Forms/ForgotPassword'
import Login from 'Components/Forms/Login'
import SignUp from 'Components/Forms/SignUp'
import { UserContext } from 'Context/UserContext'
import React, { useContext, useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  truck: {
    maxWidth: '100%',
    padding: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function LoginPage() {
  const classes = useStyles()
  const [form, setForm] = useState('login')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [email, setEmail] = useState('')
  const { user } = useContext(UserContext)
  const history = useHistory()

  useEffect(() => {
    if (user) {
      // already logged in
      history.push('/')
    }
  }, [user])

  const handleClose = () => {
    setForgotPassword(false)
  }

  return (
    <Dialog open={true}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        component="main"
        className={classes.container}
      >
        <img className={classes.truck} src={foodTruck} />

        <Grid item xs={8}>
          {form === 'login' && (
            <Login
              setForm={setForm}
              setForgotPassword={setForgotPassword}
              email={email}
              setEmail={setEmail}
            />
          )}

          {form === 'signup' && <SignUp setForm={setForm} />}

          {forgotPassword && (
            <Backdrop open={forgotPassword}>
              <Dialog
                open={forgotPassword}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <ForgotPassword email={email} setEmail={setEmail} />
              </Dialog>
            </Backdrop>
          )}
          <Box mt={5}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default withRouter(LoginPage)
