/* eslint-disable no-console */
import { Backdrop, Dialog } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from 'Assets/svg/undraw_breakfast_psiw.svg'
import { Copyright } from 'Components/Copyright'
import ForgotPassword from 'Components/Forms/ForgotPassword'
// import ForgotPassword from 'components/Forms/ForgotPassword'
import Login from 'Components/Forms/Login'
import SignUp from 'Components/Forms/SignUp'
import { UserContext } from 'Context/UserContext'
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
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              {forgotPassword && (
                <Dialog
                  open={forgotPassword}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <ForgotPassword email={email} setEmail={setEmail} />
                </Dialog>
              )}
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
