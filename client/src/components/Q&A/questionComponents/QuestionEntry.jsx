import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import AnswerModal from '../modalComponents/AnswerModal.jsx';

const QuestionEntry = ({ question, answers, helpfulness }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const questionAnswers = Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness);
  console.log(questionAnswers);

  return (
    <div className="question-entry">
      <div className="question-container">
        <div className="question">Q: {question}</div>
        <div className="helpful-buttons">
          <p>Helpful?</p>
          <button>Yes ({helpfulness})</button>
          <p className="divider">|</p>
          <button onClick={openModal}>Add Answer</button>
        </div>
      </div>
      <AnswerModal showModal={showModal} setShowModal={setShowModal}/>
      {questionAnswers.slice(0, 1)
        .map(
          answer => <Answer
            key={answer.id}
            answerBody={answer.body}
            photos={answer.photos}
            user={answer.answerer_name}
            helpfulness={answer.helpfulness}
            />
        )
      }
    </div>
  )
};

QuestionEntry.propTypes = {
  question: PropTypes.string,
  answers: PropTypes.object,
  helpfulness: PropTypes.number
}

export default QuestionEntry;