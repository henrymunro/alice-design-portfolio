//@flow
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import * as H from "history";
import styled, { css } from "styled-components";

import { PageName, getPageColor } from "src/utils/pages";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
  pageName: PageName;
  location: H.Location;
};

export const MenuItemText = styled.div<{
  pageName: PageName;
  active: boolean | null;
}>`
  ${({ active, pageName }) =>
    active &&
    css`
      color: ${getPageColor(pageName)};
    `}

  &:hover {
    ${props => css`
      color: ${getPageColor(props.pageName)};
    `}
  }
`;

export default class MenuItem extends React.PureComponent<Props> {
  isActive(): boolean {
    const { pathname, hash } = this.props.location;
    return `${pathname}${hash ? hash : ""}` === this.props.link;
  }

  render() {
    const { text, link, pageName } = this.props;
    return (
      <Link smooth className={styles.link} to={link}>
        <MenuItemText
          className={styles.text}
          pageName={pageName}
          active={this.isActive()}
        >
          {text}
        </MenuItemText>
      </Link>
    );
  }
}
