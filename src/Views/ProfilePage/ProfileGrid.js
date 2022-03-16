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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
              src="../../Assets/img/faces/garrettprofile.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileInfo></ProfileInfo>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileItemsList></ProfileItemsList>
        </Grid>
      </Grid>
    </div>
  )
}
