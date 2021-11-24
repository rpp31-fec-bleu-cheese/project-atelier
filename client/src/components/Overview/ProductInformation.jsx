import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductInformation = ({productById, productStyles, indexes, starRating}) => {

  if (Object.keys(productStyles).length) {
    return (
      <div className="ProductInformation">
        <div className="StarsAndReviews">
          <div data-testid="ProductStars">
          <StarRating starRating={starRating}/>
          </div>
          <div>
          <a href="#RatingsReviews" data-testid="ProductReviewsLink">Read all reviews</a>
          </div>
        </div>
        <div className="ProductCategory" data-testid="ProductByCategory">
          {productById.category}
        </div>
        <div className="ProductName" data-testid="ProductByName">
          {productById.name}
        </div>
        <div data-testid="ProductByPrice" className="ProductPrice">
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

let StarRating = ({starRating}) => {
  return (
    <div className='StarsContainer'>
    <div className='Stars'>
      <div className='empty-stars'></div>
      <div className='full-stars' style={{width: ((starRating / 5) * 100) + '%' }}></div>
    </div>
  </div>
  )
}


ProductInformation.propTypes = {
  productById: PropTypes.object,
  productStyles: PropTypes.object,
  indexes: PropTypes.object,
  starRating: PropTypes.number
}

StarRating.propTypes = {
  starRating: PropTypes.number
}

export default ProductInformation;