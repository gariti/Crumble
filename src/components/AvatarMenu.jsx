import { Backdrop, Divider, ListItemIcon } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { ConfirmLogoutDialog } from './ConfirmLogoutDialog'

ProfileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  setAnchorEl: PropTypes.func.isRequired,
}

export default function ProfileMenu({ open, setOpen, anchorEl, setAnchorEl }) {
  const [logoutDialog, setLogoutDialog] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const confirmSignOut = () => {
    setLogoutDialog(true)
  }

  return (
    <div>
      <Backdrop open={open} onClick={handleClose}>
        {logoutDialog && (
          <ConfirmLogoutDialog open={logoutDialog} setOpen={setLogoutDialog} />
        )}
      </Backdrop>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Edit Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={confirmSignOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  )
}
