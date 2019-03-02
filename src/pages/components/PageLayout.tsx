import React from 'react';
import classnames from 'classnames';

import { PageName, getPageTitle } from 'src/utils/pages';

import PageText from './PageText';

import styles from './PageLayout.module.scss';

type Props = {
	renderImages: () => React.ReactNode;
	paragraphs: string[];
	pageName: PageName;
	className?: string;
	imagesClassName?: string;
	textClassName?: string;
};

export default class PageLayout extends React.PureComponent<Props> {
	render() {
		const { renderImages, pageName, paragraphs, className, imagesClassName, textClassName } = this.props;

		return (
			<div className={classnames(styles.wrapper, className)}>
				<div className={classnames(styles.images, imagesClassName)}>{renderImages && renderImages()}</div>
				<PageText
					className={classnames(styles.text, textClassName)}
					pageName={pageName}
					title={getPageTitle(pageName)}
					paragraphs={paragraphs}
				/>
			</div>
		);
	}
}
