// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
// import module under test
import ProductFeatures from '../../client/src/components/Overview/ProductFeatures.jsx';



// fixtures
const testProductById = {
  "id": 59553,
  "campus": "hr-rpp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-10-18T22:50:41.839Z",
  "updated_at": "2021-10-18T22:50:41.839Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}

// test suite
describe('<ProductFeatures />', () => {
  let component;
  beforeEach(() => {
    component = render(<ProductFeatures productById={testProductById}/>);
  })
  test('Renders without crashing', () => {
    expect(component).toBeDefined();
  })
  test('Accepts an object of product details', () => {
    expect(typeof testProductById).toBe('object');
  })
  test('Renders a list of product features', () => {
    let featureEntry = component.getByTestId('FeatureListEntry 0');
    expect(featureEntry.textContent).not.toBeUndefined();
  })
  test('Renders the same number of UI features as object features', () => {
    let featureEntry;
    for (let i = 0; i < testProductById.features.length; i++) {
      featureEntry = component.getByTestId(`FeatureListEntry ${i}`);
      expect(featureEntry).toBeInTheDocument();
    }
  })
  test('Renders a checkmark with feature and value', () => {
    let featureEntry = component.getByTestId('FeatureListEntry 0');
    expect(featureEntry.textContent).toBe(`✔ Fabric: Canvas`);
  })
})