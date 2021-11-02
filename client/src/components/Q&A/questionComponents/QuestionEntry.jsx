import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import AnswerModal from '../modalComponents/AnswerModal.jsx';

const QuestionEntry = ({ question }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="question-entry">
      <div className="question-container">
        <div className="question">Q: {question}</div>
        <div className="helpful-buttons">
          <p>Helpful?</p>
          <button>Yes</button>
          <p>|</p>
          <button onClick={openModal}>Add Answer</button>
        </div>
      </div>
      <AnswerModal showModal={showModal} setShowModal={setShowModal}/>
      <Answer/>
    </div>
  )
};

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired,
}

export default QuestionEntry;