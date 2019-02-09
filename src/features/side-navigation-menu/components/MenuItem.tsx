//@flow
import * as React from "react";
import { NavLink } from "react-router-dom";

import { ThemeText, ThemeName } from "src/features/theme";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
  themeName: ThemeName;
  pathname: string;
};

export default class MenuItem extends React.PureComponent<Props> {
  render() {
    const { text, link, themeName } = this.props;
    return (
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles["link-active"]}
        to={link}
      >
        <ThemeText themeName={themeName}>{text}</ThemeText>
      </NavLink>
    );
  }
}
