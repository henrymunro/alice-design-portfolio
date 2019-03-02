//@flow
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import * as H from "history";
import styled, { css } from "styled-components";
import classnames from "classnames";

import { PageName, getPageColor } from "src/utils/pages";

import styles from "./MenuItem.module.scss";

type Props = {
  text: string;
  link: string;
  pageName: PageName;
  location: H.Location;
  className?: string;
};

export const MenuItemText = styled.div<{
  pageName: PageName;
  active: boolean | null;
}>`
  ${({ active, pageName }) =>
    active &&
    css`
      color: ${getPageColor(pageName)};
    `}

  &:hover {
    ${props => css`
      color: ${getPageColor(props.pageName)};
    `}
  }
`;

export default class MenuItem extends React.PureComponent<Props> {
  isActive(): boolean {
    const { pathname, hash } = this.props.location;
    return `${pathname}${hash ? hash : ""}` === this.props.link;
  }

  render() {
    const { text, link, pageName, className } = this.props;
    return (
      <Link 	scroll={(el) => {
        if (el.id === 'home') {
          return window.scrollTo({ top: 0 , behavior: 'smooth'});
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} className={classnames(styles.link, className)} to={link} >
        <MenuItemText
          className={styles.text}
          pageName={pageName}
          active={this.isActive()}
        >
          {text}
        </MenuItemText>
      </Link>
    );
  }
}
