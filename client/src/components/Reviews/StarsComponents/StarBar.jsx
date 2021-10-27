import React from 'React';
import PropTypes from 'prop-types';

const StarBar = props => {
  return (
    <div className='StarBar'>
      <div id='rating'>{props.rating[0]} stars</div>
      <div id='bar' style={{width: ((props.rating[1] / props.quantity )  ) * 100 + '%'}}></div>
    </div>
  );
};

StarBar.propTypes = {
  rating: PropTypes.array.isRequired,
  quantity: PropTypes.number.isRequired
}

export default StarBar;