import Avatar from '@material-ui/core/Avatar'
import StringAvatar from 'Components/AppBar/StringAvatar'
import { getUserPhotoUrl } from 'Firebase/firestore'
import PropTypes from 'prop-types'
import React from 'react'

CustomAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  uid: PropTypes.string,
}

export default function CustomAvatar({ firstName, lastName, uid }) {
  const photo = getUserPhotoUrl(uid)

  // TODO: after user photo retrieved rerender

  return <Avatar src={photo} {...StringAvatar(`${firstName} ${lastName}`)} />
}
