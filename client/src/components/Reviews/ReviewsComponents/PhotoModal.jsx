import React from 'react';
import PropTypes from 'prop-types';

const PhotoModal = props => {
  return (
    <div id='Modal' onClick={props.onclick}>
      <span id='CloseImage'>{'\u00D7'}</span>
      <img id='FullImage' onClick={()=>{}}src={props.photo.src}></img>
    </div>
  );
}

PhotoModal.propTypes = {
  photo: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired
}

export default PhotoModal;