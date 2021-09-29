import { Button } from '@material-ui/core'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import Fab from '@mui/material/Fab'
import { UserContext } from 'Context/UserContext'
import React, { useContext, useState } from 'react'

import ProfileMenu from './AvatarMenu'
import CustomAvatar from './CustomAvatar'

export default function ProfileMenuButton() {
  const user = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setOpen(!open)
    setAnchorEl(event.currentTarget)
  }

  return user.data ? (
    <div
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <CustomAvatar
        firstName={user.data.firstName}
        lastName={user.data.lastName}
      />
      <ProfileMenu
        open={open}
        setOpen={setOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </div>
  ) : (
    <div>
      <Fab color="primary" href="login">
        <LockOpenTwoToneIcon />
      </Fab>
    </div>
  )
}
