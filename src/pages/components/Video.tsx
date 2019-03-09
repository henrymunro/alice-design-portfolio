import React from "react";

type Props = {
  src: string;
  play?: boolean;
  className?: string;
  loop?: boolean;
  autoPlay?: boolean;
};

type State = {
  autoPlay: boolean;
};

export default class Video extends React.PureComponent<Props, State> {
  ref: React.RefObject<HTMLVideoElement> = React.createRef();
  state = {
    autoPlay: false
  };

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
    video.play().catch(err => {});
    !this.state.autoPlay && this.setState({ autoPlay: true });
  }

  pauseVideo() {
    const video = this.ref.current;
    if (!video) return;
    video.pause();
    this.state.autoPlay && this.setState({ autoPlay: false });
  }

  render() {
    const { className, src, autoPlay, loop } = this.props;
    return (
      <video
        className={className}
        ref={this.ref}
        src={src}
        playsInline
        autoPlay={autoPlay || this.state.autoPlay}
        loop={loop}
        muted
        // controls
      />
    );
  }
}
