// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import component modules to be tested
import StyleSelector from '../../client/src/components/Overview/Overview.jsx';
// configure Enzyme
// configure({ adapter: new Adapter() });

// component tests
describe('<StyleSelector />', () => {
  it('Renders a Style Selector container', () => {
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find('.StyleSelector')).not.toBeUndefined();
  })
  it('Renders styles in Style Selector Icons container', () => {
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find('.StyleSelectorIcons').children()).not.toBeUndefined();
  })
})