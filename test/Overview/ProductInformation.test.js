// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import components to be tested
import ProductInformation from '../../client/src/components/Overview/Overview.jsx';
// configure Enzyme
configure({ adapter: new Adapter() });

// component tests
describe('<ProductInformation />', () => {
  it('Renders a Style Selector container', () => {
    const wrapper = shallow(<ProductInformation />);
    expect(wrapper.find('.ProductInformation')).not.toBeUndefined();
  })
})