import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContentText,
  Grid,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { AddAPhotoTwoTone } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Alert } from '@material-ui/lab'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

PhotoInput.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  photo: PropTypes.object,
  setPhoto: PropTypes.func.isRequired,
}

export default function PhotoInput({ classes, errors, photo, setPhoto }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/)) {
      const reader = new FileReader()
      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const blob = new Blob([reader.result], { type: acceptedFiles[0].type })
        setPhoto(blob)
        setOpen(true)
        // TODO: validate / rescale image on serverside
      }

      reader.readAsArrayBuffer(acceptedFiles[0])
    } else {
      // TODO: Set error msg
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const { ref, ...rootProps } = getRootProps()
  const [open, setOpen] = useState(false)
  const maxSizeMb = 5

  const handleCancel = () => {
    setPhoto(null)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Choose a photo
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Dialog open={open}>
          <Container className={classes.container}>
            <img
              width="300"
              height="300"
              src={photo ? URL.createObjectURL(photo) : ''}
              alt="Selected"
            />
            <DialogContentText id="alert-dialog-description">
              Beautiful! Would you like to use this photo?
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleCancel}>No</Button>
              <Button onClick={handleClose} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
        {photo ? (
          <Tooltip title="Reselect photo?">
            <Box className={classes.dropzone} {...rootProps}>
              <CheckCircleIcon fontSize="large" color="primary" />
              <Typography>Selected!</Typography>
              <input {...getInputProps()} />
            </Box>
          </Tooltip>
        ) : (
          <Tooltip title="Select photo">
            <Box className={classes.dropzone} {...rootProps}>
              <AddAPhotoTwoTone fontSize="large" color="primary" />
              <Typography>Drop file here to upload</Typography>
              <input {...getInputProps()} />
            </Box>
          </Tooltip>
        )}
      </Grid>
      {errors.photo && errors.photo.type === 'toobig' && (
        <Alert severity="error">Photo cannot be more than {maxSizeMb} MB</Alert>
      )}
    </Grid>
  )
}
