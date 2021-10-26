import React from 'React';

import Search from './Search.jsx';
import Question from './Question.jsx';

class QandA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div id='QandA'>
        <Search />
        <Question />
      </div>
    )
  }
};

export default QandA;