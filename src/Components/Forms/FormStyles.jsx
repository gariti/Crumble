import { makeStyles } from '@material-ui/core/styles'

export const FormStyles = makeStyles((theme) => ({
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
  container: { padding: '24px' },
  formlabel: { textAlign: 'center', padding: '10px' },
}))
