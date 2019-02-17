import React from "react";
import throttle from "lodash.throttle";
import * as H from "history";

import styles from "./PageWrapper.module.scss";

type Props = {
  id: string;
  history: H.History;
  link: string;
  children: React.ReactNode;
};

const THROTTLE_TIMEOUT = 100;
const SCROLL_TOLERANCE_PERCENTAGE = 30;

export default class PageWrapper extends React.PureComponent<Props> {
  ref: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.navigateOnScrollIntoView);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navigateOnScrollIntoView);
  }

  navigateOnScrollIntoView = throttle(() => {
    const element = this.ref.current;
    if (!element) return;

    const winY = window.innerHeight || document.documentElement.clientHeight;
    const distTop = element.getBoundingClientRect().top;
    const distPercent = Math.round((distTop / winY) * 100);

    if (
      distPercent <= SCROLL_TOLERANCE_PERCENTAGE &&
      distPercent >= -1 * SCROLL_TOLERANCE_PERCENTAGE
    ) {
      this.props.history.push(this.props.link);
    }
  }, THROTTLE_TIMEOUT);

  render() {
    const { id, children } = this.props;

    return (
      <div ref={this.ref} id={id} className={styles.wrapper}>
        {children}
      </div>
    );
  }
}
