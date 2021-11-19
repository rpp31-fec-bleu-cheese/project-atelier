import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductInformation = ({productById, productStyles, indexes}) => {

  if (Object.keys(productStyles).length) {
    return (
      <div className="ProductInformation">
        <div className="StarsAndReviews">
          <div data-testid="ProductStars">
          ☆☆☆☆☆
          </div>
          <div>
          <a href="" data-testid="ProductReviewsLink">Read all (#) reviews</a>
          </div>
        </div>
        <div className="ProductCategory" data-testid="ProductByCategory">
          {productById.category}
        </div>
        <div className="ProductName" data-testid="ProductByName">
          {productById.name}
        </div>
        <div data-testid="ProductByPrice">
          {!productStyles.results[indexes.style].sale_price && <div>{`$${productStyles.results[indexes.style].original_price}`}</div>}
          {productStyles.results[indexes.style].sale_price && <div><div style={{textDecoration: 'line-through'}}>{`$${productStyles.results[indexes.style].original_price}`}</div><div data-testid="ProductBySalePrice" style={{color: 'red'}}>{`$${productStyles.results[indexes.style].sale_price}`}</div></div>}
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

ProductInformation.propTypes = {
  productById: PropTypes.object,
  productStyles: PropTypes.object,
  indexes: PropTypes.object
}


export default ProductInformation;