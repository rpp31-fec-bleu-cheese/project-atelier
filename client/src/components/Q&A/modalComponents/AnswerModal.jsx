import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// modal will display when the user clicks on the ADD A QUESTION button
const AnswerModal = ({ currentProduct, showModal, setShowModal, questionBody, questionID, getQuestions }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photos, setPhotos] = useState([]);
  const [display, setDisplay] = useState('block');
  const [message, setMessage] = useState(false);
  const [charCount, setCharCount] = useState(1000);

  const handleInputChange = (event) => {
    let value = event.target.value;

    if (event.target.placeholder === 'Example: jack543!') {
      setName(value);
    } else if (event.target.placeholder === 'Example: jack543@email.com') {
      setEmail(value);
    } else if (event.target.placeholder === 'Type your answer') {
      setCharCount(1000 - value.length);
      setAnswer(value);
    }
  }

  const setErrorMessage = (id) => {
    document.getElementById(id).innerHTML = 'You must enter the following:'
  }

  const checkMissingRequirements = () => {
    const requirements = [name, email, answer];

    requirements.forEach((req, i) => {
      if (!req.length) {
        if (i === 0) {
          setErrorMessage('name');
        } else if (i === 1) {
          setErrorMessage('email');
        } else {
          setErrorMessage('answer');
        }
      }
    });
  }

  const postAnswer = (event) => {
    event.preventDefault();

    checkMissingRequirements();

    if (!name || !email || !answer) {
      return
    } else {
      axios.post(`/qa/questions/${questionID}/answers`, {
        body: answer,
        name: name,
        email: email,
        photos: photos,
        question_id: questionID,
      })
        .then((response) => {
          getQuestions();
          setShowModal(false);
        })
    }

  }

  const uploadImages = (event) => {
    const requests = [];
    const fileUploads = Object.values(event.target.files);

    fileUploads.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'mjtraatld');

      if (requests.length < 5) {
        requests.push(axios.post('https://api.cloudinary.com/v1_1/dyjzdyuc2/image/upload', formData));
      }
    });

    Promise.all(requests)
      .then((values) => {
        let images = values.map(v => v.data.secure_url);

        setPhotos([...photos, ...images]);
      });

  }

  const removeImage = (event) => {
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

    if (photos.length >= 1) {
      setMessage(true);
    }

    if (!photos.length) {
      setMessage(false);
    }
  })

  return (
    <div data-testid="a-modal" className="answer-modal">
      { showModal ? (
        <div data-testid="modal-cont" className="modal-background">
          <div className="modal-content">
            <form className="answer-form" onChange={handleInputChange}>
              {/* <span data-testid="close" onClick={() => setShowModal(false)}>&times;</span> */}
              <h2>Submit your Answer</h2>
              <h3>{currentProduct}: {questionBody}</h3>
              <div id="name" className="error-message"></div>
              <label htmlFor="name-field">What is your nickname (mandatory)<span className="required">*</span></label>
              <input
                data-testid="name"
                id="name-field"
                placeholder="Example: jack543!"
                type="text"
                maxLength="60"
                required/>
              <p>For privacy reasons, do not use your full name</p>
              <div id="email" className="error-message"></div>
              <label htmlFor="email-field">Your email (mandatory)<span className="required">*</span></label>
              <input
                data-testid="email"
                id="email-field"
                placeholder="Example: jack543@email.com"
                type="email"
                maxLength="60"
                required/>
              <p>For authentication reasons, you will not be emailed</p>
              <div id="answer" className="error-message"></div>
              <label htmlFor="answer-field">Your Answer (mandatory)<span className="required">*</span></label>
              <textarea
                data-testid="answer"
                id="answer-field"
                placeholder="Type your answer"
                type="text"
                maxLength="1000"
                style={{width: 465, height: 100, resize: 'none'}}
                required>
              </textarea>
              <div style={{fontSize: 12}}>Minimum required characters left: {charCount}</div>
              <label style={{ marginTop: '15px'}}>Upload Images (up to 5)</label>
              <input
                data-testid="image-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={uploadImages}
                style={{ display: display }}
              />
              <div className="image-uploads">
                {photos.map((p, i) => <img data-testid="a-image" className="upload" key={i} src={p} onClick={removeImage}/>)}
              </div>
              {message ? (<div className="image-upload-message">Click on image to remove!</div>) : null }
              <div className="form-btns">
                <button data-testid="close" className="submit-button" onClick={() => setShowModal(false)}>Cancel</button>
                <button aria-label="submit-answer" className="submit-button" onClick={postAnswer}>Submit Answer</button>
              </div>
            </form>
          </div>
        </div>
       ) : null }
    </div>

  );
};

AnswerModal.propTypes = {
  currentProduct: PropTypes.string,
  showModal: PropTypes.bool,
  questionBody: PropTypes.string,
  setShowModal: PropTypes.func,
  questionID: PropTypes.number,
  getQuestions: PropTypes.func
}

export default AnswerModal;