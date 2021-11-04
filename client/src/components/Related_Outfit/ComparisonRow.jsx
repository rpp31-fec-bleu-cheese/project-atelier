

import React from 'react';
import PropTypes from 'prop-types';

var ComparisonRow = (props) => {
  console.log('props in comparison row', props);
  var valueForClicked = props.featureObj.valueForClicked;

  var valueForCurrent = props.featureObj.valueForCurrent;

  return (
    <tr>
      <td>
        {valueForClicked}
      </td>
      <td>
        {props.featureName}
      </td>
      <td>
        {valueForCurrent}
      </td>
    </tr>
  )
}
ComparisonRow.propTypes = {
  featureName:PropTypes.string,
  featureObj:PropTypes.object

}
export default ComparisonRow;