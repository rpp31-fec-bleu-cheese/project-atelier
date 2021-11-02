import React, {useState} from 'react';
import PropTypes from 'prop-types';
import QuestionModal from './modalComponents/QuestionModal.jsx';

const FooterButtons = ({ toggleModalStatus, showModal }) => {
  return (
    <div className="footer-buttons">
      <button className="additional-answers-button">MORE ANSWERED QUESTIONS</button>
      <button className="add-question-button" onClick={toggleModalStatus}>ADD A QUESTION +</button>
      <QuestionModal toggleModalStatus={toggleModalStatus} showModal={showModal}/>
    </div>
  )
};

FooterButtons.propTypes = {
  toggleModalStatus: PropTypes.func,
  showModal: PropTypes.bool
}

export default FooterButtons;