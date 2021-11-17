// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import components to be tested
import ImageGallery from '../../client/src/components/Overview/ImageGallery.jsx';
// configure Enzyme
// configure({ adapter: new Adapter() });

// component tests
describe('<ImageGallery />', () => {
  it('Renders an Image Gallery container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGallery')).not.toBeUndefined();
  })

  it('Renders images in Gallery Thumbnails container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGalleryThumbnails').children()).not.toBeUndefined();
  })
})

