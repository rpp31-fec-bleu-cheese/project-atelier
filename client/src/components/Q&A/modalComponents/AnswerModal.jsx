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

  // const addAnswerImages = (event) => {
  //   const images = [];

  //   console.log(event.target.files);
  //   const fileUploads = Object.values(event.target.files);
  //   fileUploads.forEach(file => {
  //     console.log(file);
  //     let src = window.URL.createObjectURL(file);

  //     if (images.length < 5) {
  //       images.push(src);
  //     }
  //   });

  //   setPhotos([...photos, ...images]);
  // }

  const uploadImages = (event) => {
    const fileUploads = Object.values(event.target.files);

    fileUploads.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'mjtraatld');

      axios.post('https://api.cloudinary.com/v1_1/dyjzdyuc2/image/upload', formData)
        .then(response => {
          let imageURL = response.data.secure_url;

          if (photos.length < 5) {
            setPhotos([...photos, imageURL]);
          }
        });
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
    <div className="answer-modal">
      { showModal ? (
        <div className="modal-background">
          <div className="modal-content">
            <form className="answer-form" onChange={handleInputChange}>
              <span onClick={() => setShowModal(false)}>&times;</span>
              <h2>Submit your Answer</h2>
              <h3>[Product Name]: {questionBody}</h3>
              <div id="name" className="error-message"></div>
              <label>What is your nickname <span className="required">*</span></label>
              <input placeholder="Example: jack543!" type="text" maxLength="60" required/>
              <p>For privacy reasons, do not use your full name</p>
              <div id="email" className="error-message"></div>
              <label>Your email <span className="required">*</span></label>
              <input placeholder="Example: jack543@email.com" type="email" maxLength="60" required/>
              <p>For authentication reasons, you will not be emailed</p>
              <div id="answer" className="error-message"></div>
              <label>Your Answer <span className="required">*</span></label>
              <input placeholder="Type your answer" type="text" maxLength="1000" required/>
              <label style={{ marginTop: '15px' }}>Upload Images (up to 5)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={uploadImages}
                style={{ display: display }}
              />
              <div className="image-uploads">
                {photos.map((p, i) => <img className="upload" key={i} src={p} onClick={removeImage}/>)}
              </div>
              {message ? (<div className="image-upload-message">Click on image to remove!</div>) : null }
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