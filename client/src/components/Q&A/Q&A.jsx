import React from 'React';

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
        <Question />
      </div>
    )
  }
};

export default QandA;