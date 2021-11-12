import React from 'React';
import PropTypes from 'prop-types';

import StarBar from './StarBar.jsx';

const RatingsContainer = props => {
  let ratingSum = 0,
    rateQuantity = 0,
    finalRating = 0,
    recommended = 0,
    ratingArray = Object.entries(props.ratings);

  if (props.reviews.length > 0) {
   /*
    * This block of code discovers the total amount of ratings, as well as the overall rating of the current product
    */
    for (let [key, value] of ratingArray) {
      ratingSum += key * value;
      rateQuantity += Number(value); //Number() is called here due to the values at each key being strings
    }

    finalRating = (ratingSum / rateQuantity).toFixed(1); // This value will be the actual rating displayed on the page /// Number between 1 - 5
    props.updateRating.rating = finalRating
    /////////////////

   /*
    * This block of code discovers the percentage of reviewers who recommended the current product
    */
    for (let i = 0; i < props.reviews.length; i++) {
      if (props.reviews[i].recommend === true) recommended ++;
    }

    recommended = Math.round(recommended / rateQuantity * 100)
  }

  return (
    <div id='RatingsContainer'>
      <div id='Rating'>
        {finalRating}
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
  onclick: PropTypes.func.isRequired,
  updateRating: PropTypes.object.isRequired
}

export default RatingsContainer;