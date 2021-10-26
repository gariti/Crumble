import { Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import PropTypes from 'prop-types'
import React from 'react'

RegistrationFields.propTypes = {
  register: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

export default function RegistrationFields({ register, errors }) {
  const nameMaxLength = 50
  const nameMinLength = 2
  const passwordMinLength = 6
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
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
          <Alert severity="error">First Name is required</Alert>
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
          <Alert severity="error">Last name is required</Alert>
        )}
        {errors.lastName && errors.lastName.type === 'maxLength' && (
          <Alert severity="error">
            Last name cannot be more than {nameMaxLength} characters
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

        {errors.auth && errors.auth.type === 'general' && (
          <Alert severity="error">{errors.auth.message}</Alert>
        )}
      </Grid>
    </Grid>
  )
}
