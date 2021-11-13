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




// removed products from props
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
        // console.log('PRODUCT ID API RESPONSE:', response)
        setProductById(response.data);
        // setIndexes({...indexes, style: 0, photo: 0})
        axios(productStylesOptions)
        .then(response => {
          // console.log('PRODUCT STYLES API RESPONSE:', response)
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

  // Image Gallery Component
  // let ImageGallery = ({handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick, indexes, productStyles}) => {

  //   const [showModal, setShowModal] = useState(false);
  //   console.log('SHOW MODAL:', showModal);

  //   let imageComingSoon = '/media'

  //   let handleModalClick = () => {
  //     console.log('Modal clicked!');
  //     setShowModal(true);
  //   }

  //     if (Object.keys(productStyles).length) {
  //         let productImage = productStyles.results[indexes.style].photos[indexes.photo].url ? productStyles.results[indexes.style].photos[indexes.photo].url : imageComingSoon;

  //     return (
  //       <div className="ImageGallery">
  //         <div style={{background: `center / contain no-repeat url(${productImage})`}} className="MainImage" alt="Main Product Image">
  //         </div>
  //         <div className="ImageGalleryThumbnails">
  //           {productStyles.results[indexes.style].photos.map((currentStyle, i) => (
  //             <div key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick} alt="Product Thumbnail Image"></div>
  //           ))}
  //         </div>
  //         <div className="SlideGalleryLeft">
  //           <div className="SlideGalleryLeftButton" onClick={handleLeftArrowClick}>←</div>
  //         </div>
  //         <div className="SlideGalleryRight">
  //           <div className="SlideGalleryRightButton" onClick={handleRightArrowClick}>→</div>
  //         </div>
  //         <div className="OpenGalleryModal">
  //           <div className="OpenGalleryModalButton" onClick={handleModalClick}>⧠</div>
  //             {showModal && <div id="GalleryModal" onClick={() => { setShowModal(false) }}>
  //               <div id="GalleryModalContent" className="GalleryModalContent">
  //                 <img className="ModalImage" src={productImage} alt="Product Image Close Up" />
  //               </div>
  //             </div>}
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="ImageGallery">
  //         <h3>Loading...</h3>
  //       </div>
  //     )
  //   }
  // }

  // Product Information Component (split with Slogan, Description, and Features)
  // let ProductInformation = ({productById, productStyles, indexes}) => {

  //   if (Object.keys(productStyles).length) {
  //     return (
  //       <div className="ProductInformation">
  //         <div className="StarsAndReviews">
  //           <div>
  //           ☆☆☆☆☆
  //           </div>
  //           <div>
  //           <a href="">Read all (#) reviews</a>
  //           </div>
  //         </div>
  //         <div className="ProductCategory">
  //           {productById.category}
  //         </div>
  //         <div className="ProductName">
  //           {productById.name}
  //         </div>
  //         <div>
  //           {!productStyles.results[indexes.style].sale_price && <div>{`$${productStyles.results[indexes.style].original_price}`}</div>}
  //           {productStyles.results[indexes.style].sale_price && <div><div style={{textDecoration: 'line-through'}}>{`$${productStyles.results[indexes.style].original_price}`}</div><div style={{color: 'red'}}>{`$${productStyles.results[indexes.style].sale_price}`}</div></div>}
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="ProductInformation">
  //         <h3>Loading...</h3>
  //       </div>
  //     );
  //   }
  // }

  // Style Selector Component
  // let StyleSelector = ({productStyles, indexes, handleStyleClick}) => {

  //   if (Object.keys(productStyles).length) {
  //     return (
  //       <div className="StyleSelector">
  //         <div className="SelectedStyle">
  //           <div className="SelectedStyleHeader">
  //           Style:
  //           </div>
  //           <div className="SelectedStyleDescription">
  //           {productStyles.results[indexes.style].name}
  //           </div>
  //         </div>
  //         <div className="StyleSelectorIcons">
  //           {productStyles.results.map((style, i) => (
  //               <label key={i} htmlFor="selectedStyle">
  //                 <div key={i} index={i} onClick={handleStyleClick} style={{background: `center / contain no-repeat url(${style.photos[0].thumbnail_url})`}} className="StyleIcon"></div>
  //                 {/* <input type="radio" id="selectedStyle" /> */}
  //               </label>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //     <div className="StyleSelector">
  //       <h3>Loading...</h3>
  //     </div>
  //     );
  //   }
  // }

  // // Add to Cart Component
  // let AddToCart = ({productStyles, indexes, changeInOutfit, outfitIds, cam_token}) => {

  //   console.log('INDEXES IN CART:', indexes);
  //   let stylesIndex = indexes.style;
  //   const [currentSize, setCurrentSize] = useState(null);
  //   console.log('CURRENT SIZE:', currentSize);
  //   const [currentQuantity, setCurrentQuantity] = useState(null);
  //   console.log('CURRENT QTY:', currentQuantity);
  //   const [qtyInStock, setQtyInStock] = useState([]);
  //   const [outOfStock, setOutOfStock] = useState(false);
  //   const [myOutfitIcon, setMyOutfitIcon] = useState('⭐');
  //   // const [defaultSizeAndQty, setDefaultSizeAndQty] = useState({size: 'SELECT SIZE', qty: '-'});
  //   // console.log('DEFAULT SZ AND QTY:', defaultSizeAndQty);


  //   useEffect(() => {
  //     setCurrentQuantity(null);
  //     setCurrentSize(null);
  //     setQtyInStock([]);
  //   }, [stylesIndex]);

  //   let handleMyOutfitCollection = () => {
  //     if (outfitIds.includes(productStyles.product_id)) {
  //       setMyOutfitIcon('❤️');
  //     } else {
  //       setMyOutfitIcon('⭐');
  //     }
  //   }

  //   useEffect(() => {
  //     handleMyOutfitCollection()
  //   }, [productStyles.product_id])


  //   if(Object.keys(productStyles).length) {

  //     let skusArray = [];
  //     let currentSkus = productStyles.results[indexes.style].skus;
  //     for (let key in currentSkus) {
  //       skusArray.push(currentSkus[key]);
  //     }

  //     // this variable correctly tracks product and style id for AddToBag or MyOutfit
  //     let currentProductStyleData = {productId: productStyles.product_id,
  //       styleId: productStyles.results[indexes.style].style_id}
  //     console.log('CURRENT PRODUCT STYLE ID:', currentProductStyleData);

  //     let handleMyOutfitClick = (event) => {
  //       event.persist();
  //       if (myOutfitIcon === '⭐') {
  //         changeInOutfit(event, productStyles.product_id, 'Add');
  //         setMyOutfitIcon('❤️');
  //       }
  //       if (myOutfitIcon === '❤️') {
  //         changeInOutfit(event, productStyles.product_id, 'Delete');
  //         setMyOutfitIcon('⭐');
  //       }
  //       event.preventDefault();
  //     }




  //     let handleSizeClick = (event) => {
  //       event.persist();
  //       setOutOfStock(false);
  //       let selectedSize = event.target.value;
  //       console.log('SIZE IN SIZE CLICK:', selectedSize);
  //       for (var i = 0; i < skusArray.length; i++) {
  //         if (skusArray[i].size === selectedSize) {
  //           let availableQuantity = skusArray[i].quantity;
  //           let quantityArray = [];
  //           if (!availableQuantity) {
  //             setOutOfStock(true);
  //           } else if (availableQuantity <= 15) {
  //             for (let q = 1; q <= availableQuantity; q++) {
  //               quantityArray.push(q);
  //             }
  //           } else {
  //             for (let q = 1; q <= 15; q++) {
  //               quantityArray.push(q);
  //             }
  //           }
  //           // console.log('AVAIL QUANTITY:', availableQuantity);
  //           // console.log('QTY ARRAY:', quantityArray);
  //           // setDefaultSizeAndQty({qty: quantityArray, size: selectedSize});
  //           setCurrentSize(selectedSize);
  //           setQtyInStock(quantityArray);
  //         }
  //       }

  //       event.preventDefault();
  //     }

  //     let handleQuantityClick = (event) => {
  //       event.persist();
  //       let selectedQty = event.target.value;
  //       setCurrentQuantity(selectedQty);
  //       event.preventDefault();
  //     }

  //     let handleAddToBag = () => {
  //       console.log('Added to bag!')
  //       // get sku
  //       let productSkuForBag;
  //       for (let key in currentSkus) {
  //         if (currentSize === currentSkus[key].size) {
  //           productSkuForBag = key;
  //           console.log('Product Sku:', productSkuForBag);
  //         }
  //       }
  //       let optionsForCart = {
  //         url: '/cart',
  //         method: 'post',
  //         headers: {'Content-Type': 'application/json',
  //         'Authorization': cam_token.cam_token},
  //         data: {sku_id: productSkuForBag}
  //       };
  //       axios(optionsForCart)
  //         .then(response => {
  //           console.log('Response from Cart:', response.data);
  //         })
  //           .catch(error => {
  //             console.log(error);
  //           });
  //     }



  //     return (
  //       <div className="AddToCart">
  //         <div className="SizeSelector">
  //           <form>
  //             <select className="SizeSelectorDropdown" onChange={handleSizeClick}>
  //               {!outOfStock && <option value="">SELECT SIZE</option>}
  //               {/* {outOfStock && <option style={{color: 'red', height: 'auto', width: 'auto'}}>OUT OF STOCK</option>} */}
  //               {skusArray.map((skuData, i) => (
  //                 <option className="SizeOption" key={i} value={skuData.size} selected={currentSize === skuData.size ? true : false}>{skuData.size}</option>
  //               ))}
  //             </select>
  //           </form>
  //         </div>
  //         <div className="QuanititySelector">
  //           <form>
  //             <select className="QuanititySelectorDropdown" onChange={handleQuantityClick}>
  //             <option value="">-</option>
  //               {qtyInStock.length && qtyInStock.map((qty, i) => (
  //                 <option className="QuantityOption" key={i} value={qty} selected={currentQuantity === qty ? true : false}>{qty}</option>
  //               ))}
  //             </select>
  //           </form>
  //         </div>
  //          {outOfStock && <div className="AddToBag">
  //           <button className="AddToBagButton" style={{color: 'red'}} alt="Product Out of Stock">OUT OF STOCK</button>
  //         </div>}
  //         {!outOfStock && <div className="AddToBag">
  //           <button className="AddToBagButton" onClick={handleAddToBag} alt="Add Product to Bag">Add to Bag</button>
  //         </div>}
  //         <div className="AddToFavorite">
  //           <button className="AddToFavoriteButton" onClick={handleMyOutfitClick} alt="Add Product to My Outfit">{myOutfitIcon}</button>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="AddToCart">
  //         <h3>Loading...</h3>
  //       </div>
  //     );
  //   }
  // }

  // Product Slogan and Description Component
  // let ProductSloganAndDescription = ({productById}) => {
  //   return (
  //     <div className="ProductSloganAndDescription">
  //         <div className="ProductSlogan">
  //           {productById.slogan}
  //         </div>
  //         <div className="ProductDescription">
  //           {productById.description}
  //         </div>
  //     </div>
  //   );
  // }

  // Product Features Component
  // let ProductFeatures = ({productById}) => {

  //   return (
  //     <div className="ProductFeatures">
  //       {(Object.keys(productById).length) && <div className="ProductFeaturesList">
  //         {productById.features.map((productFeature, i) => (
  //           <div key={i}>✔ {productFeature.feature}: {productFeature.value}</div>
  //         ))}
  //       </div>}
  //     </div>
  //   );
  // }



// Overview.propTypes = {
//   cam_token: PropTypes.string
// }
// ImageGallery.propTypes = {
//   products: PropTypes.array,
//   handleLeftArrowClick: PropTypes.func,
//   handleRightArrowClick: PropTypes.func,
//   handleThumbnailClick: PropTypes.func,
//   indexes: PropTypes.object,
//   productStyles: PropTypes.object
// }
// ProductFeatures.propTypes = {
//   productById: PropTypes.object,
//   cam_token: PropTypes.object
// }
// ProductSloganAndDescription.propTypes = {
//   productById: PropTypes.object
// }
// AddToCart.propTypes = {
//   productStyles: PropTypes.object,
//   indexes: PropTypes.object,
//   changeInOutfit: PropTypes.func,
//   outfitIds: PropTypes.array,
//   cam_token: PropTypes.object
// }
// StyleSelector.propTypes = {
//   productStyles: PropTypes.object,
//   handleStyleClick: PropTypes.func,
//   indexes: PropTypes.object
// }
Overview.propTypes = {
  cam_token: PropTypes.object,
  products: PropTypes.array,
  productId: PropTypes.number,
  changeInOutfit : PropTypes.func,
  outfitIds: PropTypes.array
}
// ProductInformation.propTypes = {
//   productById: PropTypes.object,
//   productStyles: PropTypes.object,
//   indexes: PropTypes.object
// }

export default Overview;
export {ImageGallery, ProductInformation, ProductFeatures, ProductSloganAndDescription, StyleSelector};