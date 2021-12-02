

import React from 'react';
import PropTypes from 'prop-types';

var ComparisonRow = (props) => {

  var valueForClicked = props.featureObj.valueForClicked;

  var valueForCurrent = props.featureObj.valueForCurrent;
  if(valueForClicked === true) {
    valueForClicked = <i className="fas fa-check"></i>
  }
  if(valueForCurrent === true) {
    valueForCurrent = <i className="fas fa-check"></i>
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