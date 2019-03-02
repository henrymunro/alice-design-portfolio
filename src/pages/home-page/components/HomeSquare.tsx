//@flow
import * as React from 'react';
import classnames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import styled, { css } from 'styled-components';

import { PageName, getPageColor, getPageTitle } from 'src/utils/pages';
import styles from './HomeSquare.module.scss';

export const ThemeBackground =
	styled.div <
	{ pageName: PageName } >
	`
  ${(props) => css`background: ${getPageColor(props.pageName)};`}
`;

export type Props = {
	pageName: PageName;
	className: string;
	link: string;
	imgUrl?: string;
};

export default class HomeSquare extends React.PureComponent<Props> {
	render() {
		const { pageName, className, link, imgUrl } = this.props;
		return (
			<Link
				scroll={(el) => {
					if (el.id === 'home') {
						return window.scrollTo({ top: 0, behavior: 'smooth' });
					}
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}}
				className={classnames(styles.wrapper, className)}
				to={link}
			>
				{imgUrl && <img className={styles.image} src={imgUrl} alt={pageName} />}
				<ThemeBackground className={styles.background} pageName={pageName}>
					{getPageTitle(pageName)}
				</ThemeBackground>
			</Link>
		);
	}
}
