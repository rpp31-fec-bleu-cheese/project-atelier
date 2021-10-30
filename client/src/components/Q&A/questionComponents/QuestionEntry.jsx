import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const QuestionEntry = ({ question }) => {
  return (
    <div className="question-entry">
      <div className="question-container">
        <div className="question">Q: {question}</div>
        <div className="helpful-buttons">
          <p>Helpful?</p>
          <button>Yes</button>
          <p>|</p>
          <button>Add Answer</button>
        </div>
      </div>
      <Answer />
    </div>
  )
};

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired
}

export default QuestionEntry;