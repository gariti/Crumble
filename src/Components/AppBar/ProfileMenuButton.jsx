import { Fab } from '@material-ui/core'
import { LockOpenTwoTone } from '@material-ui/icons'
import { UserContext } from 'Context/UserContext'
import React, { useContext, useState } from 'react'

import CustomAvatar from './CustomAvatar'
import ProfileMenu from './ProfileMenu'

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
        uid={user.uid}
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
      <Fab color="primary">
        <LockOpenTwoTone />
      </Fab>
    </div>
  )
}
