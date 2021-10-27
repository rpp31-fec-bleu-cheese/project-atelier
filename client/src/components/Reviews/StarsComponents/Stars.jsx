import React from 'React';
import PropTypes from 'prop-types';

const Stars = props => {
  return (
    <div id='StarsContainer'>
      <div className='Stars'>
        <div className='empty-stars'></div>
        <div className='full-stars' style={{width: ((props.rating / 5) * 100) + '%' }}></div>
      </div>
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Stars;