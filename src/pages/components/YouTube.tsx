import React from 'react';
import YouTube, { Options, PlayerVars } from 'react-youtube';
import classnames from 'classnames';

import styles from './Youtube.module.scss';

type Props = {
	videoId: string;
	play?: boolean;
	autoPlay?: boolean;
	className?: string;
};

export default class Youtube extends React.PureComponent<Props> {
	render() {
		const { videoId, autoPlay, className, play } = this.props;
		const playVideo = play || autoPlay;
		const playerVars: PlayerVars = {
			autoplay: playVideo ? 1 : 0,
			modestbranding: 1,
			loop: playVideo ? 1 : 0,
			playlist: playVideo ? videoId : undefined,
			iv_load_policy: 3,
			rel: 0,
			showinfo: 0
		};

		const opts: Options = {
			playerVars
		};

		return <YouTube className={classnames(styles.wrapper, className)} videoId={videoId} opts={opts} />;
	}
}
