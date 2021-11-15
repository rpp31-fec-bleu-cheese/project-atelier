import React from 'React';
import PropTypes from 'prop-types';

const ReviewModal = props => {
  return (
    <div id='Modal'>
      <div id='ReviewForm'>

      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  onsubmit: PropTypes.func.isRequired
}

export default ReviewModal;