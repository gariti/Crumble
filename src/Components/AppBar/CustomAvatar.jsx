import { CircularProgress } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import StringAvatar from 'Components/AppBar/StringAvatar'
import { getUserPhotoUrl } from 'Firebase/firestore'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

CustomAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  uid: PropTypes.string,
}

export default function CustomAvatar({ firstName, lastName, uid }) {
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    if (!photo) {
      getUserPhotoUrl(uid).then((p) => {
        setPhoto(p)
      })
    }
  }, [])

  return photo ? (
    <Avatar src={photo} {...StringAvatar(`${firstName} ${lastName}`)} />
  ) : (
    <CircularProgress color="light" />
  )
}
