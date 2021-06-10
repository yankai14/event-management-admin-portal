import React from 'react';
import Router from 'components/router/Router';
import ApiService from 'utils/ApiService';
import AuthContext, {AuthContextState, authContextDefaultValue} from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import routes from 'constants/routes';
import Navigation from 'components/navigation/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [authState, setAuthState] = React.useState<AuthContextState>({
    ...authContextDefaultValue.authState
  })
  const history = useHistory();

  React.useEffect(()=>{
    const { authToken, username} = ApiService.getAuthTokenAndUsernameFromLocalStorage()
    if (authToken) {
      setAuthState({
        authToken: authToken,
        isAuthenticated: true,
        username: username
      })

      if (history.location.pathname === routes.LOGIN) {
        history.push(routes.HOME)
      }

    } else {
      history.push(routes.LOGIN)
    }
  }, [history])

  return (
    <div>
      <CssBaseline />
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Navigation />
        <div className={classes.drawerHeader} />
        <Container maxWidth={false} >
            <Router isUserAuthenticated={authState.isAuthenticated}/>
        </Container>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
