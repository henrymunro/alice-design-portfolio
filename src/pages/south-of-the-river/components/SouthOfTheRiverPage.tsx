import React from "react";

import PageLayout from "src/pages/components/PageLayout";
import Video from "src/pages/components/Video";
import vid from "src/assets/south-of-the-river/south-of.mp4";

import styles from "./SouthOfTheRiver.module.scss";

const paragraph1 = `this animation was produced in response
to a university music branding brief. taking
tom misch’s song south of the river as a
basis the concept developed into a feeling
and experience rather than traditional
music branding.`;

type Props = {
  inViewport: boolean;
};

export default class SouthOfTheRiverPage extends React.PureComponent<Props> {
  render() {
    return (
      <PageLayout
        renderImages={() => (
          <Video
            src={vid}
            play={this.props.inViewport}
            loop
            className={styles.video}
          />
        )}
        paragraphs={[paragraph1]}
        pageName="southOfTheRiver"
      />
    );
  }
}
