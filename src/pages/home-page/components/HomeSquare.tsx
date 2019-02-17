//@flow
import * as React from "react";
import classnames from "classnames";
import { HashLink as Link } from "react-router-hash-link";

import { ThemeName, ThemeBackground } from "src/features/theme";
import styles from "./HomeSquare.module.scss";

export type Props = {
  themeName: ThemeName;
  className: string;
  link: string;
};

export default class HomeSquare extends React.PureComponent<Props> {
  render() {
    const { themeName, className, link } = this.props;
    return (
      <Link smooth className={styles.link} to={link}>
        <div className={classnames(styles.wrapper, className)}>
          <ThemeBackground className={styles.background} themeName={themeName}>
            {themeName}
          </ThemeBackground>
        </div>
      </Link>
    );
  }
}
