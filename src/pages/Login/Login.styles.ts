import { makeStyles } from '@material-ui/core/styles';

import Image from '../../assets/images/full_bookshelf.jpg';

export const loginStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  paper: {
    margin: theme.spacing('30%', 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginContainer: {
    maxWidth: '20rem'
  }
}));
