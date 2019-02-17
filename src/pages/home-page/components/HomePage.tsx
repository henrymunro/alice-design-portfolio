//@flow
import * as React from "react";

import {
  linkToHomePage,
  linkToAnimation,
  linkToBecomingLost
} from "src/pages/links";

import HomeSquare from "./HomeSquare";
import styles from "./HomePage.module.scss";

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <HomeSquare
          link={linkToHomePage()}
          className={styles.box}
          themeName="home"
        />
        <HomeSquare
          link={linkToAnimation()}
          className={styles.box}
          themeName="animation"
        />
        <HomeSquare
          link={linkToBecomingLost()}
          className={styles.box}
          themeName="becomingLost"
        />
      </div>
    );
  }
}
