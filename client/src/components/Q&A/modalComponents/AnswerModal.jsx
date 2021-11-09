import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// modal will display when the user clicks on the ADD A QUESTION button
const AnswerModal = ({ showModal, setShowModal, questionBody, questionID }) => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    let value = event.target.value;

    if (event.target.placeholder === 'Example: jack543!') {
      setName(value);
    } else if (event.target.placeholder === 'Example: jack543@email.com') {
      setEmail(value);
    } else {
      setAnswer(value);
    }
  }

  const postAnswer = (event) => {
    event.preventDefault();
    console.log('posted');

    axios.post(`/qa/questions/${questionID}/answers`, {
      body: answer,
      name: name,
      email: email,
      question_id: questionID,
    })
      .then((response) => {
        console.log('successful post!', response.data);
        setShowModal(false);
      })
  }


  return (
    <div className="answer-modal">
      { showModal ? (
        <div className="modal-background">
          <div className="modal-content">
            <form className="answer-form" onChange={handleInputChange}>
              <span onClick={() => setShowModal(false)}>&times;</span>
              <h2>Submit your Answer</h2>
              <h3>[Product Name]: {questionBody}</h3>
              <label>What is your nickname</label>
              <input placeholder="Example: jack543!" type="text" maxLength="60" required/>
              <p>For privacy reasons, do not use your full name</p>
              <label>Your email</label>
              <input placeholder="Example: jack543@email.com" type="email" maxLength="60" required/>
              <p>For authentication reasons, you will not be emailed</p>
              <label>Your Answer</label>
              <input placeholder="Type your answer" type="text" maxLength="1000" required/>
              <button className="submit-button" onClick={postAnswer}>Submit Answer</button>
            </form>
          </div>
        </div>
       ) : null }
    </div>

  );
};

AnswerModal.propTypes = {
  showModal: PropTypes.bool,
  questionBody: PropTypes.string,
  setShowModal: PropTypes.func,
  questionID: PropTypes.number
}

export default AnswerModal;