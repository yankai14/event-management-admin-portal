import React from 'react';
import Router from 'components/router/Router';
import ApiService from 'utils/ApiService';
import AuthContext, {AuthContextState, authContextDefaultValue} from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import routes from 'constants/routes';

const App = () => {
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
    <Container maxWidth={false} >
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Router isUserAuthenticated={authState.isAuthenticated}/>
      </AuthContext.Provider>
    </Container>
  )
}

export default App;
