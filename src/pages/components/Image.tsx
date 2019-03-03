import React from 'react';
import Lightbox from 'react-image-lightbox';
import classnames from 'classnames';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import styles from './Image.module.scss';

type Props = {
	src: string;
	images: string[];
	alt?: string;
	className?: string;
};

type State = {
	photoIndex: number;
	isOpen: boolean;
};

export default class Image extends React.PureComponent<Props, State> {
	getIndex = () => this.props.images.findIndex((url) => url === this.props.src);
	state = {
		photoIndex: this.getIndex(),
		isOpen: false
	};

	open = () => this.setState({ isOpen: true, photoIndex: this.getIndex() });
	close = () => this.setState({ isOpen: false });

	moveToPrevImage = () =>
		this.setState({
			photoIndex: (this.state.photoIndex + this.props.images.length - 1) % this.props.images.length
		});

	moveToNextImage = () =>
		this.setState({
			photoIndex: (this.state.photoIndex + 1) % this.props.images.length
		});

	render() {
		const { isOpen, photoIndex } = this.state;
		const { className, src, alt, images } = this.props;

		const currentIndex = this.getIndex();

		return (
			<>
				<img className={classnames(styles.image, className)} src={src} alt={alt} onClick={this.open} />
				{isOpen && (
					<Lightbox
						mainSrc={currentIndex === -1 ? src : images[photoIndex]}
						onCloseRequest={this.close}
						nextSrc={currentIndex === -1 ? undefined : images[(currentIndex + 1) % images.length]}
						prevSrc={
							currentIndex === -1 ? undefined : images[(currentIndex + images.length - 1) % images.length]
						}
						onMovePrevRequest={this.moveToPrevImage}
                        onMoveNextRequest={this.moveToNextImage}
                        imagePadding={window.innerWidth / 10}
					/>
				)}
			</>
		);
	}
}
