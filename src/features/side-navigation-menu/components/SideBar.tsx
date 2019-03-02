import React from 'react';
import * as H from 'history';
import classnames from 'classnames';

import MenuIcon from './MenuIcon';

import SideBarContents from './SideBarContents';
import styles from './SideBar.module.scss';

type Props = {
	location: H.Location;
};

type State = {
	open: boolean;
};

export default class SideBar extends React.PureComponent<Props, State> {
	state = {
		open: false
	};

	toggleOpen = (e: React.SyntheticEvent<HTMLDivElement>) => {
		e.preventDefault();
		this.setState(({ open }) => ({ open: !open }));
	};

	setClosed = () => this.state.open && this.setState({ open: false });

	render() {
		return (
			<div className={classnames({ [styles.open]: this.state.open })}>
				<div className={styles.sideBar}>
					<MenuIcon className={styles.mobileIcon} onClick={this.toggleOpen} open={this.state.open} />
					<div onClick={this.setClosed}>
						<SideBarContents />
					</div>
				</div>
				<div className={styles.overlay} onClick={this.setClosed} />
			</div>
		);
	}
}
