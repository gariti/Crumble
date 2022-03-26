import CrumbleAppBar from 'Components/AppBar/CrumbleAppBar'
import { UserContext } from 'Context/UserContext'
import React, { useContext } from 'react'

import ProfileGrid from './ProfileGrid'

function ProfilePage() {
  const user = useContext(UserContext)

  return user ? (
    <div>
      <CrumbleAppBar />
      <ProfileGrid />
    </div>
  ) : null
}

export default ProfilePage
