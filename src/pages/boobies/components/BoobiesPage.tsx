import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `When doing work experience at jelly,
london i created a short gif to celebrate
international women’s day using
photoshop frame by frame animation.`;

export default class BoobiesPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1]}
          pageName="boobies"
        />
      </>
    );
  }
}
