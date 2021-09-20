/* eslint-disable no-constant-condition */
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import StringAvatar from 'components/StringAvatar'
import { UserContext } from 'context/UserContext'
import 'firebase/auth'
import 'firebase/firestore'
import React, { useContext } from 'react'
// import React, { useState, useContext } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'

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
  const user = useContext(UserContext)

  // const { user } = useContext(UserContext);
  // const [loading, setLoading] = useState(true);

  return (
    // eslint-disable-next-line prettier/prettier
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        {user.data ? (
          <Avatar
            {...StringAvatar(`${user.data.firstName} ${user.data.lastName}`)}
          />
        ) : (
          <Link to="/login">
            <Button varient="contained" color="secondary">
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default SoukAppBar
