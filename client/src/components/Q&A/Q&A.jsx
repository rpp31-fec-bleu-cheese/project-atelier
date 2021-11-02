import React from 'React';

import Search from './Search.jsx';
import FooterButtons from './FooterButtons.jsx';
import QuestionEntry from './questionComponents/QuestionEntry.jsx';
import QuestionModal from './modalComponents/QuestionModal.jsx';
import mockData from './mockData.js';

class QandA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showModal: false,
      showAnswerModal: false
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.toggleModalStatus = this.toggleModalStatus.bind(this);
    this.toggleAnswerModal = this.toggleAnswerModal.bind(this);
  }

  getQuestions() {
    this.setState({ questions: mockData.results });
  }

  toggleModalStatus() {
    this.setState({ showModal: !this.state.showModal });
  }

  toggleAnswerModal() {
    this.setState({ showAnswerModal: !this.state.showAnswerModal });
  }

  componentDidMount() {
    this.getQuestions();
  }


  render() {
    return(
      <div id='QandA'>
          <h2>QUESTIONS & ANSWERS</h2>
          <Search />
         <div className="q-a-content">
            {mockData.results
              .map(
                question => <QuestionEntry
                  key={question.question_id}
                  question={question.question_body}
                  toggleAnswerModal={this.toggleAnswerModal}
                  showAnswerModal={this.state.showAnswerModal}
                  />
              )
            }
            <FooterButtons
              toggleModalStatus={this.toggleModalStatus}
              showModal={this.state.showModal}
            />
         </div>
      </div>
    )
  }
};

export default QandA;