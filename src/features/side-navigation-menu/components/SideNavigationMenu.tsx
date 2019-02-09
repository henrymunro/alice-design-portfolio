//@flow
import * as React from "react";

import { linkToHomePage, linkToAnimation } from "src/pages/links";

import MenuItem from "./MenuItem";
import styles from "./SideNavigationMenu.module.scss";

export default class SideNavigationMenu extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <MenuItem text="Home" link={linkToHomePage()} />
        <MenuItem text="Animation" link={linkToAnimation()} />
      </div>
    );
  }
}
