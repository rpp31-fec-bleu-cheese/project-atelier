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
      productID: '59554', // default productID
      currentProduct: '',
      questions: [],
      questionsToShow: 2
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.handleMoreAnsweredQuestionsClick = this.handleMoreAnsweredQuestionsClick.bind(this);
  }

  getQuestions() {
    axios.get(`/qa/questions/?product_id=${this.state.productID}`)
      .then(response => {
        this.setState({ questions: response.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness) });
        this.setState()
      })
  }

  handleMoreAnsweredQuestionsClick() {
    const questionContainer = document.getElementsByClassName('rendered-questions')[0];
    questionContainer.classList.add('active');

     this.setState({
       questionsToShow: this.state.questions.length
     })
  }

  componentDidMount() {
    this.getQuestions();
  }


  render() {
    const { questions, questionsToShow } = this.state;

    return(
      <div data-testid='question-answers' id='QandA'>
          <h2>QUESTIONS & ANSWERS</h2>
          <Search />
         <div className='q-a-content'>
           <div className='rendered-questions'>
            {questions.slice(0, questionsToShow)
              .map(
                question => <QuestionEntry
                  key={question.question_id}
                  question={question.question_body}
                  questionID={question.question_id}
                  questionAsker={question.asker_name}
                  answers={question.answers}
                  helpfulness={question.question_helpfulness}
                  />
              )
            }
           </div>
            <FooterButtons handleClick={this.handleMoreAnsweredQuestionsClick}/>
         </div>
      </div>
    )
  }
};

export default QandA;