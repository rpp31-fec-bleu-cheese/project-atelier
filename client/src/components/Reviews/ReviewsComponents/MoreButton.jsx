import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = props => {
  return (
    <div id='MoreButton' className='Button' onClick={props.onclick}>
      MORE REVIEWS
    </div>
  );
};

MoreButton.propTypes = {
  onclick: PropTypes.func.isRequired
}

export default MoreButton;