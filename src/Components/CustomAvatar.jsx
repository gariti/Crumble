import Avatar from '@material-ui/core/Avatar'
import { IconButton } from '@mui/material'
import StringAvatar from 'Components/StringAvatar'
import PropTypes from 'prop-types'
import React from 'react'

CustomAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

export default function CustomAvatar({ firstName, lastName }) {
  return <Avatar {...StringAvatar(`${firstName} ${lastName}`)} />
}
