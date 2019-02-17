import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRouter from "./pages/components/AppRouter";

// Sets global styles (fonts etc)
import "./App.scss";

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route component={AppRouter} />
      </Router>
    );
  }
}
