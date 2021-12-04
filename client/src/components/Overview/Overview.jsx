import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../../../../config.js';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductSloganAndDescription from './ProductSloganAndDescription.jsx';
import ProductFeatures from './ProductFeatures.jsx';


let Overview = ({updateDetailsAndStyles, productById, productStyles, productId, changeInOutfit, outfitIds, starRating, trackUserClicks}) => {

  const [indexes, setIndexes] = useState({product: 0, style: 0, photo: 0});
  // console.log('INDEXES:', indexes);
  // Effect for watching incoming productId from App component
  // useLayoutEffect(() => {
  //   setIndexes({...indexes, style: 0, photo: 0})
  // }, [productId]);

  // useEffect(() => {
  //   setIndexes({...indexes, style: 0, photo: 0})
  // }, [productId]);

  useEffect (() => {
    let productIdOptions = {
      url: `/products/${productId}`,
      method: 'get'
    };
    let productStylesOptions = {
      url: `/products/${productId}/styles`,
      method: 'get'
    };
    axios(productIdOptions)
      .then(response => {
        let product = {
          details: response.data
        };
        axios(productStylesOptions)
        .then(response => {
          product.styles = response.data;
          setIndexes({...indexes, style: 0, photo: 0})
          updateDetailsAndStyles(product.details, product.styles);
            })
          })
            .catch(error => {
              console.log(error)});
  }, [productId]);

  let handleLeftArrowClick = () => {
    if (indexes.photo === 0) {
      let nextIndex = productStyles.results[indexes.style].photos.length - 1;
      setIndexes({...indexes, photo: nextIndex});
    } else {
      setIndexes({...indexes, photo: indexes.photo - 1});
    }
  }

  let handleRightArrowClick = () => {
    let nextIndex = (indexes.photo + 1) % productStyles.results[indexes.style].photos.length;
    setIndexes({...indexes, photo: nextIndex});
  }

  let handleThumbnailClick = (event) => {
    event.persist();
    let indexValue = Number(event.target.attributes.index.nodeValue);
    setIndexes({...indexes, photo: indexValue});
    event.preventDefault();
  }

  let handleStyleClick = (event) => {
    event.persist();
    let styleIndex = Number(event.target.attributes.index.nodeValue);
    if (indexes.style === styleIndex) {
      return;
    }
    console.log('Style Index:', styleIndex);
    setIndexes({...indexes, style: styleIndex, photo: 0});
    event.preventDefault();
  }

  return (
    <div data-testid="Overview" id='Overview' onClick={() => trackUserClicks('Overview', event)}>
      {Object.keys(productStyles).length > 0 && <><ImageGallery indexes={indexes} handleThumbnailClick={handleThumbnailClick} handleLeftArrowClick={handleLeftArrowClick}
       handleRightArrowClick={handleRightArrowClick} productStyles={productStyles} data-testid="ImageGallery"/>
      <ProductInformation starRating={starRating} productById={productById} productStyles={productStyles} indexes={indexes} />
      <StyleSelector productStyles={productStyles} indexes={indexes} handleStyleClick={handleStyleClick}  />
      <AddToCart productStyles={productStyles} indexes={indexes} changeInOutfit={changeInOutfit} outfitIds={outfitIds} />
      <ProductSloganAndDescription productById={productById} />
      <ProductFeatures productById={productById} /></>}
    </div>
  );
};


Overview.propTypes = {
  productById: PropTypes.object,
  productStyles: PropTypes.object,
  products: PropTypes.array,
  productId: PropTypes.number,
  changeInOutfit : PropTypes.func,
  outfitIds: PropTypes.array,
  updateDetailsAndStyles: PropTypes.func,
  starRating: PropTypes.number,
  trackUserClicks: PropTypes.func
}

export default Overview;
export const handleThumbnailClick = (event) => {
  event.persist();
  let indexValue = Number(event.target.attributes.index.nodeValue);
  setIndexes({...indexes, photo: indexValue});
  event.preventDefault();
}
export const handleLeftArrowClick = () => {
  if (indexes.photo === 0) {
    let nextIndex = productStyles.results[indexes.style].photos.length - 1;
    setIndexes({...indexes, photo: nextIndex});
  } else {
    setIndexes({...indexes, photo: indexes.photo - 1});
  }
}
export const handleRightArrowClick = () => {
  let nextIndex = (indexes.photo + 1) % productStyles.results[indexes.style].photos.length;
  setIndexes({...indexes, photo: nextIndex});
}