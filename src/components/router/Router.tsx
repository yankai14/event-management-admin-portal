import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from 'constants/routes';
import LoginPage from 'pages/authentication/LoginPage';
import HomePage from 'pages/home/HomePage';
import FacilitatorApplicationPage from 'pages/applications/FacilitatorApplicationPage';


interface Props {
  isUserAuthenticated: boolean
}

/**
 * Stateless component responsible for rendering public or private routes.
 * If user is authenticated, render private routes, otherwise render public routes.
 * Small note - there is a "/intro" route (not present in any navigation), which shows a simple textual and graphical overview
 * of what SSI is.
 * */
const Router = ({isUserAuthenticated}: Props) => {
  // render public routes
  if( !isUserAuthenticated ) {
    return (
      <Switch>
        <Route exact path={routes.LOGIN} component={LoginPage} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path={routes.HOME} component={FacilitatorApplicationPage} />
    </Switch>
  )
  
}

export default Router;