import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Youtube from 'src/pages/components/YouTube';

import styles from './ContactPage.module.scss';

const paragraph1 = `It would be great to connect with you! please email atweddell8@gmail.com`;

type Props = {
	inViewport: boolean;
};
export default class ContactPage extends React.PureComponent<Props> {
	render() {
		return (
			<PageLayout
				renderImages={() => (
					<Youtube play={this.props.inViewport} videoId="PrDQPjoP1qw" className={styles.video} />
				)}
				paragraphs={[ paragraph1 ]}
				pageName="contact"
			/>
		);
	}
}
