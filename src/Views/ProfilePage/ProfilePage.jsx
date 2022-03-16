import Container from '@material-ui/core/Container'
import CrumbleAppBar from 'Components/AppBar/CrumbleAppBar'
import { UserContext } from 'Context/UserContext'
import React, { useContext } from 'react'

import ProfileItemsList from './ProfileItemsList'

function ProfilePage() {
  const user = useContext(UserContext)

  return user ? (
    <div>
      <CrumbleAppBar />
      <Container maxWidth="md">
        <ProfileItemsList />
      </Container>
    </div>
  ) : null
}

export default ProfilePage
