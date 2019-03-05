import React from "react";

import PageLayout from "src/pages/components/PageLayout";
import Image from 'src/pages/components/Image';
import img1 from 'src/assets/pengiun/penguin_1.jpg';
import img2 from 'src/assets/pengiun/penguin_2.jpg';

import styles from './PengiunBookCoverPage.module.scss'

const paragraph1 = `This project is a response to the 2019 Penguin Student Design Award. 
I designed this book jacket for fiction novel Norwegian Wood by Haruki Murakami. 
`;


const paragraph2 = `The design that wraps over the spine to the back cover plays on; 
the way the protagonist is torn between two women, 
the loss of characters by suicide and music that is a central theme throughout the book. 
It visually answers to the setting of the 60's through its style and complimentary colour palette.
`

const images = [
  img1, 
  img2
]

export default class PengiunBookCoverPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageLayout
          renderImages={this.renderImages}
          paragraphs={[paragraph1, paragraph2]}
          pageName="pengiunBookCover"
        />
      </>
    );
  }

  renderImages = () => {
    return <div>
      	<Image src={img1} alt="Pengiun book cover" className={styles.image1} images={images} />
				<Image src={img2} alt="Pengiun book cover" className={styles.image2} images={images} />
    </div>
  }
}
