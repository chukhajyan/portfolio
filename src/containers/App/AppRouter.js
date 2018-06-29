import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <Switch>
              <Route
                  exact
                  path={'/'}
                  component={asyncComponent(() => import('./App'))}
              />
              <Route
                  exact
                  path={'/blog'}
                  component={asyncComponent(() => import('../Pages/Blog'))}
              />
          </Switch>
        <BrowserRouter>
      );
  }
}

export default AppRouter;
