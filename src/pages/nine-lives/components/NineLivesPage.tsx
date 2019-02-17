import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `The brief was to animate a poem without
using a voice over. i wrote this poem about
my dad and decided to use photoshop
frame by frame animation to visualise the
narrative that adds a naive tone to this
quite dark poem.`;

export default class NineLivesPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1]}
          pageName="nineLives"
        />
      </>
    );
  }
}
