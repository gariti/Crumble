import { FormHelperText } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'
import EmailIcon from '@mui/icons-material/Email'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { FormStyles } from './FormStyles'

function ForgotPassword({ email, setEmail }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: { email: email } })

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = FormStyles()
  const auth = getAuth()

  const onSubmit = async (values, event) => {
    event.preventDefault()
    setLoading(true)
    clearErrors()
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        setLoading(false)
        setSuccess(true)
        setEmail(values.email)
      })
      .catch((e) => {
        setError('auth', {
          type: 'manual',
          message: 'Email address is not registered',
        })
      })
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Typography className={classes.formlabel} variant="h5">
        Password Reset
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          variant="outlined"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <FormHelperText>
          Enter the email address associated with your account
        </FormHelperText>
        {errors.email && errors.email.type === 'required' && (
          <Alert severity="error">Email address is required</Alert>
        )}

        {errors.email && errors.email.type === 'pattern' && (
          <Alert severity="error">Please enter a valid email address</Alert>
        )}
        {errors.auth && errors.auth.type === 'manual' && (
          <Alert severity="error">{errors.auth.message}</Alert>
        )}
        <Button
          disabled={success}
          startIcon={<EmailIcon />}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.submit}
        >
          {loading && (
            <CircularProgress className={classes.circularProgress} size={20} />
          )}
          Send Reset Link
        </Button>
      </form>

      {success && <Alert>Please check your inbox for instructions.</Alert>}
    </Container>
  )
}
export default ForgotPassword
