import React, { useState, useEffect }  from 'react';
// import { useState } from 'React';
import PropTypes from 'prop-types';
import axios from 'axios';



// removed products from props
let Overview = ({cam_token}) => {

  const [products, setProducts] = useState([]);
  console.log('PRODUCTS:', products);
  const [index, setIndex] = useState(0);
  let currentProduct = products.length > 0 ? products[index] : {'id': 59553};
  console.log('CURRENT PRODUCT:', currentProduct);
  const [productById, setProductById] = useState({});
  console.log('CURRENT PRODUCT BY ID:', productById);
  const [productStyles, setProductStyles] = useState({});
  console.log('CURRENT PRODUCT STYLE:', productStyles);
  const [productPhotoIndex, setProductPhotoIndex] = useState(0);
  console.log('CURRENT PHOTO INDEX:', productPhotoIndex);
  const [productStyleIndex, setProductStyleIndex] = useState(0);
  console.log('CURRENT STYLE INDEX:', productStyleIndex);


  useEffect(() => {
    let productOptions = {
      url: '/products',
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productOptions)
      .then(response => {
        console.log('ALL PRODUCTS API RESPONSE:', response)
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
        console.log('PRODUCT ID API RESPONSE:', response)
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
              console.log('PRODUCT STYLES API RESPONSE:', response)
              setProductStyles(response.data);
            })
              .catch(error => {
                console.log(error)});
  }, [currentProduct]);


  let resetPhotoIndex = () => {
    setProductPhotoIndex(0);
  }

  let handleLeftArrowClick = () => {
    if (index === 0) {
      let nextIndex = products.length - 1;
      setIndex(nextIndex);
      resetPhotoIndex();
    } else {
      setIndex(index - 1);
      resetPhotoIndex();
    }
  }

  let handleRightArrowClick = () => {
    let nextIndex = (index + 1) % products.length;
    setIndex(nextIndex);
    resetPhotoIndex();
  }
  let handleThumbnailClick = (event) => {
    event.persist();
    let indexValue = Number(event.target.attributes.index.nodeValue);
    setProductPhotoIndex(indexValue);
    event.preventDefault();
  }


  return (
    <div data-testid="Overview" id='Overview'>
      {/* <ErrorBoundary arr={[]}> */}
      {products.length > 0 && <><ImageGallery products={products} productStyleIndex={productStyleIndex} productPhotoIndex={productPhotoIndex} handleThumbnailClick={handleThumbnailClick} handleLeftArrowClick={handleLeftArrowClick}
       handleRightArrowClick={handleRightArrowClick} productStyles={productStyles} />
      <ProductInformation currentProduct={currentProduct} />
      <StyleSelector products={products} />
      <AddToCart products={products} productStyles={productStyles} productStyleIndex={productStyleIndex} />
      <ProductSloganAndDescription currentProduct={currentProduct} />
      <ProductFeatures productById={productById} cam_token={cam_token} /></>}
      {/* </ErrorBoundary> */}
    </div>
  );

  };

  // Image Gallery Component
  let ImageGallery = ({products, handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick, productStyleIndex, productPhotoIndex, productStyles}) => {
    // const [productStyleIndex, setProductStyleIndex] = useState(0);
    // const [productPhotoIndex, setProductPhotoIndex] = useState(0);
    console.log('PRODUCT STYLES IN GALLERY:', productStyles);
    let imageComingSoon = '/media';

    let productImage;
    // let productThumbnail;
    // let handleThumbnailClick = (event) => {
    //   event.persist();
    //   let indexValue = event.target.attributes.index.nodeValue;
    //   console.log('INDEX VALUE CLICKED:', indexValue);
    //   setProductPhotoIndex(indexValue);
    //   event.preventDefault();
    // }


    if (Object.keys(productStyles).length) {
          productImage = productStyles.results[productStyleIndex].photos[productPhotoIndex].url ? productStyles.results[productStyleIndex].photos[productPhotoIndex].url : imageComingSoon;
          // productThumbnail = productStyles.results[productStyleIndex].photos[0].thumbnail_url ? productStyles.results[productStyleIndex].photos[0].thumbnail_url : imageComingSoon;
      return (
        <div className="ImageGallery">
          <div style={{background: `center / contain no-repeat url(${productImage})`}} className="MainImage" alt="Main Product Image">
            {/* <img src={productStyles.results[0].photos[0].url || imageComingSoon} /> */}
          </div>
          <div className="ImageGalleryThumbnails">
            {productStyles.results[productStyleIndex].photos.map((currentStyle, i) => (
              <div key={i} index={i} style={{background: `center / contain no-repeat url(${currentStyle.thumbnail_url})`}} className="GalleryThumbnail" onClick={handleThumbnailClick}></div>
            ))}
            {/* <div style={{background: `center / contain no-repeat url(${productThumbnail})`}} className="GalleryThumbnail"></div>*/}
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
  let ProductInformation = ({currentProduct}) => {
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
          {`$${currentProduct.default_price}`}
        </div>
      </div>
    );
  }

  // Style Selector Component
  let StyleSelector = ({products}) => {
    return (
      <div className="StyleSelector">
        <div className="SelectedStyle">
          <div className="SelectedStyleHeader">
          Style:
          </div>
          <div className="SelectedStyleDescription">
          Selected Style
          </div>
        </div>
        <div className="StyleSelectorIcons">
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
        </div>
      </div>
    );
  }

  // Add to Cart Component
  let AddToCart = ({productStyles, productStyleIndex}) => {

    const [currentSize, setCurrentSize] = useState('');
    console.log('CURRENT SIZE:', currentSize);
    const [currentQuantity, setCurrentQuantity] = useState([]);
    const [isMyOutfit, setIsMyOutfit] = useState();
    const [myOutfitIcon, setMyOutfitIcon] = useState('⭐');
    // const [defaultQty, setDefaultQty] = useState('-');

    // useEffect(() => {
    //   let standardDefault = 1;
    //   setDefaultQty(standardDefault);
    // }, [currentQuantity])

    if(Object.keys(productStyles).length) {
      let skusArray = [];
      let currentSku = productStyles.results[productStyleIndex].skus

      for (let key in currentSku) {
        skusArray.push(currentSku[key]);
      }
      console.log('Skus Array:', skusArray);

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
            console.log('AVAIL QUANTITY:', availableQuantity);
            console.log('QTY ARRAY:', quantityArray);
            setCurrentQuantity(quantityArray);
            setCurrentSize(selectedSize);
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
              <option value="">-</option>
                {currentQuantity.length && currentQuantity.map((qty, i) => (
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
  productStyleIndex: PropTypes.number,
  productPhotoIndex: PropTypes.number,
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
  productStyleIndex: PropTypes.number
}
StyleSelector.propTypes = {
  products: PropTypes.array
}
Overview.propTypes = {
  products: PropTypes.array
}
ProductInformation.propTypes = {
  currentProduct: PropTypes.object
}

export default Overview;