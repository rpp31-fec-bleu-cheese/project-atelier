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
      showAnswerModal: false
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions() {
    this.setState({ questions: mockData.results });
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
            <FooterButtons />
         </div>
      </div>
    )
  }
};

export default QandA;