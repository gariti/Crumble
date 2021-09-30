import { Backdrop, Dialog, Link, makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'
import ForgotPassword from 'Components/Forms/ForgotPassword'
import { useSharedStyles } from 'Styles/Shared'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

function Login({ setForm, email, setEmail }) {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    reset,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({ defaultValues: { email: email } })

  const [forgotPassword, setForgotPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = useSharedStyles()
  const auth = getAuth()
  const history = useHistory()

  React.useEffect(() => {
    if (email) {
      setValue('email', email, { shouldDirty: true, shouldTouch: true })
      setFocus('email')
    }
  }, [email])

  const handleClose = () => {
    setForgotPassword(false)
  }

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
    <Container>
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
          startIcon={<LockOutlinedIcon />}
        >
          {loading && (
            <CircularProgress className={classes.circularProgress} size={20} />
          )}
          Sign In
        </Button>
      </form>
      <Grid container>
        <Grid item xs>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setForgotPassword(true)
              setEmail(getValues('email'))
            }}
          >
            Forgot password?
          </Link>
        </Grid>
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
        <Grid item xs>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setForm('signup')
            }}
          >
            Don&apos;t have an account?
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Login
