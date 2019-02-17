import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `A coastal resource conservation social
enterprise for tanzanian coastal
communities. i was tasked with creating
some assets for a poster, creating these
illustrations from some of their images.`;

export default class MwambaoPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1]}
          pageName="mwambao"
        />
      </>
    );
  }
}
