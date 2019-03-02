import React from 'react';

import boobsVid from 'src/assets/boobies/boobs.mp4';
import PageLayout from 'src/pages/components/PageLayout';
// import Youtube from 'src/pages/components/YouTube';

import styles from './BoobiesPage.module.scss';

const paragraph1 = `When doing work experience at jelly,
london i created a short gif to celebrate
international women’s day using
photoshop frame by frame animation.`;

export default class BoobiesPage extends React.PureComponent {
	render() {
		return (
			<PageLayout
				// renderImages={() => <Youtube videoId="zw0OOiTaIDY" className={styles.video} />}
				renderImages={() => <video src={boobsVid} autoPlay loop className={styles.video} />}
				paragraphs={[ paragraph1 ]}
				pageName="boobies"
			/>
		);
	}
}
