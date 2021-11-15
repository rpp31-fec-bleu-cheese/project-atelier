import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductInformation = ({productById, productStyles, indexes}) => {

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
          {productById.category}
        </div>
        <div className="ProductName">
          {productById.name}
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

ProductInformation.propTypes = {
  productById: PropTypes.object,
  productStyles: PropTypes.object,
  indexes: PropTypes.object
}


export default ProductInformation;