import React from 'react';
import PropTypes from 'prop-types';
import ComparisonRow from './ComparisonRow.jsx';

var Comparison = (props) => {
  if(props.popup) {

     var featuresOfClickedProduct = props.toCompare.features;
     var featuresOfCurrentProduct = props.currentProduct.features
     var features = {};
     console.log(featuresOfClickedProduct);
     for(var featureOfClicked of featuresOfClickedProduct) {
      //var obj = {};
      var nameOfFeature = featureOfClicked.feature;
      features[nameOfFeature] = {};
      features[nameOfFeature].valueForClicked = featureOfClicked.value;
      features[nameOfFeature].valueForCurrent = null;
      //features.push(obj);
     }
     for(var featureOfCurrent of featuresOfCurrentProduct) {

      var nameOfFeature = featureOfCurrent.feature;
      if(features[nameOfFeature] === undefined) {
        features[nameOfFeature] = {};
        features[nameOfFeature].valueForCurrent = featureOfCurrent.value;
        features[nameOfFeature].valueForClicked = null;
      }else {
        features[nameOfFeature].valueForCurrent = featureOfCurrent.value;
      }

     }
     console.log('features obj:', features);
     var allFeatures = Object.keys(features);
     console.log('allFeatures:',allFeatures);
    return(
      <div  id="PopupTrue" style={props.popup_style}>
      Comparing
        <table id="ComparingTable">

          <thead>
          <tr>
            <th><b>{props.toCompare.name}</b></th>
             <th> </th>
             <th><b>{props.currentProduct.name}</b></th>
          </tr>
          </thead>
          <tbody>
          {allFeatures.map((feature) => (
            <ComparisonRow key={feature} featureObj = {features[feature]} featureName={feature}/>
          ))}

         </tbody>
        </table>

      </div>
    )
  }else {
     return (
      <div id="PopupFalse"></div>
     );
  }

}
Comparison.propTypes = {
  popup:PropTypes.bool,
  popup_style:PropTypes.object,
  toCompare: PropTypes.object,
  currentProduct: PropTypes.object

}
export default Comparison;