import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import LogoImage from "../../../dist/BC_CO.png";

const Logo = props => {
  return (
    <div id='Logo'>
      {/* <img style={{height: '50px', width: '50px'}}src={LogoImage}/> */}
     <FontAwesomeIcon icon={faCheese} /> Bleu Cheese & Co.
    </div>
  );
};

export default Logo;