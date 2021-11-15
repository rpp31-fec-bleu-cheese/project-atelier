import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Search from '../../client/src/components/Q&A/Search.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {
  it ('renders Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.search')).not.toBeUndefined();
  });
});