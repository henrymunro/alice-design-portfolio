import React from "react";

import PageLayout from "src/pages/components/PageLayout";
import Image from "src/pages/components/Image";

import greenwichLarge from "src/assets/walking-greenwich/greenwich-large.jpg";
import greenwichSmall from "src/assets/walking-greenwich/greenwich-small.jpg";

import styles from "./WalkingGreenwich.module.scss";

const images = [greenwichLarge, greenwichSmall];

const paragraph1 = `This data visualisation was a first year
university project set to collect and
graphically present our findings.`;

const paragraph2 = `the survey i created asked members of the
greenwich public to mark on a map the
most beautiful place in greenwich and
to describe how they felt in one word.
I plotted the locations to get x
and y coordinates that i translated into
cmyk values, so each word was assigned a colour.`;

const paragraph3 = `I created a circular walking
route of the public's most beautiful places in
greenwich that could be followed by typing the coordinates into a gps device.;`;

export default class WalkingGreenwichPage extends React.PureComponent {
  render() {
    return (
      <PageLayout
        renderImages={this.renderImages}
        paragraphs={[paragraph1, paragraph2, paragraph3]}
        pageName="walkingGreenwich"
      />
    );
  }

  renderImages() {
    return (
      <div>
        <Image
          src={greenwichLarge}
          alt="Greenwich project"
          className={styles.topImage}
          images={images}
        />
        <Image
          src={greenwichSmall}
          alt="Greenwich project"
          className={styles.topImage}
          images={images}
        />
      </div>
    );
  }
}
