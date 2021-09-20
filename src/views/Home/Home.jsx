import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import { FormStyles } from 'components/Forms/FormStyles'
import { UserContext } from 'context/UserContext'
import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function Home() {
  const classes = FormStyles()
  const user = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  return user ? (
    <div>
      <Container>
        <h1>Welcome {user.data.firstName}, you are now logged in.</h1>
        <Link to="/editprofile">Edit Profile</Link>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => signOut(user.auth)}
        >
          {loading && (
            <CircularProgress className={classes.circularProgress} size={20} />
          )}
          Sign out
        </Button>
      </Container>
    </div>
  ) : null
}

export default withRouter(Home)
