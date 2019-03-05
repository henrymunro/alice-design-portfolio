//@flow
import * as React from 'react';

import boobies from 'src/assets/boobies/boobies_thumbnail.png';
import nineLives from 'src/assets/nine-lives/nine-lives-thumb.png';
import jrk from 'src/assets/jkr-recycling/recycling-thumb.jpg';
import southOfTheRiver from 'src/assets/south-of-the-river/south-of-the-river-thumb.jpg';
import walkingGreenwich from 'src/assets/walking-greenwich/greenwich-small.jpg';
import becomingLost from 'src/assets/becoming-lost/lost-thumb.png';
import goManifesto from 'src/assets/go-manifesto/go-manif-1.png';
import pengiun from 'src/assets/pengiun/penguin_themb.png';
import aliceNameVideo from 'src/assets/alice-name-video.mp4';

import { PageName, getPageLink } from 'src/utils/pages';

import HomeSquare from './HomeSquare';
import HomeSquareVideo from './HomeSquareVideo';
import styles from './HomePageSquares.module.scss';

export default class HomePageSquares extends React.PureComponent {
	render() {
		return (
			<div className={styles.wrapper}>
				{this.renderSquare('becomingLost', becomingLost)}
				{this.renderSquare('southOfTheRiver', southOfTheRiver)}
				{this.renderSquare('nineLives', nineLives)}
				{this.renderSquare('walkingGreenwich', walkingGreenwich)}
				<HomeSquareVideo videoUrl={aliceNameVideo} className={styles.box} />
				{this.renderSquare('boobies', boobies)}
				{this.renderSquare('pengiunBookCover', pengiun)}
				{this.renderSquare('goManifesto', goManifesto)}
				{this.renderSquare('jkrRecycling', jrk)}
			</div>
		);
	}

	renderSquare(pageName: PageName, imgUrl?: string) {
		return <HomeSquare link={getPageLink(pageName)} className={styles.box} pageName={pageName} imgUrl={imgUrl} />;
	}
}
