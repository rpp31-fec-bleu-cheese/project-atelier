import React from 'react';

// will display when the user clicks on the 'Add Answer' link provided on each question
const AnswerModal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="question-form">
          <span>&times;</span>
          <h2>Ask Your Question About [Product Name Here]</h2>
          <label>What is your nickname</label>
          <input placeholder="Example: jackson11!" type="text" maxLength="60" required/>
          <p>For privacy reasons, do not use your full name</p>
          <label>Your email</label>
          <input placeholder="Example: jackson11@email.com" type="email" maxLength="60" required/>
          <p>For authentication reasons, you will not be emailed</p>
          <label>Your Question</label>
          <input placeholder="Type your answer" type="text" maxLength="1000" required/>
          <button className="submit-button">Submit Question</button>
        </form>
      </div>
    </div>
  )
};

export default AnswerModal;