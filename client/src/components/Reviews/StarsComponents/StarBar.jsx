import React from 'React';
import PropTypes from 'prop-types';

const StarBar = props => {
  return (
    <div className='StarBar'>
      <div id='rating'>{props.rating[0]} stars</div>
      <div id='bar' style={{width: ((props.rating[0] * props.rating[1]) / props.sum) * 10 + '%'}}></div>
    </div>
  );
};

StarBar.propTypes = {
  rating: PropTypes.array.isRequired,
  sum: PropTypes.number.isRequired
}

export default StarBar;