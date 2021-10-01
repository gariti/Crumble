import { Box, Link, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import dinner from 'Assets/img/art/dinner.png'
import SignUpStepper from 'Components/Registration/SignUpStepper'
import { createNewUser } from 'Firebase/firestore'
import { useSharedStyles } from 'Styles/Shared'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

function SignUp({ setForm }) {
  const [loading, setLoading] = useState(false)
  const classes = useSharedStyles()
  const history = useHistory()
  const nameMaxLength = 50
  const nameMinLength = 2
  const passwordMinLength = 6
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit' })

  const onSubmit = async (values, event) => {
    event.preventDefault()
    setLoading(true)

    createNewUser(values)
      .then(() => {
        history.push('/')
      })
      .catch((e) => {
        setLoading(false)

        if (e.code === 'auth/email-already-in-use')
          setError('email', {
            type: 'exists',
            message: 'Email Address is already registered.',
          })
        else {
          setError('auth', {
            type: 'general',
            message:
              'Opps! Something has gone wrong while signing up. Please try again.',
          })
        }
      })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <img className={classes.headerIcon} src={dinner} />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            Welcome! Please register below.
          </Typography>
        </Grid>
        {/* First Name */}
        <Grid item xs={6}>
          <TextField
            {...register('firstName', {
              required: true,
              maxLength: nameMaxLength,
              minLength: nameMinLength,
            })}
            variant="outlined"
            margin="normal"
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
          {errors.firstName && errors.firstName.type === 'required' && (
            <Alert severity="error">First Name is required to sign up</Alert>
          )}
          {errors.firstName && errors.firstName.type === 'maxLength' && (
            <Alert severity="error">
              First Name cannot be more than {nameMaxLength} characters
            </Alert>
          )}
          {errors.firstName && errors.firstName.type === 'minLength' && (
            <Alert severity="error">
              First Name must be at least {nameMinLength} characters
            </Alert>
          )}
        </Grid>
        {/* Last Name */}
        <Grid item xs={6}>
          <TextField
            {...register('lastName', {
              required: true,
              maxLength: nameMaxLength,
              minLength: nameMinLength,
            })}
            variant="outlined"
            margin="normal"
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
          />
          {errors.lastName && errors.lastName.type === 'required' && (
            <Alert severity="error">Last Name is required to sign up</Alert>
          )}
          {errors.lastName && errors.lastName.type === 'maxLength' && (
            <Alert severity="error">
              Last Name cannot be more than {nameMaxLength} characters
            </Alert>
          )}
          {errors.lastName && errors.lastName.type === 'minLength' && (
            <Alert severity="error">
              Last Name must be at least {nameMinLength} characters
            </Alert>
          )}
        </Grid>
        {/* Email */}
        <Grid item xs={12}>
          <TextField
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          {errors.email && errors.email.type === 'required' && (
            <Alert severity="error">Email address is required to sign up</Alert>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Alert severity="error">Email is not in a correct format</Alert>
          )}
          {errors.email && errors.email.type === 'exists' && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
        </Grid>
        {/* Password */}
        <Grid item xs={12}>
          <TextField
            {...register('password', {
              required: true,
              minLength: passwordMinLength,
            })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && errors.password.type === 'minLength' && (
            <Alert severity="error">
              Password must be at least {passwordMinLength} characters
            </Alert>
          )}
          {errors.password && errors.password.type === 'required' && (
            <Alert severity="error">Password is required</Alert>
          )}
          {/* Submit */}
          <SignUpStepper />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading && (
              <CircularProgress
                className={classes.circularProgress}
                size={20}
              />
            )}
            Sign Up
          </Button>

          {errors.auth && errors.auth.type === 'general' && (
            <Alert severity="error">{errors.auth.message}</Alert>
          )}
        </Grid>
        <Grid item xs>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setForm('login')
            }}
          >
            {' '}
            Already have an account? Sign in.
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}
SignUp.propTypes = {
  setForm: PropTypes.func.isRequired,
}

export default SignUp
