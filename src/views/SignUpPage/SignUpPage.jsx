import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
import backgroundImage from 'assets/img/free/chickpeabowl.jpg';
import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter, useHistory } from 'react-router-dom';

import firebase from '../../firebase/Firebase';

// import { AuthContext } from '../../context/AuthContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Souk
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpPage() {
  const classes = useStyles();

  const { register, handleSubmit, errors, setError } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();

  const onSubmit = async (values) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('sign up success');
        history.push('/');
      })
      .catch((error) => {
        setError('firebase', {
          type: 'manual',
          message: error.message,
        });
        console.error('Failed to sign up: ', error.message);
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />

            {errors.email && errors.email.type === 'required' && (
              <Alert severity="error">
                Email address is required to Sign Up
              </Alert>
            )}

            {errors.email && errors.email.type === 'pattern' && (
              <Alert severity="error">Email is not in a correct format</Alert>
            )}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({
                required: true,
                minLength: 6,
              })}
            />

            {errors.password && errors.password.type === 'required' && (
              <Alert severity="error">Password is required</Alert>
            )}

            {errors.firebase && <p>{errors.firebase.message}</p>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignUpPage);
