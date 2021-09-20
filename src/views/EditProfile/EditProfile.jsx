/* eslint-disable no-console */
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'
import buffet from 'assets/img/free/buffet.jpg'
import { UserContext } from 'context/UserContext'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    width: '100%',
  },
  image: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundImage: `url(${buffet})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function EditProfile() {
  const classes = useStyles()
  const user = useContext(UserContext)
  const history = useHistory()
  const [loading] = useState(true)
  const defaultFormValues = {
    address: '',
    bio: '',
    firstName: '',
    lastName: '',
    nickname: '',
  }

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultFormValues,
    mode: 'onBlur',
  })

  useEffect(() => {
    reset(user.data)
  }, [user])

  const updateUser = async (values) => {
    const newUserData = { ...user.data, ...values }

    await user.docRef.update({ ...newUserData }).catch((error) => {
      console.error('Error updating document:', error)
    })
    // setUser({ ...user, data: newUserData }) // TODO: Add firebase function
    console.log('Document updated:', user.docRef.id)
    history.push('/profile')
  }

  // TODO: Banner to send email verification
  // const resendEmailVerification = async () => {
  //   authUser.sendEmailVerification();
  // };

  /* TODO: make banner for email verification */

  /* {!!!authUser && authUser.emailVerified === false && (
        <div>
          <h3>Email address is not verified</h3>
          <Button onClick={resendEmailVerification}>
            Send verification email
          </Button>
        </div>
      )} */

  return (
    !loading && (
      <div className={classes.root}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Join Your Community!
              </Typography>
              <Typography component="h5" variant="subtitle1">
                Please provide a little bit more about yourself so others can
                get to know you.
              </Typography>
              <form
                className={classes.form}
                onSubmit={handleSubmit(updateUser)}
              >
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography>First Name:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="firstName"
                      {...register({
                        maxLength: 60,
                        minLength: 2,
                        pattern: /^[a-z]+$/i,
                        required: true,
                      })}
                    />
                  </Grid>
                  {errors.firstName && errors.firstName.type === 'required' && (
                    <Alert severity="error">First Name is required</Alert>
                  )}
                  {errors.firstName &&
                    errors.firstName.type === 'minLength' && (
                      <Alert severity="error">
                        First name must be at least 2 characters
                      </Alert>
                    )}

                  {errors.firstName && errors.firstName.type === 'pattern' && (
                    <Alert severity="error">
                      First name must be letters only
                    </Alert>
                  )}

                  <Grid item xs={4}>
                    <Typography>Last Name:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="lastName"
                      {...register({
                        minLength: 2,
                        pattern: /^[a-z]+$/i,
                        required: true,
                      })}
                    />
                  </Grid>
                  {errors.lastName && errors.lastName.type === 'required' && (
                    <Alert severity="error">Last name is required</Alert>
                  )}
                  {errors.lastName && errors.lastName.type === 'minLength' && (
                    <Alert severity="error">
                      Last name must be at least 2 characters
                    </Alert>
                  )}
                  {errors.lastName && errors.lastName.type === 'pattern' && (
                    <Alert severity="error">
                      Last name must be letters only
                    </Alert>
                  )}
                  <Grid item xs={4}>
                    <Typography>Nickname:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="nickname"
                      {...register({ required: false })}
                    />

                    {errors.nickname &&
                      errors.nickname.type === 'minLength' && (
                        <Alert severity="error">
                          Last name must be at least 2 characters
                        </Alert>
                      )}
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Street Address:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="address1"
                      {...register({ required: false })}
                    />
                  </Grid>
                  {errors.address1 && errors.address1.type === 'minLength' && (
                    <Alert severity="error">Address must be valid</Alert>
                  )}

                  <Grid item xs={12}>
                    <Typography>Street Address Line 2:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="address2"
                      {...register({ required: false })}
                    />
                  </Grid>
                  {errors.address2 && errors.address2.type === 'minLength' && (
                    <Alert severity="error">Address must be valid</Alert>
                  )}

                  <Grid item xs={4}>
                    <Typography>City</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="city"
                      {...register({ required: false })}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography>State/Province</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="state"
                      {...register({ required: false })}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography>Postal Code</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="postal"
                      {...register({
                        maxLength: 5,
                        minLength: 5,
                        required: false,
                      })}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Country</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      name="country"
                      {...register({ required: false })}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Bio:</Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="bio"
                      {...register({
                        maxLength: 1000,
                        required: false,
                      })}
                    />
                  </Grid>

                  <Grid item xs="auto">
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  )
}

export default withRouter(EditProfile)
