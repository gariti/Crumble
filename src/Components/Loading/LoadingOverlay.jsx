import { Backdrop, CircularProgress } from '@material-ui/core'
import { useSharedStyles } from 'Styles/Shared'
import PropTypes from 'prop-types'
import React from 'react'

LoadingOverlay.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default function LoadingOverlay({ loading }) {
  const classes = useSharedStyles()

  return (
    <Backdrop className={classes.loading} open={loading}>
      <CircularProgress size={100} color="secondary" />
    </Backdrop>
  )
}
