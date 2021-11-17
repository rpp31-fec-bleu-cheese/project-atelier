// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import module(s) under test
import Overview from '../../client/src/components/Overview/Overview.jsx';
import ImageGallery from '../../client/src/components/Overview/ImageGallery.jsx';
import ProductInformation from '../../client/src/components/Overview/ProductInformation.jsx';
import StyleSelector from '../../client/src/components/Overview/StyleSelector.jsx';
import AddToCart from '../../client/src/components/Overview/AddToCart.jsx';
import ProductSloganAndDescription from '../../client/src/components/Overview/ProductSloganAndDescription.jsx';
import ProductFeatures from '../../client/src/components/Overview/ProductFeatures.jsx';

// fixtures
const testProductId = 59553;

// mock an API request
const server = setupServer(
  rest.get(`/products/${testProductId}`, (req, res, ctx) => {
    return res(ctx.json({data: 'test'}))
  })
);

// test suite
describe('<Overview />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  let component;
  beforeEach(() => {
    component = render(<Overview />);
  })
  test('Renders without crashing', () => {
    expect(component).toBeDefined();
  })
  test('Renders an Image Gallery component', () => {
    let imageGallery = component.getByTestId('Overview');
    expect(imageGallery).toBeInTheDocument();
  })
})