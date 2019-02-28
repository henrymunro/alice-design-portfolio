import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Youtube from 'src/pages/components/YouTube';

import styles from './ContactPage.module.scss';

const paragraph1 = `It would be great to connect with you! please email atweddell8@gmail.com`;

export default class ContactPage extends React.PureComponent {
	render() {
		return (
			<PageLayout
				renderImages={() => <Youtube videoId="PrDQPjoP1qw" className={styles.video} autoPlay />}
				paragraphs={[ paragraph1 ]}
				pageName="contact"
			/>
		);
	}
}
