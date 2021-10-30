import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const QuestionEntry = ({ question }) => {
  return (
    <div className="question-entry">
      <div className="question">Q: {question}</div>
      <Answer />
    </div>
  )
};

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired
}

export default QuestionEntry;