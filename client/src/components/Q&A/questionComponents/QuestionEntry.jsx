import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import AnswerModal from '../modalComponents/AnswerModal.jsx';

const QuestionEntry = ({ question, showAnswerModal, toggleAnswerModal }) => {
  return (
    <div className="question-entry">
      <div className="question-container">
        <div className="question">Q: {question}</div>
        <div className="helpful-buttons">
          <p>Helpful?</p>
          <button>Yes</button>
          <p>|</p>
          <button onClick={toggleAnswerModal}>Add Answer</button>
        </div>
      </div>
      <AnswerModal showAnswerModal={showAnswerModal} toggleAnswerModal={toggleAnswerModal}/>
      <Answer/>
    </div>
  )
};

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired,
  showAnswerModal: PropTypes.bool,
  toggleAnswerModal: PropTypes.func
}

export default QuestionEntry;