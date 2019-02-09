//@flow
import * as React from "react";
import classnames from "classnames";

import { ThemeBackground, ThemeName } from "src/features/theme";
import styles from "./HomeSquare.module.scss";

export type Props = {
  themeName: ThemeName;
};

export default class HomeSquare extends React.PureComponent<Props> {
  render() {
    const { themeName } = this.props;
    return <ThemeBackground themeName={themeName}>{themeName}</ThemeBackground>;
  }
}
