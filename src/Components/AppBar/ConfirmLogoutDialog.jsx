import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { signOutOfFirebase } from 'Firebase/auth'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

ConfirmLogoutDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export function ConfirmLogoutDialog({ setOpen, open }) {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSignOut = () => {
    setLoading(true)
    signOutOfFirebase().then(() => {
      setLoading(false)
      setOpen(false)
      history.push('/landing')
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Sign Out</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to sign out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleSignOut} autoFocus>
          Yes
          {loading && <CircularProgress color="inherit" />}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
