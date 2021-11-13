import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PhotoModal from '../modalComponents/PhotoModal.jsx';

const Photo = ({ photo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="photo"
        style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover"}}
        onClick={() => setShowModal(true)}></div>
      <PhotoModal showModal={showModal} setShowModal={setShowModal} photo={photo}/>
    </>
  )
}

export default Photo;

Photo.propTypes = {
  photo: PropTypes.string
}