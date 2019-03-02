import React from 'react';

import boobsVid from 'src/assets/boobies/boobs.mp4';
import PageLayout from 'src/pages/components/PageLayout';
import Video from 'src/pages/components/Video';

import styles from './BoobiesPage.module.scss';

const paragraph1 = `When doing work experience at jelly,
london i created a short gif to celebrate
international women’s day using
photoshop frame by frame animation.`;

type Props = {
	inViewport: boolean;
};
export default class BoobiesPage extends React.PureComponent<Props> {
	render() {
		return (
			<PageLayout
				renderImages={() => <Video src={boobsVid} className={styles.video} loop play={this.props.inViewport} />}
				paragraphs={[ paragraph1 ]}
				pageName="boobies"
			/>
		);
	}
}
