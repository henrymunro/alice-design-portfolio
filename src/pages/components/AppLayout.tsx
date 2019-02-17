//@flow
import * as React from "react";
import styles from "./AppLayout.module.scss";

type Props = {
  renderSidebar: () => React.ReactNode;
  renderPageBody: () => React.ReactNode;
};

// Has to be Component rather than PureComponent to make pageBody re-render on route change
export default class AppLayout extends React.Component<Props> {
  render() {
    const { renderSidebar, renderPageBody } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.sideBarGrid}>{renderSidebar()}</div>
        <div className={styles.pageBody}>{renderPageBody()}</div>
      </div>
    );
  }
}
