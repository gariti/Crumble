/* eslint-disable no-console */
import {
  Avatar,
  Backdrop,
  Container,
  Dialog,
  Typography,
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Login from 'Components/Forms/Login'
import SignUp from 'Components/Forms/SignUp'
import { UserContext } from 'Context/UserContext'
import { useSharedStyles } from 'Styles/Shared'
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function LoginDialog({ openLogin, setOpenLogin }) {
  const classes = useSharedStyles()
  const [form, setForm] = useState('login')
  const [email, setEmail] = useState('')
  const { user } = useContext(UserContext)
  const history = useHistory()

  useEffect(() => {
    if (user) {
      // already logged in
      history.push('/')
    }
  }, [user])

  return (
    <Dialog
      open={openLogin}
      onClose={() => {
        setOpenLogin(false)
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        component="main"
        className={classes.container}
      >
        <Grid item xs={8}>
          {form === 'login' && (
            <Login setForm={setForm} email={email} setEmail={setEmail} />
          )}

          {form === 'signup' && <SignUp setForm={setForm} />}
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default LoginDialog
