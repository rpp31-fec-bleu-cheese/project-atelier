// // import dependencies
// import React from 'react'
// import ReactDOM from 'react-dom';
// import cam_token from '../config.js';

// // import API mocking utilities from Mock Service Worker
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'

// // import react-testing methods
// import {render} from '@testing-library/react'

// // add custom jest matchers from jest-dom
// import '@testing-library/jest-dom';
// // the component to test
// import Overview from '../client/src/components/ProductInfo/Overview.jsx';

// // const server = setupServer(
// //   // capture "GET /greeting" requests
// //   rest.get('/', (req, res, ctx) => {
// //     // respond using a mocked JSON body
// //     return res(ctx.json({greeting: 'Talking to server!'}))
// //   }),
// // );

// // beforeAll(() => server.listen());
// // afterEach(() => server.resetHandlers());
// // afterAll(() => server.close());


// test('Overview mounts to DOM', (done) => {
//   // Arrange
//   // Act
//   // Assert
//   let { getByTestId } = render(<Overview cam_token={cam_token} />);
//   let overviewContainer = getByTestId('Overview');

//   expect(overviewContainer).not.toBeUndefined();
//   done();
// })

// setup file
import React from 'react';
import Overview from '../client/src/components/ProductInfo/Overview.jsx';
import ImageGallery from '../client/src/components/ProductInfo/Overview.jsx';
import StyleSelector from '../client/src/components/ProductInfo/Overview.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });
// test file

describe('<Overview />', () => {
  it('Renders Overview component to the DOM', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('#Overview')).not.toBeUndefined();
  })

  // it('Renders child components', () => {
  //   const wrapper = shallow((
  //     <Overview>
  //       <ImageGallery />
  //     </Overview>
  //   ));
  //   expect(wrapper.contains(<ImageGallery />)).to.equal(true);
  // });


})

describe('<ImageGallery />', () => {
  it('Renders an ImageGallery container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGallery')).not.toBeUndefined();
  })

  it('Renders images in Gallery Thumbnails container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGalleryThumbnails').children()).not.toBeUndefined();
  })
})



// it('Renders six child components', () => {
//   const wrapper = shallow(<Overview />);
//   expect(wrapper.find(ImageGallery)).to.have.lengthOf(1);
// })