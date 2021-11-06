import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Answer from './Answer.jsx';
import AnswerModal from '../modalComponents/AnswerModal.jsx';

class QuestionEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      helpful: this.props.helpfulness,
      clicked: false,
      answersToShow: 2
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleHelpfulClick() {
    if (!this.state.clicked) {
      axios.put(`qa/questions/${this.props.questionID}/helpful`)
        .then((response) => {
            this.setState({ helpful: this.state.helpful + 1});
            this.setState({ clicked: true });
        })
    }
  }


  render() {
    const { question, questionID, questionAsker, answers, helpfulness } = this.props;
    const { answersToShow } = this.state;
    const questionAnswers = Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness);


    return (
      <div className="question-entry">
        <div className="question-container">
          <div className="question">Q: {question}</div>
          <div className="helpful-buttons">
            <p>Helpful?</p>
            <button onClick={this.handleHelpfulClick}>Yes ({this.state.helpful})</button>
            <p className="divider">|</p>
            <button onClick={this.openModal}>Add Answer</button>
          </div>
        </div>
        <AnswerModal showModal={this.state.showModal} setShowModal={this.closeModal} questionBody={question}/>
        {questionAnswers.slice(0, answersToShow)
          .map(answer => <Answer key={answer.id} answer={answer} />)
        }
      </div>
    );
  }

}

// const QuestionEntry = ({ question, questionID, answers, helpfulness }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [helpful, setHelpful] = useState(helpfulness);
//   const [clicked, setClicked] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   }

//   const handleHelpfulClick = (event) => {
//     console.log(clicked)
//     if (!clicked) {
//       axios.put(`qa/questions/${questionID}/helpful`)
//         .then((response) => {
//             setHelpful(helpfulness + 1);
//             setClicked(true);
//         })
//     }
//   }


//   const questionAnswers = Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness);

//   return (
//     <div className="question-entry">
//       <div className="question-container">
//         <div className="question">Q: {question}</div>
//         <div className="helpful-buttons">
//           <p>Helpful?</p>
//           <button onClick={handleHelpfulClick}>Yes ({helpfulness})</button>
//           <p className="divider">|</p>
//           <button onClick={openModal}>Add Answer</button>
//         </div>
//       </div>
//       <AnswerModal showModal={showModal} setShowModal={setShowModal}/>
//       {questionAnswers.slice(0, 1)
//         .map(
//           answer => <Answer
//             key={answer.id}
//             answerBody={answer.body}
//             photos={answer.photos}
//             user={answer.answerer_name}
//             helpfulness={answer.helpfulness}
//             />
//         )
//       }
//     </div>
//   )
// };

QuestionEntry.propTypes = {
  question: PropTypes.string,
  questionAsker: PropTypes.string,
  answers: PropTypes.object,
  helpfulness: PropTypes.number,
  questionID: PropTypes.number
}

export default QuestionEntry;