import React from 'react';
import PropTypes from 'prop-types';

import Breakdown from './Breakdown.jsx';

const BreakdownContainer = props => {
  let charArray = Object.entries(props.characteristics)
  return (
    <div id='BreakdownContainer'>
      {charArray.map((char, i) => {
        if (char[1].value !== null) return <Breakdown char={char} key={i} />
      })}
    </div>
  );
};

BreakdownContainer.propTypes = {
  characteristics: PropTypes.object.isRequired
};

export default BreakdownContainer;