// @ts-nocheck
import { Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import CustomAvatar from 'Components/AppBar/CustomAvatar'
import React from 'react'
import { Card, Container } from 'react-bootstrap'

import garrett from '../../Assets/img/faces/garrettprofile.jpg'
import ProfileBottomNavBar from './ProfileBottomNavBar'
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
  card: {
    padding: theme.spacing(2),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    border: 'solid',
  },
  info: {
    padding: '2px',
  },
}))

export default function ProfileGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Container className={classes.card}>
              <Avatar alt="Garrett" src={garrett} className={classes.large} />
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container className={classes.card}>
              <Typography className={classes.info} variant="h5" gutterBottom>
                Jenny Kunte
              </Typography>
              <Typography
                className={classes.info}
                variant="subtitle1"
                gutterBottom
              >
                Email:
              </Typography>
              <Typography
                className={classes.info}
                variant="subtitle1"
                gutterBottom
              >
                About:
              </Typography>
              <Typography
                className={classes.info}
                variant="subtitle1"
                gutterBottom
              >
                Location:
              </Typography>
              <Typography
                className={classes.info}
                variant="subtitle1"
                gutterBottom
              >
                Phone:
              </Typography>
              <Typography
                className={classes.info}
                variant="subtitle1"
                gutterBottom
              >
                Food:
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container className={classes.card}>
              <Button variant="outlined">Edit Profile</Button>
            </Container>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Container className={classes.card}>
            <ProfileBottomNavBar></ProfileBottomNavBar>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.card}>
            <ProfileItemsList />
          </Container>
        </Grid>
      </Container>
    </div>
  )
}
