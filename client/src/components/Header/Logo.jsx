import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese } from '@fortawesome/free-solid-svg-icons';

const Logo = props => {
  return (
    <div id='Logo'>
     <FontAwesomeIcon icon={faCheese} /> Bleu Cheese & Co.
    </div>
  );
};

export default Logo;