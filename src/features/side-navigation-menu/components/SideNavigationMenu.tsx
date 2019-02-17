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
    const pathname = history.location.pathname;
    return (
      <div className={styles.wrapper}>
        <MenuItem
          pathname={pathname}
          themeName="home"
          text="Home"
          link={linkToHomePage()}
        />
        <MenuItem
          pathname={pathname}
          themeName="animation"
          text="Animation"
          link={linkToAnimation()}
        />
        <MenuItem
          pathname={pathname}
          themeName="becomingLost"
          text="Becoming lost"
          link={linkToBecomingLost()}
        />
      </div>
    );
  }
}

export default withRouter(SideNavigationMenu);
