import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from 'constants/routes';
import LoginPage from 'pages/authentication/LoginPage';
import HomePage from 'pages/home/HomePage';
import ApplicationPage from 'pages/applications/ApplicationPage';
import EventPage from 'pages/events/EventPage';
import CreateEventPage from 'pages/events/CreateEventPage';
import EventInstancePage from 'pages/event-instance/EventInstancePage';
import CreateEventInstancePage from 'pages/event-instance/CreateEventInstancePage';


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
      <Route exact path={routes.APPLICATION} component={ApplicationPage} />
      <Route exact path={routes.EVENT} component={EventPage} />
      <Route exact path={routes.CREATE_EVENT} component={CreateEventPage} />
      <Route path={`${routes.EVENT_INSTANCE}/:eventCode`} component={EventInstancePage} />
      <Route path={`${routes.CREATE_EVENT_INSTANCE}/:eventCode`} component={CreateEventInstancePage} />
    </Switch>
  )
}

export default Router;