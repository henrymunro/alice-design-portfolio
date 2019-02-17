import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SideNavigationMenu from "src/features/side-navigation-menu";
import HomePage from "../home-page";
import AnimationPage from "../animation";

import AppLayout from "./AppLayout";
import Page from "./Page";

export default class AppRouter extends React.PureComponent {
  render() {
    return (
      <AppLayout
        renderSidebar={() => <SideNavigationMenu />}
        renderPageBody={() => (
          <>
            <Page id="home">
              <HomePage />
            </Page>
            <Page id="animation">
              <AnimationPage />
            </Page>
            <Page id="becoming-lost">
              <AnimationPage />
            </Page>
          </>
        )}
      />
    );
  }
}
