//@flow
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled, { css } from "styled-components";

import { ThemeName, getThemeColor } from "src/utils/theme";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
  themeName: ThemeName;
  pathname: string;
};

export const MenuItemText = styled.div<{ themeName: ThemeName }>`
  &:hover {
    ${props => css`
      color: ${getThemeColor(props.themeName)};
    `}
  }
`;

export default class MenuItem extends React.PureComponent<Props> {
  render() {
    const { text, link, themeName } = this.props;
    return (
      <Link smooth className={styles.link} to={link}>
        <MenuItemText className={styles.text} themeName={themeName}>
          {text}
        </MenuItemText>
      </Link>
    );
  }
}
