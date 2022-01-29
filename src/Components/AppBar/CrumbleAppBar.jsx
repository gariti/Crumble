/* eslint-disable no-constant-condition */
// import { SvgIcon } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as CrumbleIcon } from 'Assets/svg/crumbleLogo.svg'
// import CrumbleIcon from 'Assets/img/art/bio.png'
import ProfileMenuButton from 'Components/AppBar/ProfileMenuButton'
// import MenuIcon from '@material-ui/icons/Menu'
import 'firebase/auth'
import 'firebase/firestore'
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

function CrumbleAppBar() {
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
          {/* TO DO:
          Fiz size  */}
          <CrumbleIcon></CrumbleIcon>
        </IconButton>

        <ProfileMenuButton />
      </Toolbar>
    </AppBar>
  )
}
CrumbleAppBar.propTypes = {
  // setOpenLogin: PropTypes.func.isRequired,
}

export default CrumbleAppBar
