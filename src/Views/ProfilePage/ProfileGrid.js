// @ts-nocheck
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import ProfileInfo from './ProfileInfo'
import ProfileItemsList from './ProfileItemsList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

export default function ProfileGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar
              alt="Garrett"
              src="../Assets/img/faces/garrettprofile.jpg"
              className={classes.large}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfileInfo></ProfileInfo>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfileItemsList></ProfileItemsList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
