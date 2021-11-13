// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import component modules to be tested
import Overview from '../../client/src/components/Overview/Overview.jsx';

// configure Enzyme
configure({ adapter: new Adapter() });

// component tests
describe('<Overview />', () => {
  it('Renders Overview component to the DOM', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('#Overview')).not.toBeUndefined();
    // expect(wrapper.find('#Overview')).to.have.lengthOf(6);
  })
  it('Contains an Image Gallery component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ImageGallery')).not.toBeUndefined();
  })
  it('Contains a Product Information component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductInformation')).not.toBeUndefined();
  })
  it('Contains a Style Selector component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('StyleSelector')).not.toBeUndefined();
  })
  it('Contains a Add To Cart component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('AddToCart')).not.toBeUndefined();
  })
  it('Contains a Product Slogan and Description component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductSloganAndDescription')).not.toBeUndefined();
  })
  it('Contains a Product Features component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductFeatures')).not.toBeUndefined();
  })
})



// it('Renders six child components', () => {
//   const wrapper = shallow(<Overview />);
//   expect(wrapper.find(ImageGallery)).to.have.lengthOf(1);
// })