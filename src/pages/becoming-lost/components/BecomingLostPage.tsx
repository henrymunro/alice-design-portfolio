import React from "react";

import PageText from "src/pages/components/PageText";

export default class BecomingLostPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageText
          title="Becoming lost"
          paragraphs={[
            "The theme of this project was 'Lost'. The concept behingd this was stab bound book the love story of my granpdaheds who both experiecne memory loss.",
            "Upon a vist it my grandparents I recored and transcribes The theme of this project was 'Lost'. The concept behingd this was stab bound book the love story of my granpdaheds who both experiecne memory loss."
          ]}
          themeName="becomingLost"
        />
      </>
    );
  }
}
