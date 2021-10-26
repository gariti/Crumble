import Container from '@material-ui/core/Container'
import SoukAppBar from 'Components/AppBar/SoukAppBar'
import { UserContext } from 'Context/UserContext'
import React, { useContext } from 'react'

function Home() {
  const user = useContext(UserContext)

  return user ? (
    <div>
      <SoukAppBar />
      <Container>
        <h1>Welcome {user.data.firstName}, you are now logged in.</h1>
      </Container>
    </div>
  ) : null
}

export default Home
