// import { Typography } from '@material-ui/core';
import {
  Avatar,
  Container,
  Grid,
  Link,
  Slide,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Rating } from '@mui/material'
import Paper from '@mui/material/Paper'
import profile from 'assets/img/faces/garrettprofile.jpg'
// import beer from 'assets/img/free/beer.jpg';
// import casks from 'assets/img/free/casks.jpg';
// import crispybuns from 'assets/img/free/crispybuns.jpg';
import { UserContext } from 'context/UserContext'
import React, { useContext, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  paperBackground: {},
  avatar: {
    borderRadius: '50%',
    height: '100%',
    width: '100%',
    top: '-100px',
  },
  avatarContainer: {
    marginBottom: '-100px',
  },
  paper: {
    padding: 20,
  },
}))

export default function ProfilePage() {
  const classes = useStyles()
  const user = useContext(UserContext)
  const [loaded, setLoaded] = useState(false)
  return (
    user && (
      <Container className={classes.paperBackground}>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
          <Slide direction="left" in={loaded}>
            <Grid container className={classes.avatarContainer} spacing={2}>
              <Grid item>
                <Avatar
                  imgProps={{ onLoad: () => setLoaded(true) }}
                  src={profile}
                  alt="..."
                  className={classes.avatar}
                />
              </Grid>
            </Grid>
          </Slide>
          <Slide direction="right" in>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="subtitle2" component="div">
                    500 reviews
                  </Typography>
                  <Rating />
                </Grid>
                <Grid item xs>
                  <h2>Garrett Carver</h2>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tempor, nisi sed tincidunt ultricies, lacus eros
                    sodales mi, sed dignissim mauris tortor at mauris. Aliquam
                    vitae ante velit. Quisque viverra scelerisque turpis non
                    aliquet. Suspendisse sem purus, auctor ut suscipit a,
                    pretium fermentum ipsum. Curabitur ac justo mi. Praesent sed
                    ante lacus. Nulla vel ultricies tortor, eu consequat arcu.
                    Sed non magna sagittis, sagittis lorem ultricies, blandit
                    elit. Nulla posuere elit eget nibh porta cursus. Sed id
                    feugiat dui, eu tincidunt quam. Cras nulla lacus, cursus non
                    odio in, fringilla convallis turpis. Phasellus sed cursus
                    dolor. Mauris ut gravida diam, sed posuere enim. Cras
                    tincidunt non risus ac facilisis. Praesent et pretium enim.
                    Nunc nec tempor dolor, gravida pulvinar turpis. Quisque enim
                    odio, sodales id sodales vestibulum, fermentum viverra
                    sapien. Sed auctor sem in iaculis tempor. Nulla condimentum
                    convallis volutpat.{' '}
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="/">Contact Garrett</Link>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" component="div">
                  Joined 9/24/21
                </Typography>
              </Grid>
            </Grid>
          </Slide>
        </Paper>
      </Container>
    )
  )
}
