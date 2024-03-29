/* eslint-disable no-constant-condition */
// import { SvgIcon } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as CrumbleIcon } from 'Assets/svg/crumbleLogoDemo1.svg'
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
  mainLogo: {
    height: '5em',
    width: '5em',
  },
}))

function CrumbleAppBar() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Button>
          <CrumbleIcon className={classes.mainLogo} />
        </Button>

        <ProfileMenuButton />
      </Toolbar>
    </AppBar>
  )
}
CrumbleAppBar.propTypes = {
  // setOpenLogin: PropTypes.func.isRequired,
}

export default CrumbleAppBar
