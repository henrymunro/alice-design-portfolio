import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withScrollOnRouteChange from "./pages/components/withScrollOnRouteChange";
import AppRouter from "./pages/components/AppRouter";

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route component={withScrollOnRouteChange(AppRouter)} />
      </Router>
    );
  }
}
