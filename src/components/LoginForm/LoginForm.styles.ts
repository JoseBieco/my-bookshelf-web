import { makeStyles } from '@material-ui/core/styles';

export const loginFromStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    height: '90%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
