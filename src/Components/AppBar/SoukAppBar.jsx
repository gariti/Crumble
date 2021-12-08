/* eslint-disable no-constant-condition */
import { SvgIcon } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import ProfileMenuButton from 'Components/AppBar/ProfileMenuButton'
// import { ReactComponent as SoukIcon } from 'Assets/svg/masonjar.svg'
// import MenuIcon from '@material-ui/icons/Menu'
import 'firebase/auth'
import 'firebase/firestore'
import PropTypes from 'prop-types'
import React from 'react'

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
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/*
          // TODO: Fix icon
          <SvgIcon component={SoukIcon} />
           */}
        </IconButton>

        <ProfileMenuButton />
      </Toolbar>
    </AppBar>
  )
}
SoukAppBar.propTypes = {
  // setOpenLogin: PropTypes.func.isRequired,
}

export default SoukAppBar
