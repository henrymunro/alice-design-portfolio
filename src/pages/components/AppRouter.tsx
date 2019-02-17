import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import SideNavigationMenu from "src/features/side-navigation-menu";
import {
  linkToHomePage,
  linkToAnimation,
  linkToBecomingLost
} from "src/pages/links";
import HomePage from "../home-page";
import AnimationPage from "../animation";
import BecomingLost from "../becoming-lost";

import AppLayout from "./AppLayout";
import Page from "./Page";

type Props = RouteComponentProps<any>;

class AppRouter extends React.PureComponent<Props> {
  render() {
    const { history } = this.props;
    return (
      <AppLayout
        renderSidebar={() => <SideNavigationMenu />}
        renderPageBody={() => (
          <>
            <Page id="home" history={history} link={linkToHomePage()}>
              <HomePage />
            </Page>
            <Page id="animation" history={history} link={linkToAnimation()}>
              <AnimationPage />
            </Page>
            <Page
              id="becoming-lost"
              history={history}
              link={linkToBecomingLost()}
            >
              <BecomingLost />
            </Page>
          </>
        )}
      />
    );
  }
}

export default withRouter(AppRouter);
