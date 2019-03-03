import React from 'react';

type Props = {
	src: string;
	play?: boolean;
	className?: string;
	loop?: boolean;
	autoPlay?: boolean;
};

export default class Video extends React.PureComponent<Props> {
	ref: React.RefObject<HTMLVideoElement> = React.createRef();
	componentDidMount() {
		this.props.play && this.playVideo();
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.play && !this.props.play) this.pauseVideo();

		if (!prevProps.play && this.props.play) this.playVideo();
	}

	playVideo() {
		const video = this.ref.current;
		if (!video) return;
		video.play();
	}

	pauseVideo() {
		const video = this.ref.current;
		if (!video) return;
		video.pause();
	}

	render() {
		const { className, src, autoPlay, loop } = this.props;
		return <video className={className} ref={this.ref} src={src} autoPlay={autoPlay} loop={loop} muted />;
	}
}
