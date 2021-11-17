// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import components to be tested
import ProductSloganAndDescription from '../../client/src/components/Overview/Overview.jsx';

// configure Enzyme
// configure({ adapter: new Adapter() });

// component tests
describe('<ProductSloganAndDescription />', () => {
  it('Renders a Product Slogan and Description container', () => {
    const wrapper = shallow(<ProductSloganAndDescription />);
    expect(wrapper.find('.ProductSloganAndDescription')).not.toBeUndefined();
  })
})