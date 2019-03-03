import React from 'react';

import PageLayout from 'src/pages/components/PageLayout';
import Video from 'src/pages/components/Video';

import vid from 'src/assets/contact.mp4';

import styles from './ContactPage.module.scss';

const paragraph1 = `It would be great to connect with you!`;
const paragraph2 = `Please email atweddell8@gmail.com`;

type Props = {
	inViewport: boolean;
};
export default class ContactPage extends React.PureComponent<Props> {
	render() {
		return (
			<PageLayout
				className={styles.page}
				renderImages={() => <Video src={vid} className={styles.video} loop play={this.props.inViewport} />}
				paragraphs={[ paragraph1, paragraph2 ]}
				pageName="contact"
			/>
		);
	}
}
