import React from "react";
import debounce from "lodash.debounce";
import * as H from "history";

type Props = {
  id: string;
  history: H.History;
  link: string;
  children: React.ReactNode;
};

const DEBOUNCE_TIMEOUT = 200;
const SCROLL_TOLERANCE_PERCENTAGE = 10;

export default class Page extends React.PureComponent<Props> {
  ref: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.navigateOnScrollIntoView);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navigateOnScrollIntoView);
  }

  navigateOnScrollIntoView = debounce(() => {
    const element = this.ref.current;
    if (!element) return;

    const winY = window.innerHeight || document.documentElement.clientHeight;
    const distTop = element.getBoundingClientRect().top;
    const distPercent = Math.round((distTop / winY) * 100);

    if (
      distPercent <= SCROLL_TOLERANCE_PERCENTAGE &&
      distPercent >= -1 * SCROLL_TOLERANCE_PERCENTAGE
    ) {
      console.log(this.props.id);
      this.props.history.push(this.props.link);
    }
  }, DEBOUNCE_TIMEOUT);

  render() {
    const { id, children } = this.props;

    return (
      <div
        ref={this.ref}
        id={id}
        style={{ border: "1px solid black", height: "100vh" }}
      >
        {children}
      </div>
    );
  }
}
