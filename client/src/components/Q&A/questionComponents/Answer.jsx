import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Photo from './Photo.jsx';

const Answer = ({ answer, questionAsker, getQuestions }) => {
  const [clicked, setClicked] = useState(false);
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const answerDate = new Date(answer.date).toLocaleDateString(undefined, dateOptions);


  const handleHelpfulClick = () => {
    const clicked = localStorage.getItem(`clicked-${answer.id}`) === 'true';

    if (!clicked) {
      axios.put(`qa/answers/${answer.id}/helpful`)
        .then((response) => {
            setHelpfulness(helpfulness + 1);
            setClicked(true);
            localStorage.setItem(`clicked-${answer.id}`, true);
            getQuestions();
        })
    }
  }

  const handleReportClick = (event) => {
    axios.put(`qa/answers/${answer.id}/report`)
      .then((response) => {
        event.target.innerHTML = 'Reported';
      })
  }

  return (
    <div data-testid="answer" className="answer">
      <div className="answer-content">
        <span>A: </span>
        <div className="answer-body">{answer.body}</div>
      </div>
      <div className="photo-container">
        { answer.photos.map((photo, i) => <Photo key={i} photo={photo}/>)}
      </div>
      <div className="helpful-buttons user-info">
        { answer.answerer_name === 'Seller'
          ? (<div className="user">by <b style={{ fontWeight: 'bold'}}>{answer.answerer_name}</b></div>) :
            (<div className="user">by {answer.answerer_name}</div>)
        }
        <div className="answer-date">, {answerDate}</div>
        <p className="divider">|</p>
        <p>Helpful?</p>
        <button aria-label="helpful" onClick={handleHelpfulClick}>Yes ({helpfulness})</button>
        <p className="divider">|</p>
        <button aria-label="reported" onClick={handleReportClick}>Report</button>
      </div>
    </div>
  )
};

Answer.propTypes = {
  answer: PropTypes.object,
  questionAsker: PropTypes.string,
  getQuestions: PropTypes.func
}

export default Answer;