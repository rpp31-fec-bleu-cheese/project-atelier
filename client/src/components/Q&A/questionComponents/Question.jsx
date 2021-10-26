import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const Question = ({ question }) => {
  return (
    <div className="question">
      <div>Q: {question}</div>
      <Answer />
    </div>
  )
};

Question.propTypes = {
  question: PropTypes.string.isRequired
}

export default Question;