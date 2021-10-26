import React from 'React';

import Search from './Search.jsx';
import FooterButtons from './FooterButtons.jsx';
import Question from './questionComponents/Question.jsx';
import mockData from './mockData.js';

class QandA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: mockData.results
    };
  }

  render() {
    return(
      <div id='QandA'>
        <Search />
        {mockData.results
          .map(question => <Question key={question.question_id} question={question.question_body}/>)}
        <FooterButtons />
      </div>
    )
  }
};

export default QandA;