import React from 'react';
import PropTypes from 'prop-types';
import ComparisonRow from './ComparisonRow.jsx';

var Comparison = (props) => {
  if(props.popup) {
      //console.log('current product features:',props.currentProduct );
     var featuresOfClickedProduct = props.toCompare.features;
     var featuresOfCurrentProduct = props.currentProduct.features
     var features = {};
<<<<<<< HEAD
=======
     //console.log('featuresOfClickedProduct',featuresOfClickedProduct);
>>>>>>> d89abc8ec9dfae59e8458452951b377f5c92c3b1
     for(var featureOfClicked of featuresOfClickedProduct) {
      //var obj = {};
      var nameOfFeature = featureOfClicked.feature;
      features[nameOfFeature] = {};
      features[nameOfFeature].valueForClicked = featureOfClicked.value;
<<<<<<< HEAD
      features[nameOfFeature].valueForCurrent = null;
     }

=======
      features[nameOfFeature].valueForCurrent = undefined;
      //features.push(obj);
     }
     //console.log('featuresOfCurrentProduct',featuresOfCurrentProduct);
>>>>>>> d89abc8ec9dfae59e8458452951b377f5c92c3b1
     for(var featureOfCurrent of featuresOfCurrentProduct) {

      var nameOfFeature = featureOfCurrent.feature;
      if(features[nameOfFeature] === undefined) {
        features[nameOfFeature] = {};
        features[nameOfFeature].valueForCurrent = featureOfCurrent.value;
        features[nameOfFeature].valueForClicked = undefined;
      }else {
        features[nameOfFeature].valueForCurrent = featureOfCurrent.value;
      }

     }
     //console.log('features obj:', features);
     var allFeatures = Object.keys(features);
     //console.log('allFeatures:',allFeatures);
    return(
      <div  id="PopupTrue" style={props.popup_style}>

        <table id="ComparingTable">

          <thead>
            <tr>
              <td id="topHeader">
                Comparing
              </td>
            </tr>
          <tr>
            <td id="firstHeader">{props.currentProduct.name}</td>
             <td> </td>
             <td id="secondHeader">{props.toCompare.name}</td>
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