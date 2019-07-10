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
import Pengiun from "../pengiun-book-cover";
import GoManifesto from "../go-manifesto";
import JkrRecycling from "../jkr-recycling";
import Contact from "../contact";
import Airbnbark from "../airbnbark";

import AppLayout from "./AppLayout";
import withPageWrapper from "./PageWrapper";

const WrappedHomePage = withPageWrapper(HomePage);
const WrappedBecomingLost = withPageWrapper(BecomingLost);
const WrappedBoobies = withPageWrapper(Boobies);
const WrappedNineLives = withPageWrapper(NineLives);
const WrappedWalkingGrenwich = withPageWrapper(WalkingGrenwich);
const WrappedSouthOfTheRiver = withPageWrapper(SouthOfTheRiver);
const WrappedPengiun = withPageWrapper(Pengiun);
const WrappedGoManifesto = withPageWrapper(GoManifesto);
const WrappedJkrRecycling = withPageWrapper(JkrRecycling);
const WrappedContact = withPageWrapper(Contact);
const WrappedAirbnbark = withPageWrapper(Airbnbark);

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
            {this.renderPage("home", WrappedHomePage)}
            {this.renderPage("airbnbark", WrappedAirbnbark)}
            {this.renderPage("becomingLost", WrappedBecomingLost)}
            {this.renderPage("boobies", WrappedBoobies)}
            {this.renderPage("nineLives", WrappedNineLives)}
            {this.renderPage("walkingGreenwich", WrappedWalkingGrenwich)}
            {this.renderPage("southOfTheRiver", WrappedSouthOfTheRiver)}
            {this.renderPage("pengiunBookCover", WrappedPengiun)}
            {this.renderPage("goManifesto", WrappedGoManifesto)}
            {this.renderPage("contact", WrappedContact)}
          </>
        )}
      />
    );
  }

  renderPage(pageName: PageName, Component: React.ComponentType<any>) {
    return (
      <Component
        id={getPageId(pageName)}
        history={this.props.history}
        link={getPageLink(pageName)}
      />
    );
  }
}

export default withRouter(AppRouter);
