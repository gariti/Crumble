import { Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import PropTypes from 'prop-types'
import React from 'react'

AdditionalInfo.propTypes = {
  register: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

export default function AdditionalInfo({ register, classes, errors }) {
  const maxChars = 170
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" gutterBottom>
          Anything else you&apos;d like to add?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register('additionalInfo', {
            required: true,
          })}
          variant="outlined"
          margin="normal"
          id="additionalInfo"
          name="additionalInfo"
          label="Additional Information"
          autoComplete="Additional Information"
          fullWidth
          autoFocus
          multiline
          rows={2}
          maxRows={6}
        />
        <Grid item xs={12}>
          <Typography variant="subtitle2">*This is optional</Typography>
        </Grid>
        {errors.bio && errors.bio.type === 'maxchars' && (
          <Alert severity="error">
            Your bio cannot be more than {maxChars} characters.
          </Alert>
        )}
      </Grid>
    </Grid>
  )
}
