import React from 'React';
import PropTypes from 'prop-types';

const Stars = props => {
  return (
    <div className='Stars'>
      <div className='empty-stars'></div>
      <div className='full-stars'></div>
    </div>
  );
};

export default Stars;