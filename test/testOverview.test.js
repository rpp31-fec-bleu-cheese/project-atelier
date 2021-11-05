// import dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import cam_token from '../config.js';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Overview from '../client/src/components/ProductInfo/Overview.jsx';

// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('/', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({greeting: 'Talking to server!'}))
//   }),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());


test('Overview mounts to DOM', (done) => {
  // Arrange
  // Act
  // Assert
  let { getByTestId } = render(<Overview cam_token={cam_token} />);
  let overviewContainer = getByTestId('Overview');

  expect(overviewContainer).not.toBeUndefined();
  done();
})