import React from 'react';
import throttle from 'lodash.throttle';
import * as H from 'history';

import styles from './PageWrapper.module.scss';

type Props = {
	id: string;
	history: H.History;
	link: string;
};

type State = {
	inViewport: boolean;
};

const THROTTLE_TIMEOUT = 100;
const NAVIGATE_SCROLL_TOLERANCE_PERCENTAGE = 30;

export default function withPageWrapper(Component: React.ComponentType<any>) {
	return class PageWrapper extends React.PureComponent<Props & any, State> {
		ref: React.RefObject<HTMLDivElement> = React.createRef();

		state = {
			inViewport: false
		};

		componentDidMount() {
			window.addEventListener('scroll', this.navigateOnScrollIntoView);
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.navigateOnScrollIntoView);
		}

		navigateOnScrollIntoView = throttle(() => {
			const element = this.ref.current;
			if (!element) return;

			const winY = window.innerHeight || document.documentElement.clientHeight;
			const { top: distTop, bottom: distBottom } = element.getBoundingClientRect();
			const distPercent = Math.round(distTop / winY * 100);

			if (distTop < winY && distBottom > 0) {
				!this.state.inViewport && this.setState({ inViewport: true });
			} else if (this.state.inViewport) {
				this.setState({ inViewport: false });
			}

			if (
				distPercent <= NAVIGATE_SCROLL_TOLERANCE_PERCENTAGE &&
				distPercent >= -1 * NAVIGATE_SCROLL_TOLERANCE_PERCENTAGE
			) {
				this.props.history.push(this.props.link);
			}
		}, THROTTLE_TIMEOUT);

		render() {
			const { id, link, ...otherProps } = this.props;

			return (
				<div ref={this.ref} id={id} className={styles.wrapper}>
					<Component {...otherProps} inViewport={this.state.inViewport} />
				</div>
			);
		}
	};
}
