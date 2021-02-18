import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../../pages/home/home";

export const RoutePaths = {
  home: '/',
};

const Routes = ({ children }) => (
  <Router>
    {children}
    <Switch>
      <Route path={RoutePaths.home}>
        <Home/>
      </Route>
    </Switch>
  </Router>
)

export default Routes;