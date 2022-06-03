import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
import { UserContext } from 'Context/UserContext'
import React, { useContext } from 'react'

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
})

function createData(name, calories) {
  return { name, calories }
}

export default function ProfileInfo() {
  const classes = useStyles()
  const user = useContext(UserContext)

  const rows = [
    createData('Name', `${user.data.firstName} ${user.data.lastName}`),
    createData('E-mail', `${user.data.email} `),
    createData('Location', 'Seattle'),
  ]
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Info</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
