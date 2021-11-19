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


let Overview = ({updateDetailsAndStyles, productById, productStyles, productId, changeInOutfit, outfitIds, starRating}) => {

  const [indexes, setIndexes] = useState({product: 0, style: 0, photo: 0});
  console.log('INDEXES:', indexes);
  // const [productById, setProductById] = useState({});
  // console.log('CURRENT PRODUCT BY ID:', productById);
  // const [productStyles, setProductStyles] = useState({});
  // // console.log('CURRENT PRODUCT STYLE:', productStyles);


  // Effect for watching incoming productId from App component
  useEffect (() => {
    let productIdOptions = {
      url: `/products/${productId}`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': config.API_KEY}
    };
    let productStylesOptions = {
      url: `products/${productId}/styles`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': config.API_KEY}
    };
    axios(productIdOptions)
      .then(response => {
        let product = {
          details: response.data
        };
        // setProductById(response.data);
        axios(productStylesOptions)
        .then(response => {
          product.styles = response.data;
          updateDetailsAndStyles(product.details, product.styles);
          // setProductStyles(response.data);
            })
          })
            .catch(error => {
              console.log(error)});
  }, [productId]);

  useEffect(() => {
    setIndexes({...indexes, style: 0, photo: 0})
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
    setIndexes({...indexes, style: styleIndex});
    event.preventDefault();
  }

  return (
    <div data-testid="Overview" id='Overview'>
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
  starRating: PropTypes.number
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