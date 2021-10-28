import React from 'React';
import PropTypes from 'prop-types';

import Breakdown from './Breakdown.jsx';

const BreakdownContainer = props => {
  let charArray = Object.entries(props.characteristics)

  return (
    <div id='BreakdownContainer'>
      {charArray.map((char, i) => <Breakdown char={char} key={i} />)}
    </div>
  );
};

BreakdownContainer.propTypes = {
  characteristics: PropTypes.object.isRequired
};

export default BreakdownContainer;