import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


let ImageGallery = ({handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick, indexes, productStyles}) => {

  const [showModal, setShowModal] = useState(false);
  // const [thumbnailIndexes, setThumbailIndexes] = useState([]);

  // useEffect(() => {
  //   let availableThumbnailIndexes = [];
  //   for (let t = 0; t < productStyles.results[indexes.style].photos.length; t++) {
  //     availableThumbnailIndexes.push(t);
  //   }
  //   console.log('AVAIL THUMBS:', availableThumbnailIndexes);
  //   if (availableThumbnailIndexes.length >= 6) {
  //     let slicedThumbnailIndexes = availableThumbnailIndexes.slice(0, 6);
  //     console.log('SLICED THUMBS:', slicedThumbnailIndexes);
  //     setThumbailIndexes(slicedThumbnailIndexes);
  //   } else {
  //     setThumbailIndexes(availableThumbnailIndexes);
  //   }
  // }, [productStyles]);

  let handleModalClick = () => {
    setShowModal(true);
  }

  // let handleThumbnailUp = () => {
  //   console.log('Thumbnail Up!')
  //   let start = thumbnailIndexes[0];
  //   let end = thumbnailIndexes[thumbnailIndexes.length - 1];
  //   let nextThumbnailIndexes = thumbnailIndexes.slice(0, -1);
  //   if (productStyles.results[indexes.style].photos[start - 1]) {
  //     nextThumbnailIndexes.unshift(start - 1);
  //     console.log('NEXT THUMBS:', nextThumbnailIndexes);
  //     setThumbailIndexes(nextThumbnailIndexes);
  //   } else {
  //     return;
  //   }
  // }

  // let handleThumbnailDown = () => {
  //   console.log('Thumbnail Down!')
  //   let start = thumbnailIndexes[0];
  //   let end = thumbnailIndexes[thumbnailIndexes.length - 1];
  //   let nextThumbnailIndexes = thumbnailIndexes.slice(1);
  //   if (productStyles.results[indexes.style].photos[end + 1]) {
  //     nextThumbnailIndexes.push(end + 1);
  //     console.log('NEXT THUMBS:', nextThumbnailIndexes);
  //     setThumbailIndexes(nextThumbnailIndexes);
  //   } else {
  //     return;
  //   }
  // }

    if (Object.keys(productStyles).length) {

    return (
      <div className="ImageGallery">{
        productStyles.results[indexes.style].photos[indexes.photo].url ?
        <div data-testid="MainImage" style={{background: `center / contain no-repeat url(${productStyles.results[indexes.style].photos[indexes.photo].url})`}} className="MainImage" alt="Main Product Image">
        </div>
        :
        <div data-testid="MainImageUnavailable" className="MainImageUnavailable">
        <FontAwesomeIcon icon={faCameraRetro} />
        </div>
        }
        <div className="ImageGalleryControls">
        <button className="ThumbnailScrollUp"><FontAwesomeIcon icon={faChevronUp} onClick={handleThumbnailUp}/></button>
        <div data-testid="ImageGalleryThumbnails" className="ImageGalleryThumbnails">
        {productStyles.results[indexes.style].photos.map((currentStyle, i) => (
            indexes.photo === i ?

            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnailSelected" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
            :
            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
          ))}
        </div>
        <button className="ThumbnailScrollDown"><FontAwesomeIcon icon={faChevronDown} onClick={handleThumbnailDown}/></button>
        </div>
        <div className="SlideGalleryLeft">
          <div data-testid="SlideGalleryLeftButtonTest" className="SlideGalleryLeftButton" onClick={handleLeftArrowClick}><FontAwesomeIcon icon={faArrowCircleLeft} /></div>
        </div>
        <div className="SlideGalleryRight">
          <div data-testid="SlideGalleryRightButtonTest" className="SlideGalleryRightButton" onClick={handleRightArrowClick}><FontAwesomeIcon icon={faArrowCircleRight} /></div>
        </div>
        <div className="OpenGalleryModal">
          <div data-testid="OpenGalleryModalButton" className="OpenGalleryModalButton" onClick={handleModalClick}><FontAwesomeIcon icon={faExpandArrowsAlt} /></div>
            {showModal && <div data-testid="GalleryModal" id="GalleryModal" onClick={() => { setShowModal(false) }}>
              <div id="GalleryModalContent" className="GalleryModalContent">
                <img className="ModalImage" src={productStyles.results[indexes.style].photos[indexes.photo].url} alt="Product Image Close Up" />
              </div>
            </div>}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ImageGallery">
        <h3>Loading...</h3>
      </div>
    )
  }
}

ImageGallery.propTypes = {
  products: PropTypes.array,
  handleLeftArrowClick: PropTypes.func,
  handleRightArrowClick: PropTypes.func,
  handleThumbnailClick: PropTypes.func,
  indexes: PropTypes.object,
  productStyles: PropTypes.object
}

export default ImageGallery;