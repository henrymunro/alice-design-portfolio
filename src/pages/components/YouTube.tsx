import React from 'react';
import YouTube, { Options, PlayerVars } from 'react-youtube';

type Props = {
	videoId: string;
};

export default class Youtube extends React.PureComponent<Props> {
	render() {
		const { videoId } = this.props;
		const playerVars: PlayerVars = {
			autoplay: 1,
			modestbranding: 1,
			loop: 1
		};
		const opts: Options = {
			height: '390',
			width: '640',
			playerVars
		};

		return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
	}

	_onReady(event: any) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
}
