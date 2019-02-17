//@flow
import * as React from "react";
import classnames from "classnames";
import { HashLink as Link } from "react-router-hash-link";
import styled, { css } from "styled-components";

import { PageName, getPageColor } from "src/utils/pages";
import styles from "./HomeSquare.module.scss";

export const ThemeBackground = styled.div<{ pageName: PageName }>`
  ${props => css`
    background: ${getPageColor(props.pageName)};
  `}
`;

export type Props = {
  pageName: PageName;
  className: string;
  link: string;
};

export default class HomeSquare extends React.PureComponent<Props> {
  render() {
    const { pageName, className, link } = this.props;
    return (
      <Link smooth className={styles.link} to={link}>
        <div className={classnames(styles.wrapper, className)}>
          <ThemeBackground className={styles.background} pageName={pageName}>
            {pageName}
          </ThemeBackground>
        </div>
      </Link>
    );
  }
}
