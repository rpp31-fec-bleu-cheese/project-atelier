import React from 'react';
import PropTypes from 'prop-types';

// modal will display when the user clicks on the ADD A QUESTION button
const AnswerModal = ({ showAnswerModal, toggleAnswerModal }) => {
  return (
    <div className="answer-modal">
      { showAnswerModal ? (
        <div className="modal-background">
          <div className="modal-content">
            <form className="answer-form">
              <span onClick={toggleAnswerModal}>&times;</span>
              <h2>Submit your Answer</h2>
              <h3>[Product Name]: [Question Body]</h3>
              <label>What is your nickname</label>
              <input placeholder="Example: jack543!" type="text" maxLength="60" required/>
              <p>For privacy reasons, do not use your full name</p>
              <label>Your email</label>
              <input placeholder="Example: jack543@email.com" type="email" maxLength="60" required/>
              <p>For authentication reasons, you will not be emailed</p>
              <label>Your Answer</label>
              <input placeholder="Type your question" type="text" maxLength="1000" required/>
              <button className="submit-button">Submit Answer</button>
            </form>
          </div>
        </div>
       ) : null }
    </div>

  );
};

AnswerModal.propTypes = {
  showAnswerModal: PropTypes.bool,
  toggleAnswerModal: PropTypes.func
}

export default AnswerModal;