import Container from '@material-ui/core/Container'
import { UserContext } from 'context/UserContext'
import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

function Home() {
  const user = useContext(UserContext)

  return user ? (
    <div>
      <Container>
        <h1>Welcome {user.data.firstName}, you are now logged in.</h1>
      </Container>
    </div>
  ) : null
}

export default withRouter(Home)
