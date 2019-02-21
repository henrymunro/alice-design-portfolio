//@flow
import * as React from "react";

import { PageName, getPageLink } from "src/utils/pages";
import PageLayout from "src/pages/components/PageLayout";

import HomePageSquares from "./HomePageSquares";
import styles from "./HomePage.module.scss";

const aboutMe1 = `i am a graphic design student studying at
the university of greenwich, london.`;

const aboutMe2 = `i’m enthusiastic about working with both
analogue and digital mediums to convey a
message.`;

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <PageLayout
        renderImages={() => <HomePageSquares />}
        paragraphs={[aboutMe1, aboutMe2]}
        pageName="home"
      />
    );
  }
}
