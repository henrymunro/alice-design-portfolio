import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import SideNavigationMenu from "src/features/side-navigation-menu";
import { getPageLink, PageName, getPageId } from "src/utils/pages";

import HomePage from "../home-page";
import BecomingLost from "../becoming-lost";
import Boobies from "../boobies";
import NineLives from "../nine-lives";
import WalkingGrenwich from "../walking-greenwich";
import SouthOfTheRiver from "../south-of-the-river";
import Mwambao from "../mwambao";
import GoManifesto from "../go-manifesto";
import JkrRecycling from "../jkr-recycling";

import AppLayout from "./AppLayout";
import PageWrapper from "./PageWrapper";

type Props = RouteComponentProps<any>;

class AppRouter extends React.PureComponent<Props> {
  render() {
    return (
      <AppLayout
        renderSidebar={() => (
          <SideNavigationMenu location={this.props.location} />
        )}
        renderPageBody={() => (
          <>
            {this.renderPage("home", HomePage)}
            {this.renderPage("becomingLost", BecomingLost)}
            {this.renderPage("boobies", Boobies)}
            {this.renderPage("nineLives", NineLives)}
            {this.renderPage("walkingGreenwich", WalkingGrenwich)}
            {this.renderPage("southOfTheRiver", SouthOfTheRiver)}
            {this.renderPage("mwambao", Mwambao)}
            {this.renderPage("goManifesto", GoManifesto)}
            {this.renderPage("jkrRecycling", JkrRecycling)}
          </>
        )}
      />
    );
  }

  renderPage(pageName: PageName, Component: React.ComponentType<{}>) {
    return (
      <PageWrapper
        id={getPageId(pageName)}
        history={this.props.history}
        link={getPageLink(pageName)}
      >
        <Component />
      </PageWrapper>
    );
  }
}

export default withRouter(AppRouter);
