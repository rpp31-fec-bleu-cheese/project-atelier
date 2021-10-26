import React from 'React';
import PropTypes from 'prop-types';

import Rating from './StarsComponents/Rating.jsx';
import StarBar from './StarsComponents/StarBar.jsx'

const Stars = props => {
  let rating = 0; // This value will represent the sum of all ratings
  let rateQuantity = 0; // This value will represent only the total number of rates

  let ratingArray = Object.entries(props.ratings);

  for (let [key, value] of ratingArray) {
    rating += key * value;
    rateQuantity += Number(value); //Number() is called here due to the values at each key being strings
  }

  let finalRating = rating / rateQuantity; // This value will be the actual rating /// Number between 1 - 5

  return (
    <div id='StarsContainer'>
      <Rating rating={finalRating}/>
      <div id='StarBars'>
        {ratingArray.map((item, i) => <StarBar key={i} rating={item} sum={finalRating}/>).reverse()}
      </div>
    </div>
  );
};

Stars.propTypes = {
  ratings: PropTypes.object.isRequired
}

export default Stars;