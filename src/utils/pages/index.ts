import {
  linkToHomePage,
  linkToBecomingLost,
  linkToBoobies,
  linkToNineLives,
  linkToWalkingGreenwich,
  linkToSouthOfTheRiver,
  linkToMwambao,
  linkToGoManifesto,
  linkToJkrRecycling,
  linkToContact
} from "./links";

interface PagesInterface<T> {
  home: T;
  becomingLost: T;
  boobies: T;
  nineLives: T;
  walkingGreenwich: T;
  southOfTheRiver: T;
  mwambao: T;
  goManifesto: T;
  jkrRecycling: T;
  contact: T;
}

const pageDetails: PagesInterface<{
  name: string;
  rgb: string;
  title: string;
  link: string;
}> = Object.freeze({
  home: {
    title: "Home",
    link: linkToHomePage(),
    name: "red",
    rgb: "255, 0, 0"
  },
  becomingLost: {
    title: "Becoming Lost",
    link: linkToBecomingLost(),
    name: "green",
    rgb: "0, 255, 0"
  },
  boobies: {
    title: "Boobies",
    link: linkToBoobies(),
    name: "yellow",
    rgb: "0, 0, 0"
  },
  nineLives: {
    title: "Nine Lives",
    link: linkToNineLives(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  walkingGreenwich: {
    title: "Walking Greenwich",
    link: linkToWalkingGreenwich(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  southOfTheRiver: {
    title: "South of the river",
    link: linkToSouthOfTheRiver(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  mwambao: {
    title: "mwambao",
    link: linkToMwambao(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  goManifesto: {
    title: "Go manifesto",
    link: linkToGoManifesto(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  jkrRecycling: {
    title: "JKR Recycling",
    link: linkToJkrRecycling(),
    name: "blue",
    rgb: "0, 0, 0"
  },
  contact: {
    title: "contact",
    link: linkToContact(),
    name: "blue",
    rgb: "0, 0, 0"
  }
});

export type PageName = keyof PagesInterface<any>;

export function getPageLink(pageName: PageName) {
  return pageDetails[pageName].link;
}

export function getPageId(pageName: PageName) {
  return getPageLink(pageName).split("#")[1];
}

export function getPageTitle(pageName: PageName) {
  return pageDetails[pageName].title;
}

export function getPageColor(pageName: PageName) {
  return pageDetails[pageName].name;
}

export function getPageRGB(pageName: PageName) {
  return pageDetails[pageName].rgb;
}
