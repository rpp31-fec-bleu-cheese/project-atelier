import React from 'react';
import PropTypes from 'prop-types';

import StarBar from './StarBar.jsx';

const RatingsContainer = props => {
  let recommended = 0,
    ratingArray = Object.entries(props.ratings);

  if (props.reviews.length > 0) {
   /*
    * This block of code discovers the percentage of reviewers who recommended the current product
    */
    for (let i = 0; i < props.reviews.length; i++) {
      if (props.reviews[i].recommend === true) recommended ++;
    }

    recommended = Math.round(recommended / props.rateQuantity * 100)
    console.log(recommended)
  }

  return (
    <div id='RatingsContainer'>
      <div id='Rating'>
        {props.finalRating}
      </div>
      <div id='StarsContainer'>
        <div className='Stars'>
          <div className='empty-stars'></div>
          <div className='full-stars' style={{width: ((props.finalRating / 5) * 100) + '%' }}></div>
        </div>
      </div>
      <div id='recommended'>{recommended + '%'} of reviews recommend this product</div>
      <div id='StarBars'>
        {ratingArray.map((item, i) => <StarBar key={i} rating={item} quantity={props.rateQuantity} onclick={props.onclick}/>).reverse()}
      </div>
    </div>
  );
};

RatingsContainer.propTypes = {
  ratings: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  onclick: PropTypes.func.isRequired,
  finalRating: PropTypes.number.isRequired,
  rateQuantity: PropTypes.number.isRequired
}

export default RatingsContainer;