import React from 'React';
import axios from 'axios';
import Search from './Search.jsx';
import FooterButtons from './FooterButtons.jsx';
import QuestionEntry from './questionComponents/QuestionEntry.jsx';
import QuestionModal from './modalComponents/QuestionModal.jsx';
import mockData from './mockData.js';

class QandA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      questions: [],
      productID: '59556', // default productID
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions() {
    axios.get(`/qa/questions/?product_id=${this.state.productID}`)
      .then(response => {
        this.setState({ questions: response.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness) });
      })
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
            {this.state.questions
              .map(
                question => <QuestionEntry
                  key={question.question_id}
                  question={question.question_body}
                  answers={question.answers}
                  helpfulness={question.question_helpfulness}
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