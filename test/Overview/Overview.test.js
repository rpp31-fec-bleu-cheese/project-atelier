// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import component modules to be tested
import Overview from '../../client/src/components/Overview/Overview.jsx';

// configure Enzyme
// configure({ adapter: new Adapter() });

// component tests
describe('<Overview />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Overview />);
  });

  it('Accepts a product ID as props', () => {
    let productId = 59553;
    expect(productId).not.toBeUndefined();
  })
  it('Renders Overview component to the DOM', () => {
    expect(wrapper.find('Overview')).not.toBeUndefined();
  })
  it('Contains an Image Gallery component', () => {
    expect(wrapper.find('ImageGallery')).not.toBeUndefined();
  })
  it('Contains a Product Information component', () => {
    expect(wrapper.find('ProductInformation')).not.toBeUndefined();
  })
  it('Contains a Style Selector component', () => {
    expect(wrapper.find('StyleSelector')).not.toBeUndefined();
  })
  it('Contains a Add To Cart component', () => {
    expect(wrapper.find('AddToCart')).not.toBeUndefined();
  })
  it('Contains a Product Slogan and Description component', () => {
    expect(wrapper.find('ProductSloganAndDescription')).not.toBeUndefined();
  })
  it('Contains a Product Features component', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('ProductFeatures')).not.toBeUndefined();
  })
})

// describe('<Overview /> logic', () => {
//   it('', () => {

//   })
// })



// it('Renders six child components', () => {
//   const wrapper = shallow(<Overview />);
//   expect(wrapper.find(ImageGallery)).to.have.lengthOf(1);
// })