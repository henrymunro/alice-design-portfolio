import React from 'react';
import classnames from 'classnames';

import styles from './MenuIcon.module.scss';

type Props = {
	open?: boolean;
	onClick?: (e: React.SyntheticEvent<HTMLDivElement>) => void;
	className?: string;
};
export default class MenuIcon extends React.PureComponent<Props> {
	render() {
		const { open, className, onClick } = this.props;

		return (
			<div className={classnames(styles.wrapper, className)} onClick={onClick}>
				<div
					className={classnames(styles.icon, {
						[styles.menu]: !open,
						[styles.close]: open
					})}
				/>
			</div>
		);
	}
}
