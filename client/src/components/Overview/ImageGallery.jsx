import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ImageGallery = ({handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick, indexes, productStyles}) => {

  const [showModal, setShowModal] = useState(false);
  console.log('SHOW MODAL:', showModal);

  let imageComingSoon = '/media'

  let handleModalClick = () => {
    console.log('Modal clicked!');
    setShowModal(true);
  }

    if (Object.keys(productStyles).length) {
        let productImage = productStyles.results[indexes.style].photos[indexes.photo].url ? productStyles.results[indexes.style].photos[indexes.photo].url : imageComingSoon;

    return (
      <div className="ImageGallery">
        <div style={{background: `center / contain no-repeat url(${productImage})`}} className="MainImage" alt="Main Product Image">
        </div>
        <div className="ImageGalleryThumbnails">
          {productStyles.results[indexes.style].photos.map((currentStyle, i) => (
            indexes.photo === i ?

            <div key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnailSelected" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
            :
            <div key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
          ))}
        </div>
        <div className="SlideGalleryLeft">
          <div className="SlideGalleryLeftButton" onClick={handleLeftArrowClick}>←</div>
        </div>
        <div className="SlideGalleryRight">
          <div className="SlideGalleryRightButton" onClick={handleRightArrowClick}>→</div>
        </div>
        <div className="OpenGalleryModal">
          <div className="OpenGalleryModalButton" onClick={handleModalClick}>⧠</div>
            {showModal && <div id="GalleryModal" onClick={() => { setShowModal(false) }}>
              <div id="GalleryModalContent" className="GalleryModalContent">
                <img className="ModalImage" src={productImage} alt="Product Image Close Up" />
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