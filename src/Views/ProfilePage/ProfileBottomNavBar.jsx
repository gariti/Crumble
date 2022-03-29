import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core/styles'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: 'auto',
    maxWidth: 1000,
  },
})

export default function ProfileBottomNavBar({ selection, setSelection }) {
  const classes = useStyles()

  return (
    <BottomNavigation
      value={selection}
      onChange={(event, newValue) => {
        setSelection(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="About" icon={<InfoOutlinedIcon />} />
      <BottomNavigationAction label="Post" icon={<AppsRoundedIcon />} />
      <BottomNavigationAction label="Nearby" icon={<RoomOutlinedIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteBorderIcon />} />
      <BottomNavigationAction label="Saved" icon={<BookmarkBorderIcon />} />
    </BottomNavigation>
  )
}
