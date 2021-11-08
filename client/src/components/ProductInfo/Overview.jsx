import React, { useState, useEffect }  from 'react';
// import { useState } from 'React';
import PropTypes from 'prop-types';
import axios from 'axios';



// removed products from props
let Overview = ({cam_token}) => {

  const [products, setProducts] = useState([]);
  // console.log('PRODUCTS:', products);
  const [indexes, setIndexes] = useState({product: 0, style: 0, photo: 0});
  let currentProduct = products.length > 0 ? products[indexes.product] : {'id': 59553};
  // console.log('CURRENT PRODUCT:', currentProduct);
  const [productById, setProductById] = useState({});
  // console.log('CURRENT PRODUCT BY ID:', productById);
  const [productStyles, setProductStyles] = useState({});
  // // console.log('CURRENT PRODUCT STYLE:', productStyles);
  // const [productPhotoIndex, setProductPhotoIndex] = useState(0);
  // // console.log('CURRENT PHOTO INDEX:', productPhotoIndex);
  // const [productStyleIndex, setProductStyleIndex] = useState(0);
  // // console.log('CURRENT STYLE INDEX:', productStyleIndex);

  useEffect(() => {
    let productOptions = {
      url: '/products',
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productOptions)
      .then(response => {
        // console.log('ALL PRODUCTS API RESPONSE:', response)
        setProducts(response.data);
        })
        .catch(error => {
          console.log(error)});
      }, []);

  useEffect (() => {
    let productIdOptions = {
      url: `/products/${currentProduct.id}`,
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productIdOptions)
      .then(response => {
        // console.log('PRODUCT ID API RESPONSE:', response)
        setProductById(response.data);
      })
        .catch(error => {
          console.log(error)});

          let productStylesOptions = {
            url: `products/${currentProduct.id}/styles`,
            method: 'get',
            headers: {'Content-Type': 'application/json',
            'Authorization': cam_token.cam_token}
          };
          axios(productStylesOptions)
            .then(response => {
              // console.log('PRODUCT STYLES API RESPONSE:', response)
              setProductStyles(response.data);
            })
              .catch(error => {
                console.log(error)});
  }, [currentProduct]);


  // useEffect(() => {

  //     setProductPhotoIndex(0);


  // }, [indexes]);

  // let resetPhotoIndex = () => {
  //   setProductPhotoIndex(0);
  // }

  let handleLeftArrowClick = () => {
    if (indexes.product === 0) {
      let nextIndex = products.length - 1;
      setIndexes({style: 0, product: nextIndex, photo: 0});
      // resetPhotoIndex();
    } else {
      setIndexes({style: 0, product: indexes.product - 1, photo: 0});
      // resetPhotoIndex();
    }
  }

  let handleRightArrowClick = () => {
    let nextIndex = (indexes.product + 1) % products.length;
    setIndexes({style: 0, photo: 0, product: nextIndex});
    // resetPhotoIndex();
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
    <div data-testid="Overview" id='Overview'>
      {products.length > 0 && <><ImageGallery products={products} indexes={indexes} handleThumbnailClick={handleThumbnailClick} handleLeftArrowClick={handleLeftArrowClick}
       handleRightArrowClick={handleRightArrowClick} productStyles={productStyles} />
      <ProductInformation currentProduct={currentProduct} productStyles={productStyles} indexes={indexes} />
      <StyleSelector productStyles={productStyles} indexes={indexes} handleStyleClick={handleStyleClick}  />
      <AddToCart products={products} productStyles={productStyles} indexes={indexes} />
      <ProductSloganAndDescription currentProduct={currentProduct} />
      <ProductFeatures productById={productById} cam_token={cam_token} /></>}
    </div>
  );

  };

  // Image Gallery Component
  let ImageGallery = ({products, handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick, indexes, productStyles}) => {

    let imageComingSoon = '/media';

      if (Object.keys(productStyles).length) {
        // if (productStyles.results[productStyleIndex].photos[productPhotoIndex] === undefined) {
          //   productPhotoIndex = 0;
          // }
          let productImage = productStyles.results[indexes.style].photos[indexes.photo].url ? productStyles.results[indexes.style].photos[indexes.photo].url : imageComingSoon;

      return (
        <div className="ImageGallery">
          <div style={{background: `center / contain no-repeat url(${productImage})`}} className="MainImage" alt="Main Product Image">
            {/* <img src={productStyles.results[0].photos[0].url || imageComingSoon} /> */}
          </div>
          <div className="ImageGalleryThumbnails">
            {productStyles.results[indexes.style].photos.map((currentStyle, i) => (
              <div key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick}></div>
            ))}
          </div>
          <div className="SlideGalleryLeft">
            <div className="SlideGalleryLeftButton" onClick={handleLeftArrowClick}>←</div>
          </div>
          <div className="SlideGalleryRight">
            <div className="SlideGalleryRightButton" onClick={handleRightArrowClick}>→</div>
          </div>
          <div className="OpenGalleryModal">
            <div className="OpenGalleryModalButton">⧠</div>
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

  // Product Information Component (split with Slogan, Description, and Features)
  let ProductInformation = ({currentProduct, productStyles, indexes}) => {

    if (Object.keys(productStyles).length) {
      return (
        <div className="ProductInformation">
          <div className="StarsAndReviews">
            <div>
            ☆☆☆☆☆
            </div>
            <div>
            <a href="">Read all (#) reviews</a>
            </div>
          </div>
          <div className="ProductCategory">
            {currentProduct.category}
          </div>
          <div className="ProductName">
            {currentProduct.name}
          </div>
          <div>
            {!productStyles.results[indexes.style].sale_price && <div>{`$${productStyles.results[indexes.style].original_price}`}</div>}
            {productStyles.results[indexes.style].sale_price && <div><div style={{textDecoration: 'line-through'}}>{`$${productStyles.results[indexes.style].original_price}`}</div><div style={{color: 'red'}}>{`$${productStyles.results[indexes.style].sale_price}`}</div></div>}
          </div>
        </div>
      );
    } else {
      return (
        <div className="ProductInformation">
          <h3>Loading...</h3>
        </div>
      );
    }
  }

  // Style Selector Component
  let StyleSelector = ({productStyles, indexes, handleStyleClick}) => {

    if (Object.keys(productStyles).length) {
      return (
        <div className="StyleSelector">
          <div className="SelectedStyle">
            <div className="SelectedStyleHeader">
            Style:
            </div>
            <div className="SelectedStyleDescription">
            {productStyles.results[indexes.style].name}
            </div>
          </div>
          <div className="StyleSelectorIcons">
            {productStyles.results.map((style, i) => (
              <div key={i} index={i} onClick={handleStyleClick} style={{background: `center / contain no-repeat url(${style.photos[0].thumbnail_url})`}} className="StyleIcon"></div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
      <div className="StyleSelector">
        <h3>Loading...</h3>
      </div>
      );
    }
  }

  // Add to Cart Component
  let AddToCart = ({productStyles, indexes}) => {

    const [currentSize, setCurrentSize] = useState('');
    const [qtyInStock, setQtyInStock] = useState([]);
    const [currentQtyAndSize, setCurrentQtyAndSize] = useState({size: '', qty: []});
    const [isMyOutfit, setIsMyOutfit] = useState();
    const [myOutfitIcon, setMyOutfitIcon] = useState('⭐');
    const [defaultQty, setDefaultQty] = useState('-');



    useEffect(() => {
      if (qtyInStock.length) {
        setDefaultQty(qtyInStock[0]);
      }
    }, [qtyInStock]);

    if(Object.keys(productStyles).length) {
      let skusArray = [];
      let currentSku = productStyles.results[indexes.style].skus
      let currentProductStyleData = {productId: productStyles.product_id,
        styleId: productStyles.results[indexes.style].style_id}
      // console.log('CURRENT PRODUCT STYLE ID:', currentProductStyleData);

      for (let key in currentSku) {
        skusArray.push(currentSku[key]);
      }
      // console.log('Skus Array:', skusArray);

      let handleMyOutfitClick = (event) => {
        event.persist();
        if (myOutfitIcon === '⭐') {
          setMyOutfitIcon('❤️');
        }
        if (myOutfitIcon === '❤️') {
          setMyOutfitIcon('⭐');
        }
        event.preventDefault();
      }

      let handleSizeClick = (event) => {
        event.persist();
        let selectedSize = event.target.value;
        for (var i = 0; i < skusArray.length; i++) {
          if (skusArray[i].size === selectedSize) {
            let availableQuantity = skusArray[i].quantity;
            let quantityArray = [];
            if (availableQuantity <= 15) {
              for (let q = 1; q <= availableQuantity; q++) {
                quantityArray.push(q);
              }
            } else {
              for (let q = 1; q <= 15; q++) {
                quantityArray.push(q);
              }
            }
            // console.log('AVAIL QUANTITY:', availableQuantity);
            // console.log('QTY ARRAY:', quantityArray);
            setQtyInStock(quantityArray);
          }
        }

        event.preventDefault();
      }


      return (
        <div className="AddToCart">
          <div className="SizeSelector">
            <form>
              <select className="SizeSelectorDropdown" onChange={handleSizeClick}>
                <option value="">Select Size</option>
                {skusArray.map((skuData, i) => (
                  <option key={i} value={skuData.size}>{skuData.size}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="QuanititySelector">
            <form>
              <select className="QuanititySelectorDropdown" onChange={() => console.log('Quantity clicked!')}>
              <option value="">{defaultQty}</option>
                {qtyInStock.length && qtyInStock.map((qty, i) => (
                  <option key={i} value={qty}>{qty}</option>

                ))}
              </select>
            </form>
          </div>
          <div className="AddToBag">
            <button className="AddToBagButton" onClick={() => console.log('Add to Bag clicked!')}>Add to Bag</button>
          </div>
          <div className="AddToFavorite">
            <button className="AddToFavoriteButton" onClick={handleMyOutfitClick}>{myOutfitIcon}</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="AddToCart">
          <h3>Loading...</h3>
        </div>
      );
    }
  }

  // Product Slogan and Description Component
  let ProductSloganAndDescription = ({currentProduct}) => {
    return (
      <div className="ProductSloganAndDescription">
          <div className="ProductSlogan">
            {currentProduct.slogan}
          </div>
          <div className="ProductDescription">
            {currentProduct.description}
          </div>
      </div>
    );
  }

  // Product Features Component
  let ProductFeatures = ({productById}) => {
    // const [productById, setProductById] = useState();
    // const [hasLoaded, setHasLoaded] = useState(false);

    // useEffect(() => {
    //   if (Object.keys(productById).length) {
    //     setHasLoaded(true);
    //   }
    //     }, []);


    return (
      <div className="ProductFeatures">
        {(Object.keys(productById).length) && <div className="ProductFeaturesList">
          {productById.features.map((productFeature, i) => (
            <div key={i}>✔ {productFeature.feature}: {productFeature.value}</div>
          ))}
        </div>}
      </div>
    );
  }



Overview.propTypes = {
  cam_token: PropTypes.string
}
ImageGallery.propTypes = {
  products: PropTypes.array,
  handleLeftArrowClick: PropTypes.func,
  handleRightArrowClick: PropTypes.func,
  handleThumbnailClick: PropTypes.func,
  indexes: PropTypes.object,
  // productStyleIndex: PropTypes.number,
  // productPhotoIndex: PropTypes.number,
  productStyles: PropTypes.object
}
ProductFeatures.propTypes = {
  productById: PropTypes.object,
  cam_token: PropTypes.object
}
ProductSloganAndDescription.propTypes = {
  currentProduct: PropTypes.object
}
AddToCart.propTypes = {
  productStyles: PropTypes.object,
  // productStyleIndex: PropTypes.number,
  // productPhotoIndex: PropTypes.number
  indexes: PropTypes.object
}
StyleSelector.propTypes = {
  productStyles: PropTypes.object,
  // productStyleIndex: PropTypes.number,
  // productPhotoIndex: PropTypes.number,
  handleStyleClick: PropTypes.func,
  indexes: PropTypes.object
}
Overview.propTypes = {
  products: PropTypes.array
}
ProductInformation.propTypes = {
  currentProduct: PropTypes.object,
  productStyles: PropTypes.object,
  indexes: PropTypes.object
}

export default Overview;
// export {ImageGallery, ProductInformation, ProductFeatures, ProductSloganAndDescription, AddToCart, StyleSelector};