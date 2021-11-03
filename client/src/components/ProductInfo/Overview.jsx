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

  useEffect(() => {
    let productOptions = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
      method: 'get',
      headers: {'Content-Type': 'application/json',
      'Authorization': cam_token.cam_token}
    };
    axios(productOptions)
      .then(response => {
        console.log('ALL PRODUCTS API RESPONSE:', response)
        setProducts(response.data);
          axios(productIdOptions)
            .then(response => {
            console.log('PRODUCT ID API RESPONSE:', response)
            setProductById(response.data);
          })
        })
        .catch(error => {
          console.log(error)});

          let productIdOptions = {
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${currentProduct.id}`,
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
                  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${currentProduct.id}/styles`,
                  method: 'get',
                  headers: {'Content-Type': 'application/json',
                  'Authorization': cam_token.cam_token}
                };
                axios(productStylesOptions)
                  .then(response => {
                    console.log('PRODUCT ID API RESPONSE:', response)
                    setProductStyles(response.data.results);
                  })
                    .catch(error => {
                      console.log(error)});
      }, []);

    return (
      <div id='Overview'>
        {products.length > 0 && <><ImageGallery products={products} />
        <ProductInformation currentProduct={currentProduct} />
        <StyleSelector products={products} />
        <AddToCart products={products} />
        <ProductSloganAndDescription currentProduct={currentProduct} />
        <ProductFeatures productById={productById} cam_token={cam_token} /></>}
      </div>
    );

  };

  // Image Gallery Component
  let ImageGallery = ({products}) => {
    return (
      <div className="ImageGallery">
        <div className="MainImage">
          Main image here
        </div>
        <div className="ImageGalleryThumbnails">
          <div className="GalleryThumbnail">Test</div>
          <div className="GalleryThumbnail">Test</div>
          <div className="GalleryThumbnail">Test</div>
          <div className="GalleryThumbnail">Test</div>
          <div className="GalleryThumbnail">Test</div>
        </div>
        <div className="SlideGalleryLeft">
          <div className="SlideGalleryLeftButton">←</div>
        </div>
        <div className="SlideGalleryRight">
          <div className="SlideGalleryRightButton">→</div>
        </div>
        <div className="OpenGalleryModal">
          <div className="OpenGalleryModalButton">⧠</div>
        </div>
      </div>
    );
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
  let AddToCart = ({products}) => {
    return (
      <div className="AddToCart">
        <div className="SizeSelector">
          <form>
            <select className="SizeSelectorDropdown" onChange={() => console.log('Size clicked!')}>
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </form>
        </div>
        <div className="QuanititySelector">
          <form>
            <select className="QuanititySelectorDropdown" onChange={() => console.log('Quantity clicked!')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="AddToBag">
          <button className="AddToBagButton" onClick={() => console.log('Add to Bag clicked!')}>Add to Bag</button>
        </div>
        <div className="AddToFavorite">
          <button className="AddToFavoriteButton" onClick={() => console.log('Add to My Outfit clicked!')}>☆</button>
        </div>
      </div>
    );
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
  let ProductFeatures = ({productById, cam_token}) => {
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
  products: PropTypes.array
}
ProductFeatures.propTypes = {
  productById: PropTypes.object,
  cam_token: PropTypes.object
}
ProductSloganAndDescription.propTypes = {
  currentProduct: PropTypes.object
}
AddToCart.propTypes = {
  products: PropTypes.array
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