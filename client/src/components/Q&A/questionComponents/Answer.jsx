import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answerBody, photos, user, helpfulness }) => {
  return (
    <div className="answer">
      <div className="answer-content">
        <span>A: </span>
        <div className="answer-body">{answerBody}</div>
      </div>
      <div className="helpful-buttons user-info">
        <div className="user">by {user}</div>
        <p className="divider">|</p>
        <p>Helpful?</p>
        <button>Yes ({helpfulness})</button>
        <p className="divider">|</p>
        <button>Report</button>
      </div>
    </div>
  )
};

Answer.propTypes = {
  answerBody: PropTypes.string,
  photos: PropTypes.array,
  user: PropTypes.string,
  helpfulness: PropTypes.number
}

export default Answer;