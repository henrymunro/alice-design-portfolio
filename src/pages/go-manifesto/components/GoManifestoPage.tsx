import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import imageLong from 'src/assets/go-manifesto/go-long.jpg';
import img1 from 'src/assets/go-manifesto/go-manif-1.jpg';
import img2 from 'src/assets/go-manifesto/go-manif-2.jpg';

import styles from './GoManifesto.module.scss';

const paragraph1 = `This first year brief enabled me to write
my own manfiesto (go) based on my
perspective of making the most of life by
doing an assortment of activties.
the final product is a constantina book
using a linear format to connect each
page in a forward motion that should
inspire others. the playful nature of
this project reflects the message of the
manifesto.`;

export default class GoManifestoPage extends React.PureComponent {
	render() {
		return (
			<PageLayout
				className={styles.page}
				renderImages={this.renderImages}
				paragraphs={[ paragraph1 ]}
				pageName="goManifesto"
			/>
		);
	}

	renderImages() {
		return (
			<div className={styles.images}>
				<img src={imageLong} alt="" className={styles.image} />
				<img src={img2} alt="" className={styles.tallImage} />
				<img src={img1} alt="" className={styles.tallImage} />
			</div>
		);
	}
}
