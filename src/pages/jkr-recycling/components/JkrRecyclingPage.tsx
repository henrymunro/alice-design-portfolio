import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `When on work experience with jones
knowles ritchie i was tasked with creating
bold recycling posters that would be
informative and visually engaging to staff
in the studio. `;

export default class JkrRecyclingPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1]}
          pageName="jkrRecycling"
        />
      </>
    );
  }
}
