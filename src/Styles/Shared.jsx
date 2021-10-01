import { makeStyles } from '@material-ui/core/styles'

export const useSharedStyles = makeStyles((theme) => ({
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerIcon: {
    maxWidth: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: 0,
  },
  formlabel: { textAlign: 'center', padding: '10px' },
}))
