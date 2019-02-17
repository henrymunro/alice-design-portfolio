//@flow
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import * as H from "history";
import styled, { css } from "styled-components";

import { ThemeName, getThemeColor } from "src/utils/theme";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
  themeName: ThemeName;
  location: H.Location;
};

export const MenuItemText = styled.div<{
  themeName: ThemeName;
  active: boolean | null;
}>`
  ${({ active, themeName }) =>
    active &&
    css`
      color: ${getThemeColor(themeName)};
    `}

  &:hover {
    ${props => css`
      color: ${getThemeColor(props.themeName)};
    `}
  }
`;

export default class MenuItem extends React.PureComponent<Props> {
  isActive(): boolean {
    const { pathname, hash } = this.props.location;
    return `${pathname}${hash ? hash : ""}` === this.props.link;
  }

  render() {
    const { text, link, themeName } = this.props;
    return (
      <Link smooth className={styles.link} to={link}>
        <MenuItemText
          className={styles.text}
          themeName={themeName}
          active={this.isActive()}
        >
          {text}
        </MenuItemText>
      </Link>
    );
  }
}
