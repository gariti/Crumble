/* eslint-disable no-constant-condition */
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
// import MenuIcon from '@material-ui/icons/Menu'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import { withRouter } from 'react-router-dom'

import ProfileMenuButton from './ProfileMenuButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function SoukAppBar() {
  const classes = useStyles()

  return (
    // eslint-disable-next-line prettier/prettier
    // TODO: implement menu

    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <ProfileMenuButton />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(SoukAppBar)
