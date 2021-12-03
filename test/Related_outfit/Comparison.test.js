
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import 'jsdom-global/register';
import sinon from 'sinon';
import React from 'react';
import jest from 'jest';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Comparison from '../../client/src/components/Related_Outfit/Comparison.jsx';
import ComparisonRow from '../../client/src/components/Related_Outfit/ComparisonRow.jsx';

Enzyme.configure({adapter:new Adapter()});

describe('Comparison', () => {
  let component;
  var currentProductInfo = {
    "id": 59555,
    "campus": "hr-rpp",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-10-18T22:50:41.839Z",
    "updated_at": "2021-10-18T22:50:41.839Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        }

    ]
}
 var productToCompareInfo = {
  "id": 59556,
  "campus": "hr-rpp",
  "name": "Slacker's Slacks",
  "slogan": "Comfortable for everything, or nothing",
  "description": "I'll tell you how great they are after I nap for a bit.",
  "category": "Pants",
  "default_price": "65.00",
  "created_at": "2021-10-18T22:50:41.839Z",
  "updated_at": "2021-10-18T22:50:41.839Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "99% Cotton 1% Elastic"
      },


  ]
}
  beforeEach(() => {
    component=mount(<Comparison
      popup={true}
      style={{"display":"block"}}
      currentProduct={currentProductInfo}
      toCompare={productToCompareInfo}/>);
  });
  //test to see if Comparison component is rendered
  it('Comparison should render correctly', () => {
      expect(component.find('#ComparingTable')).not.toBeUndefined();
  });
  it('Comparisontable should have ComparisonRow', () => {
    expect(component.find('.ComparisonRow')).not.toBeUndefined();
  });
  it('ComparisonRow has a feature data dsiplayed', () => {
    expect(component.find('.Feature')).not.toBeUndefined();
  });
  it('ComparisonRow has a value for the currentProduct', () => {
    expect(component.find('.ValueForCurrent')).not.toBeUndefined();
  });
  it('ComparisonRow has a value for the product to be compared', () => {
    expect(component.find('.ValueForClicked')).not.toBeUndefined();
  });
  it('ComparisonRow has the feature name "Fabric"', () => {
    expect(component.find('.Feature').text()).toEqual('Fabric')
  });
});


