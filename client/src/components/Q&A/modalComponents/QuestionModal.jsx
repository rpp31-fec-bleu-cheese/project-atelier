import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// will display when the user clicks on the 'Add Answer' link provided on each question
const QuestionModal = ({ showModal, setShowModal, closeModal, productID, currentProduct }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleInputChange = (event) => {
    let value = event.target.value;

    if (event.target.placeholder === 'Example: jackson11!') {
      setName(value);
    } else if (event.target.placeholder === 'Example: jackson11@email.com') {
      setEmail(value);
    } else {
      setQuestion(value);
    }
  }

  const postQuestion = (event) => {
    event.preventDefault();
    console.log('posted');

    axios.post('/qa/questions', {
      body: question,
      name: name,
      email: email,
      product_id: productID,
    })
      .then((response) => {
        console.log('successful post!', response.data);
        setExpanded(true)
        closeModal()
      })
  }


  return (
    <div className="modal">
      {showModal ? (
        <div className="modal-background">
          <div className="modal-content">
            <form className="question-form" onChange={handleInputChange}>
              <span onClick={() => setShowModal(false)}>&times;</span>
              <h2>Ask Your Question About: {currentProduct}</h2>
              <label className="name">What is your nickname</label>
              <input
                placeholder="Example: jackson11!"
                type="text"
                maxLength="60"
                required />
              <p>For privacy reasons, do not use your full name</p>
              <label className="email">Your email</label>
              <input
                placeholder="Example: jackson11@email.com"
                type="email"
                maxLength="60"
                required/>
              <p>For authentication reasons, you will not be emailed</p>
              <label className="question">Your Question</label>
              <input
                placeholder="Type your answer"
                type="text"
                maxLength="1000"
                required/>
              <button className="submit-button" onClick={postQuestion}>Submit Question</button>
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
  currentProduct: PropTypes.string
}

export default QuestionModal;