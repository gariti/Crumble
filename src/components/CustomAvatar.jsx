import Avatar from '@material-ui/core/Avatar'
import { IconButton } from '@mui/material'
import StringAvatar from 'components/StringAvatar'
import PropTypes from 'prop-types'
import React from 'react'

CustomAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onClick: PropTypes.func,
}

export default function CustomAvatar({ firstName, lastName, onClick }) {
  return (
    <div onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
      <Avatar {...StringAvatar(`${firstName} ${lastName}`)} />
    </div>
  )
}
