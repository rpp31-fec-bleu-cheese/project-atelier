// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
// import module(s) under test
import ProductSloganAndDescription from '../../client/src/components/Overview/ProductSloganAndDescription.jsx';

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
describe('<ProductSloganAndDescription />', () => {
  let component;
  beforeEach(() => {
    component = render(<ProductSloganAndDescription productById={testProductById} />);
  })
  test('Renders without crashing', () => {
    expect(component).toBeDefined();
  })
  test('Accepts an object of product details', () => {
    expect(typeof testProductById).toBe('object');
  })
  test('Displays the current product slogan', () => {
    let productSlogan = component.getByTestId('ProductSloganHeader');
    expect(productSlogan.textContent).toBe(testProductById.slogan);
  })
  test('Displays the current product description', () => {
    let productSlogan = component.getByTestId('ProductDescriptionBody');
    expect(productSlogan.textContent).toBe(testProductById.description);
  })
})