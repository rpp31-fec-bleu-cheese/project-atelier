import React from 'React';
import PropTypes from 'prop-types';

import StarBar from './StarBar.jsx';

const RatingsContainer = props => {
  /*
   * This block of code discovers the total amount of ratings, as well as the overall rating of the current product
   */
  let ratingSum = 0; // This value will represent the sum of all ratings
  let rateQuantity = 0; // This value will represent only the total number of rates

  let ratingArray = Object.entries(props.ratings);

  for (let [key, value] of ratingArray) {
    ratingSum += key * value;
    rateQuantity += Number(value); //Number() is called here due to the values at each key being strings
  }

  let finalRating = ratingSum / rateQuantity; // This value will be the actual rating displayed on the page /// Number between 1 - 5
  /////////////////

  /*
   * This block of code discovers the percantage of reviewers who recommended the current product
   */
  let recommended = 0;

  for (let i = 0; i < props.reviews.length; i++) {
    if (props.reviews[i].recommend === true) recommended ++;
  }

  recommended = Math.round(recommended / rateQuantity * 100)
  /////////////////

  return (
    <div id='RatingsContainer'>
      <div id='Rating'>
        {finalRating.toFixed(1)}
      </div>
      <div id='StarsContainer'>
        <div className='Stars'>
          <div className='empty-stars'></div>
          <div className='full-stars' style={{width: ((finalRating / 5) * 100) + '%' }}></div>
        </div>
      </div>
      <div id='recommended'>{recommended + '%'} of reviews recommend this product</div>
      <div id='StarBars'>
        {ratingArray.map((item, i) => <StarBar key={i} rating={item} quantity={rateQuantity} onclick={props.onclick}/>).reverse()}
      </div>
    </div>
  );
};

RatingsContainer.propTypes = {
  ratings: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  onclick: PropTypes.func.isRequired
}

export default RatingsContainer;