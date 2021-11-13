import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductSloganAndDescription from './ProductSloganAndDescription.jsx';
import ProductFeatures from './ProductFeatures.jsx';
// const imagePath = '/../../dist/stock_media/'
// import imageComingSoonPhoto from '/Users/cameroncolaco/Documents/HR/SEI/sprints/project-atelier/client/dist/stock_media/image-coming-soon.png';

let Overview = ({cam_token, productId, changeInOutfit, outfitIds}) => {

  const [indexes, setIndexes] = useState({product: 0, style: 0, photo: 0});
  console.log('INDEXES:', indexes);
  const [productById, setProductById] = useState({});
  // console.log('CURRENT PRODUCT BY ID:', productById);
  const [productStyles, setProductStyles] = useState({});
  // // console.log('CURRENT PRODUCT STYLE:', productStyles);

  useEffect (() => {
    let productIdOptions = {
      url: `/products/${productId}`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    let productStylesOptions = {
      url: `products/${productId}/styles`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productIdOptions)
      .then(response => {
        setProductById(response.data);
        axios(productStylesOptions)
        .then(response => {
          setProductStyles(response.data);
            })
          })
            .catch(error => {
              console.log(error)});
  }, []);

  // Effect for watching incoming productId from App component
  useEffect (() => {
    let productIdOptions = {
      url: `/products/${productId}`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    let productStylesOptions = {
      url: `products/${productId}/styles`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productIdOptions)
      .then(response => {
        setProductById(response.data);
        axios(productStylesOptions)
        .then(response => {
          setProductStyles(response.data);
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
    <div id='Overview'>
      {Object.keys(productStyles).length > 0 && <><ImageGallery indexes={indexes} handleThumbnailClick={handleThumbnailClick} handleLeftArrowClick={handleLeftArrowClick}
       handleRightArrowClick={handleRightArrowClick} productStyles={productStyles} />
      <ProductInformation productById={productById} productStyles={productStyles} indexes={indexes} />
      <StyleSelector productStyles={productStyles} indexes={indexes} handleStyleClick={handleStyleClick}  />
      <AddToCart productStyles={productStyles} indexes={indexes} changeInOutfit={changeInOutfit} outfitIds={outfitIds} cam_token={cam_token} />
      <ProductSloganAndDescription productById={productById} />
      <ProductFeatures productById={productById} cam_token={cam_token} /></>}
    </div>
  );
};


Overview.propTypes = {
  cam_token: PropTypes.object,
  products: PropTypes.array,
  productId: PropTypes.number,
  changeInOutfit : PropTypes.func,
  outfitIds: PropTypes.array
}

export default Overview;
// export {ImageGallery, ProductInformation, ProductFeatures, ProductSloganAndDescription, StyleSelector};