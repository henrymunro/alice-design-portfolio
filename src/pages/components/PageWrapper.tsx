import React from 'react';
import throttle from 'lodash.throttle';
import * as H from 'history';
import ResizeObserver from 'resize-observer-polyfill';

import styles from './PageWrapper.module.scss';

type Props = {
	id: string;
	history: H.History;
	link: string;
};

type State = {
	inViewport: boolean;
	height: string;
};

const THROTTLE_TIMEOUT = 25;
const NAVIGATE_SCROLL_TOLERANCE_PERCENTAGE = 30;

export default function withPageWrapper(Component: React.ComponentType<any>) {
	return class PageWrapper extends React.PureComponent<Props & any, State> {
		ref: React.RefObject<HTMLDivElement> = React.createRef();

		state = {
			inViewport: false,
			height: '0px'
		};

		componentDidMount() {
			window.addEventListener('scroll', this.navigateOnScrollIntoView);
			this.ref.current && this.ref.current.addEventListener('resize', this.updateHeightIfNecessary);
			this.updateHeightIfNecessary();
			const ro = new ResizeObserver((entries: any) => {
				for (let entry of entries) {
					this.throttledUpdateHeightIfNecessary();
				}
			});
			// Only observe the second box
			this.ref.current && ro.observe(this.ref.current);
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.navigateOnScrollIntoView);
			this.ref.current && this.ref.current.removeEventListener('resize', this.throttledUpdateHeightIfNecessary);
		}

		updateHeightIfNecessary = () => {
			const newHeight = this.ref.current ? `${this.ref.current.scrollHeight}px` : '0px';
			this.state.height !== newHeight && this.setState({ height: newHeight });
		};

		throttledUpdateHeightIfNecessary = throttle(this.updateHeightIfNecessary, THROTTLE_TIMEOUT);

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
			this.updateHeightIfNecessary();

			return (
				<div className={styles.wrapper} id={id} style={{ height: this.state.height }}>
					<div ref={this.ref} className={styles.inner}>
						<Component {...otherProps} inViewport={this.state.inViewport} />
					</div>
				</div>
			);
		}
	};
}
