import React from 'React';
import PropTypes from 'prop-types';

const Rating = props => {
  return (
    <div id='Rating'>
      {props.rating.toFixed(1)}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default Rating;