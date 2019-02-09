//@flow
import * as React from "react";

import { ThemeBackgroundFilterOnHover, ThemeName } from "src/features/theme";
import styles from "./HomeSquare.module.scss";

export type Props = {
  themeName: ThemeName;
};

export default class HomeSquare extends React.PureComponent<Props> {
  render() {
    const { themeName } = this.props;
    return (
      <ThemeBackgroundFilterOnHover
        className={styles.wrapper}
        themeName={themeName}
      >
        {themeName}
      </ThemeBackgroundFilterOnHover>
    );
  }
}
