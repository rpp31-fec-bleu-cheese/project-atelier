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
  const [thumbnailIndexes, setThumbnailIndexes] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    let endIndex = productStyles.results[indexes.style].photos.length < 6 ? productStyles.results[indexes.style].photos.length : 6;
    setThumbnailIndexes(productStyles.results[indexes.style].photos);
    setStartIndex(0);
    setEndIndex(endIndex);
  }, [productStyles, indexes.style]);

  let handleModalClick = () => {
    setShowModal(true);
  }

  let handleThumbnailUp = () => {
    console.log('Thumbnail Up!');
    if (productStyles.results[indexes.style].photos[startIndex - 1]) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    } else {
      return;
    }
  }

  let handleThumbnailDown = () => {
    console.log('Thumbnail Down!');
    if (productStyles.results[indexes.style].photos[endIndex + 1]) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    } else {
      return;
    }
  }

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
        {!(startIndex === 0) && <button className="ThumbnailScrollUp" onClick={handleThumbnailUp} alt="Scroll Gallery Up"><FontAwesomeIcon icon={faChevronUp}/></button>}
        <div data-testid="ImageGalleryThumbnails" className="ImageGalleryThumbnails">
        {thumbnailIndexes.slice(startIndex, endIndex).map((currentStyle, i) => (
            indexes.photo === productStyles.results[indexes.style].photos.indexOf(currentStyle) ?

            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnailSelected" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
            :
            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
          ))}
        </div>
        {!(endIndex === productStyles.results[indexes.style].photos.length) && <button className="ThumbnailScrollDown" onClick={handleThumbnailDown} alt="Scroll Gallery Down"><FontAwesomeIcon icon={faChevronDown}/></button>}
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