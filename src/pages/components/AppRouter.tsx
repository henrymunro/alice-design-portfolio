import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import SideNavigationMenu from "src/features/side-navigation-menu";
import { getPageLink, PageName, getPageId } from "src/utils/pages";

import HomePage from "../home-page";
import BecomingLost from "../becoming-lost";
import Boobies from "../boobies";
import NineLives from "../nine-lives";

import AppLayout from "./AppLayout";
import PageWrapper from "./PageWrapper";

type Props = RouteComponentProps<any>;

class AppRouter extends React.PureComponent<Props> {
  render() {
    return (
      <AppLayout
        renderSidebar={() => <SideNavigationMenu />}
        renderPageBody={() => (
          <>
            {this.renderPage("home", HomePage)}
            {this.renderPage("becomingLost", BecomingLost)}
            {this.renderPage("boobies", Boobies)}
            {this.renderPage("nineLives", NineLives)}
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
