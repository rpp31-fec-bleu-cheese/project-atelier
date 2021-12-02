

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
var ComparisonRow = (props) => {

  var valueForClicked = props.featureObj.valueForClicked;

  var valueForCurrent = props.featureObj.valueForCurrent;
  if(valueForClicked === true || valueForClicked === null && valueForClicked!==undefined) {
    //valueForClicked = <i className="fas fa-check"></i>
    valueForClicked = <FontAwesomeIcon icon = {faCheck} />
  }
  if(valueForCurrent === true || valueForCurrent === null && valueForCurrent!==undefined) {
    //valueForCurrent = <i className="fas fa-check"></i>
    valueForCurrent = <FontAwesomeIcon icon = {faCheck} />
  }

  return (

    <tr className="ComparisonRow">
      <td className="ValueForCurrent">
        {valueForCurrent}
      </td>
      <td className="Feature">
        {props.featureName}
      </td>
      <td className="ValueForClicked">
         {valueForClicked}
      </td>
    </tr>
  )
}
ComparisonRow.propTypes = {
  featureName:PropTypes.string,
  featureObj:PropTypes.object

}
export default ComparisonRow;