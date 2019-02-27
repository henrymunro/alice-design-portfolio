//@flow
import * as React from 'react';

import boobies from 'src/assets/boobies/boobies_thumbnail.png';
import nineLives from 'src/assets/nine-lives/nine-lives-thumb.jpg';
import jrk from 'src/assets/jkr-recycling/jkr-bottle.png';
import southOfTheRiver from 'src/assets/south-of-the-river/south-of-the-river-thumb.jpg';
import walkingGreenwich from 'src/assets/walking-greenwich/greenwich-small.jpg';
import aliceNameVideo from 'src/assets/alice-name-video.mp4';

import { PageName, getPageLink } from 'src/utils/pages';

import HomeSquare from './HomeSquare';
import HomeSquareVideo from './HomeSquareVideo';
import styles from './HomePageSquares.module.scss';

export default class HomePageSquares extends React.PureComponent {
	render() {
		return (
			<div className={styles.wrapper}>
				{this.renderSquare('becomingLost')}
				{this.renderSquare('boobies', boobies)}
				{this.renderSquare('nineLives', nineLives)}
				{this.renderSquare('walkingGreenwich', walkingGreenwich)}
				<HomeSquareVideo videoUrl={aliceNameVideo} className={styles.box} />
				{this.renderSquare('southOfTheRiver', southOfTheRiver)}
				{this.renderSquare('mwambao')}
				{this.renderSquare('goManifesto')}
				{this.renderSquare('jkrRecycling', jrk)}
			</div>
		);
	}

	renderSquare(pageName: PageName, imgUrl?: string) {
		return <HomeSquare link={getPageLink(pageName)} className={styles.box} pageName={pageName} imgUrl={imgUrl} />;
	}
}
