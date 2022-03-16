import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import * as React from 'react'

export default function ProfileImage() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="./Assets/img/faces/garrettprofile.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  )
}
