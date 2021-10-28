import React from 'React';
import PropTypes from 'prop-types';

const StarBar = props => {
  return (
    <div className='StarBar'>
      <div className='rating'>{props.rating[0]} stars</div>
      <div className='barContainer'>
        {
          props.rating[1] !== '' &&
          <div className='greenBar' style={{width: ((props.rating[1] / props.quantity )  ) * 100 + '%'}}></div>
        }
      </div>
    </div>
  );
};

StarBar.propTypes = {
  rating: PropTypes.array.isRequired,
  quantity: PropTypes.number.isRequired
}

export default StarBar;