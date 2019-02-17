import React from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

export default class Page extends React.PureComponent<Props> {
  render() {
    const { id, children } = this.props;

    return (
      <div id={id} style={{ border: "1px solid black", height: "100vh" }}>
        {children}
      </div>
    );
  }
}
