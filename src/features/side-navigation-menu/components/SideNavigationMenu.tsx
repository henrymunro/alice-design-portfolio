//@flow
import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import {
  linkToHomePage,
  linkToAnimation,
  linkToBecomingLost
} from "src/pages/links";

import MenuItem from "./MenuItem";
import styles from "./SideNavigationMenu.module.scss";

class SideNavigationMenu extends React.PureComponent<RouteComponentProps> {
  render() {
    const { history } = this.props;
    const location = history.location;
    return (
      <div className={styles.wrapper}>
        <MenuItem
          location={location}
          themeName="home"
          text="Home"
          link={linkToHomePage()}
        />
        <MenuItem
          location={location}
          themeName="animation"
          text="Animation"
          link={linkToAnimation()}
        />
        <MenuItem
          location={location}
          themeName="becomingLost"
          text="Becoming lost"
          link={linkToBecomingLost()}
        />
      </div>
    );
  }
}

export default withRouter(SideNavigationMenu);
