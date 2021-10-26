import React from 'React';

import Search from './Search.jsx';
import Question from './Question.jsx';
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
      </div>
    )
  }
};

export default QandA;