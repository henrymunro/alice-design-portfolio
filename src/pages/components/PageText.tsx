import React from "react";
import styled, { css } from "styled-components";

import { ThemeName, getThemeColor } from "src/utils/theme";

import styles from "./PageText.module.scss";

export const ThemeColor = styled.div<{
  themeName: ThemeName;
}>`
  ${({ themeName }) =>
    css`
      color: ${getThemeColor(themeName)};
    `}
`;

type Props = {
  themeName: ThemeName;
  title: string;
  paragraphs: string[];
};

export default class PageText extends React.PureComponent<Props> {
  render() {
    const { themeName, title, paragraphs } = this.props;
    return (
      <ThemeColor themeName={themeName}>
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
