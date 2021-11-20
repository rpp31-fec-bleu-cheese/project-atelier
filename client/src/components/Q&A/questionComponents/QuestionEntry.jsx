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
      helpful: this.props.question.question_helpfulness,
      clicked: false,
      expanded: false,
      answersToShow: 2
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
  }


  closeModal() {
    this.setState({ showModal: false });
  }

  handleHelpfulClick() {
    const { question_id } = this.props.question;
    const clicked = localStorage.getItem(`clicked-${question_id}`) === 'true';

    if (!clicked) {
      axios.put(`qa/questions/${question_id}/helpful`)
        .then((response) => {
            this.setState({ helpful: this.state.helpful + 1});
            this.setState({ clicked: true });
            localStorage.setItem(`clicked-${question_id}`, this.state.clicked);
            this.props.getQuestions();
        })
    }
  }

  showMoreAnswers(event) {
    const { answers } = this.props.question;
    const { expanded } = this.state;

    if (!expanded) {
      event.target.innerHTML = 'COLLAPSE ANSWERS';
      const questionContainer = document.getElementsByClassName('rendered-questions')[0];
      questionContainer.classList.add('active');

      this.setState({
        answersToShow: answers.length,
        expanded: true
      });
    } else {
      event.target.innerHTML = 'LOAD MORE ANSWERS';

      this.setState({
        answersToShow: 2,
        expanded: false
      });
    }

  }


  render() {
    const { question_body, question_id, questionAsker, answers, question_helpfulness } = this.props.question;
    const { answersToShow } = this.state;
    const questionAnswers = Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness);

    return (
      <div data-testid='q-entry' className="question-entry">
        <div className="question-container">
          <div className="question">Q: {question_body}</div>
          <div className="helpful-buttons">
            <p>Helpful?</p>
            <button
              aria-label="helpful-btn"
              onClick={this.handleHelpfulClick}>Yes ({this.state.helpful})</button>
            <p className="divider">|</p>
            <button
              aria-label="add-answer-btn"
              className="add-answer"
              onClick={() => this.setState({ showModal: true })}>Add Answer</button>
          </div>
        </div>
        <AnswerModal
          currentProduct={this.props.currentProduct}
          showModal={this.state.showModal}
          setShowModal={this.closeModal}
          questionBody={question_body}
          questionID={question_id}
          getQuestions={this.props.getQuestions}
          />
        <div className="q-answers">
          {questionAnswers.slice(0, answersToShow)
            .map(answer => <Answer key={answer.id} answer={answer} getQuestions={this.props.getQuestions}/>)
          }
          {questionAnswers.length > 2 ?
          (<button aria-label="load-btn" className="load-answers" onClick={this.showMoreAnswers}>LOAD MORE ANSWERS</button>) : null
          }
        </div>
      </div>
    );
  }

}

QuestionEntry.propTypes = {
  currentProduct: PropTypes.string,
  question: PropTypes.object,
  getQuestions: PropTypes.func
}

export default QuestionEntry;