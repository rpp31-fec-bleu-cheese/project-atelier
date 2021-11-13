import React from 'React';
import PropTypes from 'prop-types';

const PhotoModal = props => {
  return (
    <div id='Modal'>
      <span id='CloseImage' onClick={props.onclick}>{'\u00D7'}</span>
      <img id='FullImage' src={props.photo.src}></img>
    </div>
  );
}

PhotoModal.propTypes = {
  photo: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired
}

export default PhotoModal;