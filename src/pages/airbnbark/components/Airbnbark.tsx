import React from "react";

import PageLayout from "src/pages/components/PageLayout";
import Video from "src/pages/components/Video";
import Image from "src/pages/components/Image";

import dogWithStickVid from "src/assets/airbnbark/dogWithStick.mp4";
import downUnderDogVid from "src/assets/airbnbark/downunderdog smaller.mp4";
import findingYourSelfVid from "src/assets/airbnbark/findingyourself3 smaller.mp4";
import islandHopperVid from "src/assets/airbnbark/islandhopperedited smaller.mp4";
import longDigitalBannerVid from "src/assets/airbnbark/longdigitalbanner smaller.mp4";
import longHaulVid from "src/assets/airbnbark/longhaul smaller.mp4";

import introSlideImg from "src/assets/airbnbark/intro_slide_smaller.png";

import styles from "./Airbnbark.module.scss";

const images = [introSlideImg];

const paragraph1 = `Airbnbark is a brand extension project that offers you a friendly dog-sitting service when you’re away.  The ad campaign runs across print, digital and digital out-of-home.`;

const paragraph2 = `It starts an online conversation using the hashtag #feelathome to reflect the brand values. Airbnbark calls on the dog-loving community to open their doors, giving your dog a home away from home. Take the stress out of going away and return to a happy dog.`;

type Props = {
  inViewport: boolean;
};

export default class BecomingLostPage extends React.PureComponent<Props> {
  render() {
    return (
      <PageLayout
        className={styles.page}
        renderImages={this.renderImages}
        paragraphs={[paragraph1, paragraph2]}
        pageName="airbnbark"
      />
    );
  }

  renderImages = () => {
    return (
      <div className={styles.wrapper}>
        <Image
          src={introSlideImg}
          alt=""
          className={styles.largeImage}
          images={images}
        />
        <Video
          src={longHaulVid}
          className={styles.largeImage}
          loop
          play={this.props.inViewport}
        />
        <Video
          src={dogWithStickVid}
          className={styles.largeImage}
          loop
          play={this.props.inViewport}
        />

        <Video
          src={findingYourSelfVid}
          className={styles.smallImage}
          loop
          play={this.props.inViewport}
        />
        <Video
          src={islandHopperVid}
          className={styles.smallImage}
          loop
          play={this.props.inViewport}
        />
        <Video
          src={longDigitalBannerVid}
          className={styles.largeImage}
          loop
          play={this.props.inViewport}
        />
        <Video
          src={downUnderDogVid}
          className={styles.longVertialBanner}
          loop
          play={this.props.inViewport}
        />
      </div>
    );
  };
}
