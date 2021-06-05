import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ApiService from 'utils/ApiService'
import routes from 'constants/routes'
import AuthContext from 'contexts/AuthContext'


const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const LoginForm = ()=>{
  
  const classes = useStyles();
  const history = useHistory();

  const { setAuthState } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  /**
   * Function that executes on valid form submit.
   */
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { token } = await ApiService.login(username, password);
      ApiService.saveAuthTokenAndUsernameToLocalStorage(token, username);

      setAuthState((prevState)=>({
        ...prevState,
        authToken: token,
        isAuthenticated: true,
        username: username
      }))
      history.push(routes.HOME);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        onChange={ event => setUsername(event.target.value) }
        inputProps={{"data-testid": "username"}}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"

        onChange={event => setPassword(event.target.value)}
        inputProps={{"data-testid": "password"}}
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm;