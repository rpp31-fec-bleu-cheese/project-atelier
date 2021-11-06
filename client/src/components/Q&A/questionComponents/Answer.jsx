import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, questionAsker }) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const answerDate = new Date(answer.date).toLocaleDateString(undefined, dateOptions);

  return (
    <div className="answer">
      <div className="answer-content">
        <span>A: </span>
        <div className="answer-body">{answer.body}</div>
      </div>
      <div className="helpful-buttons user-info">
        { answer.answerer_name === questionAsker
          ? (<div className="user">by {answer.answerer_name} - <b>Seller</b> </div>) :
            (<div className="user">by {answer.answerer_name}</div>)
        }
        <div className="answer-date">, {answerDate}</div>
        <p className="divider">|</p>
        <p>Helpful?</p>
        <button>Yes ({answer.helpfulness})</button>
        <p className="divider">|</p>
        <button>Report</button>
      </div>
    </div>
  )
};

Answer.propTypes = {
  answer: PropTypes.object,
  questionAsker: PropTypes.string,
}

export default Answer;