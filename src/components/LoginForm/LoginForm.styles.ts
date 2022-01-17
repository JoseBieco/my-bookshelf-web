import { makeStyles } from '@material-ui/core/styles';

export const loginFromStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    height: '90%',
    marginTop: theme.spacing(1),
    '& label.Mui-focused': {
      color: '#F23405'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#F23405'
      }
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F23405',
    '&:hover': {
      backgroundColor: '#F5481D'
    }
  }
}));
