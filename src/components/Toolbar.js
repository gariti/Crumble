import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
})

export default withStyles(styles)(Toolbar)
