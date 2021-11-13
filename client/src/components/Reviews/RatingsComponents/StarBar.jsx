import React from 'react';
import PropTypes from 'prop-types';

const StarBar = props => {
  let clickFunc = starRate => {
    props.onclick(props.rating[0])
  };

  return (
    <div className='StarBar' onClick={clickFunc}>
      <div className='rating'>{props.rating[0]} star</div>
      <div className='barContainer'>
        {
          props.rating[1] !== 0 &&
          <div className='greenBar' style={{width: ((props.rating[1] / props.quantity )  ) * 100 + '%'}}></div>
        }
      </div>
    </div>
  );
};

StarBar.propTypes = {
  rating: PropTypes.array.isRequired,
  quantity: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired
}

export default StarBar;