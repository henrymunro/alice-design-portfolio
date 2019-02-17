import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `This data visualisation was a first year
university project set to collect and
graphically present our findings.`;

const paragraph2 = `the survey i created asked members of the
greenwich public to mark on a map the
most beautiful place in greenwich and
to describe how they felt in one word.
plotting the locations meant i could get x
and y coordiantes that i translated into
cmyk vales. using this i created a walking
route of the most beautiful places in
greenwich as suggested by the public that
could be followed in part or as a circular
route by typing into a gps device the
coordinates.`;

export default class WalkingGreenwichPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1, paragraph2]}
          pageName="walkingGreenwich"
        />
      </>
    );
  }
}
