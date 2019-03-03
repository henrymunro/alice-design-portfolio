//@flow
import * as React from 'react';
import classnames from 'classnames';

import styles from './HomeSquareVideo.module.scss';

export type Props = {
	className?: string;
	videoUrl?: string;
};

export default class HomeSquareVideo extends React.PureComponent<Props> {
	ref: React.RefObject<HTMLVideoElement> = React.createRef();

	onLoad = () => {
		console.log('🔥 ➡️ HERE:', 'loaded');
		setTimeout(() => {
			this.ref.current && this.ref.current.play();
		}, 50);
	};

	render() {
		const { className, videoUrl } = this.props;
		return (
			<div className={classnames(styles.wrapper, className)}>
				<video
					ref={this.ref}
					src={videoUrl}
					className={styles.image}
					loop
					playsInline
					autoPlay
					muted
					onLoadedData={this.onLoad}
				/>
			</div>
		);
	}
}
