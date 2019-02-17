//@flow
import * as React from "react";

import HomeSquare from "./HomeSquare";
import styles from "./HomePage.module.scss";

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <HomeSquare className={styles.box} themeName="home" />
        <HomeSquare className={styles.box} themeName="animation" />
      </div>
    );
  }
}
