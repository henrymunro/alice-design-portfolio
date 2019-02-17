import React from "react";

import PageLayout from "src/pages/components/PageLayout";

const paragraph1 = `The theme of this istd project was
‘lost’. the concept behind this japanese
stab bound book is the love story of
my grandparents who both experience
memory loss.`;

const paragraph2 = `Upon a visit to my grandparents i recorded
and transcribed our conversations across
a day to document a brief history of their
relationship but also to give an insight
into their marriage in their 80’s. soft
typography has been used in this duotone
book uses the serif font mrs eaves and
sans-serif mr eaves to differentiate male
and female speakers.`;

export default class BecomingLostPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={() => <div />}
          paragraphs={[paragraph1, paragraph2]}
          pageName="becomingLost"
        />
      </>
    );
  }
}
