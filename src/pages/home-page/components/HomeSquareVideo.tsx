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
		this.ref.current && this.ref.current.play();
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
					onLoad={this.onLoad}
				/>
			</div>
		);
	}
}
