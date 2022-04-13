// @ts-nocheck
import { Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { getUserPhotoUrl } from 'Cloud/firestore'
import { UserContext } from 'Context/UserContext'
import React, { useEffect, useState, useContext } from 'react'
import { Container } from 'react-bootstrap'

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

  const [selection, setSelection] = useState(0)
  const [photo, setPhoto] = useState(null)
  const user = useContext(UserContext)

  useEffect(() => {
    if (!photo) {
      getUserPhotoUrl(user.uid).then((p) => {
        setPhoto(p)
      })
    }
  }, [])

  return (
    <div className={classes.root}>
      <Container>
        <Container className={classes.card}>
          <Paper>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Container className={classes.card}>
                  <Avatar alt="Garrett" src={photo} className={classes.large} />
                </Container>
              </Grid>
              <Grid item xs={3}>
                <Container className={classes.card}>
                  <h5>
                    {user.data.firstName} {user.data.lastName}
                  </h5>
                </Container>
              </Grid>
              <Grid item xs={3}>
                <Container className={classes.card}>
                  <Button variant="outlined">Edit Profile</Button>
                </Container>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <Grid item xs={12}>
          <Container className={classes.card}>
            <ProfileBottomNavBar
              selection={selection}
              setSelection={setSelection}
            ></ProfileBottomNavBar>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.card}>
            {selection === 0 && <ProfileInfo />}
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.card}>
            {selection === 1 && <ProfileItemsList />}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}
