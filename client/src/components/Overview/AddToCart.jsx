import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config.js';

// Add to Cart Component
let AddToCart = ({productStyles, indexes, changeInOutfit, outfitIds}) => {

  let stylesIndex = indexes.style;
  const [currentSize, setCurrentSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [qtyInStock, setQtyInStock] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [myOutfitIcon, setMyOutfitIcon] = useState('⭐');

  useEffect(() => {
    setCurrentQuantity(null);
    setCurrentSize(null);
    setQtyInStock([]);
  }, [stylesIndex]);

  let handleMyOutfitCollection = () => {
    if (outfitIds.includes(Number(productStyles.product_id))) {
      setMyOutfitIcon('❤️');
    } else {
      setMyOutfitIcon('⭐');
    }
  }

  useEffect(() => {
    handleMyOutfitCollection();
  }, [outfitIds])

  useEffect(() => {
    handleMyOutfitCollection()
  }, [productStyles.product_id])


  if(Object.keys(productStyles).length) {

    let skusArray = [];
    let currentSkus = productStyles.results[indexes.style].skus;
    for (let key in currentSkus) {
      skusArray.push(currentSkus[key]);
    }

    // this variable correctly tracks product and style id for AddToBag or MyOutfit
    let currentProductStyleData = {productId: productStyles.product_id,
      styleId: productStyles.results[indexes.style].style_id}


    let handleMyOutfitClick = (event) => {
      event.persist();
      let productNumber = productStyles.product_id;
      if(typeof productNumber === 'string') {
        productNumber = Number(productStyles.product_id);
      }
      if (myOutfitIcon === '⭐') {
        if(!outfitIds.includes(productNumber)) {
          changeInOutfit(event, productNumber, 'Add');
        }
        setMyOutfitIcon('❤️');
      }
      if (myOutfitIcon === '❤️') {
        changeInOutfit(event, productNumber, 'Delete');
        setMyOutfitIcon('⭐');
      }
      event.preventDefault();
    }




    let handleSizeClick = (event) => {
      event.persist();
      setOutOfStock(false);
      let selectedSize = event.target.value;
      for (var i = 0; i < skusArray.length; i++) {
        if (skusArray[i].size === selectedSize) {
          let availableQuantity = skusArray[i].quantity;
          let quantityArray = [];
          if (!availableQuantity) {
            setOutOfStock(true);
          } else if (availableQuantity <= 15) {
            for (let q = 1; q <= availableQuantity; q++) {
              quantityArray.push(q);
            }
          } else {
            for (let q = 1; q <= 15; q++) {
              quantityArray.push(q);
            }
          }
          setCurrentSize(selectedSize);
          setQtyInStock(quantityArray);
        }
      }

      event.preventDefault();
    }

    let handleQuantityClick = (event) => {
      event.persist();
      let selectedQty = event.target.value;
      setCurrentQuantity(selectedQty);
      event.preventDefault();
    }

    let handleAddToBag = () => {
      // get sku
      let productSkuForBag;
      for (let key in currentSkus) {
        if (currentSize === currentSkus[key].size) {
          productSkuForBag = key;
        }
      }
      let optionsForCart = {
        url: '/cart',
        method: 'post',
        data: {sku_id: productSkuForBag}
      };
      axios(optionsForCart)
        .then(response => {
          console.log('Response from Cart:', response.data);
        })
          .catch(error => {
            console.log(error);
          });
    }



    return (
      <div className="AddToCart">
        <div className="SizeSelector">
          <form>
            <select data-testid="SizeSelectorDropdown" className="SizeSelectorDropdown" onChange={handleSizeClick}>
              {!outOfStock && <option value="">SELECT SIZE</option>}
              {skusArray.map((skuData, i) => (
                <option data-testid={`SizeOption ${i}`} className="SizeOption" key={i} value={skuData.size} selected={currentSize === skuData.size ? true : false}>{skuData.size}</option>
              ))}
            </select>
          </form>
        </div>
        <div className="QuanititySelector">
          <form>
            <select data-testid="QuanititySelectorDropdown" className="QuanititySelectorDropdown" onChange={handleQuantityClick}>
            <option value="">-</option>
              {qtyInStock.length && qtyInStock.map((qty, i) => (
                <option data-testid={`QuantityOption ${i}`} className="QuantityOption" key={i} value={qty} selected={currentQuantity === qty ? true : false}>{qty}</option>
              ))}
            </select>
          </form>
        </div>
         {outOfStock && <div className="AddToBag">
          <button className="AddToBagButton" style={{color: 'red'}} alt="Product Out of Stock">OUT OF STOCK</button>
        </div>}
        {!outOfStock && <div className="AddToBag">
          <button data-testid="AddToBagButton" className="AddToBagButton" onClick={handleAddToBag} alt="Add Product to Bag">Add to Bag</button>
        </div>}
        <div className="AddToFavorite">
          <button data-testid="AddToFavoriteButton" className="AddToFavoriteButton" onClick={handleMyOutfitClick} alt="Add Product to My Outfit">{myOutfitIcon}</button>
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

AddToCart.propTypes = {
  productStyles: PropTypes.object,
  indexes: PropTypes.object,
  changeInOutfit: PropTypes.func,
  outfitIds: PropTypes.array
}

export default AddToCart;
export const handleAddToBag = () => {
  // get sku
  let productSkuForBag;
  for (let key in currentSkus) {
    if (currentSize === currentSkus[key].size) {
      productSkuForBag = key;
      // console.log('Product Sku:', productSkuForBag);
    }
  }
  let optionsForCart = {
    url: '/cart',
    method: 'post',
    headers: {'Content-Type': 'application/json',
    'Authorization': config.API_KEY},
    data: {sku_id: productSkuForBag}
  };
  axios(optionsForCart)
    .then(response => {
      console.log('Response from Cart:', response.data);
    })
      .catch(error => {
        console.log(error);
      });
}