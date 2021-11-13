import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// modal will display when the user clicks on the ADD A QUESTION button
const AnswerModal = ({ showModal, setShowModal, questionBody, questionID, getQuestions }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photos, setPhotos] = useState([]);
  const [display, setDisplay] = useState('block');
  const [message, setMessage] = useState(false);

  const handleInputChange = (event) => {
    let value = event.target.value;

    if (event.target.placeholder === 'Example: jack543!') {
      setName(value);
    } else if (event.target.placeholder === 'Example: jack543@email.com') {
      setEmail(value);
    } else if (event.target.placeholder === 'Type your answer') {
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
      photos: photos,
      question_id: questionID,
    })
      .then((response) => {
        console.log('successful post!', response.data);
        getQuestions();
        setShowModal(false);
      })
  }

  const addAnswerImages = (event) => {
    const images = [];

    const fileUploads = Object.values(event.target.files);
    fileUploads.forEach(file => {
      let src = URL.createObjectURL(file);

      if (images.length < 5) {
        images.push(src);
      }
    });

    setPhotos([...photos, ...images]);
  }

  const removeImage = (event) => {
    console.log('clicked');
    const imageSrc = event.target.src;
    const idx = photos.indexOf(imageSrc);
    photos.splice(idx, 1);

    if (photos.length < 5) {
      setDisplay('block');
    }

    setPhotos([...photos]);
  }


  useEffect(() => {
    if (photos.length >= 5) {
      setDisplay('none');
    }

    if (photos.length === 1) {
      setMessage(true);
    }

    if (!photos.length) {
      setMessage(false);
    }
  })

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
              <label style={{ 'margin-top': '15px' }}>Upload Images (up to 5)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={addAnswerImages}
                style={{ display: display }}
              />
              <div className="image-uploads">
                {photos.map((p, i) => <img className="upload" key={i} src={p} onClick={removeImage}/>)}
              </div>
              {message ? (<div>Click on image to remove!</div>) : null }
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
  questionID: PropTypes.number,
  getQuestions: PropTypes.func
}

export default AnswerModal;