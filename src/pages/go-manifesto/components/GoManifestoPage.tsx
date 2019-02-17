import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `This first year brief enabled me to write
my own manfiesto (go) based on my
perspective of making the most of life by
doing an assortment of activties.
the final product is a constantina book
using a linear format to connect each
page in a forward motion that should
inspire others. the playful nature of
this project reflects the message of the
manifesto.`;

export default class GoManifestoPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1]}
          pageName="goManifesto"
        />
      </>
    );
  }
}
