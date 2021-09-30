import { FormHelperText, Grid, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import EmailIcon from '@mui/icons-material/Email'
import forgotPassword from 'Assets/img/free/forgotpassword.png'
import { useSharedStyles } from 'Styles/Shared'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({}))

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
  const classes = useSharedStyles()
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
        var msg
        switch (e.code) {
          case 'auth/too-many-requests':
            msg =
              'Too many requests from this computer.  Please try again later.'
            break

          default:
            msg = 'Email address is not registered'
            break
        }

        setError('auth', {
          type: 'manual',
          message: msg,
        })
        setLoading(false)
      })
  }

  return (
    <Container>
      <img className={classes.headerIcon} src={forgotPassword} />
      <Typography className={classes.formlabel} variant="h5">
        Password Reset
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          component="main"
          className={classes.container}
        >
          <Grid item xs={12}>
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
          </Grid>
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
          <Grid item xs={12}>
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
                <CircularProgress
                  className={classes.circularProgress}
                  size={20}
                />
              )}
              Send Reset Link
            </Button>
          </Grid>
        </Grid>
      </form>
      {success && <Alert>Please check your inbox for instructions.</Alert>}
    </Container>
  )
}
export default ForgotPassword
