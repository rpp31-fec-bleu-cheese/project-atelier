import React from 'react';
import PropTypes from 'prop-types';

const PhotoModal = ({ showModal, setShowModal, photo }) => {
  return (
    <>
      { showModal ? (
        <div className="photo-modal">
          <div className="modal-background">
            <div className="modal-content">
              <div className="thumbnail-image">
                <img src={photo} alt="product-image" onClick={() => setShowModal(false)}/>
              </div>
            </div>
          </div>
        </div>
      ) : null }
    </>
  )
};

PhotoModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  photo: PropTypes.string
}

export default PhotoModal;