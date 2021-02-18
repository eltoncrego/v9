import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const RoutePaths = {
  home: '/',
};

const Routes = ({ children }) => (
  <Router>
    {children}
    <Switch>
      <Route path={RoutePaths.home}>
        <h1>Route content.</h1>
      </Route>
    </Switch>
  </Router>
)

export default Routes;