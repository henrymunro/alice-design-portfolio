//@flow
import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
};

export default class MenuItem extends React.PureComponent<Props> {
  render() {
    const { text, link } = this.props;
    return (
      <Link className={styles.link} to={link}>
        {text}
      </Link>
    );
  }
}
