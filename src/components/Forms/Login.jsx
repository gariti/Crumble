import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { FormStyles } from './FormStyles'

function Login(props) {
  Login.propTypes = {
    setForm: PropTypes.func.isRequired,
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false)
  const classes = FormStyles()
  const auth = getAuth()
  const history = useHistory()

  const onSubmit = async (values, event) => {
    event.preventDefault()

    setLoading(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        setLoading(false)
        setError('auth', {
          type: 'manual',
          message: 'Invalid email and/or password',
        })
      })
  }

  return (
    <Container className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        {errors.email && errors.email.type === 'required' && (
          <Alert severity="error">Email address is required to log in</Alert>
        )}

        {errors.email && errors.email.type === 'pattern' && (
          <Alert severity="error">Email is not in a correct format</Alert>
        )}

        <TextField
          {...register('password', {
            required: true,
            minLength: 6,
          })}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        {errors.password && errors.password.type === 'required' && (
          <Alert severity="error">Password is required</Alert>
        )}

        {errors.auth && errors.auth.type === 'manual' && (
          <Alert severity="error">{errors.auth.message}</Alert>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {loading && (
            <CircularProgress className={classes.circularProgress} size={20} />
          )}
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Button
              onClick={() => {
                props.setForm('forgotpassword')
              }}
            >
              Forgot password?
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              onClick={() => {
                props.setForm('signup')
              }}
            >
              Don&apos;t have an account? Create one.
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
export default Login
