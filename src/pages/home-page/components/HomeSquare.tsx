//@flow
import * as React from "react";
import classnames from "classnames";

import { ThemeName, ThemeBackground } from "src/features/theme";
import styles from "./HomeSquare.module.scss";

export type Props = {
  themeName: ThemeName;
  className: string;
};

export default class HomeSquare extends React.PureComponent<Props> {
  render() {
    const { themeName, className } = this.props;
    return (
      <div className={classnames(styles.wrapper, className)}>
        <ThemeBackground className={styles.background} themeName={themeName}>
          {themeName}
        </ThemeBackground>
      </div>
    );
  }
}
