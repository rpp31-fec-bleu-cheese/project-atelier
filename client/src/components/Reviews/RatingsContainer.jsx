import React from 'React';
import PropTypes from 'prop-types';

import Rating from './StarsComponents/Rating.jsx';
import StarBar from './StarsComponents/StarBar.jsx';
import Stars from './StarsComponents/Stars.jsx';

const RatingsContainer = props => {
  let ratingSum = 0; // This value will represent the sum of all ratings
  let rateQuantity = 0; // This value will represent only the total number of rates

  let ratingArray = Object.entries(props.ratings);

  for (let [key, value] of ratingArray) {
    ratingSum += key * value;
    rateQuantity += Number(value); //Number() is called here due to the values at each key being strings
  }

  let finalRating = ratingSum / rateQuantity; // This value will be the actual rating displayed on the page /// Number between 1 - 5

  return (
    <div id='RatingsContainer'>
      <Rating rating={finalRating} />
      <Stars rating={finalRating}/>
      <div id='StarBars'>
        {ratingArray.map((item, i) => <StarBar key={i} rating={item} quantity={rateQuantity}/>).reverse()}
      </div>
    </div>
  );
};

RatingsContainer.propTypes = {
  ratings: PropTypes.object.isRequired
}

export default RatingsContainer;