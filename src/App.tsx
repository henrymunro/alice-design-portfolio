import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import HomePage from "./pages/home-page";
import AnimationPage from "./pages/animation";
import SideNavigationMenu from "./features/side-navigation-menu";
import { linkToHomePage, linkToAnimation } from "./pages/links";

import AppLayout from "./pages/components/AppLayout";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <AppLayout
          renderSidebar={() => <SideNavigationMenu />}
          renderPageBody={() => (
            <>
              <div>{(window as any).env.VERSION}</div>
              <Route exact path={linkToHomePage()} component={HomePage} />
              <Route exact path={linkToAnimation()} component={AnimationPage} />
            </>
          )}
        />
      </Router>
    );
  }
}

export default App;
