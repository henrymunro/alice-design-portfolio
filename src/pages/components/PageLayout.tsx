import React from "react";

import { PageName, getPageTitle } from "src/utils/pages";

import PageText from "./PageText";

import styles from "./PageLayout.module.scss";

type Props = {
  renderImages: () => React.ReactNode;
  paragraphs: string[];
  pageName: PageName;
};

export default class PageLayout extends React.PureComponent<Props> {
  render() {
    const { renderImages, pageName, paragraphs } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.images}>{renderImages && renderImages()}</div>
        <PageText
          className={styles.text}
          pageName={pageName}
          title={getPageTitle(pageName)}
          paragraphs={paragraphs}
        />
      </div>
    );
  }
}
