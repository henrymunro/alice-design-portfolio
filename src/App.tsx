import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./pages/home-page";
import AnimationPage from "./pages/animation";
import { linkToHomePage, linkToAnimation } from "./pages/links";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={linkToHomePage()}>Home</Link>
              <Link to={linkToAnimation()}>Animation</Link>
            </li>
          </ul>
          <Route exact path={linkToHomePage()} component={HomePage} />
          <Route exact path={linkToAnimation()} component={AnimationPage} />
        </div>
      </Router>
    );
  }
}

export default App;
