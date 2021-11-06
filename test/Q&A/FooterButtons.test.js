import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FooterButtons from '../../client/src/components/Q&A/FooterButtons.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<FooterButtons />', () => {
  it ('renders FooterButtons component', () => {
    const wrapper = mount(<FooterButtons />);
    expect(wrapper.find('.footer-buttons')).not.toBeUndefined();
  });
});