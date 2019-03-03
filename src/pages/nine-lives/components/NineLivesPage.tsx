import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Youtube from 'src/pages/components/YouTube';
import img1 from 'src/assets/nine-lives/nine-lives-1.png';
import img2 from 'src/assets/nine-lives/nine-lives-2.png';
import img3 from 'src/assets/nine-lives/nine-lives-thumb.jpg';

import Image from 'src/pages/components/Image';

import styles from './NineLivesPage.module.scss';

const images = [ img1, img2, img3 ];

const paragraph1 = `The brief was to animate a poem without
using a voice over. i wrote this poem about
my dad and decided to use photoshop
frame by frame animation to visualise the
narrative that adds a naive tone to this
quite dark poem.`;

export default class NineLivesPage extends React.PureComponent {
	render() {
		return (
			<PageLayout
				className={styles.page}
				renderImages={this.renderImages}
				paragraphs={[ paragraph1 ]}
				pageName="nineLives"
			/>
		);
	}

	renderImages() {
		return (
			<div>
				<Youtube videoId="SEGYMd0a0bg" className={styles.video} />
				<Image src={img1} alt="" className={styles.image} images={images} />
				<Image src={img2} alt="" className={styles.image} images={images} />
				<Image src={img3} alt="" className={styles.image} images={images} />
			</div>
		);
	}
}
