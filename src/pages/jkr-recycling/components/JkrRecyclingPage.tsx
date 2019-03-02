import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';

import aerosol from 'src/assets/jkr-recycling/jkr-aerosol.png';
import bottle from 'src/assets/jkr-recycling/jkr-bottle.png';
import can from 'src/assets/jkr-recycling/jkr-can.png';

import styles from './JkrRecylcing.module.scss';

const paragraph1 = `When on work experience with jones
knowles ritchie i was tasked with creating
bold recycling posters that would be
informative and visually engaging to staff
in the studio. `;

export default class JkrRecyclingPage extends React.PureComponent {
	render() {
		return <PageLayout renderImages={this.renderImages} paragraphs={[ paragraph1 ]} pageName="jkrRecycling" />;
	}

	renderImages() {
		return (
			<div className={styles.images}>
				<img src={aerosol} alt="Picture of an aerosol" className={styles.image} />
				<img src={bottle} alt="Picture of an bottle" className={styles.image} />
				<img src={can} alt="Picture of an can" className={styles.image} />
			</div>
		);
	}
}
