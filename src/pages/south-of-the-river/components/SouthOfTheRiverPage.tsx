import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Youtube from 'src/pages/components/YouTube';

import styles from './SouthOfTheRiver.module.scss';

const paragraph1 = `this animation was produced in response
to a university music branding brief. taking
tom misch’s song south of the river as a
basis the concept developed into a feeling
and experience rather than traditional
music branding.`;

export default class SouthOfTheRiverPage extends React.PureComponent {
	render() {
		return (
			<PageLayout
				renderImages={() => <Youtube videoId="gdTwxzcnpN4" className={styles.video} />}
				paragraphs={[ paragraph1 ]}
				pageName="southOfTheRiver"
			/>
		);
	}
}
