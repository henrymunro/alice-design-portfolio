import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Video from 'src/pages/components/Video';
import Image from 'src/pages/components/Image';

import cover from 'src/assets/becoming-lost/becoming-lost-cover.jpg';
import img1 from 'src/assets/becoming-lost/becoming-lost-1.jpg';
import img2 from 'src/assets/becoming-lost/becoming-lost-2.jpg';
import img3 from 'src/assets/becoming-lost/becoming-lost-3.jpg';
import img4 from 'src/assets/becoming-lost/becoming-lost-4.jpg';
import vid from 'src/assets/becoming-lost/lost-vid.mp4';

import styles from './BecomingLost.module.scss';

const images = [ img1, img2, img3, img4 ];

const paragraph1 = `The theme of this istd project was
‘lost’. the concept behind this japanese
stab bound book is the love story of
my grandparents who both experience
memory loss.`;

const paragraph2 = `Upon a visit to my grandparents i recorded
and transcribed our conversations across
a day to document a brief history of their
relationship but also to give an insight
into their marriage in their 80’s. soft
typography has been used in this duotone
book uses the serif font mrs eaves and
sans-serif mr eaves to differentiate male
and female speakers.`;

type Props = {
	inViewport: boolean;
};

export default class BecomingLostPage extends React.PureComponent<Props> {
	render() {
		return (
			<PageLayout
				className={styles.page}
				renderImages={this.renderImages}
				paragraphs={[ paragraph1, paragraph2 ]}
				pageName="becomingLost"
			/>
		);
	}

	renderImages = () => {
		return (
			<div className={styles.wrapper}>
				<Video src={vid} className={styles.largeImage} loop play={this.props.inViewport} />
				<Image src={img1} alt="" className={styles.largeImage} images={images} />
				<Image src={img2} alt="" className={styles.largeImage} images={images} />
				<Image src={img4} alt="" className={styles.largeImage} images={images} />
				<Image src={img3} alt="" className={styles.largeImage} images={images} />
			</div>
		);
	};
}
