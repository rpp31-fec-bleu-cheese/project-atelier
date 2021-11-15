// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import components to be tested
import ProductFeatures from '../../client/src/components/Overview/Overview.jsx';
// configure Enzyme
configure({ adapter: new Adapter() });

// component tests
describe('<ProductFeatures />', () => {
  it('Renders a Product Features container', () => {
    const wrapper = shallow(<ProductFeatures />);
    expect(wrapper.find('.ProductFeatures')).not.toBeUndefined();
  })
})