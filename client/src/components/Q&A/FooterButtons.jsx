import React, {useState} from 'react';
import PropTypes from 'prop-types';
import QuestionModal from './modalComponents/QuestionModal.jsx';

const FooterButtons = ({ questionsLength, handleClick, productID, currentProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="footer-buttons">
      { questionsLength > 2 ?
        (<button className="additional-answers-button" onClick={handleClick}>MORE ANSWERED QUESTIONS</button>) : null
      }
      <button className="add-question-button" onClick={openModal}>ADD A QUESTION +</button>
      <QuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
        productID={productID}
        currentProduct={currentProduct}/>
    </div>
  )
};

FooterButtons.propTypes = {
  questionsLength: PropTypes.number,
  handleClick: PropTypes.func,
  productID: PropTypes.number,
  currentProduct: PropTypes.string
};

export default FooterButtons;