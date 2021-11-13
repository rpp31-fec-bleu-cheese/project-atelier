import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../client/src/components/Q&A/Search.jsx';

describe('<Search />', () => {
  it ('renders Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.search')).not.toBeUndefined();
  });
});