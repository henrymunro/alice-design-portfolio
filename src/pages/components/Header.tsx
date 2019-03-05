import React from 'react';
import classnames from 'classnames';
import throttle from 'lodash.throttle';

import spaceA from 'src/assets/space-A.jpg';

import styles from './Header.module.scss';

type State = {
	fixed: boolean;
};

const logoHeight = Number(styles.logoheight.substring(0, styles.logoheight.length - 2));

const THROTTLE_TIMEOUT = 50;

export default class Header extends React.PureComponent<{}, State> {
	state = {
		fixed: false
	};

	ref: React.RefObject<HTMLHRElement> = React.createRef();

	componentDidMount() {
		window.addEventListener('scroll', this.setHeaderFixedState);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.setHeaderFixedState);
	}

	setHeaderFixedState = throttle(() => {
		if (window.scrollY > logoHeight) {
			!this.state.fixed && this.setState({ fixed: true });
			return;
		}
		this.state.fixed && this.setState({ fixed: false });
	}, THROTTLE_TIMEOUT);

	render() {
		return (
			<div className={styles.wrapper}>
				<img className={styles.logo} src={spaceA} alt="Alice Tweddell Space A Logo" />
				<h1
					className={classnames(styles.title, {
						[styles.fixed]: this.state.fixed
					})}
				>
					alice tweddell
				</h1>
				{this.state.fixed && <div className={styles.titleSpacer} />}
			</div>
		);
	}
}
