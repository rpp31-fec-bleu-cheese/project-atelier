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

  let handleModalClick = () => {
    setShowModal(true);
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
        <button className="ThumbnailScrollUp"><FontAwesomeIcon icon={faChevronUp} alt="Scroll Gallery Up"/></button>
        <div data-testid="ImageGalleryThumbnails" className="ImageGalleryThumbnails">
        {productStyles.results[indexes.style].photos.map((currentStyle, i) => (
            indexes.photo === i ?

            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnailSelected" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
            :
            <div data-testid={`GalleryThumbnail ${i}`} key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
          ))}
        </div>
        <button className="ThumbnailScrollDown"><FontAwesomeIcon icon={faChevronDown} alt="Scroll Gallery Down"/></button>
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