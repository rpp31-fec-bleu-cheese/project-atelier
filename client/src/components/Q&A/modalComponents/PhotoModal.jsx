import React from 'react';
import PropTypes from 'prop-types';

const PhotoModal = ({ showModal, setShowModal, photo }) => {
  return (
    <>
      { showModal ? (
        <div className="photo-modal">
          <div className="modal-background">
            <div className="modal-content">
              <div className="thumbnail-image" onClick={() => setShowModal(false)}>
                {/* <span onClick={() => setShowModal(false)}>&times;</span> */}
                <img src={photo} alt="product-image"/>
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