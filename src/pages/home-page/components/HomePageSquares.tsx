//@flow
import * as React from "react";

import { PageName, getPageLink } from "src/utils/pages";

import HomeSquare from "./HomeSquare";
import styles from "./HomePageSquares.module.scss";

export default class HomePageSquares extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.renderSquare("becomingLost")}
        {this.renderSquare("boobies")}
        {this.renderSquare("nineLives")}
        {this.renderSquare("walkingGreenwich")}
        {this.renderSquare("southOfTheRiver")}
        {this.renderSquare("mwambao")}
        {this.renderSquare("goManifesto")}
        {this.renderSquare("jkrRecycling")}
      </div>
    );
  }

  renderSquare(pageName: PageName) {
    return (
      <HomeSquare
        link={getPageLink(pageName)}
        className={styles.box}
        pageName={pageName}
      />
    );
  }
}
