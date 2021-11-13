import React from 'React';
import PropTypes from 'prop-types';

const WriteButton = props => {
  return (
    <div id='WriteButton' className='Button' onClick={props.onclick}>
      WRITE REVIEW
    </div>
  );
};

WriteButton.propTypes = {
  onclick: PropTypes.func.isRequired
}

export default WriteButton;