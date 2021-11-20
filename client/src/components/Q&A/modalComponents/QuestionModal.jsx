import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// will display when the user clicks on the 'Add Answer' link provided on each question
const QuestionModal = ({ showModal, setShowModal, closeModal, productID, currentProduct, getQuestions }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [charCount, setCharCount] = useState(1000);
  // const [expanded, setExpanded] = useState(false);

  const handleInputChange = (event) => {
    let value = event.target.value;

    if (event.target.placeholder === 'Example: jackson11!') {
      setName(value);
    } else if (event.target.placeholder === 'Example: jackson11@email.com') {
      setEmail(value);
    } else {
      setCharCount(1000 - value.length);
      setQuestion(value);
    }
  }


  const setErrorMessage = (id) => {
    document.getElementById(id).innerHTML = 'You must enter the following:'
  }

  const checkMissingRequirements = () => {
    const requirements = [name, email, question];

    requirements.forEach((req, i) => {
      if (!req.length) {
        if (i === 0) {
          setErrorMessage('name');
        } else if (i === 1) {
          setErrorMessage('email');
        } else {
          setErrorMessage('question');
        }
      }
    });
  }

  const postQuestion = (event) => {
    event.preventDefault();

    checkMissingRequirements();

    if (!name || !email || !question) {
      return;
    } else {
      axios.post('/qa/questions', {
        body: question,
        name: name,
        email: email,
        product_id: productID,
      })
        .then((response) => {
          getQuestions();
          closeModal()
        })
    }
  }

  return (
    <div data-testid="q-modal" className="modal">
      {showModal ? (
        <div data-testid="modal-content" className="modal-background">
          <div className="modal-content">
            <form className="question-form" onChange={handleInputChange}>
              {/* <span data-testid="close-modal" onClick={closeModal}>&times;</span> */}
              <h2>Ask Your Question About: {currentProduct}</h2>
              <div id="name" className="error-message"></div>
              <label className="name">What is your nickname (mandatory)<span className="required">*</span></label>
              <input
                data-testid="q-name"
                placeholder="Example: jackson11!"
                type="text"
                maxLength="60"
                required />
              <p>For privacy reasons, do not use your full name</p>
              <div id="email" className="error-message"></div>
              <label className="email">Your email (mandatory)<span className="required">*</span></label>
              <input
                data-testid="q-email"
                placeholder="Example: jackson11@email.com"
                type="email"
                maxLength="60"
                required/>
              <p>For authentication reasons, you will not be emailed</p>
              <div id="question" className="error-message"></div>
              <label className="question">Your Question (mandatory)<span className="required">*</span></label>
              <textarea
                data-testid="question"
                placeholder="Type your question"
                type="text"
                maxLength="1000"
                style={{width: 465, height: 100, resize: 'none'}}
                required>
              </textarea>
              <div style={{fontSize: 12}}>Minimum required characters left: {charCount}</div>
              <div className="form-btns">
                <button data-testid="close-modal" className="submit-button" onClick={closeModal}>Cancel</button>
                <button aria-label="submit-question" className="submit-button" onClick={postQuestion}>Submit Question</button>
              </div>

            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
};

QuestionModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  closeModal: PropTypes.func,
  productID: PropTypes.number,
  currentProduct: PropTypes.string,
  getQuestions: PropTypes.func
}

export default QuestionModal;