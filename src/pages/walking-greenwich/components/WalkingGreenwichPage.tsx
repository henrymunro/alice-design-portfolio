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
plotting the locations meant i could get x
and y coordinates that i translated into
cmyk values. using this i created a walking
route of the most beautiful places in
greenwich as suggested by the public that
could be followed in part or as a circular
route by typing into a gps device the
coordinates.`;

export default class WalkingGreenwichPage extends React.PureComponent {
  render() {
    return (
      <PageLayout
        renderImages={this.renderImages}
        paragraphs={[paragraph1, paragraph2]}
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
