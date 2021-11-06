import React, {useState} from 'react';
import PropTypes from 'prop-types';
import QuestionModal from './modalComponents/QuestionModal.jsx';

const FooterButtons = ({ handleClick }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="footer-buttons">
      <button className="additional-answers-button" onClick={handleClick}>MORE ANSWERED QUESTIONS</button>
      <button className="add-question-button" onClick={openModal}>ADD A QUESTION +</button>
      <QuestionModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
};

FooterButtons.propTypes = {
  handleClick: PropTypes.func
};

export default FooterButtons;