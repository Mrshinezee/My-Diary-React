// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from './LandingPage/LandingPage';
import Login from '../containers/login/Login';
import SignUp from '../containers/signup/SignUp';
import AllEntry from '../containers/allEntry/AllEntry';
import Logout from './logout/Logout';
import Entry from '../containers/entry/Entry';
// import AuthenticatedRoute from './AuthenticatedRoute';

const history = createBrowserHistory();

/**
 *@desc handles routing
 @returns {object} routes
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={SignUp} />
      <Route exact path='/allEntry' component={AllEntry} />
      <Route exact path='/Logout' component={Logout} />
      <Route exact path='/entry' component={Entry} />
    </Switch>
  </Router>
);

export default AppRouter;
