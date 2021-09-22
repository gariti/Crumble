import { Button } from '@material-ui/core'
import { UserContext } from 'context/UserContext'
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
    <div>
      <CustomAvatar
        firstName={user.data.firstName}
        lastName={user.data.LastName}
        onClick={handleClick}
      />
      <ProfileMenu
        open={open}
        setOpen={setOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </div>
  ) : (
    <Button href="login">Login</Button>
  )
}
