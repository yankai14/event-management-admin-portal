import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from 'constants/routes';
import LoginPage from 'pages/authentication/LoginPage';
import HomePage from 'pages/home/HomePage';
import FacilitatorApplicationPage from 'pages/applications/FacilitatorApplicationPage';
import EventPage from 'pages/events/EventPage';
import CreateEventPage from 'pages/events/CreateEventPage';


interface Props {
  isUserAuthenticated: boolean
}

/**
 * Stateless component responsible for rendering public or private routes.
 * If user is authenticated, render private routes, otherwise render public routes.
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
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.FACILITATOR_APPLICATION} component={FacilitatorApplicationPage} />
      <Route exact path={routes.EVENT} component={EventPage} />
      <Route exact path={routes.CREATE_EVENT} component={CreateEventPage} />
      <Route path={`${routes.EVENT_INSTANCE}/:eventCode`} />
    </Switch>
  )
}

export default Router;