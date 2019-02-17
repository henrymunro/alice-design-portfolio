//@flow
import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { PageName, getPageTitle, getPageLink } from "src/utils/pages";

import MenuItem from "./MenuItem";
import styles from "./SideNavigationMenu.module.scss";

class SideNavigationMenu extends React.PureComponent<RouteComponentProps> {
  render() {
    const { history } = this.props;
    const location = history.location;
    return (
      <div className={styles.wrapper}>
        {this.renderMenuItem("home")}
        {this.renderMenuItem("becomingLost")}
        {this.renderMenuItem("boobies")}
        {this.renderMenuItem("nineLives")}
        {this.renderMenuItem("walkingGreenwich")}
        {this.renderMenuItem("southOfTheRiver")}
        {this.renderMenuItem("mwambao")}
        {this.renderMenuItem("goManifesto")}
        {this.renderMenuItem("jkrRecycling")}
        {this.renderMenuItem("contact")}
      </div>
    );
  }

  renderMenuItem(pageName: PageName) {
    return (
      <MenuItem
        location={this.props.location}
        pageName={pageName}
        text={getPageTitle(pageName)}
        link={getPageLink(pageName)}
      />
    );
  }
}

export default withRouter(SideNavigationMenu);
