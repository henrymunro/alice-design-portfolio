import {
	linkToHomePage,
	linkToBecomingLost,
	linkToBoobies,
	linkToNineLives,
	linkToWalkingGreenwich,
	linkToSouthOfTheRiver,
	linkToPengiunBookCover,
	linkToGoManifesto,
	linkToJkrRecycling,
	linkToContact
} from './links';

interface PagesInterface<T> {
	home: T;
	becomingLost: T;
	boobies: T;
	nineLives: T;
	walkingGreenwich: T;
	southOfTheRiver: T;
	pengiunBookCover: T;
	goManifesto: T;
	jkrRecycling: T;
	contact: T;
}

const pageDetails: PagesInterface<{
	rgb: string;
	title: string;
	link: string;
}> = Object.freeze({
	home: {
		title: 'About',
		link: linkToHomePage(),
		rgb: '24, 0, 227'
	},
	becomingLost: {
		title: 'Becoming Lost',
		link: linkToBecomingLost(),
		rgb: '218, 0, 42'
	},
	boobies: {
		title: 'Boobies',
		link: linkToBoobies(),
		rgb: '212, 111, 133'
	},
	nineLives: {
		title: 'Nine Lives',
		link: linkToNineLives(),
		rgb: '10, 96, 199'
	},
	walkingGreenwich: {
		title: 'Walking Greenwich',
		link: linkToWalkingGreenwich(),
		rgb: '68, 199, 171'
	},
	southOfTheRiver: {
		title: 'South of the river',
		link: linkToSouthOfTheRiver(),
		rgb: '80, 46, 92'
	},
	pengiunBookCover: {
		title: 'Pengiun book cover',
		link: linkToPengiunBookCover(),
		rgb: '255, 137, 0'
	},
	goManifesto: {
		title: 'Go manifesto',
		link: linkToGoManifesto(),
		rgb: '73, 168, 196'
	},
	jkrRecycling: {
		title: 'JKR Recycling',
		link: linkToJkrRecycling(),
		rgb: '37, 173, 85'
	},
	contact: {
		title: 'contact',
		link: linkToContact(),
		rgb: '255, 175, 75'
	}
});

export type PageName = keyof PagesInterface<any>;

export function getPageLink(pageName: PageName) {
	return pageDetails[pageName].link;
}

export function getPageId(pageName: PageName) {
	return getPageLink(pageName).split('#')[1];
}

export function getPageTitle(pageName: PageName) {
	return pageDetails[pageName].title;
}

export function getPageRGB(pageName: PageName) {
	return pageDetails[pageName].rgb;
}

export function getPageColor(pageName: PageName) {
	return `rgb(${getPageRGB(pageName)})`;
}
