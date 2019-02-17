import React from "react";
import styled, { css } from "styled-components";

import { PageName, getPageColor } from "src/utils/pages";

import styles from "./PageText.module.scss";

export const ThemeColor = styled.div<{
  pageName: PageName;
}>`
  ${({ pageName }) =>
    css`
      color: ${getPageColor(pageName)};
    `}
`;

export type Props = {
  pageName: PageName;
  title: string;
  className?: string;
  paragraphs: string[];
};

export default class PageText extends React.PureComponent<Props> {
  render() {
    const { pageName, className, title, paragraphs } = this.props;
    return (
      <ThemeColor className={className} pageName={pageName}>
        <h3 className={styles.title}>{title}</h3>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </ThemeColor>
    );
  }
}
