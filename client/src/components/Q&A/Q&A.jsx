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
      productID: 59556, // default productID
      currentProduct: "Slacker's Slacks",
      questions: [],
      filteredQuestions: [],
      questionsToShow: 2,
      expanded: false,
      searchText: ''
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.handleMoreAnsweredQuestionsClick = this.handleMoreAnsweredQuestionsClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterDataOnSearch = this.filterDataOnSearch.bind(this);
  }

  getQuestions() {
    axios.get(`/qa/questions/?product_id=${this.state.productID}`)
      .then(response => {
        this.setState({
          questions: response.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness),
          filteredQuestions: response.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness)
        });
      })
  }

  handleSearch(event) {
    event.preventDefault();

    this.setState({ searchText: event.target.value });
  }

  filterDataOnSearch(event) {
    event.preventDefault();

    const { searchText, questions, filteredQuestions } = this.state;

    if (!searchText.length) {
      this.setState({ filteredQuestions: questions });
    } else {
      const filteredData = [];

      for (let i = 0; i < filteredQuestions.length; i++) {
        if (filteredQuestions[i].question_body.toLowerCase().includes(searchText)) {
          filteredData.push(filteredQuestions[i]);
        }
      }

      this.setState({
        filteredQuestions: filteredData
      })
    }
  }

  handleMoreAnsweredQuestionsClick(event) {
    const { questions, expanded } = this.state;

    if (!expanded) {
      event.target.innerHTML = 'COLLAPSE QUESTIONS';
      const questionContainer = document.getElementsByClassName('rendered-questions')[0];
      questionContainer.classList.add('active');

      this.setState({
        questionsToShow: questions.length,
        expanded: true
      })
    } else {
      event.target.innerHTML = 'MORE ANSWERED QUESTIONS';
      this.setState({
        questionsToShow: 2,
        expanded: false
      })
    }

  }

  componentDidMount() {
    this.getQuestions();
  }


  render() {
    const { questions, filteredQuestions, questionsToShow, productID } = this.state;

    return(
      <div data-testid='question-answers' id='QandA'>
          <h2>QUESTIONS & ANSWERS</h2>
          <Search handleSearch={this.handleSearch} filterDataOnSearch={this.filterDataOnSearch}/>
         <div className='q-a-content'>
           <div className='rendered-questions'>
            {filteredQuestions.slice(0, questionsToShow)
              .map(question => <QuestionEntry key={question.question_id} question={question}/>)
            }
           </div>
            <FooterButtons
              questionsLength={filteredQuestions.length}
              handleClick={this.handleMoreAnsweredQuestionsClick}
              productID={productID}
              currentProduct={this.state.currentProduct}
              getQuestions={this.getQuestions}
            />
         </div>
      </div>
    )
  }
};

export default QandA;